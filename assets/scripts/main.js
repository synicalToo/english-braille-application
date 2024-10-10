import {
  braille_key_to_ueb_lower_alphabets,
  braille_key_to_ueb_upper_alphabets,
  braille_key_to_ueb_numbers,
  braille_key_to_ueb_unicode,
  locale_en,
} from "./constants.js";

import { Braille_line } from "./classes/braille_line.js";
import { Explosion } from "./classes/explosion.js";

window.onload = function () {
  const canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  cw = context.canvas.clientWidth;
  ch = context.canvas.clientHeight;

  if (window.speechSynthesis) {
    let voices = [];
    let voice = document.getElementById("voice");
    function setVoices() {
      if (voices.length) return;
      voices = speechSynthesis.getVoices();
      if (!voices.length) return;
      voices
        .filter((v) => v.lang.startsWith("ja"))
        .forEach((v) => {
          let opt = document.createElement("option");
          opt.text = v.name;
          opt.voice = v;
          voice.appendChild(opt);
        });
    }
    speechSynthesis.addEventListener("voiceschanged", setVoices);
    setVoices();
  }

  // 画像のデータを事前に読み込む
  imgBraillerPaper.src = "../../assets/images/brailler_paper.png";
  imgBrick.src = "../../assets/images/brick.jpg";

  //canvas.addEventListener('mouseover', onMouseOver, false);
  //canvas.addEventListener('mouseout', onMouseOut, false);

  // 設定が変更された場合のイベントリスナーを登録
  var elm = document.getElementById("voice");
  elm.addEventListener("change", setCookies);
  elm = document.getElementById("voiceSwitch");
  elm.addEventListener("change", setCookies);
  elm = document.getElementById("taskList");
  elm.addEventListener("change", setCookies);
  elm = document.getElementById("soundEffect");
  elm.addEventListener("change", setCookies);
  var interval_radios = document.getElementsByName("braille_interval");
  for (let i = 0; i < interval_radios.length; i++) {
    interval_radios[i].addEventListener("change", setCookies);
  }
  var maxtime_radios = document.getElementsByName("game_time");
  for (let i = 0; i < maxtime_radios.length; i++) {
    maxtime_radios[i].addEventListener("change", setCookies);
  }
  elm = document.getElementById("lowVision");
  elm.addEventListener("change", setCookiesReload);

  // 設定の「音声」は、画面ロード時に動的に作成しているため
  // 画面ロード時に読み込んだCookieの値をセットできない。
  // そこで、音声の選択肢(SELECT)の変更を監視し、変更されたら
  // Cookieから読み込んだ値をセットするようにしている。
  const selectVoice = document.getElementById("voice");
  const config = { childList: true };

  // 変更されたときに実行されるコールバック関数
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        for (let i = 0; i < selectVoice.options.length; i++) {
          if (speechName === selectVoice.options[i].value) {
            selectVoice.options[i].selected = true;
            break;
          }
        }
      }
    }
  };

  observer = new MutationObserver(callback);

  // 変更の監視を開始
  observer.observe(selectVoice, config);

  // Cookieから設定値を取得する
  getCookies();

  main();
};

const free_maxchar = 17;
const min_moveX = 110;
const min_moveY = 150;
const max_moveX = 650;
const max_moveY = 530;
const center_moveX = 380;
const uttr = new SpeechSynthesisUtterance("");
var animaid;
let voiceSwitch;
let lowVision;
let timeToNextBraille = 0;
let brailleInterval = 3000;
let maxTime = 60;
let taskNum = 0;
let speechVoice;
let speechName;
let soundEffectName = 0;
let observer;
let lastTime = 0;
var imgBrailler = new Image();
var imgBraillerPaper = new Image();
var imgBrick = new Image();
var screen_name;
var readytime = 3;
var course;
var score;
var correct;
var mistake;
var skipped;
var pos = 0;
var abcPos = 0;
var braille_char;
var random;
var inmode;
var inEnglish = false;
var inKakomis = new Array(8); // 0:（, 1:〈, 2:《, 3:「, 4:【, 5:『, 6:｛, 7:［
var is_top = true;
var is_hint;
var time_remaining;
var readytimer;
var gametimer;
var keyState = new Array();
var keybuf = new Array();
var dot = new Array();
var log_mode = new Array();
var log_kakomi = new Array(18);
var log_braille = new Array();
var log_jp = new Array();
var memo_braille = Array();
var memo_jp = Array();
var brailleLines = Array();
var explosions = Array();
var memo_line;
var context;
var context2;
var cw;
var ch;
var isGaming = false;

// ページが読み込まれた時に最初に実行される
// 画像データを最初に読み込んでおくことで描画がスムーズになる
window.onload = function () {
  // キャンバスのコンテキストを作成
  var canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  cw = context.canvas.clientWidth;
  ch = context.canvas.clientHeight;

  // ゲーム設定の音声一覧HTMLを作成
  if (window.speechSynthesis) {
    let voices = [];
    let voice = document.getElementById("voice");
    function setVoices() {
      if (voices.length) return;
      voices = speechSynthesis.getVoices();
      if (!voices.length) return;
      voices
        .filter((v) => v.lang.startsWith("ja"))
        .forEach((v) => {
          let opt = document.createElement("option");
          opt.text = v.name;
          opt.voice = v;
          voice.appendChild(opt);
        });
    }
    speechSynthesis.addEventListener("voiceschanged", setVoices);
    setVoices();
  }

  // 画像のデータを事前に読み込む
  imgBraillerPaper.src = "../../assets/images/brailler_paper.png";
  imgBrick.src = "../../assets/images/brick.jpg";

  //canvas.addEventListener('mouseover', onMouseOver, false);
  //canvas.addEventListener('mouseout', onMouseOut, false);

  // 設定が変更された場合のイベントリスナーを登録
  var elm = document.getElementById("voice");
  elm.addEventListener("change", setCookies);
  elm = document.getElementById("voiceSwitch");
  elm.addEventListener("change", setCookies);
  elm = document.getElementById("taskList");
  elm.addEventListener("change", setCookies);
  elm = document.getElementById("soundEffect");
  elm.addEventListener("change", setCookies);
  var interval_radios = document.getElementsByName("braille_interval");
  for (let i = 0; i < interval_radios.length; i++) {
    interval_radios[i].addEventListener("change", setCookies);
  }
  var maxtime_radios = document.getElementsByName("game_time");
  for (let i = 0; i < maxtime_radios.length; i++) {
    maxtime_radios[i].addEventListener("change", setCookies);
  }
  elm = document.getElementById("lowVision");
  elm.addEventListener("change", setCookiesReload);

  // 設定の「音声」は、画面ロード時に動的に作成しているため
  // 画面ロード時に読み込んだCookieの値をセットできない。
  // そこで、音声の選択肢(SELECT)の変更を監視し、変更されたら
  // Cookieから読み込んだ値をセットするようにしている。
  const selectVoice = document.getElementById("voice");
  const config = { childList: true };

  // 変更されたときに実行されるコールバック関数
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        for (let i = 0; i < selectVoice.options.length; i++) {
          if (speechName === selectVoice.options[i].value) {
            selectVoice.options[i].selected = true;
            break;
          }
        }
      }
    }
  };

  // コールバック関数に結びつけられたオブザーバーのインスタンスを生成
  observer = new MutationObserver(callback);

  // 変更の監視を開始
  observer.observe(selectVoice, config);

  // Cookieから設定値を取得する
  getCookies();

  main();
};

// Cookieから設定を読み込み、HTMLに反映する
function getCookies() {
  // cookieからの読み込み
  let cookies = document.cookie;
  let array = cookies.split(";");
  for (var i = 0; i < array.length; i++) {
    var content = array[i].split("=");
    if (content[0].trim() === "lowVision") {
      if (content[1] == "true") {
        lowVision = true;
      } else {
        lowVision = false;
      }
    } else if (content[0].trim() === "voiceSwitch") {
      if (content[1] == "true") {
        voiceSwitch = true;
      } else {
        voiceSwitch = false;
      }
    } else if (content[0].trim() === "voice") {
      speechName = decodeURIComponent(content[1]);
    } else if (content[0].trim() === "brailleInterval") {
      brailleInterval = Number(content[1]);
    } else if (content[0].trim() === "maxTime") {
      maxTime = Number(content[1]);
    } else if (content[0].trim() === "taskList") {
      taskNum = Number(content[1]);
    } else if (content[0].trim() === "soundEffect") {
      soundEffectName = content[1];
    }
  }
  // HTMLへの反映（音声はコールバック関数で反映）
  document.getElementById("lowVision").checked = lowVision;
  document.getElementById("voiceSwitch").checked = voiceSwitch;
  var radio_intervals = document.getElementsByName("braille_interval");
  for (let i = 0; i < radio_intervals.length; i++) {
    if (brailleInterval == radio_intervals[i].value) {
      radio_intervals[i].checked = true;
      break;
    }
  }
  var radio_gametimes = document.getElementsByName("game_time");
  for (let i = 0; i < radio_gametimes.length; i++) {
    if (maxTime == radio_gametimes[i].value) {
      radio_gametimes[i].checked = true;
      break;
    }
  }
  var select_task = document.getElementById("taskList");
  for (let i = 0; i < select_task.options.length; i++) {
    if (taskNum == select_task.options[i].value) {
      select_task.options[i].selected = true;
      break;
    }
  }
  var effect = document.getElementById("soundEffect");
  for (let i = 0; i < effect.options.length; i++) {
    if (soundEffectName == effect.options[i].value) {
      effect.options[i].selected = true;
      break;
    }
  }
}

