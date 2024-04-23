export enum Role {
  ASSISTANT = "assistant",
  USER = "user",
}

export type Message = {
  role: Role;
  content: string;
};

export enum SpecialPhrases {
  CREATE_TASK = "<<CREATE_TASK>>",
  UPDATE_TASK = "<<UPDATE_TASK>>",
}

export enum TaskStatus {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  DONE = "done",
  ERROR = "error",
}

export enum TaskType {
  CREATE_NEW_FILE = "Create New File",
  EDIT_FILES = "Edit Files",
  CODE_REVIEW = "Code Review",
}

export type Task = {
  id: string;
  repo: string;
  name: string;
  type: TaskType;
  description: string;
  storyPoints: number;
  status: TaskStatus;
  imageUrl?: string;
  currentPlanStep?: number;
  statusDescription?: string;
  plan?: Plan[];
  issue?: Issue;
  pullRequest?: PullRequest;
  commands?: Command[];
  codeFiles?: CodeFile[];
  prompts?: PromptDetails[];
};

export type Command = {
  command: string;
  response: string;
  directory?: string;
};

export enum Language {
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
}

export type CodeFile = {
  fileName: string;
  filePath: string;
  language: Language;
  codeBlock: string;
};

export type Plan = {
  id: string;
  title: string;
  description: string;
  position: number;
  isComplete: boolean;
};

export enum SidebarIcon {
  None = "None",
  Code = "Code",
  Design = "Design",
  Terminal = "Terminal",
  Plan = "Plan",
  Prompts = "Prompts",
  Issues = "Issues",
  PullRequests = "Pull Requests",
}

