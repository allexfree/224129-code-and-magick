'use strict';

// Объявление переменных

var names = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green', ''];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizards = [];

for (var i = 0; i < 6; i++) {
  wizards.push({name: names[i], surname: surnames[i], eyesColor: eyesColor[i], coatColor: coatColor[i]});
} // формирование масиива WIZARDS


// Вершины
var fragment = document.createDocumentFragment();
var similarWizardsList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


// Определение ф-ций

/* Ф-ция showElements показывает элементы блоков, у котороых проставлен class="hidden и атрибут style="display: none" */
var showElements = function () {
  var hiddenElements = document.querySelectorAll('.setup, .setup-similar');
  for (i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.remove('hidden');
  }
  var elementHiddenAttribute = document.querySelector('#similar-wizard-template');
  elementHiddenAttribute.removeAttribute('style', 'display: none');
};

/* Ф-ция getRandomArrayElement получает случайный элемент массива указанного в парметре array*/
var getRandomArrayElement = function (array) {
  return Math.floor(Math.random() * array);
};

/* Ф-ция fillElements выполняет заполнение блока элементами на основе массива wizards */
var fillElements = function (element) {
  element.querySelector('.setup-similar-label').textContent = (wizards[getRandomArrayElement(wizards.length)].name + wizards[getRandomArrayElement(wizards.length)].surname);
  element.querySelector('.wizard-coat').style.fill = wizards[getRandomArrayElement(wizards.length)].coatColor;
  element.querySelector('.wizard-eyes').style.fill = wizards[getRandomArrayElement(wizards.length)].eyesColor;
};

/* Ф-ция addElements добавляет заполненые DOM-элементы в блок .setup-similar-list*/
var addElements = function (element) {
  fragment.appendChild(element);
  similarWizardsList.appendChild(fragment);
};


// Вызов ф-ций

showElements();

for (i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  fillElements(wizardElement);
  addElements(wizardElement);
}
