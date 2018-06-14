'use strict';

// Объявление переменных

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var names = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green', ''];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizards = [];
var blockSetup = document.querySelector('.setup');
var blockSetupClose = document.querySelector('.setup-close');
var blockSetupOpenIcon = document.querySelector('.setup-open-icon');
var buttonSubmit = document.querySelector('.setup-submit');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

console.dir(wizardEyes);

// Вершины
var similarWizardsList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


// Определение ф-ций

/* Ф-ция showElements показывает элементы блоков, у котороых проставлен class="hidden и атрибут style="display: none" */
var showElements = function () {
  var hiddenElements = document.querySelectorAll('.setup, .setup-similar');
  for (var i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.remove('hidden');
  }
  var elementHiddenAttribute = document.querySelector('#similar-wizard-template');
  elementHiddenAttribute.removeAttribute('style', 'display: none');
};

/* Ф-ция getRandomArrayIndex получает случайный индекс элемента массива, указанного в парметре array*/
var getRandomArrayIndex = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

/* Ф-ция fillElements выполняет заполнение блока элементами на основе массива wizards */
var fillElements = function (element) {
  element.querySelector('.setup-similar-label').textContent = (getRandomArrayIndex(wizards).name + getRandomArrayIndex(wizards).surname);
  element.querySelector('.wizard-coat').style.fill = getRandomArrayIndex(wizards).coatColor;
  element.querySelector('.wizard-eyes').style.fill = getRandomArrayIndex(wizards).eyesColor;
};

/* Ф-ция addElements добавляет заполненые DOM-элементы в блок .setup-similar-list*/
var addElements = function (element) {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(element);
  similarWizardsList.appendChild(fragment);
};

var closeDialogWindow = function () {
  blockSetup.classList.add('hidden');
};

var openDialogWindow = function () {
  blockSetup.classList.remove('hidden');
};

var sendData = function () {
  buttonSubmit.setAttribute('type', 'submit');
};

var changeCoatColor = function () {
  for (var i = 0; i < coatColor.length; i++) {
    wizardCoat.setAttribute('style', 'fill:' + getRandomArrayIndex(coatColor));
  }
};

var changeEyesColor = function () {
  for (var i = 0; i < eyesColor.length; i++) {
    wizardEyes.setAttribute('style', 'fill:' + getRandomArrayIndex(eyesColor));
  }
};

var getRandomMinMax = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var changeFireballColor = function () {
  fireball.setAttribute('style', 'background-color: #' + getRandomMinMax(10, 99).toString() + getRandomMinMax(10, 99).toString() + getRandomMinMax(10, 99).toString());
}

// Вызов ф-ций

for (var i = 0; i < 6; i++) {
  wizards.push({name: names[i], surname: surnames[i], eyesColor: eyesColor[i], coatColor: coatColor[i]});
} // формирование масиива wizards

for (i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  addElements(wizardElement);
  fillElements(wizardElement);
}

showElements();

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeDialogWindow();
  }
});

blockSetupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openDialogWindow();
  }
});

buttonSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    sendData();
  }
});

blockSetupClose.addEventListener('click', function () {
  closeDialogWindow();
});

blockSetupOpenIcon.addEventListener('click', function () {
  openDialogWindow();
});

buttonSubmit.addEventListener('click', function () {
  sendData();
});

wizardCoat.addEventListener('click', function() {
  changeCoatColor();
});

wizardEyes.addEventListener('click', function() {
  changeEyesColor();
});

fireball.addEventListener('click', function() {
  changeFireballColor();
});
