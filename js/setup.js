'use strict';

// Объявление переменных

var NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green', ''];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS = [];
var fragment = document.createDocumentFragment();
var similarWizardsList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < 6; i++) {
  var descriptionWizard = {};
  var names = NAMES[i];
  var surnames = SURNAMES[i];
  var eyesColor = EYES_COLOR[i];
  var coatColor = COAT_COLOR[i];
  descriptionWizard.names = names;
  descriptionWizard.surname = surnames;
  descriptionWizard.eyesColor = eyesColor;
  descriptionWizard.coatColor = coatColor;
  WIZARDS.push(descriptionWizard);
} // формирование масиива WIZARDS

// Вершины


// Определение ф-ций

/* Ф-ция removeElements показывает элементы блоков, у котороых проставлен class="hidden и атрибут style="display: none" */
var removeElements = function () {
  var elementHiddenClass = document.querySelectorAll('.hidden');
  var elementHiddenAttribute = document.querySelector('#similar-wizard-template');
  elementHiddenClass[0].classList.remove('hidden');
  elementHiddenClass[1].classList.remove('hidden');
  elementHiddenAttribute.removeAttribute('style', 'display: none');
};

/* Ф-ция getRandom возвращает случайное число от 0 до длины массива WIZARDS */
var getRandom = function () {
  return Math.floor(Math.random() * WIZARDS.length);
};

/* Ф-ция fillElements выполняет заполнение блока элементами на основе массива WIZARDS */
var fillElements = function () {
  wizardElement.querySelector('.setup-similar-label').textContent = (WIZARDS[getRandom()].names + WIZARDS[getRandom()].surname);
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARDS[getRandom()].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARDS[getRandom()].eyesColor;
}

/* Ф-ция addElements добавдяет заполненые DOM-элементы в блок .setup-similar-list*/
var addElements = function () {
  fragment.appendChild(wizardElement);
  similarWizardsList.appendChild(fragment);
}

// Вызов ф-ций

removeElements();

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  fillElements();
  addElements();
}
