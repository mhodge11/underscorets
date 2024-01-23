function warnNoCrypto() {
  const needsCrypto = [
    "`KSUID`",
    "`compareKsuids`",
    "`generateCustomUuid`",
    "`generateCustomUuidAsync`",
    "`generateKsuid`",
    "`generateKsuidAsync`",
    "`generateUuid`",
    "`generateUuidAsync`",
    "`hash`",
    "`randomElement`",
    "`randomFloat`",
    "`randomInt`",
    "`randomString`",
  ];

  console.warn(
    "Web Crypto API not available:",
    `${needsCrypto.slice(0, needsCrypto.length - 1).join(", ")} and ${
      needsCrypto[needsCrypto.length - 1]
    } will not work.`
  );
}

exports.crypto = globalThis.crypto ?? globalThis.window?.crypto;

if (typeof exports.crypto === "undefined")
  try {
    exports.crypto = require("node:crypto");
  } catch {
    warnNoCrypto();
  }
