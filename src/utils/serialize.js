import escapeHtml from 'escape-html'
import { Text } from 'slate'

const serialize = node => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text).replace(/\n/g, '<br>')
    if (node.code) {
      string = `<code class="bg-zinc-900 font-firacode p-1 box-decoration-clone">${string}</code>`
    }
    if (node.bold) {
      string = `<span class="font-bold">${string}</span>`
    }
    if (node.italic) {
      string = `<span class="italic">${string}</span>`
    }
    if (node.strikethrough) {
      string = `<span class="line-through">${string}</span>`
    }
    if (node.underline) {
      string = `<span class="underline">${string}</span>`
    }
    return string
  }

  const children = node.children.map(n => serialize(n)).join('')

  switch (node.type) {
    case 'h1':
      return `<h1>${children}</h1>`
    case 'h2':
      return `<h2>${children}</h2>`
    case 'h3':
      return `<h3>${children}</h3>`       
    case 'link':
      // TODO: logic for internal links via linkType
      return node.newTab ? `<a class="underline" target="_blank" href="${escapeHtml(node.url)}">${children}</a>` : `<a class="underline" href="${escapeHtml(node.url)}">${children}</a>`
    case 'indent':
      return `<div class="pl-6">${children}</div>`
    case 'ul':
      return `<ul>${children}</ul>`
    case 'ol':
      return `<ol>${children}</ol>`
    case 'li':
      return `<li>${children}</li>`
    case 'upload':
      return `<img class="max-h-[25rem] m-auto" src=${node.value.url} alt=${node.value.title}>${children}</img>`
    case 'p':
      return `<p>${children}</p>`
    // fixes the missing 'p' type bug in slate editor
    default:
      return `<p>${children}</p>`
  }
}

export default serialize