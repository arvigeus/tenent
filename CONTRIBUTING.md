# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_
series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## License

By contributing to this project, you agree that your contributions will be licensed under its MIT license.

## Code of Conduct

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## System Requirements

- [git](https://git-scm.com/) v2 or greater
- [NodeJS](https://nodejs.org) v8 or greater
- [npm](https://www.npmjs.com/) v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

## Project setup

1. Fork and clone the repo
2. Run `npm install` to install dependencies
3. Create a branch for your PR with `git checkout -b pr/your-branch-name`

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```shell
> git remote add upstream https://github.com/arvigeus/tenent.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.

## Git Commit Guidelines

In order to have **more readable messages** that are easy to follow when looking through the **project history**, this project follows [conventional commits](https://www.conventionalcommits.org/) specification. Improperly formatted commit messages may result in your change not appearing in the changelog.

## Issues

### Where to Find Known Issues

Please checkout the [the open issues](../../issues)

### Reporting New Issues

1. Update to the most recent master release if possible. We may have already fixed your bug.
2. Search for similar issues. It's possible somebody has encountered this problem already.
3. Make sure you provide very specific steps to reproduce the error. If we cannot reproduce it, we will close the ticket.
4. If possible, submit a Pull Request with a failing test.
5. If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort. If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take it over but you should still leave a comment.
6. The more information you provide, the easier it is for us to validate that there is a bug and the faster we'll be able to take action.

### Security Bugs

If you find a security vulnerability, do NOT open an issue. Email [arvigeus@gmail.com](mailto:arvigeus@gmail.com) instead.

### Issue Labeling

Issues are labeled according to [StandardIssueLabels](https://github.com/wagenet/StandardIssueLabels).

### Proposing a Change

If you find yourself wishing for a feature that doesn't exist, you are probably not alone. There are bound to be others out there with similar needs. Open an issue on our issues list on GitHub which describes the feature you would like to see, why you need it, and how it should work.

You can show your support for (or against!) features by using GitHub reactions or by adding meaningful details which help the feature definition become more clear.

## Fixing bugs

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend to file an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

## Help wanted

This is an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into future versions.