// 設定値をCookieに保存する
function setCookies() {
  getSettings();
  if (navigator.cookieEnabled) {
    document.cookie = "voiceSwitch=" + encodeURIComponent(voiceSwitch);
    document.cookie = "voice=" + encodeURIComponent(speechName);
    document.cookie = "lowVision=" + encodeURIComponent(lowVision);
    document.cookie = "brailleInterval=" + encodeURIComponent(brailleInterval);
    document.cookie = "maxTime=" + encodeURIComponent(maxTime);
    document.cookie = "taskList=" + encodeURIComponent(taskNum);
    document.cookie = "soundEffect=" + encodeURIComponent(soundEffectName);
  }
}

// ロービジョンモードが変更された場合だけリロードする関数
function setCookiesReload() {
  if (navigator.cookieEnabled) {
    lowVision = document.getElementById("lowVision").checked;
    document.cookie = "lowVision=" + encodeURIComponent(lowVision);
  }
  window.location.reload();
}

// メイン画面（トップメニュー）の表示
function main() {
  screen_name = screenName.menu;
  isGaming = false;
  clearAll();

  // タイトル表示
  context.font = 'bold 32pt "メイリオ"';
  if (lowVision) {
    context.fillStyle = "white";
  } else {
    context.fillStyle = colorPalette.gray4;
  }
  var title = locale_en.main_title;
  var tw = context.measureText(title).width;
  context.fillText(title, cw / 2 - tw / 2, 80);

  // 点字タイプライター画像表示
  imgBrailler.src = "../../assets/images/perkins_brailler.png";
  imgBrailler.onload = () => {
    context.drawImage(imgBrailler, cw / 2 - 464 / 2, ch / 2 - 328 / 2, 464, 328);
  };

  // ボタン表示（フリー入力）
  if (lowVision) {
    drawButton(square_freeTyping, locale_en.main_btnFree, colorPalette.yellow2, "black");
  } else {
    drawButton(square_freeTyping, locale_en.main_btnFree, colorPalette.red2, "white");
  }

  // ボタン表示（ゲーム）
  if (lowVision) {
    drawButton(square_typingGame, locale_en.main_btnGame, "white", "black");
  } else {
    drawButton(square_typingGame, locale_en.main_btnGame, colorPalette.gray2, colorPalette.gray4);
  }

  // 著作権表示
  showCopyright();

  // キャンバスの背景色設定
  var canvas = document.getElementById("canvas");
  if (lowVision) {
    canvas.style.backgroundColor = "#000000";
  } else {
    canvas.style.backgroundColor = "#FFFFFF";
  }

  // スタイルシートとBootstrapのダークモードを動的に変更
  var html = document.getElementsByTagName("html");
  var elem = document.getElementById("style_sheet");
  if (lowVision) {
    html[0].dataset["bsTheme"] = "dark";
    elem.href = "../../assets/styles/style_dark.css";
  } else {
    html[0].dataset["bsTheme"] = "light";
    elem.href = "../../assets/styles/style.css";
  }

  // マウスクリックのイベントハンドラー登録
  canvas.addEventListener("click", onClick, false);
}

// ボタン表示関数
function drawButton(square, name, bg_color, text_color) {
  context.fillStyle = bg_color;
  context.strokeStyle = bg_color;
  fillRoundRect(context, square.x, square.y, square.w, square.h, square.h / 2);
  context.font = 'bold 16pt "メイリオ"';
  context.fillStyle = text_color;
  var tw = context.measureText(name).width;
  var th = context.measureText(name).actualBoundingBoxAscent + context.measureText(name).actualBoundingBoxDescent;
  context.fillText(name, square.x + square.w / 2 - tw / 2, square.y + (square.h - th) / 2 + th);
}

function onClick(e) {
  var canvas = document.getElementById("canvas");
  const rect = canvas.getBoundingClientRect();
  const point = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
  const hit_freeTyping =
    square_freeTyping.x <= point.x &&
    point.x <= square_freeTyping.x + square_freeTyping.w &&
    square_freeTyping.y <= point.y &&
    point.y <= square_freeTyping.y + square_freeTyping.h;
  const hit_typingGame =
    square_typingGame.x <= point.x &&
    point.x <= square_typingGame.x + square_typingGame.w &&
    square_typingGame.y <= point.y &&
    point.y <= square_typingGame.y + square_typingGame.h;
  const hit_freeBack =
    square_freeBack.x <= point.x &&
    point.x <= square_freeBack.x + square_freeBack.w &&
    square_freeBack.y <= point.y &&
    point.y <= square_freeBack.y + square_freeBack.h;
  const hit_gameCancel =
    square_gameCancel.x <= point.x &&
    point.x <= square_gameCancel.x + square_gameCancel.w &&
    square_gameCancel.y <= point.y &&
    point.y <= square_gameCancel.y + square_gameCancel.h;
  const hit_finishRetry =
    square_finishRetry.x <= point.x &&
    point.x <= square_finishRetry.x + square_finishRetry.w &&
    square_finishRetry.y <= point.y &&
    point.y <= square_finishRetry.y + square_finishRetry.h;
  const hit_finishBack =
    square_finishBack.x <= point.x &&
    point.x <= square_finishBack.x + square_finishBack.w &&
    square_finishBack.y <= point.y &&
    point.y <= square_finishBack.y + square_finishBack.h;
  if (hit_freeTyping && screen_name == screenName.menu) {
    course = 0;
    is_hint = false;
    freeTypingStart();
  }
  if ((hit_typingGame && screen_name == screenName.menu) || (hit_finishRetry && screen_name == screenName.finish)) {
    course = 1;
    is_hint = true;
    lessonStart();
  }
  if (hit_freeBack && screen_name == screenName.free) {
    main();
  }
  if (hit_finishBack && screen_name == screenName.finish) {
    main();
  }
  if (hit_gameCancel && screen_name == screenName.game1) {
    document.getElementById("cancelaudio").play();
    clearInterval(gametimer);
    cancelAnimationFrame(animaid);
    gameEndProcessing();
    main();
  }
}

//function onMouseMove(e) { }
function freeTypingStart() {
  screen_name = screenName.free;
  inmode = "かな";
  memo_line = 0;
  pos = 0;
  is_top = true;
  inEnglish = false;
  for (var i = 0; i < log_kakomi.length; i++) {
    log_kakomi[i] = new Array(8);
    for (var j = 0; j < 8; j++) {
      log_kakomi[i][j] = false;
    }
  }
  for (var i = 0; i < inKakomis.length; i++) {
    inKakomis[i] = false;
  }
  observer.disconnect();
  clearAll();
  clearKeyState();
  getSettings();
  setSpeech();
  drawVirtualBraille();
}

function drawVirtualBraille() {
  // キャンバスの背景色設定
  var canvas = document.getElementById("canvas");
  if (lowVision) {
    canvas.style.backgroundColor = "#000000";
  } else {
    canvas.style.backgroundColor = "#FFFFFF";
  }

  // 画面タイトル表示
  context.font = 'bold 32pt "メイリオ"';
  if (lowVision) {
    context.fillStyle = "white";
  } else {
    context.fillStyle = colorPalette.gray4;
  }
  var title = locale_en.free_title;
  var tw = context.measureText(title).width;
  context.fillText(title, cw / 2 - tw / 2, 80);

  // 点字タイプライター画像表示
  context.drawImage(imgBraillerPaper, 10, 100, cw - 20, 290);

  // 戻るボタン表示
  if (lowVision) {
    drawButton(square_freeBack, locale_en.free_btnBack, "white", "black");
  } else {
    drawButton(square_freeBack, locale_en.free_btnBack, colorPalette.gray2, colorPalette.gray4);
  }

  // 入力領域の下線を表示
  context.lineWidth = 2;
  drawLine(context, 60, ch - 140, cw - 60, ch - 140, 3, colorPalette.gray3);

  // カーソル表示
  showCursor();

  // 入力符号を示すフッターを表示
  showFooter();

  // 著作権を表示
  showCopyright();
}

function lessonStart() {
  isGaming = true;
  observer.disconnect();
  clearAll();
  clearKeyState();
  getSettings();
  if (soundEffectName != "none") {
    document.getElementById("areyoureadyaudio").play();
  }
  time_remaining = maxTime;
  readytime = 1; // TODO: CHANGE BACK TO 3
  readytimer = setInterval(function () {
    countdown123();
  }, 1000);
}

function countdown123() {
  if (soundEffectName != "none") {
    document.getElementById("countdownaudio").play();
  }
  clearAll();
  //drawFrame();
  context.font = 'bold 48pt "メイリオ"';
  if (lowVision) {
    context.fillStyle = "white";
  } else {
    context.fillStyle = colorPalette.gray4;
  }
  context.fillText(readytime, context.canvas.clientWidth / 2 - 24, context.canvas.clientHeight / 2 + 24);
  readytime--;
  if (readytime < 0) {
    clearAll();
    clearInterval(readytimer);
    gameStart();
  }
}

