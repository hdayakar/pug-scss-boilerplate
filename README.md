# pug-scss-boilerplate
A quick startup template or boilerplate with pug and scss task runners

## UI Development environment setup
If you've previously installed gulp globally, run `npm rm --global gulp` before following these instructions.
For more information, read this [Sip](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467).


### Check for node, npm versions
`node --version`
![node --version](docs/images/docs-node-version-command.png "node --version")

`npm --version`
![npm --version](docs/images/docs-npm-version-command.png "npm --version")

If they are not installed, follow the instructions [here](https://nodejs.org/en/).

### Install the gulp command line utility
`npm install --global gulp-cli`

#### verify gulp versions
`gulp --version`
![gulp --version](docs/images/docs-gulp-version-command.png "gulp --version")

Ensure the output matches the screenshot below.

### Install the dependencies
Run this command in the package directory to install all modules listed as dependencies in package.json
`npm install`
![npm install](docs/images/docs-npm-install-command.png "npm install")

### Test it
Run the gulp command in your project directory
`gulp`
![gulp](docs/images/docs-gulp-command.png "gulp")
