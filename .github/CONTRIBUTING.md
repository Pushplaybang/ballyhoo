### Contributing to the project
Always branch, and use the below naming schema for branches. Once you've completed the work for that branch, push it up to Github and open a pull request against `development`.

As with issues, and pull requests we're aiming to keep branches as short lived as possible, this reduces transaction costs, review time, merge conflicts.

#### Naming branches
We prefix our branch names to make it easier to see what branches relate to.

* `feature/<name>`  - a new feature
* `fix/<name>` - fixes an issue
* `style/<name>` - small front end updates
* `hotfix/<name>` - fixes against a release
* `release/<name>` - preparing for a release

### Pull requests
Pull requests should be kept as small as possible and solve a single problem. This eases review and avoids unnecessary merge conflicts. Pull requests should be reviewed by two team members.

### Commits and commit messages
Commits should also be kept as small as possible.

Commit titles should be 80 characters or shorter and additional descriptions should be used when necessary.

### Issues
If you think you've found a bug, or have a concern, check that its not already in the current issues, and then use the issue template if appropriate, if design/style related screenshots are helpful, and if it's a feature please describe it fully.

### External contributors
Please fork and provide a pull request back, ensure test coverage is kept at 100%, and the readme is up to date. These will be hard rejections.

### Versioning things
When it's neccessary to use versioning we should follow the Semver pattern as discussed [here](http://semver.org/).

We using a three number system, e.g.: `1.2.3`:

1. MAJOR version when you make incompatible API changes `1`
2. MINOR version when you add functionality in a backwards-compatible manner `2`
3. PATCH version when you make backwards-compatible bug fixes `3`

### Maintaining the ReadMe
This should be regularly updated with project details and developer instructions, particularly for setup, and any specific release instructions and notes.
