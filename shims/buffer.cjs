function warnNoBuffer() {
  console.warn(
    "Buffer API not available:",
    "`isBuffer` will not work. Use `isUint8Array` instead."
  );
}

exports.Buffer = globalThis.Buffer ?? globalThis.window?.Buffer;

if (typeof exports.Buffer === "undefined")
  try {
    ({ Buffer: exports.Buffer } = require("node:buffer"));
  } catch {
    warnNoBuffer();
  }
