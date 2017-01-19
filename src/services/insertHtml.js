export default function insertHtml(text) {
  if (text) {
    return { __html: text };
  }
  return { __html: '' };
}
