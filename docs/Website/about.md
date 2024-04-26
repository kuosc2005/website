---
sidebar_position: 0
---

# About
## KUOSC Website

This site is live at [https://kuosc.org.np](https://kuosc.org.np) and is built   using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.  
You can view the source code at [github](https://github.com/kuosc2005/website).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Contributing

Contributing to this project is easy, and we welcome contributions from everyone. Here are a few guidelines to get you started:

- **Fork the repository**: Fork the repository to your GitHub account.
- **Clone the repository**: Clone the forked repository to your local machine.
- **Make your changes**: Make your changes to the codebase.
- **Test your changes**: Make sure your changes work as expected and do not introduce any regressions.
- **Commit your changes**: Commit your changes with clear and descriptive commit messages.
- **Push your changes**: Push your changes to your forked repository.
- **Submit a pull request**: Submit a pull request [here](https://github.com/kucc1997/kucc-website/pulls) with your changes, clearly describing what you have done.
 
### Writing Commit Messages

Writing good commit messages is essential for maintaining a clean and readable Git history. Here are some tips for writing effective commit messages:

- **Use the imperative mood**: Start the commit message with an imperative verb, such as "Fix", "Add", "Update", etc.
- **Keep it concise**: Limit the subject line to 50 characters and use the body to provide additional context if necessary.
- **Reference related issues**: If your commit addresses a specific issue or task, reference it in the body of pull request using the issue number.

**Warning:** DONOT use `npm` or `pnpm` to install dependencies. Rather, just use `yarn`. Github actions will fail if you use anything other than yarn.