export const SAMPLE_TASKS: Task[] = [
  {
    description:
      'A new design has been added to Figma for the file src/components/Testimonial.tsx.\nThe design was converted into JSX. Here is what was provided:\n\n~~~\nfunction Testimonial() {\n  const happyUsers = 3940;\n\n  return (\n    <div className="w-full h-[672px] bg-white flex flex-col items-center">\n      <div className="mt-24">\n        <p className="text-blue-600 text-sm leading-7 text-center">{happyUsers}+ Happy Landingfolio Users</p>\n        <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight mt-3">Don’t just take our words</h2>\n      </div>\n      <div className="flex justify-between px-24 mt-16">\n        <Quote\n          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Jenny Wilson"\n          website="Grower.io"\n        />\n        <Quote\n          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Devon Lane"\n          website="DLDesign.co"\n        />\n      </div>\n    </div>\n  );\n}\n\nfunction Quote({ imageUrl, rating, quote, name, website }) {\n  return (\n    <div className="flex">\n      <img src={imageUrl} className="w-[239px] h-[239px] rounded-lg" alt="user profile" />\n      <div className="ml-8 flex flex-col justify-between">\n        <div>\n          <div className="flex">\n            {Array.from({ length: rating }, (_, i) => (\n              <div key={i} className="w-4 h-4 bg-blue-600 rounded-full mr-1.5"></div>\n            ))}\n          </div>\n          <p className="text-lg font-medium leading-7 text-gray-900 mt-3">{quote}</p>\n        </div>\n        <div>\n          <p className="text-sm text-gray-900">{name}</p>\n          <p className="text-sm font-medium text-gray-500">{website}</p>\n        </div>\n      </div>\n    </div>\n  );\n}\n~~~\n\n- @jacob-ai-bot Here are your instructions for creating the new file:\n1. Create a new file with the name src/components/Testimonial.tsx.\n2. Copy the code above into the new file.\n3. Write additional code as needed to create the complete, working component or file. Note that the code is not guaranteed to be perfect, so you may need to make some adjustments. Specifically, ONLY use valid TailwindCSS classes. For arbitrary values, convert to standard TailwindCSS classes as often as possible. Use the custom Tailwind.config color names if there is an exact match.\n4. The code above is from the design team and will likely have placeholder text. Find the places where the placeholder text will need to be replaced by the real data from the code.\n5. Be sure to create any functions or other code that is needed to make the component work.\n6. Do your best to make the code match the design as closely as possible. Bias towards using flexbox and other modern TailwindCSS features vs hardcoding widths or heights.\n7. There may be icons or images in the design. These will need to be replaced with the real icons or images.\n8. You can use the Font Awesome icon kit to add icons. Here is some example code of how to use it:\n\n```\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\'\nimport { faEnvelope } from \'@fortawesome/free-solid-svg-icons\'\nconst element = <FontAwesomeIcon icon={faEnvelope} />\n```\n\n9. For images, the figma code will likely list the image name. This image has already been saved to the public folder. You must use that image as the source for the image tag. <img src="[image name]" />\n10. IMPORTANT: The design team did not wire up any of the buttons or links, they assigned that critical task to you. You MUST implement the code to handle the click events.\n\nHere are some important additional instructions from the product owner. You MUST follow these instructions, even if it means adjusting the JSX code provided above: \n Create a separate, sub-component called “Quote”. It should take in an imageUrl, rating, quote, name and website. Hardcode the information for these two users in the Testimonial component. Also make the number of “Happy Landingfolio Users” dynamic (but use 3490 as the default for now)\n\nHere is a temporary snapshot of your design. It will expire in 60 minutes for security purposes.\n![snapshot](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/1713312440656.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316041&Signature=OI56Y3%2F1%2BeycMFzb37sBpvJpanI%3D)\n\n\nHere are the images from your design. These images will be downloaded to this branch and these links will expire in 60 minutes for security purposes.\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316070&Signature=ziUvcmI04an24n8zZiEeWufLinM%3D)\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316069&Signature=ZZ5NpQjo65QCfDA%2FGLE3M6b%2Bw3Q%3D)\n',
    id: "task-kleneway/local-t3-starter-template-36",
    repo: "kleneway/local-t3-starter-template",
    name: "Create new file => src/components/Testimonial.tsx",
    status: TaskStatus.IN_PROGRESS,
    storyPoints: 1,
    type: TaskType.CREATE_NEW_FILE,
    plan: [
      {
        id: "0",
        title: "Create GitHub Issue",
        description:
          "Create a new GitHub issue to track the progress of the task.",
        position: 0,
        isComplete: false,
      },
      {
        id: "1",
        title: "Clone Repo",
        description:
          "Clone the repository from the remote source to your local machine.",
        position: 1,
        isComplete: false,
      },
      {
        id: "2",
        title: "Create Plan",
        description: "Generates a plan for the coding task.",
        position: 2,
        isComplete: false,
      },
      {
        id: "3",
        title: "Write Code",
        description: "Triggers the code writing phase.",
        position: 3,
        isComplete: false,
      },
      {
        id: "4",
        title: "Build",
        description: "Commences the build process to compile the code.",
        position: 4,
        isComplete: false,
      },
      {
        id: "5",
        title: "Fix Build Error",
        description: "Addresses and rectifies any build errors.",
        position: 5,
        isComplete: false,
      },
      {
        id: "6",
        title: "Verify Build",
        description:
          "Checks the build for any issues or errors and verifies its successful completion.",
        position: 6,
        isComplete: false,
      },
      {
        id: "7",
        title: "Run Tests",
        description:
          "Executes the test suite to ensure the code behaves as expected.",
        position: 7,
        isComplete: false,
      },
      {
        id: "8",
        title: "Create Story",
        description: "Initiates the creation of user stories or documentation.",
        position: 8,
        isComplete: false,
      },
      {
        id: "9",
        title: "Code Review",
        description: "Start the code review process for quality assurance.",
        position: 9,
        isComplete: false,
      },
    ],
    commands: [
      {
        command: "npm install",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response:
          "Debugger attached.\nnpm WARN deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.\nnpm WARN deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.\nnpm WARN deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.\n\n> t3-starter-template@0.1.0 postinstall\n> prisma generate\n\nDebugger attached.\nPrisma schema loaded from prisma/schema.prisma\n\n✔ Generated Prisma Client (v5.5.2) to ./node_modules/@prisma/client in 72ms\n\nStart using Prisma Client in Node.js (See: https://pris.ly/d/client)\n```\nimport { PrismaClient } from '@prisma/client'\nconst prisma = new PrismaClient()\n```\nor start using Prisma Client at the edge (See: https://pris.ly/d/accelerate)\n```\nimport { PrismaClient } from '@prisma/client/edge'\nconst prisma = new PrismaClient()\n```\n\nSee other ways of importing Prisma Client: http://pris.ly/d/importing-client\n\nWaiting for the debugger to disconnect...\n\nadded 1419 packages in 17s\nWaiting for the debugger to disconnect...\n",
      },
      {
        command:
          "__NEXT_TEST_MODE=1 SKIP_ENV_VALIDATION=1 SKIP_ENV_VALIDATION=1 npm run build --verbose",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response:
          'Debugger attached.\nnpm verb cli /Users/kleneway/.nvm/versions/node/v20.10.0/bin/node /Users/kleneway/.nvm/versions/node/v20.10.0/bin/npm\nnpm info using npm@10.2.3\nnpm info using node@v20.10.0\nnpm verb title npm run build\nnpm verb argv "run" "build" "--loglevel" "verbose"\nnpm verb logfile logs-max:10 dir:/Users/kleneway/.npm/_logs/2024-04-17T00_08_29_897Z-\nnpm verb logfile /Users/kleneway/.npm/_logs/2024-04-17T00_08_29_897Z-debug-0.log\n\n> t3-starter-template@0.1.0 build\n> next build\n\nDebugger attached.\n⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache\nAttention: Next.js now collects completely anonymous telemetry regarding usage.\nThis information is used to shape Next.js\' roadmap and prioritize features.\nYou can learn more, including how to opt-out if you\'d not like to participate in this anonymous program, by visiting the following URL:\nhttps://nextjs.org/telemetry\n\n   Skipping linting\n   Checking validity of types ...\nDebugger attached.\n   ▲ Next.js 14.0.1\n\n   Creating an optimized production build ...\nWaiting for the debugger to disconnect...\n ✓ Compiled successfully\n   Collecting page data ...\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\nDebugger attached.\n   Generating static pages (0/6) ...\n\r   Generating static pages (1/6) \r\n\r   Generating static pages (2/6) \r\n\r   Generating static pages (4/6) \r\n\r ✓ Generating static pages (6/6) \n   Finalizing page optimization ...\n   Collecting build traces ...\n\nRoute (pages)                              Size     First Load JS\n┌ ○ / (348 ms)                             3.72 kB         124 kB\n├   /_app                                  0 B             120 kB\n├ ○ /404                                   180 B           120 kB\n├ λ /api/auth/[...nextauth]                0 B             120 kB\n└ λ /api/trpc/[trpc]                       0 B             120 kB\n+ First Load JS shared by all              122 kB\n  ├ chunks/framework-bbecb7d54330d002.js   45.6 kB\n  ├ chunks/main-9d94427a85b7c3c9.js        33.9 kB\n  ├ chunks/pages/_app-89dc0294a3c43903.js  39.7 kB\n  ├ chunks/webpack-fd8027ecb5121007.js     770 B\n  └ css/95071f95d269516a.css               2.19 kB\n\n○  (Static)   prerendered as static HTML\nλ  (Dynamic)  server-rendered on demand using Node.js\n\nWaiting for the debugger to disconnect...\nnpm verb exit 0\nnpm info ok \nWaiting for the debugger to disconnect...\n',
      },
      {
        command: "git rev-parse --abbrev-ref HEAD",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response: "main\n",
      },
      {
        command: "git branch",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response: "* main\n",
      },
      {
        command: "git checkout -b jacob-issue-36-1713312609386",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response: "Switched to a new branch 'jacob-issue-36-1713312609386'\n",
      },
      {
        command: "npm install",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response:
          "Debugger attached.\n\n> t3-starter-template@0.1.0 postinstall\n> prisma generate\n\nDebugger attached.\nPrisma schema loaded from prisma/schema.prisma\n\n✔ Generated Prisma Client (v5.5.2) to ./node_modules/@prisma/client in 72ms\n\nStart using Prisma Client in Node.js (See: https://pris.ly/d/client)\n```\nimport { PrismaClient } from '@prisma/client'\nconst prisma = new PrismaClient()\n```\nor start using Prisma Client at the edge (See: https://pris.ly/d/accelerate)\n```\nimport { PrismaClient } from '@prisma/client/edge'\nconst prisma = new PrismaClient()\n```\n\nSee other ways of importing Prisma Client: http://pris.ly/d/importing-client\n\n┌─────────────────────────────────────────────────────────┐\n│  Update available 5.5.2 -> 5.12.1                       │\n│  Run the following to update                            │\n│    npm i --save-dev prisma@latest                       │\n│    npm i @prisma/client@latest                          │\n└─────────────────────────────────────────────────────────┘\nWaiting for the debugger to disconnect...\n\nup to date in 2s\nWaiting for the debugger to disconnect...\n",
      },
      {
        command: "__NEXT_TEST_MODE=1 SKIP_ENV_VALIDATION=1 npm run lint:fix",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response:
          "Debugger attached.\n\n> t3-starter-template@0.1.0 lint:fix\n> next lint --fix\n\nDebugger attached.\n\n./src/components/Testimonial.tsx\n35:7  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element\n35:17  Warning: Unsafe assignment of an `any` value.  @typescript-eslint/no-unsafe-assignment\n37:23  Warning: Unsafe assignment of an `any` value.  @typescript-eslint/no-unsafe-assignment\n\ninfo  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules\nWaiting for the debugger to disconnect...\nWaiting for the debugger to disconnect...\n",
      },
      {
        command:
          "__NEXT_TEST_MODE=1 SKIP_ENV_VALIDATION=1 SKIP_ENV_VALIDATION=1 npm run build --verbose",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response:
          'Debugger attached.\nnpm verb cli /Users/kleneway/.nvm/versions/node/v20.10.0/bin/node /Users/kleneway/.nvm/versions/node/v20.10.0/bin/npm\nnpm info using npm@10.2.3\nnpm info using node@v20.10.0\nnpm verb title npm run build\nnpm verb argv "run" "build" "--loglevel" "verbose"\nnpm verb logfile logs-max:10 dir:/Users/kleneway/.npm/_logs/2024-04-17T00_10_17_327Z-\nnpm verb logfile /Users/kleneway/.npm/_logs/2024-04-17T00_10_17_327Z-debug-0.log\n\n> t3-starter-template@0.1.0 build\n> next build\n\nDebugger attached.\n   Skipping linting\n   Checking validity of types ...\nDebugger attached.\n\n\n===== TS errors =====\n\n[Test Mode] ./src/components/Testimonial.tsx:32:18\nType error: Binding element \'imageUrl\' implicitly has an \'any\' type.\n\n\u001b[0m \u001b[90m 30 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mQuote\u001b[39m({ imageUrl\u001b[33m,\u001b[39m rating\u001b[33m,\u001b[39m quote\u001b[33m,\u001b[39m name\u001b[33m,\u001b[39m website }) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m"flex flex-col items-center"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{imageUrl} className\u001b[33m=\u001b[39m\u001b[32m"w-60 h-60 rounded-full mb-4"\u001b[39m alt\u001b[33m=\u001b[39m\u001b[32m"user profile"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\n[Test Mode] ./src/components/Testimonial.tsx:32:28\nType error: Binding element \'rating\' implicitly has an \'any\' type.\n\n\u001b[0m \u001b[90m 30 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mQuote\u001b[39m({ imageUrl\u001b[33m,\u001b[39m rating\u001b[33m,\u001b[39m quote\u001b[33m,\u001b[39m name\u001b[33m,\u001b[39m website }) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m"flex flex-col items-center"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{imageUrl} className\u001b[33m=\u001b[39m\u001b[32m"w-60 h-60 rounded-full mb-4"\u001b[39m alt\u001b[33m=\u001b[39m\u001b[32m"user profile"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\n[Test Mode] ./src/components/Testimonial.tsx:32:36\nType error: Binding element \'quote\' implicitly has an \'any\' type.\n\n\u001b[0m \u001b[90m 30 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mQuote\u001b[39m({ imageUrl\u001b[33m,\u001b[39m rating\u001b[33m,\u001b[39m quote\u001b[33m,\u001b[39m name\u001b[33m,\u001b[39m website }) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m"flex flex-col items-center"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{imageUrl} className\u001b[33m=\u001b[39m\u001b[32m"w-60 h-60 rounded-full mb-4"\u001b[39m alt\u001b[33m=\u001b[39m\u001b[32m"user profile"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\n[Test Mode] ./src/components/Testimonial.tsx:32:43\nType error: Binding element \'name\' implicitly has an \'any\' type.\n\n\u001b[0m \u001b[90m 30 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mQuote\u001b[39m({ imageUrl\u001b[33m,\u001b[39m rating\u001b[33m,\u001b[39m quote\u001b[33m,\u001b[39m name\u001b[33m,\u001b[39m website }) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m"flex flex-col items-center"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{imageUrl} className\u001b[33m=\u001b[39m\u001b[32m"w-60 h-60 rounded-full mb-4"\u001b[39m alt\u001b[33m=\u001b[39m\u001b[32m"user profile"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\n[Test Mode] ./src/components/Testimonial.tsx:32:49\nType error: Binding element \'website\' implicitly has an \'any\' type.\n\n\u001b[0m \u001b[90m 30 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mQuote\u001b[39m({ imageUrl\u001b[33m,\u001b[39m rating\u001b[33m,\u001b[39m quote\u001b[33m,\u001b[39m name\u001b[33m,\u001b[39m website }) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m"flex flex-col items-center"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{imageUrl} className\u001b[33m=\u001b[39m\u001b[32m"w-60 h-60 rounded-full mb-4"\u001b[39m alt\u001b[33m=\u001b[39m\u001b[32m"user profile"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\n===== TS errors =====\n\n\nFailed to compile.\n\n./src/components/Testimonial.tsx:32:18\nType error: Binding element \'imageUrl\' implicitly has an \'any\' type.\n\n\u001b[0m \u001b[90m 30 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mQuote\u001b[39m({ imageUrl\u001b[33m,\u001b[39m rating\u001b[33m,\u001b[39m quote\u001b[33m,\u001b[39m name\u001b[33m,\u001b[39m website }) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m"flex flex-col items-center"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{imageUrl} className\u001b[33m=\u001b[39m\u001b[32m"w-60 h-60 rounded-full mb-4"\u001b[39m alt\u001b[33m=\u001b[39m\u001b[32m"user profile"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\nWaiting for the debugger to disconnect...\nWaiting for the debugger to disconnect...\nnpm verb exit 1\nnpm verb code 1\nWaiting for the debugger to disconnect...\n',
      },
      {
        command: "git add .",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response: "",
      },
      {
        command: 'git config --local user.name "jacob-local-kevin[bot]"',
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response: "",
      },
      {
        command:
          'git config --local user.email "164088400+jacob-local-kevin[bot]@users.noreply.github.com"',
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response: "",
      },
      {
        command: 'git commit -m "JACoB commit for Issue 36"',
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response:
          "[jacob-issue-36-1713312609386 882eaf8] JACoB commit for Issue 36\n 3 files changed, 50 insertions(+)\n create mode 100644 public/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png\n create mode 100644 public/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png\n create mode 100644 src/components/Testimonial.tsx\n",
      },
      {
        command: "git push --set-upstream origin jacob-issue-36-1713312609386",
        directory: "/tmp/tmp-63870-N02N04t0h6jY",
        response:
          "remote: \nremote: Create a pull request for 'jacob-issue-36-1713312609386' on GitHub by visiting:        \nremote:      https://github.com/kleneway/local-t3-starter-template/pull/new/jacob-issue-36-1713312609386        \nremote: \nTo https://github.com/kleneway/local-t3-starter-template.git\n * [new branch]      jacob-issue-36-1713312609386 -> jacob-issue-36-1713312609386\nbranch 'jacob-issue-36-1713312609386' set up to track 'origin/jacob-issue-36-1713312609386'.\n",
      },
    ],
    imageUrl:
      "https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/1713312440656.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316041&Signature=OI56Y3%2F1%2BeycMFzb37sBpvJpanI%3D",
    issue: {
      assignee: "kleneway",
      author: "jacob-local-kevin[bot]",
      comments: [],
      createdAt: "2024-04-17T00:08:07Z",
      description:
        'A new design has been added to Figma for the file src/components/Testimonial.tsx.\nThe design was converted into JSX. Here is what was provided:\n\n~~~\nfunction Testimonial() {\n  const happyUsers = 3940;\n\n  return (\n    <div className="w-full h-[672px] bg-white flex flex-col items-center">\n      <div className="mt-24">\n        <p className="text-blue-600 text-sm leading-7 text-center">{happyUsers}+ Happy Landingfolio Users</p>\n        <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight mt-3">Don’t just take our words</h2>\n      </div>\n      <div className="flex justify-between px-24 mt-16">\n        <Quote\n          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Jenny Wilson"\n          website="Grower.io"\n        />\n        <Quote\n          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Devon Lane"\n          website="DLDesign.co"\n        />\n      </div>\n    </div>\n  );\n}\n\nfunction Quote({ imageUrl, rating, quote, name, website }) {\n  return (\n    <div className="flex">\n      <img src={imageUrl} className="w-[239px] h-[239px] rounded-lg" alt="user profile" />\n      <div className="ml-8 flex flex-col justify-between">\n        <div>\n          <div className="flex">\n            {Array.from({ length: rating }, (_, i) => (\n              <div key={i} className="w-4 h-4 bg-blue-600 rounded-full mr-1.5"></div>\n            ))}\n          </div>\n          <p className="text-lg font-medium leading-7 text-gray-900 mt-3">{quote}</p>\n        </div>\n        <div>\n          <p className="text-sm text-gray-900">{name}</p>\n          <p className="text-sm font-medium text-gray-500">{website}</p>\n        </div>\n      </div>\n    </div>\n  );\n}\n~~~\n\n- @jacob-ai-bot Here are your instructions for creating the new file:\n1. Create a new file with the name src/components/Testimonial.tsx.\n2. Copy the code above into the new file.\n3. Write additional code as needed to create the complete, working component or file. Note that the code is not guaranteed to be perfect, so you may need to make some adjustments. Specifically, ONLY use valid TailwindCSS classes. For arbitrary values, convert to standard TailwindCSS classes as often as possible. Use the custom Tailwind.config color names if there is an exact match.\n4. The code above is from the design team and will likely have placeholder text. Find the places where the placeholder text will need to be replaced by the real data from the code.\n5. Be sure to create any functions or other code that is needed to make the component work.\n6. Do your best to make the code match the design as closely as possible. Bias towards using flexbox and other modern TailwindCSS features vs hardcoding widths or heights.\n7. There may be icons or images in the design. These will need to be replaced with the real icons or images.\n8. You can use the Font Awesome icon kit to add icons. Here is some example code of how to use it:\n\n```\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\'\nimport { faEnvelope } from \'@fortawesome/free-solid-svg-icons\'\nconst element = <FontAwesomeIcon icon={faEnvelope} />\n```\n\n9. For images, the figma code will likely list the image name. This image has already been saved to the public folder. You must use that image as the source for the image tag. <img src="[image name]" />\n10. IMPORTANT: The design team did not wire up any of the buttons or links, they assigned that critical task to you. You MUST implement the code to handle the click events.\n\nHere are some important additional instructions from the product owner. You MUST follow these instructions, even if it means adjusting the JSX code provided above: \n Create a separate, sub-component called “Quote”. It should take in an imageUrl, rating, quote, name and website. Hardcode the information for these two users in the Testimonial component. Also make the number of “Happy Landingfolio Users” dynamic (but use 3490 as the default for now)\n\nHere is a temporary snapshot of your design. It will expire in 60 minutes for security purposes.\n![snapshot](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/1713312440656.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316041&Signature=OI56Y3%2F1%2BeycMFzb37sBpvJpanI%3D)\n\n\nHere are the images from your design. These images will be downloaded to this branch and these links will expire in 60 minutes for security purposes.\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316070&Signature=ziUvcmI04an24n8zZiEeWufLinM%3D)\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316069&Signature=ZZ5NpQjo65QCfDA%2FGLE3M6b%2Bw3Q%3D)\n',
      id: "issue-kleneway/local-t3-starter-template-36",
      issueId: 36,
      link: "https://github.com/kleneway/local-t3-starter-template/issues/36",
      status: "open",
      title: "Create new file => src/components/Testimonial.tsx",
    },
    prompts: [
      {
        metadata: {
          cost: 0.04568000000000001,
          duration: 15479,
          model: "gpt-4-turbo",
          timestamp: "2024-04-17T00:09:42.871Z",
          tokens: 3554,
        },
        request: {
          prompts: [
            {
              prompt:
                '[{"type":"image_url","image_url":{"url":"https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/1713312440656.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316041&Signature=OI56Y3%2F1%2BeycMFzb37sBpvJpanI%3D","detail":"high"}},{"type":"text","text":"Act as an expert-level front-end software engineer and designer. The IMAGE above is EXACTLY the design that you MUST implement with code.\nA low-level developer may have provided some basic code or a FigML file to get you started. This code WILL have errors and you MUST use this design to correct for those errors. \nIf no code was provided or you can not correct for the errors, you MUST use the design to write your own code. Your code MUST be pixel-perfect! If you can achieve this on the first try, you will get a $1,000,000 bonus.\nYou MUST use this code ONLY as a starting point, but you MUST follow all the instructions. Take a deep breath and begin."}]',
              promptType: "User",
              timestamp: "2024-04-17T00:09:42.871Z",
            },
            {
              prompt:
                "Act as an expert-level Principal Software Engineer.\nYou will be given detailed instructions and your job is to summarize it into a step-by-step plan to create the file src/components/Testimonial.tsx.\n",
              promptType: "System",
              timestamp: "2024-04-17T00:09:42.871Z",
            },
            {
              prompt:
                'Create a step-by-step plan to create the file src/components/Testimonial.tsx.\nThe plan should be between 5-10 steps.\nHere is information about the file you are creating: A new design has been added to Figma for the file src/components/Testimonial.tsx.\nThe design was converted into JSX. Here is what was provided:\n\n~~~\nfunction Testimonial() {\n  const happyUsers = 3940;\n\n  return (\n    <div className="w-full h-[672px] bg-white flex flex-col items-center">\n      <div className="mt-24">\n        <p className="text-blue-600 text-sm leading-7 text-center">{happyUsers}+ Happy Landingfolio Users</p>\n        <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight mt-3">Don’t just take our words</h2>\n      </div>\n      <div className="flex justify-between px-24 mt-16">\n        <Quote\n          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Jenny Wilson"\n          website="Grower.io"\n        />\n        <Quote\n          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Devon Lane"\n          website="DLDesign.co"\n        />\n      </div>\n    </div>\n  );\n}\n\nfunction Quote({ imageUrl, rating, quote, name, website }) {\n  return (\n    <div className="flex">\n      <img src={imageUrl} className="w-[239px] h-[239px] rounded-lg" alt="user profile" />\n      <div className="ml-8 flex flex-col justify-between">\n        <div>\n          <div className="flex">\n            {Array.from({ length: rating }, (_, i) => (\n              <div key={i} className="w-4 h-4 bg-blue-600 rounded-full mr-1.5"></div>\n            ))}\n          </div>\n          <p className="text-lg font-medium leading-7 text-gray-900 mt-3">{quote}</p>\n        </div>\n        <div>\n          <p className="text-sm text-gray-900">{name}</p>\n          <p className="text-sm font-medium text-gray-500">{website}</p>\n        </div>\n      </div>\n    </div>\n  );\n}\n~~~\n\n- @jacob-ai-bot Here are your instructions for creating the new file:\n1. Create a new file with the name src/components/Testimonial.tsx.\n2. Copy the code above into the new file.\n3. Write additional code as needed to create the complete, working component or file. Note that the code is not guaranteed to be perfect, so you may need to make some adjustments. Specifically, ONLY use valid TailwindCSS classes. For arbitrary values, convert to standard TailwindCSS classes as often as possible. Use the custom Tailwind.config color names if there is an exact match.\n4. The code above is from the design team and will likely have placeholder text. Find the places where the placeholder text will need to be replaced by the real data from the code.\n5. Be sure to create any functions or other code that is needed to make the component work.\n6. Do your best to make the code match the design as closely as possible. Bias towards using flexbox and other modern TailwindCSS features vs hardcoding widths or heights.\n7. There may be icons or images in the design. These will need to be replaced with the real icons or images.\n8. You can use the Font Awesome icon kit to add icons. Here is some example code of how to use it:\n\n```\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\'\nimport { faEnvelope } from \'@fortawesome/free-solid-svg-icons\'\nconst element = <FontAwesomeIcon icon={faEnvelope} />\n```\n\n9. For images, the figma code will likely list the image name. This image has already been saved to the public folder. You must use that image as the source for the image tag. <img src="[image name]" />\n10. IMPORTANT: The design team did not wire up any of the buttons or links, they assigned that critical task to you. You MUST implement the code to handle the click events.\n\nHere are some important additional instructions from the product owner. You MUST follow these instructions, even if it means adjusting the JSX code provided above: \n Create a separate, sub-component called “Quote”. It should take in an imageUrl, rating, quote, name and website. Hardcode the information for these two users in the Testimonial component. Also make the number of “Happy Landingfolio Users” dynamic (but use 3490 as the default for now)\n\nHere is a temporary snapshot of your design. It will expire in 60 minutes for security purposes.\n![snapshot](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/1713312440656.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316041&Signature=OI56Y3%2F1%2BeycMFzb37sBpvJpanI%3D)\n\n\nHere are the images from your design. These images will be downloaded to this branch and these links will expire in 60 minutes for security purposes.\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316070&Signature=ziUvcmI04an24n8zZiEeWufLinM%3D)\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316069&Signature=ZZ5NpQjo65QCfDA%2FGLE3M6b%2Bw3Q%3D)\n\n',
              promptType: "User",
              timestamp: "2024-04-17T00:09:42.871Z",
            },
          ],
        },
        response: {
          prompt: {
            prompt:
              "To create the `src/components/Testimonial.tsx` file and implement the design accurately, follow these steps:\n\n1. **Setup the File and Basic Structure:**\n   - Create a new file named `Testimonial.tsx` in the `src/components` directory.\n   - Copy the provided JSX code into this new file as a starting point.\n\n2. **Refine the JSX Structure:**\n   - Ensure that the JSX structure matches the design requirements. Adjust the div layouts and class names to align with the design provided in Figma.\n\n3. **Validate and Adjust TailwindCSS Classes:**\n   - Review all TailwindCSS classes used in the JSX code. Replace any non-standard or incorrect classes with valid TailwindCSS classes. Utilize the Tailwind configuration file to ensure colors and sizes match the design specifications.\n\n4. **Implement the Quote Sub-Component:**\n   - Extract the `Quote` component into its own file if necessary, or keep it within the same file for simplicity. Ensure it accepts props for `imageUrl`, `rating`, `quote`, `name`, and `website`.\n   - Hardcode the user data as per the design for the two testimonials.\n\n5. **Dynamic Content Integration:**\n   - Implement dynamic handling of the \"Happy Landingfolio Users\" count. Initialize it with a default value of 3940 but ensure it can be updated dynamically if needed.\n\n6. **Incorporate Images:**\n   - Ensure that the images used in the `Quote` components are correctly linked and accessible. Use the provided image URLs and ensure they are stored appropriately in the project's public folder.\n\n7. **Add Interactivity:**\n   - Implement any necessary click event handlers, particularly if there are interactive elements in the component that were not specified in the initial design.\n\n8. **Responsive Design Considerations:**\n   - Apply responsive design principles to ensure the component displays correctly across different devices. Use Tailwind's responsive utilities to adjust layouts and font sizes.\n\n9. **Testing and Validation:**\n   - Test the component in various browsers and devices to ensure it matches the design and functions as expected. Check for visual consistency and interactivity.\n\n10. **Code Review and Cleanup:**\n    - Conduct a thorough code review to ensure best practices are followed. Remove any unused code, and optimize the component for performance and maintainability.\n\nBy following these steps, you will create a `Testimonial.tsx` component that adheres closely to the design specifications and is robust and maintainable.",
            promptType: "Assistant",
            timestamp: "2024-04-17T00:09:42.871Z",
          },
        },
      },
      {
        metadata: {
          cost: 0.07813,
          duration: 24907,
          model: "gpt-4-turbo",
          timestamp: "2024-04-17T00:10:09.385Z",
          tokens: 6199,
        },
        request: {
          prompts: [
            {
              prompt:
                '[{"type":"image_url","image_url":{"url":"https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/1713312440656.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316041&Signature=OI56Y3%2F1%2BeycMFzb37sBpvJpanI%3D","detail":"high"}},{"type":"text","text":"Act as an expert-level front-end software engineer and designer. The IMAGE above is EXACTLY the design that you MUST implement with code.\nA low-level developer may have provided some basic code or a FigML file to get you started. This code WILL have errors and you MUST use this design to correct for those errors. \nIf no code was provided or you can not correct for the errors, you MUST use the design to write your own code. Your code MUST be pixel-perfect! If you can achieve this on the first try, you will get a $1,000,000 bonus.\nYou MUST use this code ONLY as a starting point, but you MUST follow all the instructions. Take a deep breath and begin."}]',
              promptType: "User",
              timestamp: "2024-04-17T00:10:09.385Z",
            },
            {
              prompt:
                'You are an expert-level L8 Principal Software Engineer at Facebook.\nYou are the best software engineer in the world and always write flawless production-level code.\nHere are some details to help with your task.\n-- Types (optional)\n\n\n-- Package Dependencies (these are already in use and it is preferable to import from these instead of adding imports to similar pacakges not in this list)\n@fortawesome/fontawesome-svg-core\n@fortawesome/free-regular-svg-icons\n@fortawesome/free-solid-svg-icons\n@fortawesome/react-fontawesome\n@next-auth/prisma-adapter\n@prisma/client\n@t3-oss/env-nextjs\n@tanstack/react-query\n@trpc/client\n@trpc/next\n@trpc/react-query\n@trpc/server\nnext\nnext-auth\nreact\nreact-dom\nsuperjson\nzod\n\n-- Custom Styles (optional)\nimport { type Config } from "tailwindcss";\n\nexport default {\n  content: ["./src/**/*.tsx"],\n  plugins: [],\n} satisfies Config;\n\n\n-- Source Map (optional, this is a map of the codebase, you can use it to find the correct files/functions to import. It is NOT part of the task!)\n/tailwind.config.ts:\n/src/pages/_app.tsx:\n/src/pages/index.tsx:\n  function Home(): any;\n  function AuthShowcase(): any;\n/src/server/auth.ts:\n/src/server/db.ts:\n/src/stories/Button.stories.ts:\n/src/stories/Button.tsx:\n  interface ButtonProps {\n    primary: boolean | undefined;\n    backgroundColor: string | undefined;\n    size: "small" | "medium" | "large" | undefined;\n    label: string;\n    onClick: (() => void) | undefined;\n  }\n/src/stories/Header.stories.ts:\n/src/stories/Header.tsx:\n  interface HeaderProps {\n    user: User | undefined;\n    onLogin: () => void;\n    onLogout: () => void;\n    onCreateAccount: () => void;\n  }\n/src/stories/Page.stories.ts:\n/src/stories/Page.tsx:\n/src/utils/api.ts:\n/src/server/api/root.ts:\n/src/server/api/trpc.ts:\n  interface CreateContextOptions {\n    session: any;\n  }\n/src/pages/api/trpc/[trpc].ts:\n/src/server/api/routers/post.test.ts:\n  function buildApi(user: any): any;\n/src/server/api/routers/post.ts:\n\n\n-- Images (optional)\n/tmp/tmp-63870-N02N04t0h6jY/public/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png\n\t/tmp/tmp-63870-N02N04t0h6jY/public/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png\n\t\n\n-- Instructions:\nAddress the GitHub issue by creating a new file named src/components/Testimonial.tsx.\nInclude website copy as needed.\nIf the user has included an example file, use that as guidance to ensure your code fits the style and conventions of the existing code.\nAny code included in the GitHub issue is example code and may contain bugs or incorrect information or approaches.\nIf text is provided as part of sample code, determine if the given text should be used as-is, or if this is placeholder text and needs to be replaced by variables.\nThis output will be sent to a parser that will extract the code into the correct files.\nDO NOT include backticks or ANY comments in your response. ONLY respond with the full, complete working file.\nYou MUST use the correct types and imports when creating the file.\nThe source map and types above are from the actual live codebase and will always have the correct information.\nIf provided, you should use the source map and types to write your final code.\nUser-facing pages or components should use Tailwind CSS and have a responsive, clean, modern design.\nDo not import any css files directly.\nOnly use Tailwind CSS classes, do not use custom CSS classes.\n# Evaluation Criteria\nReview the exported image of a Figma design of a React component mockup and the corresponding snippet of front-end code. Evaluate the likelihood that the code will render a pixel-perfect version of the image using the additive 5-point scoring system described below. Points are accumulated based on the closeness of the code\'s rendering to the image design:\n\n**Design Mockup Code Evaluation Criteria**\n\nEvaluate the code submission based on its fidelity to the provided design mockup, considering completeness, accuracy, responsiveness, accessibility, and flawlessness. Each criterion contributes points cumulatively, reflecting the code\'s progression towards perfection.\n\n1. **Major Elements and Content Implementation (Award a first point):**\n- The code snippet includes all major design elements and all content accurately. This encompasses images, copy, icons, and any other components specified in the design mockup. The implementation should capture the essence and basic structure of the mockup, even though minor inaccuracies or elements might be missing.\n\n2. **Layout and Style Fidelity (Award a second point):**\n- The code\'s layout and stylistic elements (font sizes, colors, spacing, icons, line heights, copy, and images) precisely match those of the design. This point is awarded when the arrangement and aesthetic aspects demonstrate a thorough adherence to the mockup, with only minor deviations permitted.\n\n3. **Responsive Design (Award a third point):**\n- The code ensures full responsiveness across various devices (phones, tablets, and desktops). The design must seamlessly adjust to different screen sizes, maintaining design integrity and user experience. Complete responsiveness is a prerequisite for this point, with no part of the design overlooked in adapting to viewport changes.\n\n4. **Accessibility Standards (Award a fourth point):**\n- The code exemplifies comprehensive accessibility practices. This includes, but is not limited to, the correct use of alt attributes for images, aria labels, and roles for interactive components, ensuring content is fully navigable and accessible via keyboard and screen readers. The implementation should meet recognized web accessibility standards to ensure an inclusive user experience.\n\n5. **Flawless Execution (Award a fifth point):**\n- This point is reserved for code that reaches an exceptional standard of perfection. Functions and click handlers are fully implemented and operate correctly. Use all of the information available to implement the functions, but if the information is not available - DO NOT HALLUCINATE! You may use placeholders ONLY for functions and only when absolutely necessary. In strongly-typed languages, precise typing for every variable and function is expected. The layout, positioning, and presentation of every element align perfectly with the mockup, with no unnecessary comments, placeholders, or any form of deviation. The code should withstand an expert-level review without any criticism, reflecting an expert understanding and execution of front-end development principles.\n\n**Evaluation Guidance:**\n\n- It is acknowledged that direct rendering of the code to assess its visual and functional fidelity to the mockup is not possible. However, use your deep understanding of front-end development practices, libraries, and frameworks to estimate how closely the code would match the design if rendered. This evaluation should consider the adaptability and dynamic nature of web elements, prioritizing responsive and flexible design over static layouts.\n---\nAfter examining the Figma design export and the code snippet:\n\nBriefly justify your total score, up to 100 words.\nConclude with the score using the format: “Score: <total points>”\nConsiderations for evaluation should include the code\'s ability to handle dynamic data versus static placeholders, responsiveness to different screen sizes, interactive states if present in the design, reused of existing types and functions, completeness and functionality of the code, and the overall visual and functional fidelity to the exported image. Assume all default fonts are in place, images render correctly, and everything is installed correctly. Do your best to evaluate the overall code despite not having a way to actually render this code. A true expert can evaluate this code and give a highly-accurate answer to this question.\n\n# End of the Evaluation Criteria\n\n# Instructions\nDO NOT provide an evaluation! Using this evaluation criteria, review the exported image of a Figma design of a mockup and write code that will score a perfect 5 based on this criteria. Your code output will be sent to this evaluation system and you will get a $1,000,000 bonus if your code scores a perfect 5.\nAgain, you are NOT providing an evaluation, you are writing complete, responsive, accessible, pixel-perfect code that will score a perfect 5 based on the evaluation criteria.',
              promptType: "System",
              timestamp: "2024-04-17T00:10:09.385Z",
            },
            {
              prompt:
                'Act as an expert-level L8 Software Engineer at Facebook and write flawless production-level code to address the GitHub issue.\n-- GitHub Issue\nA new design has been added to Figma for the file src/components/Testimonial.tsx.\nThe design was converted into JSX. Here is what was provided:\n\n~~~\nfunction Testimonial() {\n  const happyUsers = 3940;\n\n  return (\n    <div className="w-full h-[672px] bg-white flex flex-col items-center">\n      <div className="mt-24">\n        <p className="text-blue-600 text-sm leading-7 text-center">{happyUsers}+ Happy Landingfolio Users</p>\n        <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight mt-3">Don’t just take our words</h2>\n      </div>\n      <div className="flex justify-between px-24 mt-16">\n        <Quote\n          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Jenny Wilson"\n          website="Grower.io"\n        />\n        <Quote\n          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.jpg"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Devon Lane"\n          website="DLDesign.co"\n        />\n      </div>\n    </div>\n  );\n}\n\nfunction Quote({ imageUrl, rating, quote, name, website }) {\n  return (\n    <div className="flex">\n      <img src={imageUrl} className="w-[239px] h-[239px] rounded-lg" alt="user profile" />\n      <div className="ml-8 flex flex-col justify-between">\n        <div>\n          <div className="flex">\n            {Array.from({ length: rating }, (_, i) => (\n              <div key={i} className="w-4 h-4 bg-blue-600 rounded-full mr-1.5"></div>\n            ))}\n          </div>\n          <p className="text-lg font-medium leading-7 text-gray-900 mt-3">{quote}</p>\n        </div>\n        <div>\n          <p className="text-sm text-gray-900">{name}</p>\n          <p className="text-sm font-medium text-gray-500">{website}</p>\n        </div>\n      </div>\n    </div>\n  );\n}\n~~~\n\n- @jacob-ai-bot Here are your instructions for creating the new file:\n1. Create a new file with the name src/components/Testimonial.tsx.\n2. Copy the code above into the new file.\n3. Write additional code as needed to create the complete, working component or file. Note that the code is not guaranteed to be perfect, so you may need to make some adjustments. Specifically, ONLY use valid TailwindCSS classes. For arbitrary values, convert to standard TailwindCSS classes as often as possible. Use the custom Tailwind.config color names if there is an exact match.\n4. The code above is from the design team and will likely have placeholder text. Find the places where the placeholder text will need to be replaced by the real data from the code.\n5. Be sure to create any functions or other code that is needed to make the component work.\n6. Do your best to make the code match the design as closely as possible. Bias towards using flexbox and other modern TailwindCSS features vs hardcoding widths or heights.\n7. There may be icons or images in the design. These will need to be replaced with the real icons or images.\n8. You can use the Font Awesome icon kit to add icons. Here is some example code of how to use it:\n\n```\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\'\nimport { faEnvelope } from \'@fortawesome/free-solid-svg-icons\'\nconst element = <FontAwesomeIcon icon={faEnvelope} />\n```\n\n9. For images, the figma code will likely list the image name. This image has already been saved to the public folder. You must use that image as the source for the image tag. <img src="[image name]" />\n10. IMPORTANT: The design team did not wire up any of the buttons or links, they assigned that critical task to you. You MUST implement the code to handle the click events.\n\nHere are some important additional instructions from the product owner. You MUST follow these instructions, even if it means adjusting the JSX code provided above: \n Create a separate, sub-component called “Quote”. It should take in an imageUrl, rating, quote, name and website. Hardcode the information for these two users in the Testimonial component. Also make the number of “Happy Landingfolio Users” dynamic (but use 3490 as the default for now)\n\nHere is a temporary snapshot of your design. It will expire in 60 minutes for security purposes.\n![snapshot](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/1713312440656.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316041&Signature=OI56Y3%2F1%2BeycMFzb37sBpvJpanI%3D)\n\n\nHere are the images from your design. These images will be downloaded to this branch and these links will expire in 60 minutes for security purposes.\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316070&Signature=ziUvcmI04an24n8zZiEeWufLinM%3D)\n![image](https://jacob-snapshots.s3.us-west-2.amazonaws.com/uploads/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png?AWSAccessKeyId=AKIAJUND5POKJHI2YDWQ&Expires=1713316069&Signature=ZZ5NpQjo65QCfDA%2FGLE3M6b%2Bw3Q%3D)\n\n\n-- Plan\nTo create the `src/components/Testimonial.tsx` file and implement the design accurately, follow these steps:\n\n1. **Setup the File and Basic Structure:**\n   - Create a new file named `Testimonial.tsx` in the `src/components` directory.\n   - Copy the provided JSX code into this new file as a starting point.\n\n2. **Refine the JSX Structure:**\n   - Ensure that the JSX structure matches the design requirements. Adjust the div layouts and class names to align with the design provided in Figma.\n\n3. **Validate and Adjust TailwindCSS Classes:**\n   - Review all TailwindCSS classes used in the JSX code. Replace any non-standard or incorrect classes with valid TailwindCSS classes. Utilize the Tailwind configuration file to ensure colors and sizes match the design specifications.\n\n4. **Implement the Quote Sub-Component:**\n   - Extract the `Quote` component into its own file if necessary, or keep it within the same file for simplicity. Ensure it accepts props for `imageUrl`, `rating`, `quote`, `name`, and `website`.\n   - Hardcode the user data as per the design for the two testimonials.\n\n5. **Dynamic Content Integration:**\n   - Implement dynamic handling of the "Happy Landingfolio Users" count. Initialize it with a default value of 3940 but ensure it can be updated dynamically if needed.\n\n6. **Incorporate Images:**\n   - Ensure that the images used in the `Quote` components are correctly linked and accessible. Use the provided image URLs and ensure they are stored appropriately in the project\'s public folder.\n\n7. **Add Interactivity:**\n   - Implement any necessary click event handlers, particularly if there are interactive elements in the component that were not specified in the initial design.\n\n8. **Responsive Design Considerations:**\n   - Apply responsive design principles to ensure the component displays correctly across different devices. Use Tailwind\'s responsive utilities to adjust layouts and font sizes.\n\n9. **Testing and Validation:**\n   - Test the component in various browsers and devices to ensure it matches the design and functions as expected. Check for visual consistency and interactivity.\n\n10. **Code Review and Cleanup:**\n    - Conduct a thorough code review to ensure best practices are followed. Remove any unused code, and optimize the component for performance and maintainability.\n\nBy following these steps, you will create a `Testimonial.tsx` component that adheres closely to the design specifications and is robust and maintainable.\n\n-- Notes:\nAny code or suggested imports in the Technical Specification above is example code and may contain bugs or incorrect information or approaches.\nALWAYS use the source map and types when writing your final code.\n\n-- Instructions:\nYou will be tipped $100,000 for writing flawless, production-level code that builds successfully.\nIf your code breaks the build, you will instantly be fired.\nIf you do not respond with a valid file, you and your whole team will be fired and the system will shut down.\nUsing the GitHub Issue, live application source map and types, please reply with ONLY with the working src/components/Testimonial.tsx file.\nDO NOT add any additional comments.\n',
              promptType: "User",
              timestamp: "2024-04-17T00:10:09.385Z",
            },
          ],
        },
        response: {
          prompt: {
            prompt:
              '```typescript\nimport React from \'react\';\n\nfunction Testimonial() {\n  const happyUsers = 3940;\n\n  return (\n    <div className="w-full min-h-screen bg-white flex flex-col items-center py-24">\n      <div>\n        <p className="text-blue-600 text-sm leading-7 text-center">{happyUsers}+ Happy Landingfolio Users</p>\n        <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight mt-3">Don’t just take our words</h2>\n      </div>\n      <div className="flex justify-around items-center w-full px-24 mt-16">\n        <Quote\n          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Jenny Wilson"\n          website="Grower.io"\n        />\n        <Quote\n          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Devon Lane"\n          website="DLDesign.co"\n        />\n      </div>\n    </div>\n  );\n}\n\nfunction Quote({ imageUrl, rating, quote, name, website }) {\n  return (\n    <div className="flex flex-col items-center">\n      <img src={imageUrl} className="w-60 h-60 rounded-full mb-4" alt="user profile" />\n      <div className="flex items-center mb-2">\n        {Array.from({ length: rating }, (_, i) => (\n          <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-blue-600">\n            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.866 2.66a1 1 0 001.949-.392l-.866-2.66C12.297.365 10.703.365 10.049 2.927L9.183 5.587a1 1 0 00.866 1.414h3.451a1 1 0 01.707 1.707l-2.779 2.779a1 1 0 00-.293.707v3.451a1 1 0 01-1.707.707l-2.779-2.779a1 1 0 00-.707-.293H3.49a1 1 0 01-.707-1.707l2.779-2.779a1 1 0 00.293-.707V7.001a1 1 0 00-.866-1.414L2.93 2.927C2.63 2.006 4.327 2.006 4.627 2.927l.866 2.66a1 1 0 001.949-.392l-.866-2.66z" />\n          </svg>\n        ))}\n      </div>\n      <p className="text-lg font-medium text-gray-900 text-center">{quote}</p>\n      <p className="text-sm text-gray-900 mt-4">{name}</p>\n      <p className="text-sm font-medium text-gray-500">{website}</p>\n    </div>\n  );\n}\n\nexport default Testimonial;\n```',
            promptType: "Assistant",
            timestamp: "2024-04-17T00:10:09.385Z",
          },
        },
      },
    ],
    codeFiles: [
      {
        codeBlock:
          'import React from \'react\';\n\nfunction Testimonial() {\n  const happyUsers = 3940;\n\n  return (\n    <div className="w-full min-h-screen bg-white flex flex-col items-center py-24">\n      <div>\n        <p className="text-blue-600 text-sm leading-7 text-center">{happyUsers}+ Happy Landingfolio Users</p>\n        <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight mt-3">Don’t just take our words</h2>\n      </div>\n      <div className="flex justify-around items-center w-full px-24 mt-16">\n        <Quote\n          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Jenny Wilson"\n          website="Grower.io"\n        />\n        <Quote\n          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Devon Lane"\n          website="DLDesign.co"\n        />\n      </div>\n    </div>\n  );\n}\n\nfunction Quote({ imageUrl, rating, quote, name, website }) {\n  return (\n    <div className="flex flex-col items-center">\n      <img src={imageUrl} className="w-60 h-60 rounded-full mb-4" alt="user profile" />\n      <div className="flex items-center mb-2">\n        {Array.from({ length: rating }, (_, i) => (\n          <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-blue-600">\n            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.866 2.66a1 1 0 001.949-.392l-.866-2.66C12.297.365 10.703.365 10.049 2.927L9.183 5.587a1 1 0 00.866 1.414h3.451a1 1 0 01.707 1.707l-2.779 2.779a1 1 0 00-.293.707v3.451a1 1 0 01-1.707.707l-2.779-2.779a1 1 0 00-.707-.293H3.49a1 1 0 01-.707-1.707l2.779-2.779a1 1 0 00.293-.707V7.001a1 1 0 00-.866-1.414L2.93 2.927C2.63 2.006 4.327 2.006 4.627 2.927l.866 2.66a1 1 0 001.949-.392l-.866-2.66z" />\n          </svg>\n        ))}\n      </div>\n      <p className="text-lg font-medium text-gray-900 text-center">{quote}</p>\n      <p className="text-sm text-gray-900 mt-4">{name}</p>\n      <p className="text-sm font-medium text-gray-500">{website}</p>\n    </div>\n  );\n}\n\nexport default Testimonial;',
        fileName: "src/components/Testimonial.tsx",
        filePath: "/tmp/tmp-63870-N02N04t0h6jY/src/components/Testimonial.tsx",
        language: Language.TypeScript,
      },
      {
        codeBlock:
          '```typescript\nimport React from \'react\';\n\nfunction Testimonial() {\n  const happyUsers = 3940;\n\n  return (\n    <div className="w-full min-h-screen bg-white flex flex-col items-center py-24">\n      <div>\n        <p className="text-blue-600 text-sm leading-7 text-center">{happyUsers}+ Happy Landingfolio Users</p>\n        <h2 className="text-5xl font-bold text-gray-900 text-center leading-tight mt-3">Don’t just take our words</h2>\n      </div>\n      <div className="flex justify-around items-center w-full px-24 mt-16">\n        <Quote\n          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Jenny Wilson"\n          website="Grower.io"\n        />\n        <Quote\n          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png"\n          rating={5}\n          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."\n          name="Devon Lane"\n          website="DLDesign.co"\n        />\n      </div>\n    </div>\n  );\n}\n\nfunction Quote({ imageUrl, rating, quote, name, website }) {\n  return (\n    <div className="flex flex-col items-center">\n      <img src={imageUrl} className="w-60 h-60 rounded-full mb-4" alt="user profile" />\n      <div className="flex items-center mb-2">\n        {Array.from({ length: rating }, (_, i) => (\n          <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-blue-600">\n            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.866 2.66a1 1 0 001.949-.392l-.866-2.66C12.297.365 10.703.365 10.049 2.927L9.183 5.587a1 1 0 00.866 1.414h3.451a1 1 0 01.707 1.707l-2.779 2.779a1 1 0 00-.293.707v3.451a1 1 0 01-1.707.707l-2.779-2.779a1 1 0 00-.707-.293H3.49a1 1 0 01-.707-1.707l2.779-2.779a1 1 0 00.293-.707V7.001a1 1 0 00-.866-1.414L2.93 2.927C2.63 2.006 4.327 2.006 4.627 2.927l.866 2.66a1 1 0 001.949-.392l-.866-2.66z" />\n          </svg>\n        ))}\n      </div>\n      <p className="text-lg font-medium text-gray-900 text-center">{quote}</p>\n      <p className="text-sm text-gray-900 mt-4">{name}</p>\n      <p className="text-sm font-medium text-gray-500">{website}</p>\n    </div>\n  );\n}\n\nexport default Testimonial;\n```',
        fileName: "src/components/Testimonial.tsx",
        filePath: "/tmp/tmp-63870-N02N04t0h6jY/src/components/Testimonial.tsx",
        language: Language.TypeScript,
      },
    ],
  },
  {
    id: "2",
    repo: "project2",
    name: "Fix Bug in User Registration",
    type: TaskType.EDIT_FILES,
    description:
      "There's a bug in the user registration flow where the form doesn't properly validate the user's email address. This needs to be fixed.",
    storyPoints: 3,
    status: TaskStatus.TODO,
  },
  {
    id: "3",
    repo: "project2",
    name: "Add Tests for Profile Page",
    type: TaskType.CODE_REVIEW,
    description:
      "The Profile page currently has no tests. We need to add unit and integration tests to ensure it's working correctly.",
    storyPoints: 8,
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: "4",
    repo: "project2",
    name: "Implement Dark Mode",
    type: TaskType.CREATE_NEW_FILE,
    description:
      "Users have been asking for a dark mode. We need to implement this across the entire application.",
    storyPoints: 3,
    status: TaskStatus.DONE,
  },
  {
    id: "5",
    repo: "project2",
    name: "Optimize Image Loading",
    type: TaskType.CREATE_NEW_FILE,
    description:
      "Images on the site are currently loaded all at once, which is causing performance issues. We need to implement lazy loading for images.",
    storyPoints: 5,
    status: TaskStatus.DONE,
  },
];

