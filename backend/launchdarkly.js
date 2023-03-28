const launchDarkly = require('launchdarkly-node-server-sdk');

class LaunchDarkly {
  constructor(SDK_KEY) {
    this.SDK_KEY = SDK_KEY;
    this.client = null;

    this.init();
  }

  init() {
    const client = launchDarkly.init(this.SDK_KEY);

    client.waitForInitialization().then(() => {
      this.client = client;
    }).catch(error => {
      console.error('Error while initializing client');
      process.exit(1)
    });
  }

  isInitialized() {
    return this.client !== null;
  }

  async variation(flag, context, fallback) {
    try {
      const value = await this.client.variation(flag, context, fallback);
      return value;
    } catch (error) {
      console.error('Error while evaluating flag');
      process.exit(1);
    }
  }
}

module.exports = new LaunchDarkly(process.env.LD_SDK_KEY)