exports.types = null;

try {
  ({ types: exports.types } = require("node:util"));
} catch {
  try {
    ({ types: exports.types } = require("util"));
  } catch {
    exports.types = null;
  }
}
