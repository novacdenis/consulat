import { VALIDATORS } from "./consts";

function getRules(arrayOfRules = []) {
  const rules = {};

  arrayOfRules.forEach((rule) => {
    Object.keys(rule).forEach((key) => VALIDATORS.includes(key) && (rules[key] = rule[key]));
  });

  return rules;
}

function getMessages(arrayOfRules = []) {
  const messages = {};

  arrayOfRules.forEach((rule) => {
    Object.keys(rule).forEach((key) => VALIDATORS.includes(key) && (messages[key] = rule.message));
  });

  return messages;
}

export default {
  getRules,
  getMessages,
};
