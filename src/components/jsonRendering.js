
export const renderOptions = {
  'variable-plugin': (node, next) => {
    console.log('found: ', node)
    return `<p className='className-id' style="color:red; display:inline">${node.attrs.var.title}</p>`
  },
  p: (node, next) => {

    return `<p className='className-id'>${next(node.children)}</p>` // you will need to call next function with node children contents
    
  },
  h1: (node, next) => {
    return `<h1 className='className-id'>${next(node.children)}</h1>` // you will need to call next function with node children contents
  },
  bold: (text) => {
    return `<b>${text}</b>`
  },
  highlight: (text) => {
    return `<mark>${text}</mark>`
  },
  $default: (entry, metadata) => {
    return `<div>
        <h2>{${entry.title}}</h2>
        <p>{${entry.description}}</p>  
    </div>`
    },
  inline: {
    $default: (entry) => {
      return `<span><b>{${entry.title}}</b> - {${entry.description}}</span>`
    }
  },
  link: (entry, metadata) => {
    return `<a href="{${metadata.attributes.href}}">{${metadata.text}}</a>`
  },
  display: (asset, metadata) => {

    return `<img src="${asset.url}" alt={${JSON.stringify(metadata.attributes['asset-name'])}} />`
  },
  info: (node, next) => {
    return `<div className="tooltiptext">${next(node.children)}</div>`
  },
};