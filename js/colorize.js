'use strict';

(function () {

  var fireballColor = ['ee4830', '30a8ee', '5ce6c0', 'e848d5', 'e6e848'];

  var fireball = document.querySelector('.setup-fireball-wrap');
  var inputFireballColor = document.querySelector('input[name="fireball-color"]');

  /* Ф-ция changeFireballColor устанавливает атрибут style="background-color:..." блоку указанному в парметре elementOne и атрибут value блоку, указанному в параметре elementTwo, цвет берется из параметра array */
  var changeFireballColor = function (array, elementOne, elementTwo) {
    var color = '#' + window.utils.getRandomArrayElement(array);
    elementOne.setAttribute('style', 'background-color:' + color);
    elementTwo.setAttribute('value', color);
  };

  fireball.addEventListener('click', function () {
    changeFireballColor(fireballColor, fireball, inputFireballColor);
  });

})();
