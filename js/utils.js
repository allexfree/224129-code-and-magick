'use strict';

(function () {

  /* Функция getMaxElement предназначена для нахождения максимального элемента в массиве */
  var getMaxElement = function (arr) {
    var maxElement = arr[0]; // маркер максимального элемента (элемент с index = 0)
    var i;

    for (i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getRandomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.utils = {
    getMaxElement: getMaxElement,
    getRandomArrayElement: getRandomArrayElement,
    MAX_AMOUNT_SIMILAR_WIZRDS: 4,
    ENTER_KEYCODE: 13,
    ESC_KEYCODE: 27,
    DEBOUNCE_INTERVAL: 500
  };

})();
