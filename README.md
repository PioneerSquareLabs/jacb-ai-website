# JACoB: AI-Powered Development Platform

Welcome to the JACoB project! This repository is an open-source example showcasing the practical application of JACoB (Just Another Coding Bot). It's still early days for our robot friend, but don't let the name fool you - our goal is to make JACoB far more than just another bot. 🦾🦾🦾

## What is JACoB?

JACoB automates coding tasks, transforms Figma designs into deployable code, and integrates seamlessly into your existing development workflow. Think of JACoB as an AI-powered team member who writes, reviews, and optimizes code alongside your team, adapting to your unique coding style and preferences.

### Key Features
- **Adaptive AI Coding**: JACoB learns your team’s coding patterns for consistent, high-quality code output.
- **Workflow Integration**: Seamlessly fits into your existing setup with GitHub, Figma, and more.
- **End-to-End Task Management**: From issue creation to pull requests, JACoB handles complete development tasks.
- **Open Source & Customizable**: Tailor JACoB to your team's needs. It's open source, so dive in and tweak as you see fit.

## Example Project: This Repo

This repository is a living example of JACoB in action. Using the T3 Stack, we've set up a basic framework to build the jacb.ai home page for you to see how JACoB integrates with modern web development tools. It's a playground for you to experiment with JACoB's capabilities in a real-world scenario. 

To see how JACoB was used to build out this site, check out this screencast showing the real-time creation of the site: https://www.youtube.com/watch?v=OfRUaehTcEM&t=8s

# Getting Started with JACoB

Interested in trying JACoB yourself? Here’s a quick guide to get you started with JACoB and integrate it seamlessly into your development workflow. 

**Important Note**: Currently JACoB is in a limited beta preview. While JACoB has the potential to work across any codebase, we've focused initially on a limited number of languages and frameworks. Specficially, JACoB works best with a TypeScript Next.js application using Tailwind. More languages and frameworks are coming soon!

## Step 1: Install the JACoB AI Bot GitHub Application

To begin, you need to install the JACoB AI Bot on your GitHub account. This bot will work with your repositories to automate coding tasks, review code, and manage pull requests.

1. Go to [JACoB AI Bot GitHub App](https://github.com/apps/jacob-ai-bot).
2. Install the application and grant it permission to access the repositories you want to use with JACoB.

## Step 2: Set Up Your JACoB Configuration

Next, you need to run the JACoB custom setup command to create a `jacob.config` file in your repository. This configuration file allows JACoB to understand your project’s specific needs and any environment variables essential for building the app. 

1. Run the JACoB custom setup command in your project directory.
2. A `jacob.config` file will be created. Open it and fill in the necessary details to customize it to your project.
3. Be sure to add any .env placeholder variables to the config file, as JACoB will need these to build the application (similar to a CI system). Here’s an example structure:

```json
"env": {
  "NODE_ENV": "",
  "NEXTAUTH_SECRET": "NEXTAUTH_SECRET",
  "GITHUB_ID": "GITHUB_ID",
  "GITHUB_SECRET": "GITHUB_SECRET",
  "EMAIL_FROM": "EMAIL_FROM",
  "DATABASE_URL": "file:./db.sqlite",
  "NEXTAUTH_URL": "http://localhost:3000"
}
```

**Note**: Ensure that you never commit real secret keys. Use placeholders for standard build variables and replace them with actual values in your secure environment.

## Step 3: Install the JACoB Figma Plugin

JACoB can convert your Figma designs into code, making the design-to-development process smoother.

1. Install the JACoB Figma plugin from [Figma Community](https://www.figma.com/community/plugin/1326684504185921461/jacob-ai-codegen-connector).
2. Open an editable Figma file and launch the plugin.
3. Authenticate using your GitHub account credentials.
4. Select the top-level frame of your design and choose a target repository.
5. Fill out the necessary information and click “Create Code”.

## Running JACoB

After setting up, JACoB will start working on the tasks:

1. JACoB creates an issue in your GitHub repository for the selected design frame.
2. Open the issue in GitHub and follow the progress as JACoB updates the issue with comments.
3. JACoB will eventually generate a pull request. This usually take about 4-5 minutes. Optionally, it can create a Storybook story if you have Storybook configured.
4. Review the generated code via GitHub’s standard Code Review process. JACoB will attempt to fix any issues based on your feedback.
5. If JACoB encounters difficulties, it will create a draft pull request for manual review and fixes.

**Important Note**: JACoB is in early development stages. The generated code is akin to what you might expect from an intern or junior developer - approximately 90% accurate. It's advisable to review and tweak the code manually before merging it into your main branch. The aim is to save you time, not to replace thorough code reviews and quality assurance.

By following these steps, you can integrate JACoB into your development process, enhancing efficiency and productivity. Remember, JACoB is a tool designed to assist and accelerate your coding process, not to replace the essential human touch in software development.

### Getting Started
- Explore the code to see how JACoB interacts with various technologies like Next.js, Tailwind CSS, and Prisma.
- Check out the pull requests to see JACoB's code contributions and review process.
- Feel free to fork, clone, and play around with the setup to get a sense of how JACoB might fit into your workflow.

## More on the T3 Stack and Deployment

This project is built on the [T3 Stack](https://create.t3.gg/), a robust framework for efficient web development. For more details on the technologies used and deployment instructions, check out the links at the bottom of this readme.

## Feedback and Contributions

Your insights and contributions are what make open-source great. Feel free to raise issues, submit pull requests, and provide feedback. Let's make software development more efficient, together!

---

## Existing Information on Setup and Deployment

This project is bootstrapped with `create-t3-app`, keeping it simple yet scalable. You're starting with a solid scaffold that can evolve as your project grows.

For those new to the stack, refer to the respective docs of [Next.js](https://nextjs.org), [NextAuth.js](https://next-auth.js.org), [Prisma](https://prisma.io), [Tailwind CSS](https://tailwindcss.com), and [tRPC](https://trpc.io). Join our [Discord](https://t3.gg/discord) for community support.

### Learn More About T3 Stack
- [Documentation](https://create.t3.gg/)
- [Learning Resources](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)

Check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) for more. Your feedback and contributions are always welcome!

### Deployment Guides
- [Vercel](https://create.t3.gg/en/deployment/vercel)
- [Netlify](https://create.t3.gg/en/deployment/netlify)
- [Docker](https://create.t3.gg/en/deployment/docker)

---

Join us in redefining software development with JACoB. This is just the beginning! 🚀🤖💻
