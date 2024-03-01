import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

enum ComponentName {
  Hero = "1_hero",
  Quote = "2_quote",
  Chart = "3_chart",
  Toast = "4_toast",
}

enum ComponentDescription {
  Hero = "A placeholder static hero component for a marketing page",
  Quote = "A testimonial section with multiple quotes",
  Chart = "A dynamic pie chart showing blood types for 100 people, with sample data pulled from random-data-api.com",
  Toast = "A toast notification for a component library. This should be one component that has multiple variations shown in the design",
}

export type CodeSnippet = {
  code: string;
  id: string;
  plugin: string;
  snippetName: string;
};

const getRandomComponent = (): {
  component: ComponentName;
  description: ComponentDescription;
} => {
  const componentNames = Object.values(ComponentName);
  const descriptionValues = Object.values(ComponentDescription);
  const randomIndex = Math.floor(Math.random() * componentNames.length);
  return {
    component: componentNames[randomIndex]!,
    description: descriptionValues[randomIndex]!,
  };
};

// Helper function to get two random plugin folders
const getRandomPluginFolders = (allFolders: string[]): string[] => {
  const shuffled = [...allFolders].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const evalsPath = path.join(process.cwd(), "evals");
  const pluginFolders = fs
    .readdirSync(evalsPath)
    .filter((item) => !item.includes(".")); // Exclude files

  const { component, description } = getRandomComponent();
  const randomPluginFolders = getRandomPluginFolders(pluginFolders);

  try {
    const snippetsData: CodeSnippet[] = randomPluginFolders.map((folder) => {
      const filePath = path.join(evalsPath, folder, `${component}.txt`);
      return {
        code: fs.readFileSync(filePath, "utf8"),
        id: `${folder}_${component}`,
        plugin: folder,
        snippetName: component,
      };
    });

    res.status(200).json({
      snippets: snippetsData,
      screenshot: `/evals/${component}.png`,
      description: description,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching snippets and screenshot" });
  }
}
