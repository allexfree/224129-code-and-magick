'use strict';

(function () {

  var fragment = document.createDocumentFragment();
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var fireballColor = ['ee4830', '30a8ee', '5ce6c0', 'e848d5', 'e6e848'];

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');
  var inputFireballColor = document.querySelector('input[name="fireball-color"]');

  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    getListWizards(wizards.sort(function (left, right) {
      return getRank(right) - getRank(left);
    }));
  };

  /* Ф-ция fillElements выполняет заполнение блока элементами на основе массива wizards */
  var fillElements = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var getListWizards = function (wizards) {
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(fillElements(window.utils.getRandomArrayElement(wizards)));
    }
    similarWizardsList.appendChild(fragment);
  };

  var changeCoatsAndEyesColor = function (array, elementOne, elementTwo) {
    var color = window.utils.getRandomArrayElement(array); // в переменную передается рандомный элемент массива array
    elementOne.setAttribute('style', 'fill:' + color);
    elementTwo.setAttribute('value', color);
    coatColor = color;
    eyesColor = color;
    updateWizards();
  };

  /* Ф-ция changeFireballColor устанавливает атрибут style="background-color:..." блоку указанному в парметре elementOne и атрибут value блоку, указанному в параметре elementTwo, цвет берется из параметра array */
  var changeFireballColor = function (array, elementOne, elementTwo) {
    var color = '#' + window.utils.getRandomArrayElement(array);
    elementOne.setAttribute('style', 'background-color:' + color);
    elementTwo.setAttribute('value', color);
  };

  wizardCoat.addEventListener('click', function () {
    changeCoatsAndEyesColor(updateWizards, wizardCoat, inputCoatColor);
  });

  wizardEyes.addEventListener('click', function () {
    changeCoatsAndEyesColor(updateWizards, wizardEyes, inputEyesColor);
  });

  fireball.addEventListener('click', function () {
    changeFireballColor(fireballColor, fireball, inputFireballColor);
  });

  var onLoadHandler = function (data) {
    wizards = data;
    //getListWizards(wizards);
    updateWizards();
    console.log(wizards);
  };

  window.backend.load(onLoadHandler, window.backend.windowError);

})();
