'use strict';

(function () {

  var blockSetupDialog = window.blockSetup;
  var blockUploadDialog = blockSetupDialog.querySelector('.upload');
  var artifactCell = blockSetupDialog.querySelector('.setup-artifacts-cell');
  var artifactCellImg = artifactCell.querySelector('img');

  artifactCell.setAttribute('style', 'position: relative');
  artifactCellImg.setAttribute('style', 'position: absolute; z-index: 1000');

  blockUploadDialog.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {x: evt.clientX, y: evt.clientY};
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {x: startCoords.x - moveEvt.clientX, y: startCoords.y - moveEvt.clientY
      };

      startCoords = {x: moveEvt.clientX, y: moveEvt.clientY
      };

      blockSetupDialog.style.top = (blockSetupDialog.offsetTop - shift.y) + 'px';
      blockSetupDialog.style.left = (blockSetupDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          blockUploadDialog.removeEventListener('click', onClickPreventDefault)
        };
        blockUploadDialog.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

////////////////////////////////////////////////////////////////////////

artifactCellImg.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoordsStar = {x: evt.clientX, y: evt.clientY};

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shiftStar = {
      x: startCoordsStar.x - moveEvt.clientX,
      y: startCoordsStar.y - moveEvt.clientY
    };


    startCoordsStar = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    artifactCellImg.style.top = (artifactCellImg.offsetTop - shiftStar.y) + 'px';
    artifactCellImg.style.left = (artifactCellImg.offsetLeft - shiftStar.x) + 'px';

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

})();







/*(function () {
var blockSetupDialog = window.blockSetup;
var blockUploadDialog = blockSetupDialog.querySelector('.upload');
var artifactCell = blockSetupDialog.querySelector('.setup-artifacts-cell');
console.log(artifactCell);
var artifactCellImg = artifactCell.querySelector('img');
console.log(artifactCellImg);

artifactCell.setAttribute('style', 'position: relative');
artifactCellImg.setAttribute('style', 'position: absolute; z-index: 1000');

blockUploadDialog.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {x: evt.clientX, y: evt.clientY};

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    blockSetupDialog.style.top = (blockSetupDialog.offsetTop - shift.y) + 'px';
    blockSetupDialog.style.left = (blockSetupDialog.offsetLeft - shift.x) + 'px';

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        blockUploadDialog.removeEventListener('click', onClickPreventDefault)
      };
      blockUploadDialog.addEventListener('click', onClickPreventDefault);
    }

  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});




////////////////////////////////////////////////////////////////////////

artifactCellImg.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoordsStar = {x: evt.clientX, y: evt.clientY};
  console.log('This init ' + startCoordsStar.x, startCoordsStar.y);

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shiftStar = {
      x: startCoordsStar.x - moveEvt.clientX,
      y: startCoordsStar.y - moveEvt.clientY
    };


    startCoordsStar = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    console.log('This shift ' + startCoordsStar.x, startCoordsStar.y);

    artifactCellImg.style.top = (artifactCellImg.offsetTop - shiftStar.y) + 'px';
    artifactCellImg.style.left = (artifactCellImg.offsetLeft - shiftStar.x) + 'px';

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

})();*/
