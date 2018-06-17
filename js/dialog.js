'use strict';

(function () {

  // Объявление переменных

  var startCoords;
  var dragged;
  var shift;

  var blockSetupDialog = window.blockSetup;
  var blockUploadDialog = blockSetupDialog.querySelector('.upload');
  var artifactCell = blockSetupDialog.querySelector('.setup-artifacts-cell');
  var artifactCellImg = artifactCell.querySelector('img');


  // Вершины

  artifactCell.setAttribute('style', 'position: relative');
  artifactCellImg.setAttribute('style', 'position: absolute; z-index: 1000');
  //var top = artifactCellImg.style.top;
  console.log(artifactCellImg.getAttribute('style'));
  var left = artifactCellImg.style.left;

  // Определение ф-ций

  /*Ф-ция blockUploadMousedownHandler */
  var blockUploadMousedownHandler = function (evt) {
    evt.preventDefault();
    startCoords = {x: evt.clientX, y: evt.clientY};
    dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      shift = {x: startCoords.x - moveEvt.clientX, y: startCoords.y - moveEvt.clientY};
      startCoords = {x: moveEvt.clientX, y: moveEvt.clientY};

      blockSetupDialog.style.top = (blockSetupDialog.offsetTop - shift.y) + 'px';
      blockSetupDialog.style.left = (blockSetupDialog.offsetLeft - shift.x) + 'px';
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

  blockUploadDialog.addEventListener('mousedown', blockUploadMousedownHandler);
  artifactCellImg.addEventListener('mousedown', starImgMousedownHandler);

  // Вызов ф-ций

})();
