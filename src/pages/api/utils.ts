import path from "path";
import fs from "fs";

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type TemplateParams = {
  [key: string]: string;
};

// Usage example
// const agent = 'dev';
// const action = 'new_issue';
// const type = 'message';
// const params: TemplateParams = {
//   userName: 'John',
//   issueTitle: 'Bug in code'
// };
// const rootPath = '/tmp/user-code-repo/';

export const parseTemplate = (
  agent: string,
  action: string,
  type: string,
  params?: TemplateParams,
): string => {
  // Get the folder path from the environment variable
  const folder = process.env.PROMPT_FOLDER;
  if (!folder) {
    throw new Error(`Environment variable PROMPT_FOLDER is not set`);
  }

  // Construct the file path
  const filePath = path.join(folder, `${agent}.${action}.${type}.txt`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  // Read the template file content
  const template = fs.readFileSync(filePath, "utf-8");

  // Replace the parameters in the template
  if (!params) {
    return template;
  }
  return replaceParams(template, params);
};

const replaceParams = (content: string, params: TemplateParams) => {
  // Extract variables from the content
  const matches = content.match(/\$\{(\w+)\}/g);
  if (matches) {
    const requiredVariables: string[] = [];

    // Replace each variable
    matches.forEach((match) => {
      const variableName: string = match.slice(2, -1);
      if (params[variableName] !== undefined) {
        content = content.replace(match, params[variableName]!);
      } else {
        requiredVariables.push(variableName);
      }
    });

    // Throw an error if any required variables are missing
    if (requiredVariables.length > 0) {
      throw new Error(
        `Missing required variables: ${requiredVariables.join(", ")}`,
      );
    }
  }
  return content;
};