function gameStart() {
  screen_name = screenName.game1;
  score = 0.0;
  mistake = 0;
  correct = 0;
  skipped = 0;
  //showProgress();
  //putScore();
  if (screen_name == screenName.game1) showABC();
  if (screen_name == screenName.game2) showTask();
  gametimer = setInterval(function () {
    countdownTimer();
  }, 100); // TODO: CHANGE BACK TO 1000
}

function countdownTimer() {
  //showProgress();
  //putScore();
  time_remaining--;
  if (time_remaining <= 0) {
    clearInterval(gametimer);
    finish();
  }
}

function putScore() {
  // スコアを計算
  if (correct == 0 && mistake == 0) {
    score = 0;
  } else {
    score = Math.floor(Math.pow(correct, 2) * Math.pow(correct / (correct + mistake + skipped), 5));
  }
  //context.clearRect(cw - 150, 10, 147, 30);
  // スコア表示領域描画
  if (lowVision) {
    context.fillStyle = "rgba(0, 0, 0, 0.8)";
    context.strokeStyle = "rgba(0, 0, 0, 0.8)";
  } else {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
  }
  fillRoundRect(context, cw - 160, 10, 150, 30, 5);
  // スコアを表示
  context.font = 'normal 12pt "メイリオ"';
  context.fillStyle = "white";
  context.fillText("Score : " + score + " points", context.canvas.clientWidth - 150, 30);
}

function showProgress() {
  if (lowVision) {
    context.fillStyle = "rgba(0, 0, 0, 0.8)";
    context.strokeStyle = "rgba(0, 0, 0, 0.8)";
  } else {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
  }
  fillRoundRect(context, 110, 10, 500, 30, 5);
  var w = 400;
  var h = 20;
  var x = cw / 2 - w / 2;
  var y = 15;
  var rate = time_remaining / maxTime;
  context.fillStyle = colorPalette.gray1;
  context.fillRect(x, y, w, h);
  if (time_remaining >= 30) {
    context.fillStyle = colorPalette.gray3;
  } else if (time_remaining < 10) {
    if (lowVision) {
      context.fillStyle = colorPalette.yellow2;
    } else {
      context.fillStyle = colorPalette.red2;
    }
  } else {
    if (lowVision) {
      context.fillStyle = colorPalette.yellow1;
    } else {
      context.fillStyle = colorPalette.red1;
    }
  }
  context.fillRect(x, y, w * rate, h);
  context.font = 'normal 16pt "メイリオ"';
  context.fillStyle = "white";
  context.fillText("⏱", 120, 32);
  context.font = 'normal 12pt "メイリオ"';
  var m = Math.floor(time_remaining / 60);
  var remainder = time_remaining % 60;
  var str = m + ":" + remainder.toString().padStart(2, "0");
  var sw = context.measureText(str).width;
  context.fillText(str, 188 - sw, 32);
  //context.clearRect(130, 5, 70, 30);
  //context.fillText(time_remaining + "秒", 188 - sw, 30);
  //context.fillText(time_remaining + " 秒", x + (w * rate) / 2 - sw / 2, 30);
}

function drawFrame() {
  context.strokeStyle = colorPalette.gray3;
  context.lineWidth = 3;
  strokeRoundRect(context, 0, 0, cw, ch, 10);
}

function showABC() {
  inmode = "かな";
  clearBody();
  setSpeech();
  if (voiceSwitch) {
    // 練習テーマの読み上げ
    Speech(task_theme[taskNum]);
  }
  setAbcTask();
  brailleDownMove(0);
}

function getSettings() {
  // 音声読み上げする or しない
  voiceSwitch = document.getElementById("voiceSwitch").checked;
  // 読み上げ音声を取得
  var voice = document.getElementById("voice");
  var opt = voice.selectedOptions;
  speechVoice = opt[0].voice;
  speechName = opt[0].value;
  // ダークモード：弱視（ロービジョン）の方向け
  lowVision = document.getElementById("lowVision").checked;
  // ゲーム設定の点字表示間隔を取得
  var radio_intervals = document.getElementsByName("braille_interval");
  for (var i = 0; i < radio_intervals.length; i++) {
    if (radio_intervals[i].checked) {
      brailleInterval = radio_intervals[i].value;
      break;
    }
  }
  // ゲーム時間を取得
  var radio_maxtimes = document.getElementsByName("game_time");
  for (var i = 0; i < radio_maxtimes.length; i++) {
    if (radio_maxtimes[i].checked) {
      maxTime = radio_maxtimes[i].value;
      break;
    }
  }
  // 練習タスクを取得
  var select_task = document.getElementById("taskList");
  var num = select_task.selectedIndex;
  taskNum = select_task.options[num].value;
  // 効果音を取得
  var effect = document.getElementById("soundEffect");
  num = effect.selectedIndex;
  soundEffectName = effect.options[num].value;
}
function setAbcTask() {
  // ランダム数
  random = Math.floor(Math.random() * down_task_list[taskNum].length);
  //console.log("setAbcTask => random:" + random + ", task:" + down_task_list[taskNum][random][0]);
  pos = 0;
  abcPos = 0;
  for (var i = 0; i < down_task_list[taskNum][random][2].length; i++) {
    var b = down_task_list[taskNum][random][2].charAt(i);
    brailleLines.push(new Braille_line(b, 650, 450, 10, 1, 0));
  }
  // 問題の読み上げ
  if (voiceSwitch) {
    /* 墨字読み上げ
        let text = "";
        for (var i = 0; i < down_task_list[taskNum][random][2].length; i++) {
            var jp = down_task_list[taskNum][random][2].charAt(i);
            if (jp in word_speak) {
                text += word_speak[jp];
            } else {
                text += jp;
            }
        }
        SpeechNotCancel(text);
        */
    SpeechNotCancel(down_task_list[taskNum][random][1]);
  }
}

function drawBackground() {
  // レンガ壁の画像を描画
  context.drawImage(imgBrick, 0, 0, cw, ch);

  // キャンセルボタン表示
  if (lowVision) {
    drawButton(square_gameCancel, locale_en.game_btnCancel, "rgba(0, 0, 0, 0.8)", "white");
  } else {
    drawButton(square_gameCancel, locale_en.game_btnCancel, "rgba(0, 0, 0, 0.5)", "white");
  }

  // 入力課題を表示
  // （クリアした文字と点字は色表示）
  if (lowVision) {
    context.fillStyle = "rgba(0, 0, 0, 0.8)";
    context.strokeStyle = "rgba(0, 0, 0, 0.8)";
  } else {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
  }
  fillRoundRect(context, 10, 68, cw - 20, 40, 10);
  context.font = 'bold 24pt "メイリオ"';
  if (lowVision) {
    var color = colorPalette.yellow2;
  } else {
    var color = colorPalette.red1;
  }
  var task = down_task_list[taskNum][random][0] + "（" + down_task_list[taskNum][random][2] + "）";
  var tw = context.measureText(task).width;
  var sx = cw / 2 - tw / 2;
  if (pos == 0) {
    task = down_task_list[taskNum][random][0] + "（";
    context.fillStyle = "white";
    context.fillText(task, sx, 100);
    sx += context.measureText(task).width;
  } else {
    var p = parseInt(down_task_list[taskNum][random][4].charAt(pos - 1), 16);
    if (p != 0) {
      task = down_task_list[taskNum][random][0].substring(0, p);
      context.fillStyle = color;
      context.fillText(task, sx, 100);
      sx += context.measureText(task).width;
    }
    task = down_task_list[taskNum][random][0].substring(p) + "（";
    context.fillStyle = "white";
    context.fillText(task, sx, 100);
    sx += context.measureText(task).width;
  }
  if (pos == 0) {
    task = down_task_list[taskNum][random][2] + "）";
    context.fillText(task, sx, 100);
  } else {
    task = down_task_list[taskNum][random][2].substring(0, pos);
    context.fillStyle = color;
    context.fillText(task, sx, 100);
    sx += context.measureText(task).width;
    task = down_task_list[taskNum][random][2].substring(pos) + "）";
    context.fillStyle = "white";
    context.fillText(task, sx, 100);
  }

  // 点字の移動ルートを作成
  if (lowVision) {
    color = "black";
  } else {
    color = "white";
  }
  context.fillStyle = color;
  context.strokeStyle = color;
  fillRoundRect(context, 80, 130, 100, 170, 10);
  fillRoundRect(context, 10, 280, 240, 270, 10);
  context.fillStyle = color;
  context.strokeStyle = color;
  fillRoundRect(context, 280, 130, 240, 420, 10);
  context.fillStyle = color;
  context.strokeStyle = color;
  fillRoundRect(context, 550, 130, 240, 270, 10);
  fillRoundRect(context, 620, 350, 100, 200, 10);
  fillRoundRect(context, 510, 130, 60, 50, 10);
  context.fillStyle = color;
  context.strokeStyle = color;
  context.fillRect(230, 500, 20, 50);
  context.fillRect(280, 500, 10, 50);
  context.fillRect(500, 130, 20, 50);

  var isClose = true;
  for (var i = 0; i < brailleLines.length; i++) {
    if (!brailleLines[i].outside && brailleLines[i].clearUp && !brailleLines[i].wallPass) {
      isClose = false;
    }
  }
  drawWallDoor(isClose);
}
// ゲームで点字が通過する通路を描画
function drawWallDoor(isClose) {
  if (!isClose) {
    if (lowVision) {
      context.fillStyle = "black";
      context.strokeStyle = "black";
    } else {
      context.fillStyle = "white";
      context.strokeStyle = "white";
    }
    context.fillRect(250, 500, 30, 50);
  }
}
// ゲームの点字を移動するメインルーチン
function brailleDownMove(timestamp) {
  // 背景・残タイム・スコア・著作権表示
  drawBackground();
  showProgress();
  putScore();
  showCopyright();

  // 次に表示する点字を準備
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextBraille += deltatime;
  if (timeToNextBraille > brailleInterval) {
    if (abcPos < down_task_list[taskNum][random][2].length) {
      //var b = down_task_list[taskNum][random][2].charAt(abcPos);
      //brailleLines.push(new BrailleLine(b, 650, 450, 10, 1, timestamp));
      timeToNextBraille = 0;
      brailleLines[abcPos].before = false;
      abcPos++;
    }
  }

  // 点字のアニメーション表示
  var count = 0;
  for (var i = 0; i < brailleLines.length; i++) {
    if (!brailleLines[i].outside && !brailleLines[i].before) {
      brailleLines[i].update(timestamp);
      brailleLines[i].draw();
      count++;
    }
  }

  // 課題をクリアできなかった場合、煙を作成
  var isNext = false;
  for (var i = 0; i < brailleLines.length; i++) {
    if (brailleLines[i].outside && !brailleLines[i].clearUp) {
      explosions.push(new Explosion(350, 400, 100));
      isNext = true;
    }
  }

  // 煙のアニメーション表示
  [...explosions].forEach((object) => object.update(deltatime));
  [...explosions].forEach((object) => object.draw());

  // 課題をクリアできなかった場合とクリアできた場合の次の課題を設定
  if (isNext || pos == down_task_list[taskNum][random][2].length) {
    var len = down_task_list[taskNum][random][2].length;
    if (pos == len) {
      if (soundEffectName != "none") {
        document.getElementById(soundEffect[soundEffectName]["clear"]).play();
      }
    }
    brailleLines.length = 0;
    setAbcTask();
  }

  // 残り時間があれば、アニメーションを続行
  if (time_remaining > 0) {
    animaid = requestAnimationFrame(brailleDownMove);
  }
}