export const SAMPLE_COMMANDS: Command[] = [
  {
    command: "ls",
    response: "project1 project2 project3 README.md package.json node_modules",
  },
  {
    command: "cd project1",
    response: "",
    directory: "/project1",
  },
  {
    command: "ls",
    response: "src tests package.json tsconfig.json",
  },
  {
    command: "cat README.md",
    response: "This is a sample README for project1.",
  },
  {
    command: "cd ..",
    response: "",
    directory: "/",
  },
  {
    command: "cd project2",
    response: "",
    directory: "/project2",
  },
  {
    command: "ls",
    response: "app tests package.json webpack.config.js",
  },
  {
    command: "cat package.json",
    response: `{
    "name": "project2",

}`,
  },
  {
    command: "cd /",
    response: "",
    directory: "/",
  },
];

export const SAMPLE_CODE_FILES: CodeFile[] = [
  {
    fileName: "index.tsx",
    filePath: "/src/components/index.tsx",
    language: Language.TypeScript,
    codeBlock: `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));`,
  },
  {
    fileName: "App.tsx",
    filePath: "/src/components/App.tsx",
    language: Language.TypeScript,
    codeBlock: `import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);
`,
  },
  {
    fileName: "Home.tsx",
    filePath: "/src/components/Home.tsx",
    language: Language.TypeScript,
    codeBlock: `import React from "react";
    import { Link } from "react-router-dom";
    import { useQuery } from "@apollo/client";

    const Home: React.FC = () => {
      const { data, loading, error } = useQuery(GET_HOME_PAGE_DATA);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error! {error.message}</div>;

      return (
        <div>
          <h1>Welcome to our site!</h1>
          <p>{data?.homePageContent}</p>
          <Link to="/about">Learn more</Link>
        </div>
      );
    };
    `,
  },
];

