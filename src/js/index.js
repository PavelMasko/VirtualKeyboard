import keysIndeteficator from './keys.js';

const keyArray = Object.keys(keysIndeteficator);
const main = document.createElement('main');
const wrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const title = document.createElement('h1');
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
    const keyItem = keysIndeteficator[key];

    keyBtn.setAttribute('data-code', key);
    keyBtn.setAttribute('data-id', keyItem.id);

    const size = keyItem.size ? keyItem.size : 'small';
    keyBtn.classList.add(`${size}-btn`);

    if (keyItem.id === 'small') {
      keyBtn.textContent = keyItem[lang].btnDn;
    } else {
      keyBtn.textContent = keyItem.text;
    }

    if (keyItem.text === 'Enter') {
      keyBtn.classList.add('enter');
    }
    if (keyItem.text === 'Caps Lock') {
      keyBtn.classList.add('capslock', 'function-btn');
    }
    if (keyItem.text === 'Shift') {
      keyBtn.classList.add('function-btn');
    }
    if (keyItem.text === 'Ctrl') {
      keyBtn.classList.add('function-btn');
    }
    if (keyItem.text === 'Alt') {
      keyBtn.classList.add('function-btn');
    }
    if (keyItem.text === 'Del') {
      keyBtn.classList.add('function-btn');
    }
    if (keyItem.text === 'Tab') {
      keyBtn.classList.add('function-btn');
    }
    if (keyItem.text === 'Backspace') {
      keyBtn.classList.add('function-btn');
    }
    fragment.append(keyBtn);
  });
  return fragment;
};

const toUpperCase = (smallBtn) => {
  const lang = settings.language;
  smallBtn.forEach((item) => {
    const { code } = item.dataset;
    const letter = item;
    if (settings.caps) {
      letter.textContent = keysIndeteficator[code][lang].btnUp.toLowerCase();
    } else {
      letter.textContent = keysIndeteficator[code][lang].btnUp;
    }
  });
};

const toLowerCase = (smallBtn) => {
  const lang = settings.language;
  smallBtn.forEach((item) => {
    const { code } = item.dataset;
    const letter = item;
    if (settings.caps) {
      letter.textContent = keysIndeteficator[code][lang].btnDn.toUpperCase();
    } else {
      letter.textContent = keysIndeteficator[code][lang].btnDn;
    }
  });
};

const onActiveShift = (shifts, smallBtn) => {
  shifts.forEach((shift) => {
    shift.addEventListener('mousedown', () => {
      shift.classList.add('active');
      toUpperCase(smallBtn);
    });

    shift.addEventListener('mouseup', () => {
      shift.classList.remove('active');
      toLowerCase(smallBtn);
    });

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.code === shift.dataset.code) {
        shift.classList.add('active');
        toUpperCase(smallBtn);
      }
    });
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.code === shift.dataset.code) {
        shift.classList.remove('active');
        toLowerCase(smallBtn);
      }
    });
  });
};

const toggleCapsLock = (smallBtn) => {
  settings.caps = !settings.caps;
  smallBtn.forEach((item) => {
    const letter = item;
    if (settings.caps) {
      letter.textContent = letter.textContent.toUpperCase();
    } else {
      letter.textContent = letter.textContent.toLowerCase();
    }
  });
};