function showTask() {
  inmode = "かな";
  clearBody();
  //drawFrame();
  context.font = 'normal 24pt "メイリオ"';
  context.fillStyle = colorPalette.gray4;
  context.fillText("この日本語を点字で入力してください", 60, 100);
  if (course == 1) {
    random = Math.floor(Math.random() * beginners_task_list_braille.length);
    putRoundText(context, 60, 150, beginners_task_list_jp[random], colorPalette.gray4, true);
    if (is_hint) {
      putRoundText(context, 60, 250, beginners_task_list_braille[random], colorPalette.gray4, true);
    }
  } else if (course == 2) {
    random = Math.floor(Math.random() * intermediate_task_list_braille.length);
    putRoundText(context, 60, 150, intermediate_task_list_jp[random], colorPalette.gray4, true);
    if (is_hint) {
      putRoundText(context, 60, 250, intermediate_task_list_braille[random], colorPalette.gray4, true);
    }
  } else if (course == 3) {
    random = Math.floor(Math.random() * advanced_task_list_braille.length);
    putRoundText(context, 60, 150, advanced_task_list_jp[random], colorPalette.gray4, true);
    if (is_hint) {
      putRoundText(context, 60, 250, advanced_task_list_braille[random], colorPalette.gray4, true);
    }
  }
  charInsort();
  drawLine(context, 60, ch - 140, cw - 60, ch - 140, 3, colorPalette.gray3);
  showCursor();
  showFooter();
  showCopyright();
  // この点字を訳してください
  // 同じ意味のペアをタップしてください
}

function showFooter() {
  let names = ["Alphabet", "Indicators", "Punctunation", "Numbers", "Signs of Operation & Comparision"];

  var flags = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var k = 0;
  for (var i = 0; i < inKakomis.length; i++) {
    if (inKakomis[i]) {
      k = 1;
      break;
    }
  }

  switch (inmode) {
    case "かな":
    case "外国語引用符終了":
      flags = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, k];
      break;
    case "数字":
      flags = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, k];
      break;
    case "外字":
      flags = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, k];
      break;
    case "大文字":
      flags = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, k];
      break;
    case "大文字ロック":
      flags = [0, 0, 1, 2, 0, 0, 0, 0, 0, 0, k];
      break;
    case "半濁音":
      flags = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, k];
      break;
    case "外国語引用符開始":
      flags = [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, k];
      break;
    case "大文字外引用":
      flags = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, k];
      break;
    case "大文字ロック外引用":
      flags = [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, k];
      break;
    case "濁音":
      flags = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, k];
      break;
    case "拗音点":
      flags = [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, k];
      break;
    case "拗濁点":
      flags = [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, k];
      break;
    case "拗半濁点":
      flags = [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, k];
      break;
    case "特殊音符":
      flags = [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, k];
      break;
    case "特殊音符＋濁音":
      flags = [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, k];
      break;
    case "拗半濁点＋濁音":
      flags = [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, k];
      break;
    case "つなぎ符":
      flags = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, k];
      break;
    default:
      flags = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, k];
      break;
  }
  var x = 60;
  var w;
  for (let i = 0; i < names.length; i++) {
    showMode(names[i], x, flags[i]);
    w = context.measureText(names[i]).width;
    x = x + w + 20;
  }
}

function showMode(text, x, ison) {
  context.font = 'normal 12pt "メイリオ"';
  if (lowVision) {
    if (ison == 1) {
      context.fillStyle = colorPalette.yellow1;
    } else if (ison == 2) {
      context.fillStyle = colorPalette.yellow2;
    } else {
      context.fillStyle = colorPalette.gray3;
    }
  } else {
    if (ison == 1) {
      context.fillStyle = colorPalette.red1;
    } else if (ison == 2) {
      context.fillStyle = colorPalette.red2;
    } else {
      context.fillStyle = colorPalette.gray3;
    }
  }
  var w = context.measureText(text).width;
  context.fillRect(x, ch - 80, w + 15, 25);
  if (lowVision) {
    context.fillStyle = "black";
  } else {
    context.fillStyle = "white";
  }
  context.fillText(text, x + 7, ch - 60);
}

function showCopyright() {
  context.font = 'normal 10pt "メイリオ"';
  context.fillStyle = colorPalette.gray4;
  var text = "Copyright 2022 - 2023 AT&D Lab.";
  var tw = context.measureText(text).width;
  context.fillText(text, cw / 2 - tw / 2, ch - 15);
}

function charInsort() {
  if (course == 1) {
    braille_char = beginners_task_list_braille[random].charAt(pos);
  } else if (course == 2) {
    braille_char = intermediate_task_list_braille[random].charAt(pos);
  } else if (course == 3) {
    braille_char = advanced_task_list_braille[random].charAt(pos);
  }
}

function finish() {
  showProgress();
  putScore();

  if (screen_name == screenName.game1) {
    cancelAnimationFrame(animaid);
  }
  screen_name = screenName.finish;
  score = Math.floor(Math.pow(correct, 2) * Math.pow(correct / (correct + mistake + skipped), 5));
  var upthere = document.getElementById("upthereaudio");
  upthere.addEventListener("ended", function (e) {
    var goodjob = document.getElementById("goodjobaudio");
    goodjob.addEventListener("ended", function (e) {
      Speech("スコアは" + String(score) + "点でした。");
    });
    goodjob.play();
  });
  upthere.play();

  if (lowVision) {
    var errorColor = colorPalette.yellow2;
    context.fillStyle = "rgba(0, 0, 0, 0.9)";
    context.strokeStyle = "rgba(0, 0, 0, 0.9)";
  } else {
    var errorColor = colorPalette.red2;
    context.fillStyle = "rgba(0, 0, 0, 0.8)";
    context.strokeStyle = "rgba(0, 0, 0, 0.8)";
  }
  fillRoundRect(context, 250, 100, 300, 430, 10);

  context.font = 'bold 24pt "メイリオ"';
  context.fillStyle = "white";
  context.fillText("Score", 270, 150);
  var result = score + " points";
  var w = context.measureText(result).width;
  context.fillText(result, 530 - w, 150);

  context.font = 'normal 16pt "メイリオ"';
  context.fillStyle = "white";
  context.fillText("Correct", 290, 200);
  context.fillText(correct, 420, 200);

  context.fillText("Wrong", 290, 250);
  if (mistake > 0) context.fillStyle = errorColor;
  context.fillText(mistake, 420, 250);

  context.fillStyle = "white";
  context.fillText("Skipped", 290, 300);
  if (skipped > 0) context.fillStyle = errorColor;
  context.fillText(skipped, 420, 300);

  context.fillStyle = "white";
  context.fillText("Percentage", 290, 350);
  context.fillText(((correct / (correct + mistake + skipped)) * 100).toFixed(1) + " %", 420, 350);

  gameEndProcessing();
  braille_char = 0;
  random = 0;
  pos = 0;
  abcPos = 0;
  brailleLines.length = 0;
  explosions.length = 0;
  isGaming = false;
  clearKeyState();
  if (lowVision) {
    drawButton(square_finishRetry, locale_en.finish_btnRetry, colorPalette.yellow2, "black");
    drawButton(square_finishBack, locale_en.finish_btnBack, "white", "black");
  } else {
    drawButton(square_finishRetry, locale_en.finish_btnRetry, colorPalette.red2, "white");
    drawButton(square_finishBack, locale_en.finish_btnBack, colorPalette.gray2, colorPalette.gray4);
  }
  showCopyright();
}