export const CREATE_NEW_FILE_PLAN: Plan[] = [
  {
    id: "0",
    title: "Create GitHub Issue",
    description: "Create a new GitHub issue to track the progress of the task.",
    position: 0,
    isComplete: false,
  },
  {
    id: "1",
    title: "Clone & Init Repo",
    description:
      "Clone the repository from the remote source and ensure the code builds.",
    position: 1,
    isComplete: false,
  },
  {
    id: "2",
    title: "Plan & Write Code",
    description: "Create a plan for the code and start the code writing phase.",
    position: 2,
    isComplete: false,
  },
  {
    id: "3",
    title: "Create PR",
    description: "Create a Pull Request to start the code review process.",
    position: 3,
    isComplete: false,
  },
  {
    id: "4",
    title: "Create Story",
    description: "Create a Storybook story for visual testing (optional).",
    position: 4,
    isComplete: false,
  },
  {
    id: "5",
    title: "Task Complete",
    description:
      "All code and optional stories have been written and the PR is ready for review.",
    position: 5,
    isComplete: false,
  },
];
const EDIT_FILES_PLAN: Plan[] = [
  {
    id: "0",
    title: "Create GitHub Issue",
    description: "Create a new GitHub issue to track the progress of the task.",
    position: 0,
    isComplete: false,
  },
  {
    id: "1",
    title: "Clone Repo",
    description:
      "Clone the repository from the remote source to your local machine.",
    position: 1,
    isComplete: false,
  },
  {
    id: "2",
    title: "Create Plan",
    description: "Generates a plan for the coding task.",
    position: 2,
    isComplete: false,
  },
  {
    id: "3",
    title: "Edit Code",
    description: "Triggers the code editing phase.",
    position: 3,
    isComplete: false,
  },
  {
    id: "4",
    title: "Verify Build",
    description:
      "Checks the build for any issues or errors and verifies its successful completion.",
    position: 4,
    isComplete: false,
  },
  {
    id: "5",
    title: "Create Pull Request",
    description: "Start the code review process for quality assurance.",
    position: 5,
    isComplete: false,
  },
  {
    id: "6",
    title: "Create Story (optional)",
    description:
      "Initiates the creation of Storybook stories for visual testing.",
    position: 6,
    isComplete: false,
  },
  {
    id: "7",
    title: "Task Complete",
    description:
      "All code and stories have been edited and the PR is ready for review.",
    position: 7,
    isComplete: false,
  },
];

