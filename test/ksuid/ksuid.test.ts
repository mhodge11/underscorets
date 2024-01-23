import { randomBytes } from "crypto";

function runBase62Import() {
	return import("@helpers/base62.ts");
}

function runImport() {
	return import("@ksuid/index.ts");
}

function toArrayBuffer(buffer: Buffer) {
	const arrayBuffer = new ArrayBuffer(buffer.length);
	const view = new Uint8Array(arrayBuffer);
	for (let i = 0; i < buffer.length; ++i) view[i] = buffer[i] as number;
	return arrayBuffer;
}

function toBuffer(arrayBuffer: ArrayBufferLike) {
	const buffer = Buffer.alloc(arrayBuffer.byteLength);
	const view = new Uint8Array(arrayBuffer);
	for (let i = 0; i < buffer.length; ++i) buffer[i] = view[i] as number;
	return buffer;
}

beforeAll(() => {
	vi.useFakeTimers({ now: 14e11, toFake: ["Date"] });
});

beforeEach(() => {
	vi.doUnmock("@ksuid/helpers/base62.ts");
	vi.resetModules();
});

test("array buffer values can be base62 encoded and decoded", async () => {
	const { base62, debase62 } = await runBase62Import();

	const buffer = Buffer.from([255, 254, 253, 251]);
	const arrayBuffer = toArrayBuffer(Buffer.from([255, 254, 253, 251]));
	const input = new DataView(arrayBuffer);
	const actual = debase62(base62(input));
	expect(buffer.equals(toBuffer(actual))).toBe(true);
});

test("lexographic ordering of encoded values is that of decoded values", async () => {
	const { base62 } = await runBase62Import();

	const strings = [];
	for (let i = 0; i < 256; i++) {
		const buffer = Buffer.from([0, i]);
		const s = base62(new DataView(toArrayBuffer(buffer)));
		strings[i] = "0".repeat(2 - s.length) + s;
	}

	const sorted = strings.slice().sort();
	expect(sorted).toStrictEqual(strings);
});

test("created with the current time", async () => {
	const { KSUID } = await runImport();

	const x = KSUID.random();
	expect(x.date.valueOf()).toBe(14e11);
});

test("provides the uncorrected timestamp in seconds", async () => {
	const { KSUID } = await runImport();
	vi.advanceTimersByTime(5e3);

	const x = KSUID.random();
	expect(x.timestamp * 1e3).toBe(Date.now() - 14e11);
});

test("randomAsync accepts milliseconds value", async () => {
	const { KSUID } = await runImport();
	const ms = new Date(2025, 4, 15).getTime();
	const x = await KSUID.randomAsync(ms);
	expect(x.timestamp * 1e3).toBe(ms - 14e11);
});

test("random accepts milliseconds value", async () => {
	const { KSUID } = await runImport();
	const ms = new Date(2025, 4, 15).getTime();
	const x = KSUID.random(ms);
	expect(x.timestamp * 1e3).toBe(ms - 14e11);
});

test("randomAsync accepts date value", async () => {
	const { KSUID } = await runImport();
	const d = new Date(2014, 4, 15);
	const x = await KSUID.randomAsync(d);
	expect(x.timestamp * 1e3).toBe(d.getTime() - 14e11);
});

test("random accepts date value", async () => {
	const { KSUID } = await runImport();
	const d = new Date(2014, 4, 15);
	const x = KSUID.random(d);
	expect(x.timestamp * 1e3).toBe(d.getTime() - 14e11);
});

test("encodes as a string", async () => {
	const { KSUID } = await runImport();
	const x = new KSUID(toArrayBuffer(Buffer.alloc(20)));
	const expected = "0".repeat(27);
	expect(x.string).toBe(expected);
});

test("strings are padded", async () => {
	const { KSUID } = await runImport();
	const zero = new KSUID(toArrayBuffer(Buffer.alloc(20, 0)));
	const max = new KSUID(toArrayBuffer(Buffer.alloc(20, 0xff)));
	expect(zero.length).toBe(max.length);
});

test("can parse strings", async () => {
	const { KSUID } = await runImport();
	const zero = new KSUID(toArrayBuffer(Buffer.alloc(20, 0)));
	const parsedZero = KSUID.parse("0".repeat(27));
	expect(zero.compare(parsedZero)).toBe(0);

	const max = new KSUID(toArrayBuffer(Buffer.alloc(20, 0xff)));
	const parsedMax = KSUID.parse(KSUID.MAX_STRING_ENCODED);
	expect(max.compare(parsedMax)).toBe(0);

	expect(() => KSUID.parse("123")).toThrowError(TypeError);
});

test("encode and decode", async () => {
	const { KSUID } = await runImport();
	const x = KSUID.random();
	const builtFromEncodedString = KSUID.parse(x.string);
	expect(x.compare(builtFromEncodedString)).toBe(0);
});

test("throws if called without valid buffer", async () => {
	const { KSUID } = await runImport();
	// @ts-expect-error Testing invalid input
	expect(() => new KSUID()).toThrowError(TypeError);
	// @ts-expect-error Testing invalid input
	expect(() => new KSUID("foo")).toThrowError(TypeError);
	expect(() => new KSUID(Buffer.from("foo"))).toThrowError(TypeError);
});

