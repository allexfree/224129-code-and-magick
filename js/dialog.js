'use strict';

(function () {

  // Объявление переменных

  var fireballColor = ['ee4830', '30a8ee', '5ce6c0', 'e848d5', 'e6e848'];

  var startCoords;
  var dragged;
  var shift;


  // Вершины

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

  var blockUploadDialog = blockSetup.querySelector('.upload');
  var setupInputName = blockSetup.querySelector('.setup-user-name');
  var artifactCell = blockSetup.querySelector('.setup-artifacts-cell');
  var artifactCellImg = artifactCell.querySelector('img');

  artifactCell.setAttribute('style', 'position: relative');
  artifactCellImg.setAttribute('style', 'position: absolute; z-index: 1000');


  // Определение ф-ций

  /* Ф-ция getRandomArrayElement получает случайный элемент массива, указанного в парметре array */
  var getRandomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  /* Ф-ция closeDialogWindow добавляет класс hidden блоку .setup и устанавливает атрибуты style top/left блокам artifactCellImg и .setup*/
  var closeDialogWindow = function () {
    blockSetup.classList.add('hidden');
    artifactCellImg.style.top = '0';
    artifactCellImg.style.left = '0';
    blockSetup.style.top = '80px';
    blockSetup.style.left = '50%';
  };

  /* Ф-ция openDialogWindow удаляет класс hidden у блока .setup */
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

  var blockUploadMousedownHandler = function (evt) {
    evt.preventDefault();
    startCoords = {x: evt.clientX, y: evt.clientY};
    dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      shift = {x: startCoords.x - moveEvt.clientX, y: startCoords.y - moveEvt.clientY};
      startCoords = {x: moveEvt.clientX, y: moveEvt.clientY};

      blockSetup.style.top = (blockSetup.offsetTop - shift.y) + 'px';
      blockSetup.style.left = (blockSetup.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          blockUploadDialog.removeEventListener('click', onClickPreventDefault)
        };
        blockUploadDialog.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  var starImgMousedownHandler = function (evt) {
    evt.preventDefault();
    startCoords = {x: evt.clientX, y: evt.clientY};

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      shift = {x: startCoords.x - moveEvt.clientX, y: startCoords.y - moveEvt.clientY};
      startCoords = {x: moveEvt.clientX, y: moveEvt.clientY};

      artifactCellImg.style.top = (artifactCellImg.offsetTop - shift.y) + 'px';
      artifactCellImg.style.left = (artifactCellImg.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };


  // Обработчики событий

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE && evt.target !== setupInputName) {
      closeDialogWindow();
    }
  });

  blockSetupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      closeDialogWindow();
    }
  });

  blockSetupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      openDialogWindow();
    }
  });

  buttonSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
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

  blockUploadDialog.addEventListener('mousedown', blockUploadMousedownHandler);
  artifactCellImg.addEventListener('mousedown', starImgMousedownHandler);

})();