function gameEndProcessing() {
  braille_char = 0;
  random = 0;
  pos = 0;
  abcPos = 0;
  brailleLines.length = 0;
  explosions.length = 0;
}

function finish2() {
  if (screen_name == screenName.game1) {
    cancelAnimationFrame(animaid);
  }
  screen_name = screenName.finish;
  var upthere = document.getElementById("upthereaudio");
  upthere.addEventListener("ended", function (e) {
    document.getElementById("goodjobaudio").play();
  });
  upthere.play();
  clearAll();
  //drawFrame();
  score = Math.floor(Math.pow(correct, 2) * Math.pow(correct / (correct + mistake + skipped), 5));
  context.font = 'bold 32pt "メイリオ"';
  context.fillStyle = colorPalette.gray4;
  context.fillText("スコア", 150, 100);
  context.fillText(score + " 点", 500, 100);
  //drawLine(context, 100, 120, cw - 100, 120, 1, colorPalette.gray2);
  context.fillStyle = colorPalette.gray1;
  context.fillRect(150, 200, cw - 300, 230);
  context.font = 'normal 24pt "メイリオ"';
  context.fillStyle = colorPalette.gray4;
  context.fillText("正タイプ", 200, 250);
  context.fillText(correct, 500, 250);
  context.fillText("ミスタイプ", 200, 300);
  if (mistake > 0) context.fillStyle = colorPalette.red2;
  context.fillText(mistake, 500, 300);
  context.fillStyle = colorPalette.gray4;
  context.fillText("スキップ", 200, 350);
  if (skipped > 0) context.fillStyle = colorPalette.red2;
  context.fillText(skipped, 500, 350);
  context.fillStyle = colorPalette.gray4;
  context.fillText("正答率", 200, 400);
  context.fillText(((correct / (correct + mistake + skipped)) * 100).toFixed(1) + " %", 500, 400);
  braille_char = 0;
  random = 0;
  pos = 0;
  abcPos = 0;
  brailleLines.length = 0;
  explosions.length = 0;
  clearKeyState();
  context.lineWidth = 2;
  context.fillStyle = colorPalette.red2;
  context.strokeStyle = colorPalette.red2;
  fillRoundRect(context, square_finishBack.x, square_finishBack.y, square_finishBack.w, square_finishBack.h, 25);
  context.font = 'normal 16pt "メイリオ"';
  var btn_name = locale_en.finish_btnBack;
  var tw = context.measureText(btn_name).width;
  context.fillStyle = "white";
  context.fillText(
    btn_name,
    square_finishBack.x + square_finishBack.w / 2 - tw / 2,
    square_finishBack.y + square_finishBack.h - 15
  );
  showCopyright();
}

function clearAll() {
  context.clearRect(0, 0, cw, ch);
}

function clearBody() {
  context.clearRect(0, 50, cw, ch - 6);
}

function clearKeyState() {
  for (var i = 0; i < 7; i++) {
    keyState[i] = false;
    keybuf[i] = false;
  }
}

function drawLine(ctx, x, y, xt, yt, w, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(xt, yt);
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.stroke();
}

function putBraille(ctx, x, y, color) {
  ctx.clearRect(x - 7, y - 7, 28, 42);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  putDot(ctx, x, y, 5, color, keybuf[0]);
  putDot(ctx, x, y + 14, 5, color, keybuf[1]);
  putDot(ctx, x, y + 28, 5, color, keybuf[2]);
  putDot(ctx, x + 14, y, 5, color, keybuf[3]);
  putDot(ctx, x + 14, y + 14, 5, color, keybuf[4]);
  putDot(ctx, x + 14, y + 28, 5, color, keybuf[5]);
}

function putDot(ctx, x, y, r, c, f) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  if (f) {
    ctx.fillStyle = c;
    ctx.fill();
  } else {
    if (lowVision) {
      ctx.fillStyle = colorPalette.gray5;
    } else {
      ctx.fillStyle = colorPalette.gray2;
    }
    ctx.fill();
    //ctx.stroke();
  }
}

function getOnOff(braille) {
  var b = getKeyByValue(braille_unicode, braille);
  var onOff = new Array();
  for (var i = 0; i < 6; i++) {
    var c = b.charAt(i);
    if (c == "1") {
      onOff[i] = true;
    } else {
      onOff[i] = false;
    }
  }
  return onOff;
}

function putBrailleNormal(braille, x, y, color) {
  var onOff = getOnOff(braille);
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = 1;
  var r = 15;
  var d = 10;
  putDot(context, x, y, r, color, onOff[0]);
  putDot(context, x, y + (r + d + r), r, color, onOff[1]);
  putDot(context, x, y + (r + d + r) * 2, r, color, onOff[2]);
  putDot(context, x + (r + d + r), y, r, color, onOff[3]);
  putDot(context, x + (r + d + r), y + (r + d + r), r, color, onOff[4]);
  putDot(context, x + (r + d + r), y + (r + d + r) * 2, r, color, onOff[5]);
}

function putBrailleHorizontal(braille, x, y, color) {
  var onOff = getOnOff(braille);
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = 1;
  var r = 15;
  var d = 10;
  var dx = x - (r + d + r) * 2;
  putDot(context, dx, y, r, color, onOff[2]);
  putDot(context, dx + (r + d + r), y, r, color, onOff[1]);
  putDot(context, dx + (r + d + r) * 2, y, r, color, onOff[0]);
  putDot(context, dx + (r + d + r) * 3, y, r, color, onOff[3]);
  putDot(context, dx + (r + d + r) * 4, y, r, color, onOff[4]);
  putDot(context, dx + (r + d + r) * 5, y, r, color, onOff[5]);
}

function putBrailleRotate(braille, x, y, angle, color) {
  var onOff = getOnOff(braille);
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = 1;
  var r = 15;
  var d = 10;
  var cx = x;
  var cy = y;
  putDot(context, x, y, r, color, onOff[0]);
  var rad = (angle * Math.PI) / 180;
  var rx = cx + Math.cos(rad) * (x - cx) - Math.sin(rad) * (y + (r + d + r) - cy);
  var ry = cy + Math.sin(rad) * (x - cx) + Math.cos(rad) * (y + (r + d + r) - cy);
  putDot(context, rx, ry, r, color, onOff[1]);
  rx = cx + Math.cos(rad) * (x - cx) - Math.sin(rad) * (y + (r + d + r) * 2 - cy);
  ry = cy + Math.sin(rad) * (x - cx) + Math.cos(rad) * (y + (r + d + r) * 2 - cy);
  putDot(context, rx, ry, r, color, onOff[2]);
  cx = x + (r + d + r);
  putDot(context, x + (r + d + r), y, r, color, onOff[3]);
  rad = ((360 - angle) * Math.PI) / 180;
  rx = cx + Math.cos(rad) * (x + (r + d + r) - cx) - Math.sin(rad) * (y + (r + d + r) - cy);
  ry = cy + Math.sin(rad) * (x + (r + d + r) - cx) + Math.cos(rad) * (y + (r + d + r) - cy);
  putDot(context, rx, ry, r, color, onOff[4]);
  rx = cx + Math.cos(rad) * (x + (r + d + r) - cx) - Math.sin(rad) * (y + (r + d + r) * 2 - cy);
  ry = cy + Math.sin(rad) * (x + (r + d + r) - cx) + Math.cos(rad) * (y + (r + d + r) * 2 - cy);
  putDot(context, rx, ry, r, color, onOff[5]);
}