const CODE_REVIEW_PLAN: Plan[] = [
  {
    id: "0",
    title: "Clone Repo",
    description:
      "Clone the repository from the remote source to your local machine.",
    position: 0,
    isComplete: false,
  },
  {
    id: "1",
    title: "Code Review",
    description: "Review the code changes submitted in the pull request.",
    position: 1,
    isComplete: false,
  },
  {
    id: "2",
    title: "Approve Changes",
    description: "Approve the changes made in the pull request.",
    position: 2,
    isComplete: false,
  },
  {
    id: "3",
    title: "Merge Pull Request",
    description: "Merge the changes into the main branch.",
    position: 3,
    isComplete: false,
  },
];

export const PLANS = {
  [TaskType.CREATE_NEW_FILE]: CREATE_NEW_FILE_PLAN,
  [TaskType.EDIT_FILES]: EDIT_FILES_PLAN,
  [TaskType.CODE_REVIEW]: CODE_REVIEW_PLAN,
};

export type Comment = {
  id: string;
  commentId: number;
  username: string;
  createdAt: string;
  content: string;
};

export type Issue = {
  id: string;
  issueId: number;
  title: string;
  description: string;
  createdAt: string;
  comments: Comment[];
  author: string;
  assignee: string;
  status: "open" | "closed";
  link: string;
  stepsToAddressIssue?: string | null;
  issueQualityScore?: number | null;
  commitTitle?: string | null;
  filesToCreate?: string[] | null;
  filesToUpdate?: string[] | null;
};

