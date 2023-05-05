export async function generateHmac(key: string, ...data: string[]) {
  let digest: string
  if (typeof globalThis.crypto !== 'undefined') {
    digest = await generateHmacWithWebCryptoAPI(key, ...data)
  }

  digest = await generateHmacWithNodeCrypto(key, ...data)
  
  return digest
}

export async function generateHmacWithWebCryptoAPI(key: string, ...data: string[]) {
  const encoder = new TextEncoder();
  const keyUint8Array = encoder.encode(key);
  let messageUint8Array = new Uint8Array();

  data.forEach((datum) => {
    if (!datum) {
      return;
    }

    messageUint8Array = encoder.encode(datum);
  });

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyUint8Array,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    cryptoKey,
    messageUint8Array
  );

  const signatureArray = new Uint8Array(signature);
  const signatureHex = Array.from(signatureArray)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return signatureHex;
}

export async function generateHmacWithNodeCrypto(key: string, ...data: string[]) {
  const { createHmac } = await import("crypto");
  const hmac = createHmac("sha256", key);
  data.filter((s) => !!s).forEach((s) => hmac.update(s));

  return hmac.digest("hex");
}
