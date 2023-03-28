const launchDarkly = require('./launchdarkly');
const contextList = require('./contexts');

const Config = require('../config');
const FLAG_KEY = Config.flagKey;
const FALLBACK = Config.fallback;

exports.rolloutHandler = async (req, res) => {
  let values = [];
  for (const ctx of contextList.contexts) {
    const flagValue = await launchDarkly.variation(FLAG_KEY, ctx, FALLBACK);
    values.push(flagValue);
  }
  res.send({ values });
}