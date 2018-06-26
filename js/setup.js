'use strict';
(function () {

  // Объявление переменных

  /* var names = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizards = []; */


  // Вершины

  var fragment = document.createDocumentFragment();
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

  /* Ф-ция fillElements выполняет заполнение блока элементами на основе массива wizards */
  var fillElements = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };


  // Вызов ф-ций

  /* for (var i = 0; i < 6; i++) {
    wizards.push({name: names[i], surname: surnames[i], eyesColor: eyesColor[i], coatColor: coatColor[i]});
  } // формирование массива wizards */

  var getListWizards = function (wizards) {
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(fillElements(window.utils.getRandomArrayElement(wizards)));
    }
    similarWizardsList.appendChild(fragment);
  };

  showElements();

  window.backend.load(getListWizards, window.backend.windowError);

  window.setup = {
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
  };

})();
