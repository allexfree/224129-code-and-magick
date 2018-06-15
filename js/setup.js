'use strict';

// Объявление переменных

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var names = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var fireballColor = ['ee4830', '30a8ee', '5ce6c0', 'e848d5', 'e6e848'];
var wizards = [];

// Вершины
var fragment = document.createDocumentFragment();
var similarWizardsList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var blockSetup = document.querySelector('.setup');
var blockSetupClose = blockSetup.querySelector('.setup-close');
var blockSetupOpenIcon = document.querySelector('.setup-open-icon');
var buttonSubmit = document.querySelector('.setup-submit');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var inputCoatColor = document.querySelector('input[name="coat-color"]');
var inputEyesColor = document.querySelector('input[name="eyes-color"]');
var inputFireballColor = document.querySelector('input[name="fireball-color"]');


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

/* Ф-ция getRandomArrayElement получает случайный элемент массива, указанного в парметре array */
var getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

/* Ф-ция fillElements выполняет заполнение блока элементами на основе массива wizards */
var fillElements = function (element) {
  element.querySelector('.setup-similar-label').textContent = (getRandomArrayElement(wizards).name + getRandomArrayElement(wizards).surname);
  element.querySelector('.wizard-coat').style.fill = getRandomArrayElement(wizards).coatColor;
  element.querySelector('.wizard-eyes').style.fill = getRandomArrayElement(wizards).eyesColor;
};

/* Ф-ция addElements добавляет заполненые DOM-элементы в блок .setup-similar-list */
var addElements = function (element) {
  fragment.appendChild(element);
};

/* Ф-ция closeDialogWindow добавляет класс hidden блоку .setup */
var closeDialogWindow = function () {
  blockSetup.classList.add('hidden');
};

/* Ф-ция closeDialogWindow удаляет класс hidden у блока .setup */
var openDialogWindow = function () {
  blockSetup.classList.remove('hidden');
};

/* Ф-ция setSubmitAttribute добавляет атрибут type="submit" кнопке button */
var setSubmitAttribute = function () {
  buttonSubmit.setAttribute('type', 'submit');
};

/* Ф-ция changeCoatsAndEyesColor устанавливает атрибут style="fill:..." блоку указанному в парметре elementOne и атрибут value блоку, указанному в параметре elementTwo, цвет берется из параметра array */
var changeCoatsAndEyesColor = function (array, elementOne, elementTwo) {
  var color = getRandomArrayElement(array); // в переменную передается рандомный элемент массива array
  elementOne.setAttribute('style', 'fill:' + color);
  elementTwo.setAttribute('value', color);
};

/* Ф-ция changeFireballColor устанавливает атрибут style="background-color:..." блоку указанному в парметре elementOne и атрибут value блоку, указанному в параметре elementTwo, цвет берется из параметра array */
var changeFireballColor = function (array, elementOne, elementTwo) {
  var color = '#' + getRandomArrayElement(array);
  elementOne.setAttribute('style', 'background-color:' + color);
  elementTwo.setAttribute('value', color);
};

// Обработчики событий

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeDialogWindow();
  }
});

blockSetupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
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
    setSubmitAttribute();
  }
});

blockSetupClose.addEventListener('click', function () {
  closeDialogWindow();
});

blockSetupOpenIcon.addEventListener('click', function () {
  openDialogWindow();
});

buttonSubmit.addEventListener('click', function () {
  setSubmitAttribute();
});

wizardCoat.addEventListener('click', function () {
  changeCoatsAndEyesColor(coatColor, wizardCoat, inputCoatColor);
});

wizardEyes.addEventListener('click', function () {
  changeCoatsAndEyesColor(eyesColor, wizardEyes, inputEyesColor);
});

fireball.addEventListener('click', function () {
  changeFireballColor(fireballColor, fireball, inputFireballColor);
});

// Вызов ф-ций

for (var i = 0; i < 6; i++) {
  wizards.push({name: names[i], surname: surnames[i], eyesColor: eyesColor[i], coatColor: coatColor[i]});
} // формирование массива wizards

for (i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  fillElements(wizardElement);
  addElements(wizardElement);
}

similarWizardsList.appendChild(fragment);

showElements();
