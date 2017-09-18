'use strict';

const Generator = require('@ngx-rocket/core');
const chalk = require('chalk');
const pkg = require('../../package.json');

class AddonFirebaseGenerator extends Generator {
  // DO NOT add a constructor, it won't be called.
  // Use initializing() method instead.
  //
  // See Yeoman's doc run loop priorities for the list of specific tasks:
  // http://yeoman.io/authoring/running-context.html

  initializing() {
    // Setting version allows Yeoman to notify the user of updates
    this.version = pkg.version;
    this.log(`Using ${chalk.cyan('addon-firebase')} ${chalk.green(this.version)}`);
  }

  beforeWriting() {
    // Augment this generator's properties with shared properties so it can be
    // used in templates
    Object.assign(this.props, this.sharedProps);
  }

  install() {
    this.log(`/nConfigure ${chalk.cyan('Firebase')} project`);
    try {
      this.spawnCommandSync('firebase', ['use', '--add']);
    } catch (err) {
      console.log(err);
      this.log(`\n${chalk.yellow('Firebase CLI is not installed!')}`);
      this.log(`You need to run ${chalk.yellow('npm install -g firebase-tools')} and ${chalk.yellow('firebase use --add')} manually`);
    }
  }

  end() {
    this.log(`- $ ${chalk.green('run deploy')}: deploy app to Firebase\n`);
  }
}

module.exports = Generator.make({
  // Base directory of your templates
  baseDir: __dirname,

  // Your generator (optional, you can use only templates)
  generator: AddonFirebaseGenerator,

  // Your generator prompts (optional)
  // See https://github.com/sboudrias/Inquirer.js#objects for details
  prompts: [
    {
      type: 'confirm',
      name: 'firebaseDeploy',
      message: 'Use Firebase deploy?',
      default: true
    }
    // {
    //   type: 'input',
    //   name: 'helloName',
    //   message: 'To whom shall we say hello?',
    //   default: 'world',
    //   // Only ask this one when "yes" is replied to the sayHello prompt
    //   when: props => props.sayHello
    // }
  ]
});
