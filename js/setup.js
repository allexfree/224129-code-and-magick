'use strict';
(function () {

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

  showElements();

  window.setup = {
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
  };

})();
