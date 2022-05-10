const keysObj = {
  Backquote: {
    en: { shiftOff: '`', shiftOn: '~' },
    ru: { shiftOff: 'ё', shiftOn: 'Ё' },
    type: 'standart',
  },
  Digit1: {
    en: { shiftOff: '1', shiftOn: '!' },
    ru: { shiftOff: '1', shiftOn: '!' },
    type: 'standart',
  },
  Digit2: {
    en: { shiftOff: '2', shiftOn: '@' },
    ru: { shiftOff: '2', shiftOn: '"' },
    type: 'standart',
  },
  Digit3: {
    en: { shiftOff: '3', shiftOn: '#' },
    ru: { shiftOff: '3', shiftOn: '№' },
    type: 'standart',
  },
  Digit4: {
    en: { shiftOff: '4', shiftOn: '$' },
    ru: { shiftOff: '4', shiftOn: ';' },
    type: 'standart',
  },
  Digit5: {
    en: { shiftOff: '5', shiftOn: '%' },
    ru: { shiftOff: '5', shiftOn: '%' },
    type: 'standart',
  },
  Digit6: {
    en: { shiftOff: '6', shiftOn: '^' },
    ru: { shiftOff: '6', shiftOn: ':' },
    type: 'standart',
  },
  Digit7: {
    en: { shiftOff: '7', shiftOn: '&' },
    ru: { shiftOff: '7', shiftOn: '?' },
    type: 'standart',
  },
  Digit8: {
    en: { shiftOff: '8', shiftOn: '*' },
    ru: { shiftOff: '8', shiftOn: '*' },
    type: 'standart',
  },
  Digit9: {
    en: { shiftOff: '9', shiftOn: '(' },
    ru: { shiftOff: '9', shiftOn: '(' },
    type: 'standart',
  },
  Digit0: {
    en: { shiftOff: '0', shiftOn: ')' },
    ru: { shiftOff: '0', shiftOn: ')' },
    type: 'standart',
  },
  Minus: {
    en: { shiftOff: '-', shiftOn: '_' },
    ru: { shiftOff: '-', shiftOn: '_' },
    type: 'standart',
  },
  Equal: {
    en: { shiftOff: '=', shiftOn: '+' },
    ru: { shiftOff: '=', shiftOn: '+' },
    type: 'standart',
  },
  Backspace: {
    text: 'Backspace',
    type: 'backspace',
    size: 'large',
  },
  Tab: {
    text: 'Tab',
    type: 'tab',
    size: 'medium',
  },
  KeyQ: {
    en: { shiftOff: 'q', shiftOn: 'Q' },
    ru: { shiftOff: 'й', shiftOn: 'Й' },
    type: 'standart',
  },
  KeyW: {
    en: { shiftOff: 'w', shiftOn: 'W' },
    ru: { shiftOff: 'ц', shiftOn: 'Ц' },
    type: 'standart',
  },
  KeyE: {
    en: { shiftOff: 'e', shiftOn: 'E' },
    ru: { shiftOff: 'у', shiftOn: 'У' },
    type: 'standart',
  },
  KeyR: {
    en: { shiftOff: 'r', shiftOn: 'R' },
    ru: { shiftOff: 'к', shiftOn: 'К' },
    type: 'standart',
  },
  KeyT: {
    en: { shiftOff: 't', shiftOn: 'T' },
    ru: { shiftOff: 'е', shiftOn: 'Е' },
    type: 'standart',
  },
  KeyY: {
    en: { shiftOff: 'y', shiftOn: 'Y' },
    ru: { shiftOff: 'н', shiftOn: 'Н' },
    type: 'standart',
  },
  KeyU: {
    en: { shiftOff: 'u', shiftOn: 'U' },
    ru: { shiftOff: 'г', shiftOn: 'Г' },
    type: 'standart',
  },
  KeyI: {
    en: { shiftOff: 'i', shiftOn: 'I' },
    ru: { shiftOff: 'ш', shiftOn: 'Ш' },
    type: 'standart',
  },
  KeyO: {
    en: { shiftOff: 'o', shiftOn: 'O' },
    ru: { shiftOff: 'щ', shiftOn: 'Щ' },
    type: 'standart',
  },
  KeyP: {
    en: { shiftOff: 'p', shiftOn: 'P' },
    ru: { shiftOff: 'з', shiftOn: 'З' },
    type: 'standart',
  },
  BracketLeft: {
    en: { shiftOff: '[', shiftOn: '{' },
    ru: { shiftOff: 'х', shiftOn: 'Х' },
    type: 'standart',
  },
  BracketRight: {
    en: { shiftOff: ']', shiftOn: '}' },
    ru: { shiftOff: 'ъ', shiftOn: 'Ъ' },
    type: 'standart',
  },
  IntlBackslash: {
    en: { shiftOff: '\\', shiftOn: '|' },
    ru: { shiftOff: '\\', shiftOn: '/' },
    type: 'standart',
  },
  Delete: {
    text: 'Del',
    type: 'delete',
    size: 'medium',
  },
  CapsLock: {
    text: 'Caps Lock',
    type: 'capsLock',
    size: 'large',
  },
  KeyA: {
    en: { shiftOff: 'a', shiftOn: 'A' },
    ru: { shiftOff: 'ф', shiftOn: 'Ф' },
    type: 'standart',
  },
  KeyS: {
    en: { shiftOff: 's', shiftOn: 'S' },
    ru: { shiftOff: 'ы', shiftOn: 'Ы' },
    type: 'standart',
  },
  KeyD: {
    en: { shiftOff: 'd', shiftOn: 'D' },
    ru: { shiftOff: 'в', shiftOn: 'В' },
    type: 'standart',
  },
  KeyF: {
    en: { shiftOff: 'f', shiftOn: 'F' },
    ru: { shiftOff: 'а', shiftOn: 'А' },
    type: 'standart',
  },
  KeyG: {
    en: { shiftOff: 'g', shiftOn: 'G' },
    ru: { shiftOff: 'п', shiftOn: 'П' },
    type: 'standart',
  },
  KeyH: {
    en: { shiftOff: 'h', shiftOn: 'H' },
    ru: { shiftOff: 'р', shiftOn: 'Р' },
    type: 'standart',
  },
  KeyJ: {
    en: { shiftOff: 'j', shiftOn: 'J' },
    ru: { shiftOff: 'о', shiftOn: 'О' },
    type: 'standart',
  },
  KeyK: {
    en: { shiftOff: 'k', shiftOn: 'K' },
    ru: { shiftOff: 'л', shiftOn: 'Л' },
    type: 'standart',
  },
  KeyL: {
    en: { shiftOff: 'l', shiftOn: 'L' },
    ru: { shiftOff: 'д', shiftOn: 'Д' },
    type: 'standart',
  },
  Semicolon: {
    en: { shiftOff: ';', shiftOn: ':' },
    ru: { shiftOff: 'ж', shiftOn: 'Ж' },
    type: 'standart',
  },
  Quote: {
    en: { shiftOff: '\'', shiftOn: '"' },
    ru: { shiftOff: 'э', shiftOn: 'Э' },
    type: 'standart',
  },
  Enter: {
    text: 'Enter',
    type: 'enter',
    size: 'large',
  },
  ShiftLeft: {
    text: 'Shift',
    type: 'shift',
    size: 'large',
  },
  KeyZ: {
    en: { shiftOff: 'z', shiftOn: 'Z' },
    ru: { shiftOff: 'я', shiftOn: 'Я' },
    type: 'standart',
  },
  KeyX: {
    en: { shiftOff: 'x', shiftOn: 'X' },
    ru: { shiftOff: 'ч', shiftOn: 'Ч' },
    type: 'standart',
  },
  KeyC: {
    en: { shiftOff: 'c', shiftOn: 'C' },
    ru: { shiftOff: 'с', shiftOn: 'С' },
    type: 'standart',
  },
  KeyV: {
    en: { shiftOff: 'v', shiftOn: 'V' },
    ru: { shiftOff: 'м', shiftOn: 'М' },
    type: 'standart',
  },
  KeyB: {
    en: { shiftOff: 'b', shiftOn: 'B' },
    ru: { shiftOff: 'и', shiftOn: 'И' },
    type: 'standart',
  },
  KeyN: {
    en: { shiftOff: 'n', shiftOn: 'N' },
    ru: { shiftOff: 'т', shiftOn: 'Т' },
    type: 'standart',
  },
  KeyM: {
    en: { shiftOff: 'm', shiftOn: 'M' },
    ru: { shiftOff: 'ь', shiftOn: 'Ь' },
    type: 'standart',
  },
  Comma: {
    en: { shiftOff: ',', shiftOn: '<' },
    ru: { shiftOff: 'б', shiftOn: 'Б' },
    type: 'standart',
  },
  Period: {
    en: { shiftOff: '.', shiftOn: '>' },
    ru: { shiftOff: 'ю', shiftOn: 'Ю' },
    type: 'standart',
  },
  Slash: {
    en: { shiftOff: '/', shiftOn: '?' },
    ru: { shiftOff: '.', shiftOn: ',' },
    type: 'standart',
  },
  ArrowUp: {
    en: { shiftOff: '↑', shiftOn: '↑' },
    ru: { shiftOff: '↑', shiftOn: '↑' },
    type: 'arrows',
    text: '↑',
  },
  ShiftRight: {
    text: 'Shift',
    type: 'shift',
    size: 'large',
  },
  ControlLeft: {
    text: 'Ctrl',
    type: 'controlLeft',
    size: 'medium',
  },
  MetaLeft: {
    text: 'Win',
    type: 'functional',
  },
  AltLeft: {
    text: 'Alt',
    type: 'altLeft',
  },
  Space: {
    type: 'space',
    size: 'xxl',
  },
  AltRight: {
    text: 'Alt',
    type: 'altRight',
  },
  ArrowLeft: {
    en: { shiftOff: '←', shiftOn: '←' },
    ru: { shiftOff: '←', shiftOn: '←' },
    type: 'standart',
    text: '←',
  },
  ArrowDown: {
    en: { shiftOff: '↓', shiftOn: '↓' },
    ru: { shiftOff: '↓', shiftOn: '↓' },
    type: 'arrows',
    text: '↓',
  },
  ArrowRight: {
    en: { shiftOff: '→', shiftOn: '→' },
    ru: { shiftOff: '→', shiftOn: '→' },
    type: 'arrows',
    text: '→',
  },
  ControlRight: {
    text: 'Ctrl',
    type: 'controlRight',
    size: 'ctrl-right',
  },
};

export default keysObj;
