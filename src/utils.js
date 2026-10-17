export function formatJSON(input, indent = 2) { return JSON.stringify(JSON.parse(input), null, indent); }
export function minifyJSON(input) { return JSON.stringify(JSON.parse(input)); }
export function encodeBase64(input) {
  const bytes = new TextEncoder().encode(input);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
export function decodeBase64(input) {
  const binary = atob(input.trim());
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}
export function slugify(input) {
  return input.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
export function countText(input) {
  const trimmed = input.trim();
  return { characters: [...input].length, words: trimmed ? trimmed.split(/\s+/u).length : 0, lines: input ? input.split(/\r\n|\r|\n/).length : 0 };
}
export function formatTimestamp(input) {
  const date = new Date(input.trim());
  if (Number.isNaN(date.getTime())) throw new Error('Invalid date or timestamp');
  return date.toISOString();
}