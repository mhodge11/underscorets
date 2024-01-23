function warnNoBuffer() {
  const needsBuffer = [
    "`KSUID`",
    "`compareKsuids`",
    "`generateCustomUuid`",
    "`generateCustomUuidAsync`",
    "`generateKsuid`",
    "`generateKsuidAsync`",
    "`generateUuid`",
    "`generateUuidAsync`",
    "`isBuffer`",
  ];

  console.warn(
    "Buffer API not available:",
    `${needsBuffer.slice(0, needsBuffer.length - 1).join(", ")} and ${
      needsBuffer[needsBuffer.length - 1]
    } will not work.`
  );
}

exports.Buffer = globalThis.Buffer ?? globalThis.window?.Buffer;

if (typeof exports.Buffer === "undefined")
  try {
    ({ Buffer: exports.Buffer } = require("node:buffer"));
  } catch {
    warnNoBuffer();
  }
