'use strict';

(function () {

  var CLOUD_WIDTH = 420; // константа ширины облака
  var CLOUD_HEIGHT = 270; // константа высоты облака
  var INITIAL_CLOUD_X = 100; // константа начала отрисовки облака по горизонтали
  var INITIAL_CLOUD_Y = 10; // константа начала отрисовки облака по вертикали
  var CONGRATS_X = 120; // константа начала отрисовки текста поздравления по горизонтали
  var CONGRATS_Y = 40; // константа начала отрисовки текста поздравления по вертикали
  var GAP = 10; // константа отступа
  var GAP_COLUMN = 50; // константа отступа между колонками
  var BAR_WIDTH = 40; // константа высоты колонки
  var barHeight = CLOUD_HEIGHT - CONGRATS_Y * 3; // высота гистограммы

  /* Функция renderCloud отрисовывает на канвасе форму облака. Позволяет менять форму облака так, чтобы одновременно менялось и облако и его тень.
  Содержит параметры:
    ctx - контекст отрисовки;
    x - координата начала облака по горизонтали;
    y - координата начала облака во вертикали;
    color - цвет облака. */

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  /* Функция getColumnsColor предназначена для изменения насыщенности синего цвета по цветовой схеме RGB с альфа каналом */
  var getColumnsColor = function () {
    var RED = 0;
    var GREEN = 0;
    var ALPHA = 1;
    var blue = Math.floor(Math.random() * 255);

    return 'rgba(' + RED + ',' + GREEN + ',' + blue + ',' + ALPHA + ')';
  };

  /* Функция renderStatistics являться методом объекта window и будет вызываться каждый раз когда игрок проходит уровень (попадает в забор).
  Содержит параметры:
    ctx -  канвас на котором рисуется игра;
    playerd — массив, с именами игроков прошедших уровень. Имя самого игрока. Массив имён формируется случайным образом;
    times — массив, по длине совпадающий с массивом names. Массив содержит время прохождения уровня соответствующего игрока из массива names. Время прохождения уровня задано в миллисекундах.

    Для изменения направления отрисовки столбцов используется умножение на -1. */
  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, INITIAL_CLOUD_X + GAP, INITIAL_CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.5)');
    renderCloud(ctx, INITIAL_CLOUD_X, INITIAL_CLOUD_Y, '#ffffff');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000000';

    ctx.fillText('Ура Вы победили!', CONGRATS_X, CONGRATS_Y);
    ctx.fillText('Список результатов:', CONGRATS_X, CONGRATS_Y + GAP * 2);

    var maxTime = window.utils.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getColumnsColor();
      ctx.fillRect(CONGRATS_X + GAP * 2 + (BAR_WIDTH + GAP_COLUMN) * i, 250, BAR_WIDTH, ((barHeight * times[i]) / maxTime) * -1);
      ctx.fillStyle = '#000000';
      ctx.fillText(players[i], CONGRATS_X + GAP * 2 + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_HEIGHT);
      ctx.fillText(Math.round(times[i]), CONGRATS_X + GAP * 2 + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_HEIGHT - CONGRATS_Y + GAP - (barHeight * times[i] / maxTime));
    }
  };

})();