const onActiveCapsLock = (capsLock, smallBtn) => {
  capsLock.addEventListener('mousedown', () => {
    capsLock.classList.add('pressed');
    capsLock.classList.toggle('active');
    toggleCapsLock(smallBtn);
  });
  capsLock.addEventListener('mouseup', () => {
    capsLock.classList.remove('pressed');
  });

  let isPressed = false;
  document.addEventListener('keydown', (e) => {
    if (e.code === 'CapsLock') {
      if (!isPressed) {
        capsLock.classList.add('pressed');
        capsLock.classList.toggle('active');
        toggleCapsLock(smallBtn);
        isPressed = true;
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === 'CapsLock') {
      capsLock.classList.remove('pressed');
      isPressed = false;
    }
  });
};

const toggleLanguage = (smallBtn) => {
  const lang = settings.language === 'en' ? 'ru' : 'en';

  smallBtn.forEach((item) => {
    const { code } = item.dataset;
    const letter = item;
    if (settings.caps) {
      letter.textContent = keysIndeteficator[code][lang].btnDn.toUpperCase();
    } else {
      letter.textContent = keysIndeteficator[code][lang].btnDn;
    }
  });
  if (localStorage.getItem('language')) {
    localStorage.language = lang;
  } else {
    localStorage.setItem('language', lang);
  }
  settings.language = lang;
};

const changeLanguage = (ctrl, alt, smallBtn) => {
  const btnCodes = [ctrl.dataset.code, alt.dataset.code];
  const activeBtns = new Set();

  document.addEventListener('keydown', (e) => {
    activeBtns.add(e.code);

    for (let i = 0; i < btnCodes.length; i += 1) {
      if (!activeBtns.has(btnCodes[i])) return;
    }
    activeBtns.clear();
    toggleLanguage(smallBtn);
  });

  document.addEventListener('keyup', (e) => {
    activeBtns.delete(e.code);
  });
};

const onBtnDown = (textareaElememt, elem) => {
  const { id } = elem.dataset;
  const textareaElem = textareaElememt;

  const excretion = textareaElem.selectionStart;
  const endExcretion = textareaElem.selectionEnd;
  const elemLength = textareaElem.value.length;
  const elemBefore = textareaElem.value.slice(0, excretion);
  const elemAfter = textareaElem.value.slice(endExcretion);

  if (id === 'small') {
    textarea.value = elemBefore + elem.textContent + elemAfter;
    textarea.focus();
    const position = excretion + elem.textContent.length;
    textarea.setSelectionRange(position, position);
  }

  if (id === 'backspace') {
    if (excretion !== endExcretion) {
      textarea.value = textarea.value.slice(0, excretion) + elemAfter;
      textarea.focus();
      textarea.setSelectionRange(excretion, excretion);
    } else if (excretion === 0) {
      return;
    } else {
      textarea.value = textarea.value.slice(0, excretion - 1) + elemAfter;
      textarea.focus();
      textarea.setSelectionRange(excretion - 1, excretion - 1);
    }
  }

  if (id === 'tab') {
    const insertText = '    ';
    textarea.value = elemBefore + insertText + elemAfter;
    textarea.focus();
    const position = excretion + insertText.length;
    textarea.setSelectionRange(position, position);
  }

  if (id === 'delete') {
    if (excretion === elemLength) {
      return;
    }
    if (excretion !== endExcretion) {
      textarea.value = textarea.value.slice(0, excretion) + elemAfter;
      textarea.focus();
      textarea.setSelectionRange(excretion, excretion);
    } else {
      textarea.value = elemBefore + textarea.value.slice(endExcretion + 1);
      textarea.focus();
      textarea.setSelectionRange(excretion, excretion);
    }
  }

  if (id === 'enter') {
    textarea.value = `${elemBefore}\n${elemAfter}`;
    textarea.focus();
    textarea.setSelectionRange(excretion + '\n'.length, excretion + '\n'.length);
  }

  if (id === 'space') {
    textarea.value = `${elemBefore} ${elemAfter}`;
    textarea.focus();
    textarea.setSelectionRange(excretion + 1, excretion + 1);
  }

  if (id === 'arrows') {
    textarea.value = elemBefore + elem.textContent + elemAfter;
    textarea.focus();
    const position = excretion + elem.textContent.length;
    textarea.setSelectionRange(position, position);
  }
};

const eventMouse = () => {
  wrapper.addEventListener('mousedown', (e) => {
    if (e.target.closest('.key-btn')) {
      const activeElem = e.target.closest('.key-btn');
      activeElem.classList.add('pressed');
      onBtnDown(textarea, activeElem);
    }
  });
  wrapper.addEventListener('mouseup', (e) => {
    if (e.target.closest('.key-btn')) {
      const activeElem = e.target.closest('.key-btn');
      activeElem.classList.remove('pressed');
      textarea.focus();
    }
  });
};

const eventKeyboard = () => {
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const activeBtn = document.querySelector(`[data-code="${e.code}"]`);
    if (activeBtn) {
      activeBtn.classList.add('pressed');
      onBtnDown(textarea, activeBtn);
    }
  });
  document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const activeBtn = document.querySelector(`[data-code="${e.code}"]`);
    if (activeBtn) {
      activeBtn.classList.remove('pressed');
    }
  });
};

const createKeyboard = () => {
  main.classList.add('main');
  wrapper.classList.add('wrapper');
  textarea.classList.add('textarea');
  textarea.setAttribute('id', 'text');
  textarea.autofocus = true;
  keyboard.classList.add('keyboard');
  title.innerText = 'Created on Windows. \n To switch the language, press left ctrl + alt';

  document.body.append(main);
  main.append(wrapper);
  wrapper.append(textarea, keyboard, title);
  keyboard.append(createKeys());

  const smallBtn = document.querySelectorAll('[data-id="small"]');
  const shiftBtns = document.querySelectorAll('[data-id="shift"]');
  const capsLockBtn = document.querySelector('[data-id="capsLock"]');
  const ctrlLeftBtn = document.querySelector('[data-id="controlLeft"]');
  const altLeftBtn = document.querySelector('[data-id="altLeft"]');
  eventMouse();
  eventKeyboard();
  onActiveShift(shiftBtns, smallBtn);
  onActiveCapsLock(capsLockBtn, smallBtn);
  changeLanguage(ctrlLeftBtn, altLeftBtn, smallBtn);
};

const getLocalStorageData = () => {
  if (localStorage.getItem('language')) {
    settings.language = localStorage.getItem('language');
  }
};

window.onload = () => {
  getLocalStorageData();
  createKeyboard();
};
