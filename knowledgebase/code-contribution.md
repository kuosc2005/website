---
knowledgebaseSidebar_position: 3
---

# Code Contribution Guidelines

We would like to thank you for your interest in contributing. You can find below how you can get started with knowing and contributing to KUOSC projects. The first few steps are always crucial but signify how you wish to involve with the community. 

# Get to know KUOSC 
 - Read the Contribution guidelines
 - Read the Code of Conduct.
 - Have a look at conducting coding contributions in Contributing Guidelines
 - Review the bug list, open issues, or Project Board(if you want to add a new feature).
 - Contact the Repository Maintainer by submitting an issue with an @mention.
 
# Setting up the Development environment
Setting up the development environment can vary according to the projects but there are common guidelines you can follow for open source contribution.
 1. Choose a Project: Select an open-source project you're interested in contributing to. Look for projects that align with your skills and interests.
 2. Fork the Repository: On the project's GitHub page, click the "Fork" button. This creates a copy of the project's repository in your own GitHub account.
 3. Clone the Repository: In your local development environment, use the `git clone` command to create a local copy of your forked repository. Replace <username> with your GitHub username:
   - git clone https://github.com/<username>/project-name.git
 4. Install Dependencies: Check the project's documentation for information on installing any required dependencies. This might involve package managers like "npm" or "pip".
 5. Create a Branch: Before making changes, create a new branch in your local repository. This helps keep your changes isolated from the main codebase:
   - git checkout -b feature-name

Following these basic steps will help you to set up your development environment for open-source projects. 

# Make your contribution.
 - Make changes or addition to the code. 
 - Ensure that your code meets coding standards.
 - Performing relevant tests, which includes unit-testing or end-to-end testing as found fit for the repository that you will be submitting the pull request. 
 - Follow the documentation guidelines. 

# Making your contribution ready for pull requests.
 1. Commit Your Changes: Stage and commit your changes:
   - git add.
   - git commit -m "Description of your changes"
 2. Push Changes to GitHub: Push your changes to your forked repository on GitHub:
   - git push origin branch-name
 3. Now your contribution is ready to make the pull requests.

# Creating Pull Request ( and Reviewing it) 
 1. Go to your forked repository on GitHub and you should see a banner suggesting to create a pull request. Click on it.
 2.  In the pull request creation page, select the base repository and base branch (usually the main branch), and compare it to your branch with changes.
 3. Write a clear and concise description of your changes in the comment box. Be sure to explain the purpose of your pull request and any important details.
 4. Review Changes: Review the changes you're proposing in the "Files Changed" tab. This is a side-by-side comparison of your changes against the base branch.
 5. Submit Pull Request: Once you're satisfied with everything, click the "Create Pull Request" button.
 6. Communicate and Iterate: Engage with the maintainers and other contributors in the pull request discussion. Address any feedback or changes requested.
 7. Merge and Close: If your changes are approved, a maintainer of the original repository will review and merge your pull request. They may request additional changes before merging. Once merged, the pull request is closed.
  

# A note on coding standards 
  Coding standards are a set of guidelines and best practices that are used to create consistent, high-quality code. Consider coding standards as rules, techniques, and best practices to develop cleaner, more readable, and more efficient code with minimal errors. It is wise to follow common coding standards which help in the:
  - Improve Code Quality 
  - Increase Efficiency 
  - Facilitate Collaboration.
  - Reduce Maintenance Costs.
  
## Some of the coding standards and best practices to follow are:
 - Write as few lines as possible 
 - Use appropriate naming conventions.
 - Segment blocks of code in the same section into paragraphs.
 - Use indentation to mark the beginning and end of control structures. Specify the code between them.
 - Don’t use lengthy functions. Ideally, a single function should carry out a single task.
 - Use the DRY (Don’t Repeat Yourself) principle. Automate repetitive tasks whenever necessary. The same piece of code should not be repeated in the script.
 - Avoid Deep Nesting. Too many nesting levels make code harder to read and follow.
 - Capitalize SQL special words and function names to distinguish them from table and column names.
 - Avoid long lines. It is easier for humans to read blocks of lines that are horizontally short and vertically long.
 - Leave comments and prioritize Documentation.