function putJP(ctx, x, y, color) {
  var jp;
  var isOk = false;
  var braille = dot[0] + dot[1] + dot[2] + dot[3] + dot[4] + dot[5];
  if (log_braille[pos - 1] in fugo && pos > 0) {
    var type = log_mode[pos - 1];
  } else {
    var type = inmode;
  }
  /*
    console.log("putJP => type:" + type + ", braille:" + braille);
    var flags;
    for (i = 0; i < 8; i++) {
        if (inKakomis[i]) {
            flags += '1';
        } else {
            flags += '0';
        }
    }
    console.log("putJP => inKakomis[]:" + flags);
    */
  if (pos == 0 || log_braille[pos - 1] == "000000") {
    if (braille in start_fugo) {
      log_jp[pos] = " ";
      return;
    }
  } else {
    if (braille in mid_fugo) {
      log_jp[pos] = " ";
      return;
    }
  }
  switch (type) {
    case "かな":
      if (braille in kakomi) {
        jp = kakomi[braille];
        if (inKakomis[kakomi_no["『"]]) {
          inmode = "つなぎ符";
        } else {
          if (inKakomis[kakomi_no[jp]]) {
            inKakomis[kakomi_no[jp]] = false;
            jp = kakomi_pair[jp];
          } else {
            inKakomis[kakomi_no[jp]] = true;
          }
          isOk = true;
          inmode = "かな";
        }
      } else if (braille in kana) {
        jp = kana[braille];
        if (braille == "000000") {
          if (pos > 1) {
            // パーセント％
            if (log_braille[pos - 1] == "111100" && log_braille[pos - 2] == "000011") {
              jp = "%";
              x -= 40;
              clearSumiji(pos - 1);
            }
            // 感嘆符！
            if (log_braille[pos - 1] == "011010") {
              jp = "！";
              x -= 40;
              clearSumiji(pos - 1);
            }
          }
        } else if (braille == "101010") {
          if (pos > 1) {
            // 右矢印（-->）
            if (log_braille[pos - 2] == "010010" && log_braille[pos - 1] == "010010") {
              if (jp == "タ") {
                jp = "→";
                if (pos > 2 && log_braille[pos - 3] == "010101") {
                } else {
                  clearSumiji(pos - 2);
                  clearSumiji(pos - 1);
                }
              }
            }
          }
        } else if (braille == "010010") {
          if (pos > 1) {
            // 左矢印（<--）
            if (log_braille[pos - 2] == "010101" && log_braille[pos - 1] == "010010") {
              jp = "←";
              clearSumiji(pos - 2);
              clearSumiji(pos - 1);
            }
          }
        } else if (braille == "010000") {
          if (pos > 0 && log_braille[pos - 1] == "011011") {
            // 第二カッコ閉じる
            jp = kakomi_pair["〈"];
            inKakomis[kakomi_no["〈"]] = false;
            x -= 40;
            clearSumiji(pos - 1);
            inKakomis[kakomi_no["（"]] = false;
            inmode = "かな";
          } else if (pos > 1 && log_braille[pos - 2] == "010000" && log_braille[pos - 1] == "010000") {
            // 点線：…
            jp = "…";
            clearSumiji(pos - 2);
            clearSumiji(pos - 1);
          }
        } else if (braille == "001010") {
          if (pos > 0) {
            // 第一星印
            if (log_braille[pos - 1] == "001010") {
              jp = "★";
              clearSumiji(pos - 1);
            }
          }
        } else if (braille == "011000") {
          // 外字符＋囲み　終了：】、』、》
          if (pos > 1 && log_braille[pos - 1] in gaijifu_kakomi && log_braille[pos - 2] != "000011") {
            jp = gaijifu_kakomi[log_braille[pos - 1]];
            inKakomis[kakomi_no[jp]] = false;
            jp = kakomi_pair[jp];
            x -= 40;
            clearSumiji(pos - 1);
            inmode = "かな";
          }
        }
        isOk = true;
      }
      break;
    case "つなぎ符":
      if (is_top) {
        if (braille in kakomi) {
          jp = kakomi[braille];
          if (inKakomis[["『"]]) {
            inmode = "つなぎ符";
          } else {
            if (inKakomis[kakomi_no[jp]]) {
              inKakomis[kakomi_no[jp]] = false;
              jp = kakomi_pair[jp];
            } else {
              inKakomis[kakomi_no[jp]] = true;
            }
            isOk = true;
            inmode = "かな";
          }
        } else if (braille in kana) {
          jp = kana[braille];
          isOk = true;
        }
      } else {
        if (braille in kana) {
          if (braille == "011000") {
            // 外字符＋囲み　終了：】、』、》
            if (pos > 1 && log_braille[pos - 1] in gaijifu_kakomi && log_braille[pos - 2] != "000011") {
              jp = gaijifu_kakomi[log_braille[pos - 1]];
              inKakomis[kakomi_no[jp]] = false;
              jp = kakomi_pair[jp];
              isOk = true;
              inmode = "かな";
            }
          } else {
            jp = kana[braille];
            isOk = true;
          }
        } else if (braille == "001001") {
          // パーセント：％
          if (pos > 1 && log_braille[pos - 2] == "000011" && log_braille[pos - 1] == "111100") {
            jp = "%";
            x -= 40;
            clearSumiji(pos - 1);
            isOk = true;
          }
          // 波線：〜
          if (pos > 0 && log_braille[pos - 1] == "001001") {
            jp = "〜";
            isOk = true;
            inmode = "かな";
          }
        }
      }
      break;
    case "濁音":
      if (braille in daku_kakomi) {
        jp = daku_kakomi[braille];
        inKakomis[kakomi_no[jp]] = true;
        isOk = true;
      } else if (braille in kana) {
        jp = kana[braille];
        if (jp in daku) {
          jp = daku[jp];
          if (jp == "・") x -= 40;
          isOk = true;
        } else if (braille in fuseji) {
          jp = fuseji[braille];
          isOk = true;
        }
      }
      break;
    case "半濁音":
      if (braille in kana) {
        if (braille == "011000") {
          // 第二カギ囲み閉じる
          if (inKakomis[kakomi_no["【"]]) {
            jp = kakomi_pair["【"];
            inKakomis[kakomi_no["【"]] = false;
            isOk = true;
            inmode = "かな";
          }
        } else {
          jp = kana[braille];
          if (jp in hdaku) {
            jp = hdaku[jp];
            isOk = true;
          }
        }
      }
      break;
    case "拗音点":
      if (braille in kana) {
        jp = kana[braille];
        if (jp in yoon) {
          jp = yoon[jp];
          isOk = true;
        }
      }
      break;
    case "拗濁点":
      if (braille in kana) {
        jp = kana[braille];
        if (jp in yodaku) {
          jp = yodaku[jp];
          isOk = true;
        }
      }
      break;
    case "拗半濁点":
      if (braille in kana) {
        jp = kana[braille];
        if (jp in yohandaku) {
          jp = yohandaku[jp];
          isOk = true;
        }
      }
      break;
    case "特殊音符":
      if (braille in kana) {
        jp = kana[braille];
        if (jp in tokushu) {
          jp = tokushu[jp];
          if (jp == "？") {
            if (log_braille[pos - 2] == "010001" && log_braille[pos - 1] == "010001") {
              // 特殊音符が2つ並んで空白の場合は第二星印、1つで空白の場合は疑問符？
              jp = "☆";
            } else if (log_braille[pos - 2] == "000001" && log_braille[pos - 1] == "010001") {
              // 第三星印
              jp = "※";
            }
            x -= 40;
          }
          isOk = true;
        }
      }
      break;
    case "特殊音符＋濁音":
      if (braille in kana) {
        jp = kana[braille];
        if (jp in tokushu_da) {
          jp = tokushu_da[jp];
          if (jp == "。") x -= 40;
          isOk = true;
        }
      }
      break;
    case "拗半濁点＋濁音":
      if (braille in kana) {
        jp = kana[braille];
        if (jp in yohandaku_da) {
          jp = yohandaku_da[jp];
          isOk = true;
        }
      }
      break;
    case "数字":
      if (braille in kakomi) {
        jp = kakomi[braille];
        if (inKakomis[["『"]]) {
          inmode = "つなぎ符";
        } else {
          if (inKakomis[kakomi_no[jp]]) {
            inKakomis[kakomi_no[jp]] = false;
            jp = kakomi_pair[jp];
          } else {
            inKakomis[kakomi_no[jp]] = true;
          }
          isOk = true;
          inmode = "かな";
        }
      } else if (braille in nums) {
        jp = nums[braille];
        isOk = true;
      }
      break;
    case "外字":
      if (pos > 0 && log_braille[pos - 1] == "000011" && braille in gaijifu_kakomi) {
        // 外字符＋囲み　開始：【、『、《
        jp = gaijifu_kakomi[braille];
        inKakomis[kakomi_no[jp]] = true;
        isOk = true;
        inmode = "かな";
      } else if (braille in kakomi) {
        jp = kakomi[braille];
        if (inKakomis[["『"]]) {
          inmode = "つなぎ符";
        } else {
          if (inKakomis[kakomi_no[jp]]) {
            inKakomis[kakomi_no[jp]] = false;
            jp = kakomi_pair[jp];
          } else {
            inKakomis[kakomi_no[jp]] = true;
          }
          isOk = true;
          inmode = "かな";
        }
      } else if (braille in eiki) {
        jp = eiki[braille];
        if (jp == "、") {
          if (inEnglish) {
            jp = " ";
          } else {
            x -= 40;
          }
        }
        isOk = true;
      } else if (braille in mark) {
        if (log_braille[pos - 1] == "000011") {
          jp = mark[braille];
          isOk = true;
        }
      } else {
        if (log_braille[pos - 1] == "011011") {
          // 二重カッコ閉じる
          jp = kakomi_pair["《"];
          inKakomis[kakomi_no["《"]] = false;
          x -= 40;
          clearSumiji(pos - 1);
          inKakomis[kakomi_no["（"]] = false;
          isOk = true;
          inmode = "かな";
        }
      }
      break;
    case "外国語引用符開始":
      if (braille in kakomi) {
        jp = kakomi[braille];
        if (!inKakomis[kakomi_no["『"]]) {
          console.log("外字");
          if (inKakomis[kakomi_no[jp]]) {
            inKakomis[kakomi_no[jp]] = false;
            jp = kakomi_pair[jp];
          } else {
            inKakomis[kakomi_no[jp]] = true;
          }
        }
        isOk = true;
      } else if (braille in eiki) {
        jp = eiki[braille];
        if (jp == "、") {
          jp = " ";
        }
        isOk = true;
      }
      break;
    case "大文字":
    case "大文字ロック":
    case "大文字外引用":
    case "大文字ロック外引用":
      if (braille in eiup) {
        jp = eiup[braille];
        isOk = true;
      }
      break;
    default:
      break;
  }
  //console.log(type + ", " + braille + ", " + jp);
  if (isOk) {
    ctx.font = 'bold 16pt "メイリオ"';
    ctx.fillStyle = color;
    if (ctx.measureText(jp).width > 35) {
      ctx.fillText(jp, x - 10, y);
    } else {
      ctx.fillText(jp, x, y);
    }
    if (voiceSwitch) {
      if (jp in word_speak) {
        Speech(word_speak[jp]);
      } else {
        Speech(jp);
      }
    }
    log_jp[pos] = jp;
  } else {
    log_jp[pos] = " ";
  }
}

function createRoundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arc(x + w - r, y + r, r, Math.PI * (3 / 2), 0, false);
  ctx.lineTo(x + w, y + h - r);
  ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1 / 2), false);
  ctx.lineTo(x + r, y + h);
  ctx.arc(x + r, y + h - r, r, Math.PI * (1 / 2), Math.PI, false);
  ctx.lineTo(x, y + r);
  ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3 / 2), false);
  ctx.closePath();
}

function fillRoundRect(ctx, x, y, w, h, r) {
  createRoundRectPath(ctx, x, y, w, h, r);
  ctx.fill();
}

function strokeRoundRect(ctx, x, y, w, h, r) {
  createRoundRectPath(ctx, x, y, w, h, r);
  ctx.stroke();
}

function putRoundText(ctx, x, y, text, text_color, isRound) {
  ctx.font = 'bold 32pt "メイリオ"';
  var w = ctx.measureText(text).width;
  if (isRound) {
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = colorPalette.gray2;
    ctx.lineWidth = 2;
    fillRoundRect(context, x, y, w + 60, 70, 20);
    strokeRoundRect(context, x, y, w + 60, 70, 20);
  }
  ctx.strokeStyle = text_color;
  ctx.fillStyle = text_color;
  ctx.fillText(text, x + 30, y + 50);
}

