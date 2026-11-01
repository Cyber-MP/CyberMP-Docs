/** TweakDBID matches in-game Vehicle.* values (CRC32 + length << 32). CName/ResRef are FNV-1a64. */

const FNV_OFFSET = 0xcbf29ce484222325n;
const FNV_PRIME = 0x100000001b3n;
const U64 = 0xffffffffffffffffn;

function utf8(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

/** Same as the server `hashes::FNV1a64(const char*)`: bytes >= 0x80 are sign-extended (signed `char`). */
export function fnv1a64(str: string): bigint {
  let hash = FNV_OFFSET;
  for (const byte of utf8(str)) {
    hash ^= byte >= 0x80 ? BigInt(byte) | 0xffffffffffffff00n : BigInt(byte);
    hash = (hash * FNV_PRIME) & U64;
  }
  return hash;
}

export function crc32(str: string): number {
  let crc = 0xffffffff;
  for (const byte of utf8(str)) {
    crc ^= byte;
    for (let i = 0; i < 8; i++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

/** CName / appearance names. */
export function hashCname(str: string): bigint {
  return fnv1a64(str);
}

/** TweakDB record: CRC32 in the low 32 bits, name length in UTF-8 bytes in the high 32. */
export function hashTweakdbid(str: string): bigint {
  if (!str) return 0n;
  return BigInt(crc32(str)) + (BigInt(utf8(str).length) << 32n);
}

/** Archive path (`.ent`). Hash the string as typed — use `\\` like the game. */
export function hashResref(str: string): bigint {
  return fnv1a64(str);
}

export type HasherKind = 'cname' | 'tweakdbid' | 'resref';

export function classify(str: string): HasherKind {
  const s = str.trim();
  if (s.includes('\\') || s.includes('/')) return 'resref';
  if (/^[A-Za-z][A-Za-z0-9_]*\./.test(s)) return 'tweakdbid';
  return 'cname';
}

export function hashAll(str: string) {
  return {
    cname: hashCname(str),
    tweakdbid: hashTweakdbid(str),
    resref: hashResref(str),
    guess: classify(str),
  };
}

export function formatHash(value: bigint): { dec: string; hex: string } {
  return { dec: value.toString(10), hex: '0x' + value.toString(16) };
}