export type PullRequest = {
  id: string;
  pullRequestId: number;
  title: string;
  description: string;
  link: string;
  status: "open" | "closed" | "merged";
  createdAt: string;
  author: string;
  comments: Comment[];
  changedFiles: number;
  additions: number;
  deletions: number;
};

export const SAMPLE_ISSUE: Issue = {
  id: "1",
  issueId: 1,
  title: "Add new timezone parameter to the posts API",
  description:
    `**Objective:**\n` +
    `Add an input field called \`timezone\` to the \`hello\` API (alongside the \`text\` parameter).\n` +
    `The \`greeting\` response from the \`hello\` API should be updated to include the \`timezone\` in the string (along with \`Hello\` and the \`text\` parameter).\n` +
    `Update the \`Home\` page to retrieve the current timezone from the browser and pass that parameter to the API.\n\n` +
    `@jacob-ai-bot, please implement these changes and submit a pull request for review.`,
  createdAt: "2024-03-28T09:00:00Z",
  author: "jacob-ai-bot",
  comments: [
    {
      id: "1",
      commentId: 1,
      username: "jacob-ai-bot",
      createdAt: "2024-03-28T10:00:00Z",
      content:
        "I've started working on this issue. The `timezone` field will be optional with a default value of 'UTC'.",
    },
    {
      id: "2",
      commentId: 2,
      username: "kleneway",
      createdAt: "2024-03-28T11:00:00Z",
      content:
        "Thanks for the update. Ensure that the implementation handles time zone conversions accurately.",
    },
  ],
  assignee: "kleneway",
  status: "open",
  link: "https://github.com/PioneerSquareLabs/t3-starter-template/issues/284",
};