test("buffer accessor returns new buffers", async () => {
	const { KSUID } = await runImport();
	const initial = toArrayBuffer(randomBytes(20));
	const x = new KSUID(initial);
	expect(x.raw).not.toBe(initial);
	expect(x.raw).not.toBe(x.raw);
	expect(toBuffer(x.raw).equals(toBuffer(initial))).toBe(true);
});

test("raw accessor returns raw buffer", async () => {
	const { KSUID } = await runImport();
	const expected = Buffer.alloc(20, 0xff);
	const x = new KSUID(toArrayBuffer(expected));
	expect(toBuffer(x.raw).equals(expected)).toBe(true);
	expect(x.raw).not.toBe(x.raw);
});

test("payload accessor returns payload buffer", async () => {
	const { KSUID } = await runImport();
	const expected = Buffer.alloc(16, 0xff);
	const x = new KSUID(
		toArrayBuffer(Buffer.concat([Buffer.alloc(4), expected])),
	);
	expect(toBuffer(x.payload).equals(expected)).toBe(true);
});

test("payload accessor returns new buffers", async () => {
	const { KSUID } = await runImport();
	const expected = Buffer.alloc(16, 0xff);
	const x = new KSUID(
		toArrayBuffer(Buffer.concat([Buffer.alloc(4), expected])),
	);
	expect(x.payload).not.toBe(x.payload);
});

test("compare() returns 0 when comparing against a non-KSUID", async () => {
	const { KSUID } = await runImport();
	// @ts-expect-error Testing invalid input
	expect(KSUID.random().compare({})).toBe(0);
});

test("equals()", async () => {
	const { KSUID } = await runImport();
	const x = KSUID.random();
	const y = KSUID.random();
	expect(x.equals(x)).toBe(true);
	expect(x.equals(y)).toBe(false);
	expect(y.equals(x)).toBe(false);
	expect(x.equals(new KSUID(x.raw))).toBe(true);
	expect(new KSUID(x.raw).equals(x)).toBe(true);
});

test("toString()", async () => {
	const { KSUID } = await runImport();
	const x = KSUID.random();
	const result = /^KSUID \{ (.+?) \}$/.exec(x.toString());
	expect(KSUID.parse(result?.[1] as string).string).toBe(result?.[1]);
});

test("toJSON()", async () => {
	const { KSUID } = await runImport();
	const x = KSUID.random();
	const stringified = JSON.stringify(x);
	expect(typeof stringified).toBe("string");
	expect(KSUID.parse(JSON.parse(stringified)).string).toBe(x.string);
});

test("KSUID.random() returns a promise for a new instance", async () => {
	const { KSUID } = await runImport();
	const p = KSUID.randomAsync();
	expect(p).toBeInstanceOf(Promise);
	expect(await p).toBeInstanceOf(KSUID);
});

test("KSUID.fromParts() validators timeInMs", async () => {
	const { KSUID } = await runImport();
	let notInt = "";
	try {
		KSUID.fromParts("foo", Buffer.alloc(16));
	} catch (error) {
		if (error instanceof TypeError) notInt = error.message;
	}

	let tooEarly = "";
	try {
		KSUID.fromParts(0, Buffer.alloc(16));
	} catch (error) {
		if (error instanceof TypeError) tooEarly = error.message;
	}

	let tooLate = "";
	try {
		KSUID.fromParts(1e3 * (2 ** 32 - 1) + 14e11 + 1, Buffer.alloc(16));
	} catch (error) {
		if (error instanceof TypeError) tooLate = error.message;
	}

	expect(new Set([notInt, tooEarly, tooLate]).size).toBe(1);
	expect(notInt).toBe(
		"Valid KSUID timestamps must be in milliseconds since 1970-01-01T00:00:00Z, no earlier than 2014-05-13T16:53:20Z and no later than 2150-06-19T23:21:35Z",
	);
});

test("KSUID.fromParts() validators payload", async () => {
	const { KSUID } = await runImport();
	let notInt = "";
	try {
		// @ts-expect-error Testing invalid input
		KSUID.fromParts(Date.now(), "foo");
	} catch (error) {
		if (error instanceof TypeError) notInt = error.message;
	}

	let tooSmall = "";
	try {
		KSUID.fromParts(Date.now(), Buffer.alloc(15));
	} catch (error) {
		if (error instanceof TypeError) tooSmall = error.message;
	}

	let tooLarge = "";
	try {
		KSUID.fromParts(Date.now(), Buffer.alloc(17));
	} catch (error) {
		if (error instanceof TypeError) tooLarge = error.message;
	}

	expect(new Set([notInt, tooSmall, tooLarge]).size).toBe(1);
	expect(notInt).toBe("Valid KSUID payloads are 16 bytes");
});

test("KSUID.fromParts() returns a new instance", async () => {
	const { KSUID } = await runImport();
	const x = KSUID.fromParts(Date.now(), Buffer.alloc(16));
	expect(x).toBeInstanceOf(KSUID);
});

test("KSUID.parse() creates a new KSUID if debased byte length is not the normal byte length", async () => {
	vi.doMock("@ksuid/helpers/base62.ts", () => ({
		debase62: () => new Uint8Array(1).buffer,
	}));

	const { KSUID } = await runImport();

	const x = KSUID.parse("0".repeat(27));
	expect(x).toBeInstanceOf(KSUID);
});
