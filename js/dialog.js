'use strict';

(function () {

  // Объявление переменных

  var startCoords;
  var dragged;
  var shift;


  // Вершины

  var blockSetup = document.querySelector('.setup');
  var blockSetupClose = blockSetup.querySelector('.setup-close');
  var blockSetupOpenIcon = document.querySelector('.setup-open-icon');
  var buttonSubmit = document.querySelector('.setup-submit');

  var blockUploadDialog = blockSetup.querySelector('.upload');
  var setupInputName = blockSetup.querySelector('.setup-user-name');
  var artifactCell = blockSetup.querySelector('.setup-artifacts-cell');
  var artifactCellImg = artifactCell.querySelector('img');

  artifactCell.setAttribute('style', 'position: relative');
  artifactCellImg.setAttribute('style', 'position: absolute; z-index: 1000');


  // Определение ф-ций

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
        var onClickPreventDefault = function (e) {
          e.preventDefault();
          blockUploadDialog.removeEventListener('click', onClickPreventDefault);
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
    if (evt.keyCode === window.utils.ESC_KEYCODE && evt.target !== setupInputName) {
      closeDialogWindow();
    }
  });

  blockSetupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      closeDialogWindow();
    }
  });

  blockSetupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      openDialogWindow();
    }
  });

  buttonSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
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

  blockUploadDialog.addEventListener('mousedown', blockUploadMousedownHandler);
  artifactCellImg.addEventListener('mousedown', starImgMousedownHandler);

})();