export const SAMPLE_PR: PullRequest = {
  id: "284",
  pullRequestId: 284,
  title: "Implement time zone conversions",
  description: "This PR adds functionality to convert time zones.",
  link: "https://github.com/PioneerSquareLabs/t3-starter-template/pull/284",
  status: "open",
  createdAt: "2024-03-28T11:00:00Z",
  author: "kleneway",
  comments: [
    {
      id: "1",
      commentId: 1,
      username: "reviewer1",
      content: "Looks good to me. Just a few minor changes needed.",
      createdAt: "2024-03-29T11:00:00Z",
    },
    {
      id: "2",
      commentId: 2,
      username: "reviewer2",
      content:
        "Thanks for the update. Ensure that the implementation handles time zone conversions accurately.",
      createdAt: "2024-03-30T11:00:00Z",
    },
  ],
  changedFiles: 3,
  additions: 50,
  deletions: 10,
};

export type Prompt = {
  promptType: "User" | "System" | "Assistant";
  prompt: string;
  timestamp: string;
};

export type PromptDetails = {
  metadata: {
    timestamp: string;
    cost: number;
    tokens: number;
    duration: number;
    model: string;
  };
  request: {
    prompts: Prompt[];
  };
  response: {
    prompt: Prompt;
  };
};

const SAMPLE_PROMPT_DETAILS = {
  metadata: {
    timestamp: "2024-03-28T12:00:00Z",
    tokens: 1234,
    cost: 1.23,
    duration: 450,
    model: "gpt-3.5-turbo",
  },
  request: {
    prompts: [
      {
        promptType: "System",
        prompt:
          "Act as an expert-level front-end software engineer and designer. The IMAGE above is EXACTLY the design that you MUST implement with code.\nA low-level developer may have provided some basic code or a FigML file to get you started. This code WILL have errors and you MUST use this design to correct for those errors. \nIf no code was provided or you can not correct for the errors, you MUST use the design to write your own code. Your code MUST be pixel-perfect! If you can achieve this on the first try, you will get a $1,000,000 bonus.\nYou MUST use this code ONLY as a starting point, but you MUST follow all the instructions. Take a deep breath and begin.",
        timestamp: "2024-03-28T12:00:00Z",
      },
      {
        promptType: "User",
        prompt:
          "Act as an expert-level TypeScript Front-End TailwindCSS software developer.\nYour job is to take a representation of a Figma design and convert it into JSX to be used in a React functional component. \nThe Figma design will be provided in a format called FigML, which is a YAML representation of a Figma file.\n  \n=== START FigML ===\n- MacBook Pro 16\" - 89 (FRAME)\n\t(0, 0) w-[1728px] h-[1117px] bg-[#0d0c22]\n\t- Frame 1000003243 (FRAME)\n\t\t(513, 314) w-[701px] h-[74px]\n\t\t- Select Personas (TEXT)\n\t\t\t(792, 314) text-[18] font-medium color-[#f8f7f4]\n\t\t\tSelect Personas\n\t\t- We’ve generated the following personas based on your study description. Select one or more of these or upload your own. (TEXT)\n\t\t\t(513, 344) text-[18] text-align-[center] color-[rgba(192, 189, 255, 0.5)]\n\t\t\tWe’ve generated the following personas based on your study description. Select one or more of these or upload your own.\n\t- Frame 1000003245 (FRAME)\n\t\t(1302, 397) w-[102px] h-[17px]\n\t\t- Upload my own (TEXT)\n\t\t\t(1302, 397) text-[14] color-[#fface4]\n\t\t\tUpload my own\n\t- upload (INSTANCE)\n\t\t(1277, 400) w-[14px] h-[14px] bg-[]\n\t- Frame 20 (FRAME)\n\t\t(301, 430) w-[1103px] h-[405px]\n\t\t- Frame 23 (INSTANCE)\n\t\t\t(301, 430) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t(345, 474) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\tSustainability Sarah\n\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t(345, 508) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\tThis persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities.\n\t\t- Frame 24 (INSTANCE)\n\t\t\t(672.3, 430) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t(716.3, 474) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\tBudget-Conscious Bryce\n\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t(716.3, 508) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\tThis persona represents a budget-conscious single parent utilizing SNAP benefits. Their focus is quickly finding an affordable, nutritious apple that is SNAP-eligible.\n\t\t- Frame 25 (INSTANCE)\n\t\t\t(1043.7, 430) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t(1087.7, 474) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\tHealthy Hana\n\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t(1087.7, 508) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\tThis persona represents a health-conscious, middle-aged individual seeking to buy an organic apple. They prioritize product quality, and are likely willing to pay more for a premium option.\n\t\t- Frame 1000003246 (FRAME)\n\t\t\t(301, 785) w-[1103px] h-[344px]\n\t\t\t- Frame 23 (INSTANCE)\n\t\t\t\t(301, 785) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t\t(345, 829) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\t\tSustainability Sarah\n\t\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t\t(345, 863) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\t\tThis persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities.\n\t\t\t- Frame 24 (INSTANCE)\n\t\t\t\t(672.3, 785) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t\t(716.3, 829) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\t\tBudget-Conscious Bryce\n\t\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t\t(716.3, 863) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\t\tThis persona represents a budget-conscious single parent utilizing SNAP benefits. Their focus is quickly finding an affordable, nutritious apple that is SNAP-eligible.\n\t\t\t- Frame 25 (INSTANCE)\n\t\t\t\t(1043.7, 785) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t\t(1087.7, 829) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\t\tHealthy Hana\n\t\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t\t(1087.7, 863) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\t\tThis persona represents a health-conscious, middle-aged individual seeking to buy an organic apple. They prioritize product quality, and are likely willing to pay more for a premium option.\n\t- Frame 18 (FRAME)\n\t\t(1447, 566) w-[36px] h-[36px] bg-[#fface4] border-radius-[100px]\n\t\t- arrow-left (INSTANCE)\n\t\t\t(1453, 572) w-[24px] h-[24px] bg-[]\n\t\t\t- Vector (VECTOR)\n\t\t\t\t(1456, 577) w-[18px] h-[14px] border-2 border-solid border-color-[#0d0c22]\n\t- arrow-left (INSTANCE)\n\t\t(216, 572) w-[24px] h-[24px] bg-[]\n\t\t- Vector (VECTOR)\n\t\t\t(219, 577) w-[18px] h-[14px] border-2 border-solid border-white\n\t- Rectangle 15 (RECTANGLE)\n\t\t(301, 642) w-[1113px] h-[198px] background-[undefined]\n\t- Frame 1000003244 (FRAME)\n\t\t(807, 796) w-[115px] h-[22px]\n\t\t- Load more (TEXT)\n\t\t\t(830, 796) text-[18] color-[rgba(192, 189, 255, 0.5)]\n\t\t\tLoad more\n\t\t- chevron-down (INSTANCE)\n\t\t\t(807, 800) w-[14px] h-[14px] bg-[]\n\t\t\t- Vector (VECTOR)\n\t\t\t\t(809.9, 805.3) w-[8px] h-[4px] border border-solid border-color-[rgba(192, 189, 255, 0.5)]\n=== END FigML ===\n\nHere are some additional instructions: you must reuse mono-buttons.tsx for this. be sure to import the mono button prop interface too.\n\nyou must use a grid for the personas.\nThe attached image is a snapshot of the Figma design. Use a combination of the FigML file and the image to produce a pixel-perfect reproduction of this design.\n\nWrite the JSX code for the FigML file.\nThis JSX code will be used in a React functional component.\nONLY respond with the JSX. Do not include backticks or any comments.\nThis output will be rendered directly by React and anything other than valid JSX will throw a serious error in the application!\n",
        timestamp: "2024-03-28T12:00:05Z",
      },
    ],
  },
  response: {
    prompt: {
      promptType: "Assistant",
      prompt:
        '``` javascript\nfunction MacBookPro16() {\n  return (\n    <div className="w-full h-full bg-indigo-900">\n      <div className="flex justify-center items-center flex-col">\n        <div className="mt-20">\n          <h1 className="text-lg font-medium text-gray-100">Select Personas</h1>\n          <p className="text-lg text-center text-indigo-200 mt-2 opacity-50">\n            We’ve generated the following personas based on your study description. Select one or more of these or upload your own.\n          </p>\n        </div>\n        <div className="flex justify-end items-center mt-4">\n          <button className="text-sm text-pink-300">Upload my own</button>\n        </div>\n      </div>\n      <div className="grid grid-cols-3 gap-4 mt-8 px-8">\n        <div className="bg-white bg-opacity-10 rounded-xl p-4">\n          <h2 className="text-xl text-gray-100">Sustainability Sarah</h2>\n          <p className="text-base text-indigo-200 opacity-50 mt-2">\n            This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that\'s currently in season. They value knowing the apple\'s origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities.\n          </p>\n        </div>\n        <div className="bg-white bg-opacity-10 rounded-xl p-4">\n          <h2 className="text-xl text-gray-100">Budget-Conscious Bryce</h2>\n          <p className="text-base text-indigo-200 opacity-50 mt-2">\n            This persona represents a budget-conscious single parent utilizing SNAP benefits. Their focus is quickly finding an affordable, nutritious apple that is SNAP-eligible.\n          </p>\n        </div>\n        <div className="bg-white bg-opacity-10 rounded-xl p-4">\n          <h2 className="text-xl text-gray-100">Healthy Hana</h2>\n          <p className="text-base text-indigo-200 opacity-50 mt-2">\n            This persona represents a health-conscious, middle-aged individual seeking to buy an organic apple. They prioritize product quality, and are likely willing to pay more for a premium option.\n          </p>\n        </div>\n      </div>\n      <div className="flex justify-center items-center mt-20">\n        <button className="text-lg text-indigo-200 opacity-50">Load more</button>\n      </div>\n      <div className="absolute top-1/3 right-8">\n        {/* SVG icon for right arrow will need to be added using Lucide package */}\n      </div>\n      <div className="absolute top-1/3 left-8">\n        {/* SVG icon for left arrow will need to be added using Lucide package */}\n      </div>\n    </div>\n  );\n}\n```',
      timestamp: "2024-03-28T12:00:10Z",
    },
  },
};

export const SAMPLE_PROMPT_DETAILS_ARRAY: PromptDetails[] = [
  ...Array(10).fill(SAMPLE_PROMPT_DETAILS),
];

export enum InternalEventType {
  Task = "Task",
  Code = "Code",
  Design = "Design",
  Command = "Command",
  Plan = "Plan",
  Prompt = "Prompt",
  Issue = "Issue",
  PullRequest = "Pull Request",
}

// This is the InternalEvent type from the otto-mvp repo
export type InternalEvent = {
  id?: string;
  type: InternalEventType;
  repo: string;
  issueId?: number | undefined;
  pullRequestId?: number | undefined;
  userId: string;
  payload:
    | Task
    | Plan
    | Issue
    | PullRequest
    | Command
    | CodeFile
    | PromptDetails;
};

export type NewIssue = {
  title: string;
  description: string;
  repo: string;
};
