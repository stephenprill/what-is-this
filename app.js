function header(message) {
  console.log('%c' + message, 'color: maroon; font-weight: bold; border-bottom: 1px solid #efefef; margin-bottom: .5em;')
}

function print(message) {
  console.log('%c' + message, 'color: #666;')
}

function code(message) {
  console.log('%c' + message, 'font-style: italic; margin-left: 2em;')
}

function question(message) {
  console.log('%c\n\n' + message, 'font-size: 1.5em; color: blue; display: block; padding-top: .5em;')
}