function changeYomiage() {
  if (voiceSwitch) {
    document.getElementById("voiceSwitch").checked = false;
    voiceSwitch = false;
  } else {
    document.getElementById("voiceSwitch").checked = true;
    voiceSwitch = true;
  }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function logPrint() {
  var bstr = "";
  var jstr = "";
  var sstr = "";
  var i;
  var n;
  var text;
  for (i = 0; i < pos; i++) {
    bstr += braille_unicode[log_braille[i]];
    if (log_jp[i] != undefined && log_jp[i] != " ") {
      jstr = jstr + log_jp[i];
      if (log_jp[i] in word_speak) {
        sstr = sstr + word_speak[log_jp[i]];
      } else {
        sstr = sstr + log_jp[i];
      }
    }
  }
  memo_braille[memo_line] = bstr;
  memo_jp[memo_line] = jstr;
  context.drawImage(imgBraillerPaper, 10, 100, cw - 20, 290);
  context.fillStyle = colorPalette.gray4;
  for (i = memo_line, n = 0; n < 6; i--, n++) {
    if (i < 0) break;
    // 墨字
    context.font = 'normal 8pt "メイリオ"';
    context.fillStyle = "white"; // colorPalette.gray4;
    context.fillText(memo_jp[i], 195, 300 - n * 30 + 8);
    // 点字
    context.font = 'normal 24pt "メイリオ"';
    context.fillStyle = "black"; // colorPalette.gray4;
    context.fillText(memo_braille[i], 190, 300 - n * 30);
  }
  Speech(sstr);
  memo_line++;
  log_mode.length = 0;
  //log_kakomi.length = 0;
  log_braille.length = 0;
  log_jp.length = 0;
}

function word2speech() {
  var text;
  var word = down_task_list[taskNum][random][3].charAt(pos);
  if (pos > 0) {
    var pre_word = down_task_list[taskNum][random][3].charAt(pos - 1);
    if (pre_word == "濁") {
      text = daku[word];
    } else if (pre_word == "半") {
      text = hdaku[word];
    } else if (pre_word == "拗") {
      text = yoon[word];
    } else if (pre_word == "≧") {
      text = yodaku[word];
    } else if (pre_word == "▲") {
      text = yohandaku[word];
    } else if (pre_word == "特") {
      text = tokushu[word];
    } else if (pre_word == "▽") {
      text = tokushu_da[word];
    } else if (pre_word == "▼") {
      text = yohandaku_da[word];
    } else {
      text = word_speak[word];
    }
  } else {
    text = word_speak[word];
  }
  //console.log("word2speech => pos:" + pos + ", pre_word:" + pre_word + ", word:" + word + ", text:" + text);
  Speech(text);
}

function setSpeech() {
  if ("speechSynthesis" in window) {
    //uttr = new SpeechSynthesisUtterance();
    /*
        var voices = window.speechSynthesis.getVoices();
        for (i = 0; i < voices.length; i++) {
            if (voices[i].lang == "ja-JP") {
                console.log(i + ":" + voices[i].name + "," + voices[i].lang);
            }
        }*/
    //uttr.voice = voices[0]; // [mac] 0:Kyoko, 31:Otoya, 59:Google 日本語
    //uttr.voide = 0;         // [Windows11] 0:Ayumi, 1:Haruka, 2:Ichiro, 3:Sayaka, 10: Nanami
    uttr.voice = speechVoice; // 音声（ゲーム設定から取得）
    uttr.lang = "ja-JP"; // 日本語
    //uttr.text = text;       // 喋る内容
    // 速度：0 - 10 (0.5:２倍遅い、2.0:倍速)
    if (screen == screenName.free) {
      uttr.rate = 1.1;
    } else {
      if (brailleInterval == 1000) {
        uttr.rate = 1.2;
      } else if (brailleInterval == 2000) {
        uttr.rate = 1.2;
      } else if (brailleInterval == 3000) {
        uttr.rate = 1.1;
      } else if (brailleInterval == 4000) {
        uttr.rate = 1.1;
      } else if (brailleInterval == 5000) {
        uttr.rate = 1;
      }
      uttr.rate = 1;
    }
    uttr.pitch = 1; // 音程：0 - 2
    uttr.volume = 1; // 音量：0 - 1
  } else {
    alert("このブラウザは音声合成に対応していません。");
  }
}

function Speech(text) {
  window.speechSynthesis.cancel();
  uttr.text = text;
  window.speechSynthesis.speak(uttr);
}

function SpeechNotCancel(text) {
  uttr.text = text;
  window.speechSynthesis.speak(uttr);
}

function showCursor() {
  context.fillStyle = colorPalette.gray2;
  context.fillRect(65 + pos * 40, ch - 187, 26, 40);
}

function kakomiAllOff() {
  for (var i = 0; i < inKakomis.length; i++) {
    inKakomis[i] = false;
  }
}

function clearBraille(pos) {
  context.clearRect(65 + pos * 40, ch - 190, 35, 48);
}

function clearSumiji(pos) {
  context.clearRect(58 + pos * 40, ch - 130, 40, 30);
  log_jp[pos] = " ";
}

document.onkeydown = function (e) {
  e.preventDefault(); // Space入力による画面のスクロールを止める
  switch (e.key) {
    case "f":
      keyState[0] = true;
      keybuf[0] = true;
      break;
    case "d":
      keyState[1] = true;
      keybuf[1] = true;
      break;
    case "s":
      keyState[2] = true;
      keybuf[2] = true;
      break;
    case "j":
      keyState[3] = true;
      keybuf[3] = true;
      break;
    case "k":
      keyState[4] = true;
      keybuf[4] = true;
      break;
    case "l":
      keyState[5] = true;
      keybuf[5] = true;
      break;
    case " ":
      keyState[6] = true;
      keybuf[6] = true;
      break;
  }
};

document.onkeyup = function (e) {
  var keyStr;
  if (screen_name == screenName.menu) {
    switch (e.key) {
      case "e":
        course = 0;
        is_hint = false;
        freeTypingStart();
        break;
      case "g":
        if (!isGaming) {
          isGaming = true;
          course = 1;
          is_hint = true;
          lessonStart();
        }
        break;
      case "y":
        if (e.altKey) {
          changeYomiage();
        }
        break;
    }
  } else if (screen_name == screenName.free) {
    if (e.key == "b") {
      main();
    }
  } else if (screen_name == screenName.game1) {
    if (e.key == "Escape") {
      document.getElementById("cancelaudio").play();
      clearInterval(gametimer);
      cancelAnimationFrame(animaid);
      gameEndProcessing();
      main();
    }
  } else if (screen_name == screenName.finish) {
    if (e.key == "m") {
      main();
    } else if (e.key == "r") {
      course = 1;
      is_hint = true;
      isGaming = true;
      lessonStart();
    }
  }
  if (screen_name != screenName.free && screen_name != screenName.game1) return;
  switch (e.key) {
    case "f":
      keyState[0] = false;
      break;
    case "d":
      keyState[1] = false;
      break;
    case "s":
      keyState[2] = false;
      break;
    case "j":
      keyState[3] = false;
      break;
    case "k":
      keyState[4] = false;
      break;
    case "l":
      keyState[5] = false;
      break;
    case " ":
      keyState[6] = false;
      break;
    case "Backspace":
      if (course == 0) {
        if (pos > 0) {
          clearBraille(pos);
          --pos;
          clearBraille(pos);
          clearSumiji(pos);
          if (pos == 0) {
            inmode = "かな";
            kakomiAllOff();
            inEnglish = false;
            is_top = true;
          } else {
            inmode = log_mode[pos - 1];
            inKakomis = log_kakomi[pos - 1];
          }
          showCursor();
          showFooter();
        }
      }
      break;
    case "Enter":
      if (course == 0) {
        logPrint();
        document.getElementById("typingaudio").play();
        context.clearRect(5, ch - 200, cw - 10, 58);
        context.clearRect(5, ch - 130, cw - 10, 50);
        pos = 0;
        inmode = "かな";
        is_top = true;
        inEnglish = false;
        kakomiAllOff();
        showFooter();
        showCursor();
      }
      break;
  }
  if (pos >= free_maxchar) {
    clearKeyState();
    document.getElementById(soundEffect[soundEffectName]["mistake"]).pause(); // タイピングが速い場合、音声が
    document.getElementById(soundEffect[soundEffectName]["mistake"]).currentTime = 0; // 再生されないためこの2行が必要
    document.getElementById(soundEffect[soundEffectName]["mistake"]).play();
    return;
  }
  if (keyState[0] || keyState[1] || keyState[2] || keyState[3] || keyState[4] || keyState[5] || keyState[6]) {
    return;
  }
  if (!keybuf[0] && !keybuf[1] && !keybuf[2] && !keybuf[3] && !keybuf[4] && !keybuf[5] && !keybuf[6]) {
    return;
  }
  for (var i = 0; i < 6; i++) {
    dot[i] = "0";
  }
  if (keybuf[0] == true) {
    dot[0] = "1";
  }
  if (keybuf[1] == true) {
    dot[1] = "1";
  }
  if (keybuf[2] == true) {
    dot[2] = "1";
  }
  if (keybuf[3] == true) {
    dot[3] = "1";
  }
  if (keybuf[4] == true) {
    dot[4] = "1";
  }
  if (keybuf[5] == true) {
    dot[5] = "1";
  }
  if (keybuf[6] == true || dot[0] == "1" || dot[1] == "1" || dot[2] == "1" || dot[3] == "1" || dot[4] == "1" || dot[5] == "1") {
    var inkey = dot[0] + dot[1] + dot[2] + dot[3] + dot[4] + dot[5];
    if (inkey in braille_unicode) {
      keyStr = braille_unicode[inkey];
    }
    if (screen_name == screenName.game1) {
      //console.log("pos: " + pos + ", braille: " + brailleLines[pos].braille);
      //[...brailleLines].forEach(object => console.log("braille: " + object.braille));
      if (keyStr == brailleLines[pos].braille) {
        correct++;
        brailleLines[pos].setClearUp();
        //Speech(down_task_list[taskNum][random][0].charAt(pos));
        if (voiceSwitch) word2speech();
        if (soundEffectName != "none") {
          document.getElementById(soundEffect[soundEffectName]["correct"]).pause(); // タイピングが速い場合、音声が
          document.getElementById(soundEffect[soundEffectName]["correct"]).currentTime = 0; // 再生されないためこの2行が必要
          document.getElementById(soundEffect[soundEffectName]["correct"]).play();
        }
        pos++;
      } else {
        mistake++;
        if (soundEffectName != "none") {
          document.getElementById(soundEffect[soundEffectName]["mistake"]).pause(); // タイピングが速い場合、音声が
          document.getElementById(soundEffect[soundEffectName]["mistake"]).currentTime = 0; // 再生されないためこの2行が必要
          document.getElementById(soundEffect[soundEffectName]["mistake"]).play();
        }
      }
      clearKeyState();
      return;
    }
    if (keyStr == braille_char || course == 0) {
      if (keybuf[6]) {
        // Space処理
        if (inEnglish) {
          inmode = "外国語引用符開始";
        } else {
          is_top = true;
          inmode = "かな";
        }
      } else if (inkey in fugo) {
        // 符号処理
        var mode = fugo[inkey];
        //console.log("onkeyup => mode:" + mode + ", is_top:" + is_top);
        if (mode == "数符") {
          inmode = "数字";
        } else if (mode == "外字符") {
          inmode = "外字";
        } else if (mode == "大文字符/半濁音") {
          if (inmode == "外字") {
            inmode = "大文字";
          } else if (inmode == "かな") {
            inmode = "半濁音";
          } else if (inmode == "大文字") {
            inmode = "大文字ロック";
          } else if (inmode == "外国語引用符開始") {
            inmode = "大文字外引用";
          } else if (inmode == "大文字外引用") {
            inmode = "大文字ロック外引用";
          }
        } else if (mode == "外国語引用符開始" && is_top) {
          inEnglish = true;
          inmode = mode;
        } else if (mode == "外国語引用符終了" && inEnglish) {
          inEnglish = false;
          inmode = mode;
        } else if (mode == "濁音") {
          inmode = mode;
        } else if (mode == "拗音点") {
          inmode = mode;
        } else if (mode == "拗濁点") {
          inmode = mode;
        } else if (mode == "拗半濁点") {
          inmode = mode;
        } else if (mode == "特殊音符") {
          inmode = mode;
        } else if (mode == "特殊音符＋濁音") {
          inmode = mode;
        } else if (mode == "拗半濁点＋濁音") {
          inmode = mode;
        } else if (mode == "つなぎ符") {
          if (is_top && !inKakomis[3]) {
            inmode = "かな";
          } else if (inKakomis[3]) {
            inmode = "かな";
          } else {
            inmode = mode;
          }
        }
        is_top = false;
      } else {
        is_top = false;
        if (
          inmode == "濁音" ||
          inmode == "半濁音" ||
          inmode == "拗音点" ||
          inmode == "拗濁点" ||
          inmode == "拗半濁点" ||
          inmode == "特殊音符" ||
          inmode == "特殊音符＋濁音" ||
          inmode == "拗半濁点＋濁音" ||
          inmode == "つなぎ符" ||
          inmode == "外国語引用符終了"
        ) {
          inmode = "かな";
        } else if (inmode == "大文字") {
          inmode = "外字";
        } else if (inmode == "大文字ロック") {
          inmode = "大文字ロック";
        } else if (inmode == "外国語引用符開始") {
          inmode = "外国語引用符開始";
        } else if (inmode == "大文字外引用") {
          inmode = "外国語引用符開始";
        } else if (inmode == "大文字ロック外引用") {
          inmode = "大文字ロック外引用";
        } else if (inmode == "数字") {
          if (!(inkey in nums)) {
            inmode = "かな";
          }
          if (inkey in kakomi && inKakomis[0]) {
            inmode = "かな";
          }
        } else if (inmode == "外字") {
          if (inkey in kakomi && inKakomis[0]) {
            inmode = "かな";
          }
        }
      }
      if (lowVision) {
        putJP(context, 68 + pos * 40, ch - 110, "white");
        putBraille(context, 70 + pos * 40, ch - 180, colorPalette.yellow2);
      } else {
        putJP(context, 68 + pos * 40, ch - 110, colorPalette.gray4);
        putBraille(context, 70 + pos * 40, ch - 180, colorPalette.gray4);
      }
      log_mode[pos] = inmode;
      for (var i = 0; i < inKakomis.length; i++) {
        log_kakomi[pos][i] = inKakomis[i];
      }
      log_braille[pos] = inkey;
      showFooter();
      if (course != 0) {
        if (soundEffectName != "none") {
          document.getElementById(soundEffect[soundEffectName]["correct"]).pause(); // タイピングが速い場合、音声が
          document.getElementById(soundEffect[soundEffectName]["correct"]).currentTime = 0; // 再生されないためこの2行が必要
          document.getElementById(soundEffect[soundEffectName]["correct"]).play();
        }
      }
      if (is_hint) {
        if (course == 1) {
          var metric = context.measureText(beginners_task_list_braille[random].substring(0, pos + 1));
          putRoundText(context, 60, 250, beginners_task_list_braille[random].substring(0, pos + 1), colorPalette.red1, false);
        } else if (course == 2) {
          var metric = context.measureText(intermediate_task_list_braille[random].substring(0, pos + 1));
          putRoundText(
            context,
            60,
            250,
            intermediate_task_list_braille[random].substring(0, pos + 1),
            colorPalette.red1,
            false
          );
        } else if (course == 3) {
          var metric = context.measureText(advanced_task_list_braille[random].substring(0, pos + 1));
          putRoundText(context, 60, 250, advanced_task_list_braille[random].substring(0, pos + 1), colorPalette.red1, false);
        }
      }
      if (pos < free_maxchar) pos++;
      showCursor();
      correct++;
      charInsort();
    } else {
      mistake++;
      putBraille(context, 70 + pos * 40, ch - 180, colorPalette.red2);
      if (soundEffectName != "none") {
        document.getElementById(soundEffect[soundEffectName]["mistake"]).pause(); // タイピングが速い場合、音声が
        document.getElementById(soundEffect[soundEffectName]["mistake"]).currentTime = 0; // 再生されないためこの2行が必要
        document.getElementById(soundEffect[soundEffectName]["mistake"]).play();
      }
    }
    clearKeyState();
    if (course != 0) {
      if (course == 1) {
        var len = beginners_task_list_braille[random].length;
      } else if (course == 2) {
        var len = intermediate_task_list_braille[random].length;
      } else if (course == 3) {
        var len = advanced_task_list_braille[random].length;
      }
      if (pos == len) {
        if (soundEffectName != "none") {
          var cleartask = document.getElementById(soundEffect[soundEffectName]["clear"]);
          cleartask.addEventListener("ended", function (e) {
            pos = 0;
            if (time_remaining > 0) {
              showTask();
            }
          });
          cleartask.play();
        } else {
          pos = 0;
          if (time_remaining > 0) {
            showTask();
          }
        }
      }
    }
  }
};
