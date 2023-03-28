const crypto = require('crypto');

const NUMBER_OF_CONTEXTS = 400;

class ContextList {
  constructor() {
    this.contexts = [];
    this.generateKeys();
  }

  generateKeys() {
    for (let i = 0; i < NUMBER_OF_CONTEXTS; i++) {
      const randomKey = crypto.randomBytes(6).toString('hex');
      this.contexts.push({
        kind: 'user',
        key: randomKey
      });
    }
  }
}

module.exports = new ContextList();