import keysObj from './keys.js';

const keyArray = Object.keys(keysObj);

const settings = {
  language: 'en',

  caps: false,
};

const createKeys = () => {
  const fragment = document.createDocumentFragment();

  const lang = settings.language;

  keyArray.forEach((key) => {
    const keyBtn = document.createElement('div');
    keyBtn.classList.add('key-btn');
    const keyItem = keysObj[key];

    keyBtn.setAttribute('data-code', key);
    keyBtn.setAttribute('data-type', keyItem.type);

    const size = keyItem.size ? keyItem.size : 'small';
    keyBtn.classList.add(`${size}-btn`);

    if (keyItem.type === 'standart') {
      keyBtn.textContent = keyItem[lang].shiftOff;
    } else {
      keyBtn.textContent = keyItem.text;
    }

    if (keyItem.text === 'Enter') {
      keyBtn.classList.add('enter');
    }
    if (keyItem.text === 'Caps Lock') {
      keyBtn.classList.add('capslock');
    }
    if (keyItem.text === 'Shift') {
      keyBtn.classList.add('shift');
    }
    if (keyItem.text === 'Ctrl') {
      keyBtn.classList.add('ctrl');
    }
    fragment.append(keyBtn);
  });
  return fragment;
};

const createKeyboard = () => {
  const main = document.createElement('main');
  const wrapper = document.createElement('div');
  const textarea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  const title = document.createElement('h1');

  main.classList.add('main');
  wrapper.classList.add('wrapper');
  textarea.classList.add('textarea');
  textarea.setAttribute('type', 'text');
  textarea.autofocus = true;
  keyboard.classList.add('keyboard');
  title.innerText = 'The keyboard was created on Windows. \n To switch the language, press left ctrl + alt';

  document.body.append(main);
  main.append(wrapper);
  wrapper.append(textarea, keyboard, title);

  const keys = createKeys();
  keyboard.append(keys);
};

window.onload = () => {
  createKeyboard();
};
