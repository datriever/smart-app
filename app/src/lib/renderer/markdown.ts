import { marked, Renderer } from 'marked'

function min(xs: number[]) {
  return xs.reduce((a, b) => Math.min(a, b), Infinity)
}

function leadingSpaces(line: string) {
  return line.length - line.trimStart().length
}

function unindent(text: string) {
  const lines = text.split('\n').filter(line => line.trim() !== '')
  const spaces = min(lines.map(leadingSpaces))
  return lines.map(line => line.slice(Math.max(spaces, leadingSpaces(line)))).join('\n')
}

const renderer = new Renderer()
const quote = '```'
renderer.code = (code, lang) => `${quote}${lang}\n${code}\n${quote}`

export function processMarkdown(content: string): string {
  const markdownTagRegex = /<markdown>([\s\S]*?)<\/markdown>/g;
  const replaced = content.replace(markdownTagRegex, (_, indentedMarkdown: string) => {
    const markdown = unindent(indentedMarkdown)
    const inner = marked(markdown, { renderer})
    return `<div class="markdown">${inner}</div>`
  });
  return replaced;
}

/** Remove empty lines. */
export function preprocessMarkdown(content: string) {
  return content.split('\n').filter(line => line.trim() !== '').join('\n')
}