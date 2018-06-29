'use strict';

(function () {

  var fragment = document.createDocumentFragment();
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');

  var wizards = [];
  var coatColor;
  var eyesColor;

  var lastTimeout;

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
    similarWizardsList.textContent = '';
    for (var i = 0; i < window.utils.MAX_AMOUNT_SIMILAR_WIZRDS; i++) {
      fragment.appendChild(fillElements(wizards[i]));
    }
    similarWizardsList.appendChild(fragment);
  };

  var changeCoatsAndEyesColor = function (array, elementOne, elementTwo) {
    var color = window.utils.getRandomArrayElement(array); // в переменную передается рандомный элемент массива array
    elementOne.setAttribute('style', 'fill:' + color);
    elementTwo.setAttribute('value', color);
    coatColor = inputCoatColor.value;
    eyesColor = inputEyesColor.value;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      updateWizards();
    }, window.utils.DEBOUNCE_INTERVAL);
  };

  var onLoadHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  wizardCoat.addEventListener('click', function () {
    changeCoatsAndEyesColor(window.setup.coatColor, wizardCoat, inputCoatColor);
  });

  wizardEyes.addEventListener('click', function () {
    changeCoatsAndEyesColor(window.setup.eyesColor, wizardEyes, inputEyesColor);
  });

  window.backend.load(onLoadHandler, window.backend.windowError);

})();
