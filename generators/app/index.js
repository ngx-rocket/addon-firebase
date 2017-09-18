'use strict';

const Generator = require('@ngx-rocket/core');
const chalk = require('chalk');
const pkg = require('../../package.json');

class AddonFirebaseGenerator extends Generator {
  initializing() {
    this.version = pkg.version;
    this.log(`Using ${chalk.cyan('addon-firebase')} ${chalk.green(this.version)}`);
  }

  beforeWriting() {
    Object.assign(this.props, this.sharedProps);
  }

  install() {
    this.log(`\nConfiguring ${chalk.cyan('Firebase')}:\n`);
    const result = this.spawnCommandSync('firebase', ['login']);

    if (result.error) {
      this.log(`${chalk.red('Firebase CLI is not installed!')}`);
      this.log(`You have to run ${chalk.yellow('npm install -g firebase-tools')} and ${chalk.yellow('firebase use --add')} manually`);
    } else {
      this.spawnCommandSync('firebase', ['use', '--add']);
    }
  }

  end() {
    if (!this.updating) {
      this.log(`- $ ${chalk.green('run deploy')}: deploy app to Firebase`);
    }
  }
}

module.exports = Generator.make({
  baseDir: __dirname,
  generator: AddonFirebaseGenerator,
  prompts: [
    {
      type: 'confirm',
      name: 'firebaseDeploy',
      message: 'Use Firebase deploy?',
      default: true
    }
  ]
});
