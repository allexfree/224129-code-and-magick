'use strict';

// Определение констант

var NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS = [
{
  name: NAMES[0],
  surname: SURNAMES[0],
  eyesColor: 'black',
  coatColor: 'rgb(101, 137, 164)'
},
{
  name: NAMES[1],
  surname: SURNAMES[1],
  eyesColor: 'red',
  coatColor: 'rgb(241, 43, 107)'
},
{
  name: NAMES[2],
  surname: SURNAMES[2],
  eyesColor: 'blue',
  coatColor: 'rgb(146, 100, 161)'
},
{
  name: NAMES[3],
  surname: SURNAMES[3],
  eyesColor: 'yellow',
  coatColor: 'rgb(56, 159, 117)'
},
{
  name: NAMES[4],
  surname: SURNAMES[4],
  eyesColor: 'green',
  coatColor: 'rgb(215, 210, 55)'
},
{
  name: NAMES[5],
  surname: SURNAMES[5],
  eyesColor: 'green',
  coatColor: 'rgb(0, 0, 0)'
}
];

// Вершины

// Определение ф-ций

/* Ф-ция removeElements удаляет class="hidden и атрибут style="display: none" */
var removeElements = function () {
  var elementHiddenClass = document.querySelectorAll('.hidden');
  var elementHiddenAttribute = document.querySelector('#similar-wizard-template');
  elementHiddenClass[0].classList.remove('hidden');
  elementHiddenClass[1].classList.remove('hidden');
  elementHiddenAttribute.removeAttribute('style', 'display: none');
}


// Вызов ф-ций

removeElements();

var similarWizardsList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < NAMES.length / 2; i++) {
  var random = Math.floor(Math.random() * NAMES.length);
  console.log(random);
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = (NAMES[random] + SURNAMES[random]);
  similarWizardsList.appendChild(wizardElement);

  for (var j = 0; j < WIZARDS.length; j++) {
    random = Math.floor(Math.random() * WIZARDS.length);
    wizardElement.querySelector('.wizard-coat').style.fill = WIZARDS[random].coatColor;
  }

  for (var z = 0; z < WIZARDS.length; z++) {
    wizardElement.querySelector('.wizard-eyes').style.fill = WIZARDS[random].eyesColor;
  }
}

