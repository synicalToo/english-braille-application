// Braille Typing Exercises
// TAKEMAE Masaaki 2023.01.16
// Copyright 2022-2023 Nagano Kosen GEAR 5.0 Project

// 五十音
var kana = {
  100000: "ア",
  110000: "イ",
  100100: "ウ",
  110100: "エ",
  "010100": "オ",
  100001: "カ",
  110001: "キ",
  100101: "ク",
  110101: "ケ",
  "010101": "コ",
  100011: "サ",
  110011: "シ",
  100111: "ス",
  110111: "セ",
  "010111": "ソ",
  101010: "タ",
  111010: "チ",
  101110: "ツ",
  111110: "テ",
  "011110": "ト",
  101000: "ナ",
  111000: "ニ",
  101100: "ヌ",
  111100: "ネ",
  "011100": "ノ",
  101001: "ハ",
  111001: "ヒ",
  101101: "フ",
  111101: "ヘ",
  "011101": "ホ",
  101011: "マ",
  111011: "ミ",
  101111: "ム",
  111111: "メ",
  "011111": "モ",
  "001100": "ヤ",
  "001101": "ユ",
  "001110": "ヨ",
  100010: "ラ",
  110010: "リ",
  100110: "ル",
  110110: "レ",
  "010110": "ロ",
  "001000": "ワ",
  "011000": "ヰ",
  "011010": "ヱ",
  "001010": "ヲ",
  "001011": "ン",
  "010010": "ー",
  "010000": "ッ",
  "000000": "　",
};
// 濁音
var daku = {
  カ: "ガ",
  キ: "ギ",
  ク: "グ",
  ケ: "ゲ",
  コ: "ゴ",
  サ: "ザ",
  シ: "ジ",
  ス: "ズ",
  セ: "ゼ",
  ソ: "ゾ",
  タ: "ダ",
  チ: "ヂ",
  ツ: "ヅ",
  テ: "デ",
  ト: "ド",
  ハ: "バ",
  ヒ: "ビ",
  フ: "ブ",
  ヘ: "ベ",
  ホ: "ボ",
  ウ: "ヴ",
  "　": "・",
};
// 半濁音
var hdaku = {
  ハ: "パ",
  ヒ: "ピ",
  フ: "プ",
  ヘ: "ペ",
  ホ: "ポ",
};
// 拗音
var yoon = {
  カ: "キャ",
  ク: "キュ",
  コ: "キョ",
  サ: "シャ",
  ス: "シュ",
  ソ: "ショ",
  タ: "チャ",
  ツ: "チュ",
  ト: "チョ",
  ナ: "ニャ",
  ヌ: "ニュ",
  ノ: "ニョ",
  ハ: "ヒャ",
  フ: "ヒュ",
  ホ: "ヒョ",
  マ: "ミャ",
  ム: "ミュ",
  モ: "ミョ",
  ラ: "リャ",
  ル: "リュ",
  ロ: "リョ",
  エ: "イェ",
  ケ: "キェ",
  セ: "シェ",
  テ: "チェ",
  ネ: "ニェ",
  ヘ: "ヒェ",
  シ: "スィ",
  チ: "ティ",
};
// 拗濁音
var yodaku = {
  カ: "ギャ",
  ク: "ギュ",
  コ: "ギョ",
  サ: "ジャ",
  ス: "ジュ",
  ソ: "ジョ",
  タ: "ヂャ",
  ツ: "ヂュ",
  ト: "ヂョ",
  ハ: "ビャ",
  フ: "ビュ",
  ホ: "ビョ",
  セ: "ジェ",
  シ: "ズィ",
  チ: "ディ",
};
// 拗半濁音
var yohandaku = {
  ハ: "ピャ",
  フ: "ピュ",
  ホ: "ピョ",
  ツ: "テュ",
  ユ: "フュ",
  ヨ: "フョ",
};
// 特殊音
var tokushu = {
  イ: "ウィ",
  エ: "ウェ",
  オ: "ウォ",
  "　": "？",
  カ: "クァ",
  キ: "クィ",
  ケ: "クェ",
  コ: "クォ",
  タ: "ツァ",
  チ: "ツィ",
  テ: "ツェ",
  ト: "ツォ",
  ハ: "ファ",
  ヒ: "フィ",
  ヘ: "フェ",
  ホ: "フォ",
  ツ: "トゥ",
};
// 特殊音＋濁音
var tokushu_da = {
  カ: "グァ",
  キ: "グィ",
  ケ: "グェ",
  コ: "グォ",
  ハ: "ヴァ",
  ヒ: "ヴィ",
  ヘ: "ヴェ",
  ホ: "ヴォ",
  ツ: "ドゥ",
  "　": "。",
};
// 拗半濁音
var yohandaku_da = {
  ツ: "デュ",
  ユ: "ヴュ",
  ヨ: "ヴョ",
};
// 数字
var nums = {
  100000: "1",
  110000: "2",
  100100: "3",
  100110: "4",
  100010: "5",
  110100: "6",
  110110: "7",
  110010: "8",
  "010100": "9",
  "010110": "0",
  "010000": ".",
  "001000": ",",
};
// 英文記号
var eiki = {
  100000: "a",
  110000: "b",
  100100: "c",
  100110: "d",
  100010: "e",
  110100: "f",
  110110: "g",
  110010: "h",
  "010100": "i",
  "010110": "j",
  101000: "k",
  111000: "l",
  101100: "m",
  101110: "n",
  101010: "o",
  111100: "p",
  111110: "q",
  111010: "r",
  "011100": "s",
  "011110": "t",
  101001: "u",
  111001: "v",
  "010111": "w",
  101101: "x",
  101111: "y",
  101011: "z",
  "001001": "-",
  "010010": ":",
  "011000": ";",
  "010000": ",",
  "010011": ".",
  "011001": "?",
  "011010": "!",
  "001000": "'",
  "000000": "、",
  "001100": "/",
};
// 英大文字
var eiup = {
  100000: "A",
  110000: "B",
  100100: "C",
  100110: "D",
  100010: "E",
  110100: "F",
  110110: "G",
  110010: "H",
  "010100": "I",
  "010110": "J",
  101000: "K",
  111000: "L",
  101100: "M",
  101110: "N",
  101010: "O",
  111100: "P",
  111110: "Q",
  111010: "R",
  "011100": "S",
  "011110": "T",
  101001: "U",
  111001: "V",
  "010111": "W",
  101101: "X",
  101111: "Y",
  101011: "Z",
  "001001": "-",
  "010010": ":",
  "011000": ";",
  "010000": ",",
  "010011": ".",
  "011001": "?",
  "011010": "!",
  "001000": "'",
  "000000": "、",
  "001100": "/",
};
// 句読符
var kudokufu = {
  "010011": "。",
  "000011": "、",
  "010001": "？",
  "000010": "・",
  "011010": "！",
  "001100": "／",
};
// 伏せ字
var fuseji = {
  101011: "○",
  111011: "△",
  101111: "□",
  111111: "×",
};
// マーク類
var mark = {
  111101: "&",
  100101: "#",
  100001: "*",
  "010101": "@",
};
// 符号
var fugo = {
  "001111": "数符",
  "000011": "外字符",
  "011001": "外国語引用符開始",
  "001011": "外国語引用符終了",
  "000001": "大文字符/半濁音",
  "000010": "濁音",
  "000100": "拗音点",
  "000110": "拗濁点",
  "000101": "拗半濁点",
  "010001": "特殊音符",
  "010011": "特殊音符＋濁音",
  "000111": "拗半濁点＋濁音",
  "001001": "つなぎ符",
};
var start_fugo = {
  "001111": "数符",
  "000011": "外字符",
  "011001": "外国語引用符開始",
};
var mid_fugo = {
  "000001": "大文字符/半濁音",
  "000010": "濁音",
  "000100": "拗音点",
  "000110": "拗濁点",
  "000101": "拗半濁点",
  "010001": "特殊音符",
  "010011": "特殊音符＋濁音",
  "000111": "拗半濁点＋濁音",
};
var end_fugo = {
  "001011": "外国語引用符終了",
};
// 囲み記号
var kakomi = {
  "011011": "（",
  "001001": "「",
};
// 外字符とセットの囲み記号
var gaijifu_kakomi = {
  "001000": "【",
  "001001": "『",
  "011011": "《",
};
// 濁音とセットの囲み記号
var daku_kakomi = {
  "011011": "〈",
};
// 囲み記号ペア
var kakomi_pair = {
  "（": "）",
  "〈": "〉",
  "《": "》",
  "「": "」",
  "【": "】",
  "『": "』",
  "｛": "｝",
  "［": "］",
};
// 囲み番号
var kakomi_no = {
  "（": 0,
  "〈": 1,
  "《": 2,
  "「": 3,
  "【": 4,
  "『": 5,
  "｛": 6,
  "［": 7,
};

// 点字Unicode
var braille_unicode = {
  "000000": "⠀",
  100000: "⠁",
  "010000": "⠂",
  110000: "⠃",
  "001000": "⠄",
  101000: "⠅",
  "011000": "⠆",
  111000: "⠇",
  "000100": "⠈",
  100100: "⠉",
  "010100": "⠊",
  110100: "⠋",
  "001100": "⠌",
  101100: "⠍",
  "011100": "⠎",
  111100: "⠏",

  "000010": "⠐",
  100010: "⠑",
  "010010": "⠒",
  110010: "⠓",
  "001010": "⠔",
  101010: "⠕",
  "011010": "⠖",
  111010: "⠗",
  "000110": "⠘",
  100110: "⠙",
  "010110": "⠚",
  110110: "⠛",
  "001110": "⠜",
  101110: "⠝",
  "011110": "⠞",
  111110: "⠟",

  "000001": "⠠",
  100001: "⠡",
  "010001": "⠢",
  110001: "⠣",
  "001001": "⠤",
  101001: "⠥",
  "011001": "⠦",
  111001: "⠧",
  "000101": "⠨",
  100101: "⠩",
  "010101": "⠪",
  110101: "⠫",
  "001101": "⠬",
  101101: "⠭",
  "011101": "⠮",
  111101: "⠯",

  "000011": "⠰",
  100011: "⠱",
  "010011": "⠲",
  110011: "⠳",
  "001011": "⠴",
  101011: "⠵",
  "011011": "⠶",
  111011: "⠷",
  "000111": "⠸",
  100111: "⠹",
  "010111": "⠺",
  110111: "⠻",
  "001111": "⠼",
  101111: "⠽",
  "011111": "⠾",
  111111: "⠿",
};
// 発音
var word_speak = {
  ア: "ア",
  イ: "イ",
  ウ: "ウ",
  エ: "エ",
  オ: "オ",
  カ: "カ",
  キ: "キ",
  ク: "ク",
  ケ: "ケ",
  コ: "コ",
  サ: "サ",
  シ: "シ",
  ス: "ス",
  セ: "セ",
  ソ: "ソ",
  タ: "タ",
  チ: "チ",
  ツ: "ツ",
  テ: "テ",
  ト: "ト",
  ナ: "ナ",
  ニ: "ニ",
  ヌ: "ヌ",
  ネ: "ネ",
  ノ: "ノ",
  ハ: "ハ",
  ヒ: "ヒ",
  フ: "フ",
  ヘ: "ヘ",
  ホ: "ホ",
  マ: "マ",
  ミ: "ミ",
  ム: "ム",
  メ: "メ",
  モ: "モ",
  ヤ: "ヤ",
  ユ: "ユ",
  ヨ: "ヨ",
  ラ: "ラ",
  リ: "リ",
  ル: "ル",
  レ: "レ",
  ロ: "ロ",
  ワ: "ワ",
  ヰ: "ヰ",
  ヲ: "ヲ",
  ン: "ン",
  ー: "ハイフン",
  ッ: "ツ",
  "　": "スペース",
  1: "いち",
  2: "に",
  3: "さん",
  4: "よん",
  5: "ご",
  6: "ろく",
  7: "なな",
  8: "はち",
  9: "きゅう",
  0: "ゼロ",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "o",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  z: "z",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z",
  ".": "ピリオド",
  ",": "コンマ",
  ":": "コロン",
  ";": "セミコロン",
  "-": "ハイフン",
  "?": "ぎもんふ",
  "!": "かんたんふ",
  "'": "シングルコーテーション",
  '"': "ダブルコーテーション",
  "/": "スラッシュ",
  "。": "くてん",
  "、": "どくてん",
  "・": "ちゅうてん",
  "〜": "から",
  "…": "てんせん",
  "（": "だいいちカッコ",
  "）": "だいいちカッコとじる",
  "〈": "だいにカッコ",
  "〉": "だいにカッコとじる",
  "「": "だいいちカギ",
  "」": "だいいちカギとじる",
  "【": "だいにカギ",
  "】": "だいにカギとじる",
  "『": "ふたえカギ",
  "』": "ふたえカギとじる",
  "《": "にじゅうカッコ",
  "》": "にじゅうカッコとじる",
  外: "がいじ",
  大: "おおもじ",
  "〔": "がいごかいし",
  "〕": "がいごしゅうりょう",
  数: "すうじ",
  継: "つなぎ",
  濁: "だくおん",
  半: "はんだくおん",
  拗: "ようおん",
  "≧": "ようだくおん",
  "▲": "ようはんだくおん",
  特: "とくしゅおん",
  "▽": "とくしゅだくおん",
  "▼": "ようはんだくだくおん",
  "○": "ふせじまる",
  "△": "ふせじさんかく",
  "□": "ふせじしかく",
  "×": "ふせじばつ",
  "→": "みぎやじるし",
  "←": "ひだりやじるし",
  "%": "%",
  "&": "&",
  "#": "#",
  "*": "*",
  "@": "@",
  "★": "だいいちほしじるし",
  "☆": "だいにほしじるし",
  "※": "だいさんほしじるし",
};

// 入力モード
var mode_at = {
  かな: 0,
  数字: 1,
  外字: 2,
  大文字: 3,
  外国語引用: 4,
  濁音: 5,
  半濁音: 6,
  拗音: 7,
  特殊音: 8,
  つなぎ: 9,
  囲み: 10,
};
var mode_flag = {
  かな: "1000000000",
  外国語引用符終了: "1000000000",
  数字: "0100000000",
  外字: "0010000000",
  大文字: "0011000000",
  大文字ロック: "0012000000",
  半濁音: "1000001000",
  外国語引用符開始: "0010100000",
  大文字外引用: "0011100000",
  大文字ロック外引用: "0012100000",
  濁音: "1000010000",
  拗音点: "1000000100",
  拗濁点: "1000010100",
  拗半濁点: "1000011000",
  特殊音符: "1000000010",
  "特殊音符＋濁音": "1000010010",
  "拗半濁点＋濁音": "1000011100",
  つなぎ符: "1000000001",
};
// 練習テーマ読み上げ
let task_theme = {
  0: "ごじゅうおんもんだいです",
  1: "だくおんもんだいです",
  2: "ようおんもんだいです",
  3: "とくしゅおんもんだいです",
  4: "えいじもんだいです",
  5: "すうじもんだいです",
  6: "こんざいもんだいです",
};
// 点字落ちゲー用課題リスト
let down_task_list = [
  [
    ["a", "a", "⠁", "a", "1"],
    ["b", "b", "⠁", "b", "1"],
    ["c", "c", "⠁", "c", "1"],
    ["d", "d", "⠁", "d", "1"],
    ["e", "e", "⠁", "e", "1"],
    ["f", "f", "⠁", "f", "1"],
    ["g", "g", "⠁", "g", "1"],
    ["h", "h", "⠁", "h", "1"],
    ["i", "i", "⠁", "i", "1"],
    ["j", "j", "⠁", "j", "1"],
    ["k", "k", "⠁", "k", "1"],
    ["l", "l", "⠁", "l", "1"],
    ["m", "m", "⠁", "m", "1"],
    ["n", "n", "⠁", "n", "1"],
    ["o", "o", "⠁", "o", "1"],
    ["p", "p", "⠁", "p", "1"],
    ["q", "q", "⠁", "q", "1"],
    ["r", "r", "⠁", "r", "1"],
    ["s", "s", "⠁", "s", "1"],
    ["t", "t", "⠁", "t", "1"],
    ["u", "u", "⠁", "u", "1"],
    ["v", "v", "⠁", "v", "1"],
    ["w", "w", "⠁", "w", "1"],
    ["x", "x", "⠁", "x", "1"],
    ["y", "y", "⠁", "y", "1"],
    ["z", "z", "⠁", "z", "1"],
  ],

  [
    ["boy", "boy", "⠃⠕⠽", "boy", "123"],
    ["girl", "girl", "⠛⠊⠗⠇", "girl", "1234"],
    ["hat", "hat", "⠓⠁⠞", "hat", "123"],
    ["boat", "boat", "⠃⠕⠁⠞", "boat", "1234"],
    ["run", "run", "⠗⠥⠝", "run", "123"],
    ["jump", "jump", "⠚⠥⠍⠏", "jump", "1234"],
  ],

  [
    // 1. 五十音
    ["あひる", "あひる", "⠁⠧⠙", "アヒル", "123"],
    ["うし", "うし", "⠉⠳", "ウシ", "12"],
    ["うま", "うま", "⠉⠵", "ウマ", "12"],
    ["にわとり", "にわとり", "⠇⠄⠞⠓", "ニワトリ", "1234"],
    ["いぬ", "いぬ", "⠃⠍", "イヌ", "12"],
    ["ねこ", "ねこ", "⠏⠪", "ネコ", "12"],
    ["おはよう", "おはよう", "⠊⠥⠜⠒", "オハヨウ", "1234"],
    ["こんにちは", "こんにちは", "⠪⠴⠇⠗⠄", "コンニチワ", "12345"],
    ["まつもと", "まつもと", "⠵⠝⠾⠞", "マツモト", "1234"],
    ["くまもと", "くまもと", "⠩⠵⠾⠞", "クマモト", "1234"],
    ["さいたま", "さいたま", "⠱⠃⠕⠵", "サイタマ", "1234"],
    ["あいち", "あいち", "⠁⠃⠗", "アイチ", "123"],
    ["おおさか", "おおさか", "⠊⠊⠱⠡", "オオサカ", "1234"],
    ["あおもり", "あおもり", "⠁⠊⠾⠓", "アオモリ", "1234"],
    ["あきた", "あきた", "⠁⠣⠕", "アキタ", "123"],
    ["ふくおか", "ふくおか", "⠭⠩⠊⠡", "フクオカ", "1234"],
    ["おきなわ", "おきなわ", "⠊⠣⠅⠄", "オキナワ", "1234"],
    ["えひめ", "えひめ", "⠋⠧⠿", "エヒメ", "123"],
    ["やさい", "やさい", "⠌⠱⠃", "ヤサイ", "123"],
    ["ほうれんそう", "ほうれんそう", "⠮⠒⠛⠴⠺⠒", "ホウレンソウ", "123456"],
    ["ほけんしつ", "ほけんしつ", "⠮⠫⠴⠳⠝", "ホケンシツ", "12345"],
    ["とまと", "とまと", "⠞⠵⠞", "トマト", "123"],
    ["みそしる", "みそしる", "⠷⠺⠳⠙", "ミソシル", "1234"],
    ["エアコン", "えあこん", "⠋⠁⠪⠴", "エアコン", "1234"],
    ["なつやすみ", "なつやすみ", "⠅⠝⠌⠹⠷", "ナツヤスミ", "12345"],
    ["ふゆやすみ", "ふゆやすみ", "⠭⠬⠌⠹⠷", "フユヤスミ", "12345"],
    ["はるやすみ", "はるやすみ", "⠥⠙⠌⠹⠷", "ハルヤスミ", "12345"],
    ["くるま", "くるま", "⠩⠙⠵", "クルマ", "123"],
    ["スマホ", "すまほ", "⠹⠵⠮", "スマホ", "123"],
    ["マスク", "ますく", "⠵⠹⠩", "マスク", "123"],
    ["たいよう", "たいよう", "⠕⠃⠜⠒", "タイヨウ", "1234"],
    ["よろしく", "よろしく", "⠜⠚⠳⠩", "ヨロシク", "1234"],
    ["さんすう", "さんすう", "⠱⠴⠹⠒", "サンスウ", "1234"],
    ["たいいく", "たいいく", "⠕⠃⠃⠩", "タイイク", "1234"],
    ["さかみち", "さかみち", "⠱⠡⠷⠗", "サカミチ", "1234"],
    ["ようちえん", "ようちえん", "⠜⠒⠗⠋⠴", "ヨウチエン", "12345"],
    ["ろうそく", "ろうそく", "⠚⠒⠺⠩", "ロウソク", "1234"],
    ["よこはま", "よこはま", "⠜⠪⠥⠵", "ヨコハマ", "1234"],
    ["ふうせん", "ふうせん", "⠭⠒⠻⠴", "フウセン", "1234"],
    ["れんらく", "れんらく", "⠛⠴⠑⠩", "レンラク", "1234"],
    ["せんせい", "せんせい", "⠻⠴⠻⠃", "センセイ", "1234"],
    ["アメリカ", "あめりか", "⠁⠿⠓⠡", "アメリカ", "1234"],
    ["フランス", "ふらんす", "⠭⠑⠴⠹", "フランス", "1234"],
  ],
  [
    // 2. 撥音・促音・長音・濁音・半濁音
    ["うさぎ", "うさぎ", "⠉⠱⠐⠣", "ウサ濁キ", "1223"],
    ["学校", "がっこう", "⠐⠡⠂⠪⠒", "濁カッコウ", "00112"],
    ["長野市", "ながのし", "⠅⠐⠡⠎⠳", "ナ濁カノシ", "00123"],
    ["ポータブル", "ぽーたぶる", "⠠⠮⠒⠕⠐⠭⠙", "半ホウタ濁フル", "0123345"],
    ["ピアノ", "ぴあの", "⠠⠧⠁⠎", "半ヒアノ", "0123"],
    ["ペアガラス", "ぺあがらす", "⠠⠯⠁⠐⠡⠑⠹", "半ヘア濁カラス", "0122345"],
    ["ポイント", "ぽいんと", "⠠⠮⠃⠴⠞", "半ホイント", "01234"],
    ["パターン", "ぱたーん", "⠠⠥⠕⠒⠴", "半ハタウン", "01234"],
    ["パズル", "ぱずる", "⠠⠥⠐⠹⠙", "半ハ濁スル", "01123"],
    ["パイオニア", "ぱいおにあ", "⠠⠥⠃⠊⠇⠁", "半ハイオニア", "012345"],
    ["パキスタン", "ぱきすたん", "⠠⠥⠣⠹⠕⠴", "半ハキスタン", "012345"],
    ["パラグアイ", "ぱらぐあい", "⠠⠥⠑⠐⠩⠁⠃", "半ハラ濁クアイ", "0122345"],
    ["パイナップル", "ぱいなっぷる", "⠠⠥⠃⠅⠂⠠⠭⠙", "半ハイナッ半フル", "01234456"],
    ["サッカー", "さっかー", "⠱⠂⠡⠒", "サッカウ", "1234"],
    ["ドリル", "どりる", "⠐⠞⠓⠙", "濁トリル", "0123"],
    ["ゴリラ", "ごりら", "⠐⠪⠓⠑", "濁コリラ", "0123"],
    ["デジタル", "でじたる", "⠐⠟⠐⠳⠕⠙", "濁テ濁シタル", "011234"],
    ["デザイナー", "でざいなー", "⠐⠟⠐⠱⠃⠅⠒", "濁テ濁サイナウ", "0112345"],
    ["ドローン", "どろーん", "⠐⠞⠚⠒⠴", "濁トロウン", "01234"],
    ["タッチパネル", "たっちぱねる", "⠕⠂⠗⠀⠠⠥⠏⠙", "タッチ　半ハネル", "12333456"],
    ["ポストイット", "ぽすといっと", "⠠⠮⠹⠞⠀⠃⠂⠞", "半ホスト　イット", "01233456"],
    ["財団", "ざいだん", "⠐⠱⠃⠐⠕⠴", "濁サイ濁タン", "001112"],
    ["粗大ゴミ", "そだいごみ", "⠺⠐⠕⠃⠀⠐⠪⠷", "ソ濁タイ　濁コミ", "11122234"],
    ["大学", "だいがく", "⠐⠕⠃⠐⠡⠩", "濁タイ濁カク", "001112"],
    ["点字", "てんじ", "⠟⠴⠐⠳", "テン濁シ", "0112"],
    ["東海道", "とうかいどう", "⠞⠒⠡⠃⠐⠞⠒", "トウカイ濁トウ", "0112223"],
    ["トレーニング", "とれーにんぐ", "⠞⠛⠒⠇⠴⠐⠩", "トレウニン濁ク", "1234556"],
    ["ネッカチーフ", "ねっかちーふ", "⠏⠂⠡⠗⠒⠭", "ネッカチウフ", "123456"],
    ["年月日", "ねんがっぴ", "⠏⠴⠐⠡⠂⠠⠧", "ネン濁カッ半ヒ", "0111223"],
    ["ノートブック", "のーとぶっく", "⠎⠒⠞⠀⠐⠭⠂⠩", "ノウト　濁フック", "12333456"],
    ["ペットフード", "ぺっとふーど", "⠠⠯⠂⠞⠀⠭⠒⠐⠞", "半ヘット　フウ濁ト", "01234556"],
    ["ペンギン", "ぺんぎん", "⠠⠯⠴⠐⠣⠴", "半ヘン濁キン", "012234"],
    ["ベッド", "べっど", "⠐⠯⠂⠐⠞", "濁ヘッ濁ト", "01223"],
    ["ポップコーン", "ぽっぷこーん", "⠠⠮⠂⠠⠭⠪⠒⠴", "半ホッ半フコウン", "01223456"],
  ],
  [
    // 3. 拗音・拗濁音・拗半濁音
    ["東京", "とうきょう", "⠞⠒⠈⠪⠒", "トウ拗コウ", "01112"],
    ["入学式", "にゅうがくしき", "⠈⠍⠒⠐⠡⠩⠳⠣", "拗ヌウ濁カクシキ", "00111223"],
    ["卒業式", "そつぎょうしき", "⠺⠝⠘⠪⠒⠳⠣", "ソツ≧コウシキ", "0111223"],
    ["教室", "きょうしつ", "⠈⠪⠒⠳⠝", "拗コウシツ", "00112"],
    ["キャベツ", "きゃべつ", "⠈⠡⠐⠯⠝", "拗カ濁ヘツ", "02234"],
    ["キャッチャー", "きゃっちゃー", "⠈⠡⠂⠈⠕⠒", "拗カッ拗コチウ", "023356"],
    ["九州", "きゅうしゅう", "⠈⠩⠒⠈⠹⠒", "拗クウ拗スウ", "001112"],
    ["共通", "きょうつう", "⠈⠪⠒⠝⠒", "拗コウツウ", "00112"],
    ["ギャル", "ぎゃる", "⠘⠡⠙", "≧カル", "023"],
    ["牛乳", "ぎゅうにゅう", "⠘⠩⠒⠈⠍⠒", "≧クウ拗ヌウ", "001112"],
    ["業者", "ぎょうしゃ", "⠘⠪⠒⠈⠱", "≧コウ拗サ", "00112"],
    ["社会", "しゃかい", "⠈⠱⠡⠃", "拗サカイ", "0112"],
    ["シューズ", "しゅーず", "⠈⠹⠒⠐⠹", "拗スウ濁ス", "02334"],
    ["将棋", "しょうぎ", "⠈⠺⠒⠐⠣", "拗スウ濁キ", "00112"],
    ["じゃんけん", "じゃんけん", "⠘⠱⠴⠫⠴", "≧サンケン", "02345"],
    ["ジュース", "じゅーす", "⠘⠹⠒⠹", "≧スウス", "0234"],
    ["情報", "じょうほう", "⠘⠺⠒⠮⠒", "≧ソウホウ", "00112"],
    ["お茶漬け", "おちゃづけ", "⠊⠈⠕⠐⠝⠫", "オ拗タ濁ツケ", "112234"],
    ["ジャンプ", "じゃんぷ", "⠘⠱⠴⠠⠭", "≧サン半フ", "02334"],
    ["中小企業", "ちゅうしょうきぎょう", "⠈⠝⠒⠈⠺⠒⠀⠣⠘⠪⠒", "拗ツウ拗ソウ　キ≧コウ", "00111223334"],
    ["チョコレート", "ちょこれーと", "⠈⠞⠪⠛⠒⠞", "拗トコレウト", "023456"],
    ["授業", "じゅぎょう", "⠘⠹⠘⠪⠒", "≧ス≧コウ", "01112"],
    ["チャンピオン", "ちゃんぴおん", "⠈⠕⠴⠠⠧⠊⠴", "拗タン半ヒオン", "0233456"],
    ["茶碗", "ちゃわん", "⠘⠕⠄⠴", "拗タワン", "0112"],
    ["中国", "ちゅうごく", "⠈⠝⠒⠐⠪⠩", "拗ツウ濁コク", "001112"],
    ["提灯", "ちょうちん", "⠘⠞⠒⠗⠴", "拗トウチン", "00112"],
    ["こんにゃく", "こんにゃく", "⠪⠴⠈⠅⠩", "コン拗ナク", "12245"],
    ["ニュース", "にゅーす", "⠈⠍⠒⠹", "拗ヌウス", "0234"],
    ["検尿", "けんにょう", "⠫⠴⠈⠎⠒", "ケン拗ノウ", "01112"],
    ["百貨店", "ひゃっかてん", "⠈⠥⠂⠡⠟⠴", "拗ハッカテン", "001223"],
    ["ヒューマン", "ひゅーまん", "⠈⠭⠒⠵⠴", "拗フウマン", "02345"],
    ["白夜", "びゃくや", "⠘⠥⠩⠌", "≧ハクヤ", "0112"],
    ["三百", "さんびゃく", "⠱⠴⠘⠥⠩", "サン≧ハク", "01112"],
    ["インタビュー", "いんたびゅー", "⠃⠴⠕⠘⠭⠒", "インタ≧フウ", "123356"],
    ["病院", "びょういん", "⠘⠮⠒⠃⠴", "≧ホウイン", "00112"],
    ["嘘八百", "うそはっぴゃく", "⠉⠺⠥⠂⠨⠥⠩", "ウソハッ▲ハク", "0112223"],
    ["コンピューター", "こんぴゅーたー", "⠪⠴⠨⠭⠒⠕⠒", "コン▲フウタウ", "1224567"],
    ["支払伝票", "しはらいでんぴょう", "⠳⠥⠑⠃⠀⠐⠟⠴⠨⠮⠒", "シハライ　濁テン▲ホウ", "01122223334"],
    ["アルプス山脈", "あるぷすさんみゃく", "⠁⠙⠠⠭⠹⠀⠱⠴⠈⠵⠩", "アル半フス　サン拗マク", "12234445556"],
    ["ミュージック", "みゅーじっく", "⠈⠽⠒⠐⠳⠂⠩", "拗ムウ濁シック", "0233456"],
    ["明星", "みょうじょう", "⠈⠾⠒⠘⠺⠒", "拗モウ≧ソウ", "001112"],
    ["戦略", "せんりゃく", "⠻⠴⠈⠑⠩", "セン拗ラク", "01112"],
    ["流星", "りゅうせい", "⠈⠙⠒⠻⠃", "拗ルウセイ", "00112"],
    ["材料", "ざいりょう", "⠐⠱⠃⠈⠚⠒", "濁サイ拗ロウ", "001112"],
    ["飲料", "いんりょう", "⠃⠴⠈⠚⠒", "イン拗ロウ", "01112"],
    ["圧力", "あつりょく", "⠁⠝⠈⠚⠩", "アツ拗ロク", "01112"],
  ],
  [
    // 4. 特殊音
    ["ヴァイオリン", "ばいおりん", "⠲⠥⠃⠊⠓⠴", "▽ハイオリン", "023456"],
    ["ジェノバ", "じぇのば", "⠘⠻⠎⠐⠥", "≧セノ濁ハ", "02334"],
    ["ファイル", "ふぁいる", "⠢⠥⠃⠙", "特ハイル", "0234"],
    ["イェロゾリムスキェ", "いぇろぞりむすきぇ", "⠈⠋⠚⠐⠺⠓⠽⠹⠈⠫", "拗エロ濁ソリムス拗ケ", "0233456778"],
    ["アルツィバーシェフ", "あるつぃばーしぇふ", "⠁⠙⠢⠗⠐⠥⠒⠈⠻⠭", "アル特チ濁ハウ拗セフ", "1224456689"],
    ["チェロ", "ちぇろ", "⠈⠟⠚", "拗テロ", "023"],
    ["ピニェイロ", "ぴにぇいろ", "⠠⠧⠈⠏⠃⠚", "半ヒ拗ネイロ", "011345"],
    ["ミッヒェルシュタット", "みっひぇるしゅたっと", "⠷⠂⠈⠯⠙⠈⠹⠕⠂⠞", "ミッ拗ヘル拗スタット", "022455779a"],
    ["ウィルス", "うぃるす", "⠢⠃⠙⠹", "特イルス", "0234"],
    ["アウェイ", "あうぇい", "⠁⠢⠋⠃", "ア特エイ", "1134"],
    ["ウォール", "うぉーる", "⠢⠊⠒⠙", "特オール", "0234"],
    ["クァルテット", "くぁるてっと", "⠢⠡⠙⠟⠂⠞", "特カルテット", "023356"],
    ["クィンテット", "くぃんてっと", "⠢⠣⠴⠟⠂⠞", "特キンテット", "023356"],
    ["クェスチョン", "くぇすちょん", "⠢⠫⠹⠈⠞⠴", "特ケス拗トン", "023356"],
    ["クォータリー", "くぉーたりー", "⠢⠪⠒⠕⠓⠒", "特コウタリウ", "023456"],
    ["グァテマラ", "ぐぁてまら", "⠲⠡⠟⠵⠑", "▽カテマラ", "02345"],
    ["ティツィアーノ", "てぃつぃあーの", "⠈⠗⠢⠗⠁⠒⠎", "拗チ特チアウノ", "0224567"],
    ["ハチャトゥリヤン", "はちゃとぅりやん", "⠥⠈⠕⠢⠝⠓⠌⠴", "ハ拗タ特ツリヤン", "11335678"],
    ["ヒンドゥー", "ひんどぅー", "⠧⠴⠲⠝⠒", "ヒン▽ツウ", "12245"],
    ["ヴィーナス", "びーなす", "⠲⠧⠒⠅⠹", "▽ヒウナス", "02345"],
    ["ヴェール", "べーる", "⠲⠯⠒⠙", "▽ヘウル", "0234"],
    ["ヴォルガ", "ぼるが", "⠲⠮⠙⠐⠡", "▽ホル濁カ", "02335"],
    ["テュニジア", "ちゅにじあ", "⠨⠝⠇⠐⠳⠁", "▲ツニ濁シア", "023345"],
    ["レヴュー", "れびゅー", "⠛⠸⠬⠒", "レ▼ユウ", "1134"],
    ["ディズニー", "でぃずにー", "⠘⠗⠐⠹⠇⠒", "≧チ濁スニウ", "022345"],
    ["ファイト", "ふぁいと", "⠢⠥⠃⠞", "特ハイト", "0234"],
    ["フィニッシュ", "ふぃにっしゅ", "⠢⠧⠇⠂⠈⠹", "特ヒニッ拗ス", "022446"],
    ["フェルト", "ふぇると", "⠢⠯⠙⠞", "特ヘルト", "0234"],
    ["フォーク", "ふぉーく", "⠢⠮⠒⠩", "特ホウク", "0234"],
    ["ジュスィ", "じゅすぃ", "⠘⠹⠈⠳", "≧ス拗シ", "0224"],
    ["アーティスト", "あーてぃすと", "⠁⠒⠈⠗⠹⠞", "アウ拗チスト", "122456"],
    ["アルトゥール", "あるとぅーる", "⠁⠙⠢⠝⠒⠙", "アル特ツウル", "122456"],
    ["ゲズィーラ", "げずぃーら", "⠐⠫⠘⠳⠒⠑", "濁ケ≧シウラ", "011345"],
    ["インスティテュート", "いんすてぃちゅーと", "⠃⠴⠹⠈⠗⠨⠝⠒⠞", "インス拗チ≧ツート", "123355789"],
    ["フューチャーズ", "ふゅーちゃーず", "⠨⠬⠒⠈⠕⠒⠐⠹", "≧ユウ拗タウ濁ス", "02335667"],
    ["デュエット", "でゅえっと", "⠸⠝⠋⠂⠞", "▼ツエット", "02345"],
  ],
  [
    // 5. 英語
    ["SDGs", "えすでーじーず", "⠰⠠⠠⠎⠙⠛⠰⠎", "外大S大D大Gs", "00012334"],
    ["Happy birthday", "はっぴー ばーすでい", "⠦⠠⠓⠁⠏⠏⠽⠀⠃⠊⠗⠞⠓⠙⠁⠽⠴", "〔大Happy　birthday〕", "00123456789abcdee"],
    ["Sony", "そにー", "⠦⠠⠎⠕⠝⠽⠴", "〔大Sony〕", "0012344"],
    ["Canon", "きゃのん", "⠦⠠⠉⠁⠝⠕⠝⠴", "〔大Canon〕", "00123455"],
    ["JAL", "じゃる", "⠰⠠⠠⠚⠁⠇", "外大大JAL", "000123"],
    ["TV", "てぃーびー", "⠰⠠⠠⠞⠧", "外大大TV", "00012"],
    ["PTA", "ぴーてぃえー", "⠰⠠⠠⠏⠞⠁", "外大大PTA", "000123"],
    ["OPEC", "おぺっく", "⠰⠠⠠⠕⠏⠑⠉", "外大大OPEC", "0001234"],
    ["NHK", "えぬえいちけい", "⠰⠠⠠⠝⠓⠅", "外大大NHK", "000123"],
    ["January", "じゃにゅありー", "⠦⠠⠚⠁⠝⠥⠁⠗⠽⠴", "〔大January〕", "0012345677"],
    ["February", "February", "⠦⠠⠋⠑⠃⠗⠥⠁⠗⠽⠴", "〔大February〕", "00123456788"],
    ["March", "まーち", "⠦⠠⠍⠁⠗⠉⠓⠴", "〔大March〕", "00123455"],
    ["April", "えいぷりる", "⠦⠠⠁⠏⠗⠊⠇⠴", "〔大April〕", "00123455"],
    ["May", "めい", "⠦⠠⠍⠁⠽⠴", "〔大May〕", "001233"],
    ["June", "じゅん", "⠦⠠⠚⠥⠇⠽⠴", "〔大June〕", "0012344"],
    ["July", "じゅらい", "⠦⠠⠚⠥⠇⠽⠴", "〔大July〕", "0012344"],
    ["August", "おーがすと", "⠦⠠⠁⠥⠛⠥⠎⠞⠴", "〔大August〕", "001234566"],
    ["September", "せぷてんばー", "⠦⠠⠎⠑⠏⠞⠑⠍⠃⠑⠗⠴", "〔大September〕", "001234567899"],
    ["October", "おくとーばー", "⠦⠠⠕⠉⠞⠕⠃⠑⠗⠴", "〔大October〕", "0012345677"],
    ["November", "のーべんばー", "⠦⠠⠝⠕⠧⠑⠍⠃⠑⠗⠴", "〔大November〕", "00123456788"],
    ["December", "でっせんばー", "⠦⠠⠙⠑⠉⠑⠍⠃⠑⠗⠴", "〔大December〕", "00123456788"],
    ["Helen Keller", "へれん けらー", "⠦⠠⠓⠑⠇⠑⠝⠀⠠⠅⠑⠇⠇⠑⠗⠴", "〔大Helen　大Keller〕", "001234566789abcc"],
    ["Louis Braille", "るいす ぶれいる", "⠦⠠⠇⠕⠥⠊⠎⠀⠠⠃⠗⠁⠊⠇⠇⠑⠴", "〔大Louis　大Braille〕", "001234566789abcdd"],
    ["Apple", "あっぷる", "⠦⠠⠁⠏⠏⠇⠑⠴", "〔大Apple〕", "00123455"],
    ["Orange", "おれんじ", "⠦⠠⠕⠗⠁⠝⠛⠑⠴", "〔大Orange〕", "001234566"],
    ["Peach", "ぴーち", "⠦⠠⠏⠑⠁⠉⠓⠴", "〔大Peach〕", "00123455"],
    ["Lemon", "れもん", "⠦⠠⠇⠑⠍⠕⠝⠴", "〔大Lemon〕", "00123455"],
    ["Kiwi", "きうい", "⠦⠠⠅⠊⠺⠊⠴", "〔大Kiwi〕", "001234"],
    ["Apricot", "あぷりこっと", "⠦⠠⠁⠏⠗⠊⠉⠕⠞⠴", "〔大Apricot〕", "0012345677"],
  ],
  [
    // 6. 数字
    ["3.14", "さんてんいちよん", "⠼⠉⠂⠁⠙", "数3.14", "01234"],
    ["0.02", "れいてんぜろに", "⠼⠚⠂⠚⠃", "数0.02", "01234"],
    ["9.5", "きゅうてんご", "⠼⠊⠂⠑", "数9.5", "0123"],
    ["475.5", "よんひゃくななじゅうごてんご", "⠼⠙⠛⠑⠂⠑", "数475.5", "012345"],
    ["183.8", "ひゃくはちじゅうさんてんはち", "⠼⠁⠓⠉⠂⠓", "数183.8", "01234"],
    ["52,760", "ごまんにせんななひゃくろくじゅう", "⠼⠑⠃⠄⠛⠋⠚", "数52,760", "0123456"],
    ["500", "ごひゃく", "⠼⠑⠚⠚", "数500", "0123"],
    ["9800", "きゅうせんはっぴゃく", "⠼⠊⠓⠚⠚", "数9800", "01234"],
    ["2023", "にせんにじゅうさん", "⠼⠃⠚⠃⠉", "数2023", "01234"],
    ["7000", "ななせん", "⠼⠛⠚⠚⠚", "数7000", "01234"],
    ["1,234,567", "ひゃくにじゅう３まんよんせんごひゃくろくじゅうなな", "⠼⠁⠄⠃⠉⠙⠄⠑⠋⠛", "数1,234,567", "0123456789"],
    ["756,439", "ななじゅうごまんろくせんよんひゃくさんじゅうきゅう", "⠼⠛⠑⠋⠄⠙⠉⠊", "数756,439", "01234567"],
    ["439,782", "よんじゅうさんまんきゅうせんななひゃくはちじゅうに", "⠼⠙⠉⠊⠄⠛⠓⠃", "数439,782", "01234567"],
    ["976,400", "きゅうじゅうななまんろくせんよんひゃく", "⠼⠊⠛⠋⠄⠙⠚⠚", "数976,400", "01234567"],
    ["823,105", "はちじゅうにまんさんぜんひゃくご", "⠼⠓⠃⠉⠄⠁⠚⠑", "数823,105", "01234567"],
    ["七五三", "しちごさん", "⠼⠛⠼⠑⠼⠉", "数7数5数3", "011223"],
    ["五七五", "ごしちご", "⠼⠑⠼⠛⠼⠑", "数5数7数5", "011223"],
    [
      "7,309,241,856",
      "ななじゅうさんおくきゅうひゃくにじゅうよんまんいっせんはっぴゃくごじゅうろく",
      "⠼⠛⠄⠉⠚⠊⠄⠃⠙⠁⠄⠓⠑⠋",
      "数7,309,241,856",
      "0123456789abcd",
    ],
  ],
  [
    // 7. すべて混在
    ["PTA会長", "ぴーてぃえーかいちょう", "⠰⠠⠠⠏⠞⠁⠀⠡⠃⠈⠞⠒", "外大大PTA　カイ拗トウ", "000123334445"],
    ["学校へ行く", "がっこうへいく", "⠐⠡⠂⠪⠒⠋⠀⠃⠩", "濁カッコウエ　イク", "001123345"],
    ["2億年", "におくねん", "⠼⠃⠤⠊⠩⠏⠴", "数2継オクネン", "0111223"],
    ["3LDK", "さんえるでぃーけー", "⠼⠉⠰⠠⠠⠇⠙⠅", "数3外大大LDK", "01111234"],
    ["四角形", "しかっけい", "⠼⠙⠡⠩⠫⠃", "数4カクケイ", "011223"],
    ["１列", "いちれつ", "⠼⠁⠤⠛⠝", "数1継レツ", "01112"],
    ["１枚", "いちまい", "⠼⠁⠵⠃", "数1マイ", "0112"],
    ["１０数人", "じゅうすうにん", "⠼⠁⠚⠹⠒⠇⠴", "数10スウニン", "0122334"],
    ["JAL72便", "じゃるななじゅうにびん", "⠰⠠⠠⠚⠁⠇⠀⠼⠛⠃⠐⠧⠴", "外大大JAL　数72濁ヒン", "0001233345556"],
    ["CD-ROM", "しーでぃーろむ", "⠰⠠⠠⠉⠙⠤⠰⠠⠠⠗⠕⠍", "外大大CD-外大大ROM", "000123333456"],
    ["390-0802", "390-0802", "⠼⠉⠊⠚⠎⠀⠼⠚⠓⠚⠃", "数390ノ　数0802", "01234445678"],
    ["100円玉", "ひゃくえんだま", "⠼⠁⠚⠚⠤⠋⠴⠐⠕⠵", "数100継エン濁タマ", "0123334456"],
    ["X線", "えっくすせん", "⠰⠠⠭⠤⠻⠴", "外大X継セン", "001112"],
    ["ビタミンB2", "びたみんびーつー", "⠐⠧⠕⠷⠴⠀⠰⠠⠃⠼⠃", "濁ヒタミン　外大B数2", "01234444556"],
    ["県立美術館", "けんりつびじゅつかん", "⠫⠴⠓⠝⠀⠐⠧⠘⠹⠝⠡⠴", "ケンリツ　濁ヒ≧スツカン", "011222333445"],
    ["令和５年", "れいわごねん", "⠛⠃⠄⠼⠑⠏⠴", "レイワ数5ネン", "0122334"],
    ["零下７度", "れいかななど", "⠛⠃⠡⠼⠛⠐⠞", "レイカ数7濁ト", "0122334"],
    ["一輪車", "いちりんしゃ", "⠼⠁⠤⠓⠴⠈⠱", "数1継リン拗サ", "0111223"],
    ["50円", "ごじゅうえん", "⠼⠑⠚⠤⠋⠴", "数50継エン", "012223"],
    ["フォーラム in 京都", "ふぉーらむいんきょうと", "⠢⠮⠒⠑⠽⠀⠦⠊⠝⠴⠀⠈⠪⠒⠞", "特ホウラム　〔in〕　拗コウト", "023456667888889a"],
    ["Gift券", "ぎふとけん", "⠦⠠⠛⠊⠋⠞⠴⠤⠫⠴", "〔大gift〕継ケン", "0012344445"],
    ["赤Wine", "あかわいん", "⠁⠡⠦⠠⠺⠊⠝⠑⠴", "アカ〔大wine〕", "011123455"],
  ],
];
// 初級コース課題リスト
var beginners_task_list_jp = [
  "こんにちは [コンニチワ]",
  "あるいは [アルイワ]",
  "私は [ワタシワ]",
  "駅へは [エキエワ]",
  "空気 [クーキ]",
  "夕日 [ユーヒ]",
  "会う [アウ]",
  "買う [カウ]",
  "1 [数1]",
  "23 [数23]",
  "500 [数500]",
  "2023 [数2023]",
  "10500 [数1マン 数500]",
  "53,000 [数53,000]",
  "3.14 [数3.14]",
  "１列 [数1継レツ]",
  "2億年 [数2継オクネン]",
  "あいうえお",
  "かきくけこ",
  "さしすせそ",
  "たちつてと",
  "なにぬねの",
  "はひふへほ",
  "まみむめも",
  "やゆよ",
  "らりるれろ",
  "わゐゑをん",
  "あかさたなはまやらわ",
  "1234567890",
  "0987654321",
  "abcdefg",
  "hijklmn",
  "opqrstu",
  "vwxyz",
  "ABCDEFG",
  "HIJKLMN",
  "OPQRSTU",
  "VWXYZ",
];
var beginners_task_list_braille = [
  "⠪⠴⠇⠗⠄",
  "⠁⠙⠃⠄",
  "⠄⠕⠳⠄",
  "⠋⠣⠋⠄",
  "⠩⠒⠣",
  "⠬⠒⠧",
  "⠁⠉",
  "⠡⠉",
  "⠼⠁",
  "⠼⠃⠉",
  "⠼⠑⠚⠚",
  "⠼⠃⠚⠃⠉",
  "⠼⠁⠵⠴⠀⠼⠑⠚⠚",
  "⠼⠑⠉⠄⠚⠚⠚",
  "⠼⠉⠂⠁⠙",
  "⠼⠁⠤⠛⠝",
  "⠼⠃⠤⠊⠩⠏⠴",
  "⠁⠃⠉⠋⠊",
  "⠡⠣⠩⠫⠪",
  "⠱⠳⠹⠻⠺",
  "⠕⠗⠝⠟⠞",
  "⠅⠇⠍⠏⠎",
  "⠥⠧⠭⠯⠮",
  "⠵⠷⠽⠿⠾",
  "⠌⠬⠜",
  "⠑⠓⠙⠛⠚",
  "⠄⠆⠖⠔⠴",
  "⠁⠡⠱⠕⠅⠥⠵⠌⠑⠄",
  "⠼⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚",
  "⠼⠚⠊⠓⠛⠋⠑⠙⠉⠃⠁",
  "⠰⠁⠃⠉⠙⠑⠋⠛",
  "⠰⠓⠊⠚⠅⠇⠍⠝",
  "⠰⠕⠏⠟⠗⠎⠞⠥",
  "⠰⠧⠺⠭⠽⠵",
  "⠰⠠⠠⠁⠃⠉⠙⠑⠋⠛",
  "⠰⠠⠠⠓⠊⠚⠅⠇⠍⠝",
  "⠰⠠⠠⠕⠏⠟⠗⠎⠞⠥",
  "⠰⠠⠠⠧⠺⠭⠽⠵",
];
// 中級コース課題リスト
var intermediate_task_list_jp = [
  "５０円",
  "４６万",
  "1,000,000",
  "793.4",
  "２，３時間",
  "東京",
  "長野高専",
  "母へのみやげ [ハハエノ　ミヤゲ]",
  "連絡先090-8000-7603 [レンラクサキ 数090継数8000継数7603]",
];
var intermediate_task_list_braille = [
  "⠼⠑⠚⠤⠋⠴",
  "⠼⠙⠋⠵⠴",
  "⠼⠁⠄⠚⠚⠚⠄⠚⠚⠚",
  "⠼⠛⠊⠉⠂⠙",
  "⠼⠃⠼⠉⠐⠳⠡⠴",
  "⠞⠒⠈⠪⠒",
  "⠅⠐⠡⠎⠀⠪⠒⠻⠴",
  "⠥⠥⠋⠎⠀⠷⠌⠐⠫",
  "⠛⠴⠑⠩⠱⠣⠀⠼⠚⠊⠚⠤⠼⠓⠚⠚⠚⠤⠼⠛⠋⠚⠉",
];
// 上級コース課題リスト
var advanced_task_list_jp = ["５０円", "４６万", "1,000,000", "793.4", "２，３時間", "長野市徳間716", "PTA会長"];
var advanced_task_list_braille = ["⠼⠑⠚⠤⠋⠴", "⠼⠙⠋⠵⠴", "⠼⠁⠄⠚⠚⠚⠄⠚⠚⠚", "⠼⠛⠊⠉⠂⠙", "⠼⠃⠼⠉⠐⠳⠡⠴", "⠅⠐⠡⠎⠳⠀⠞⠩⠵⠀⠼⠛⠁⠋", "⠰⠠⠠⠏⠞⠁⠀⠡⠃⠈⠞⠒"];
// ロケール
const locale_en = {
  main_title: "Braille Typing Exercises",
  main_btnFree: "Free Typing",
  main_btnGame: "Typing Game",
  free_title: "Free Typing",
  free_btnBack: "Back",
  game_btnCancel: "×",
  finish_btnRetry: "Retry",
  finish_btnBack: "Back",
};
const locale_ja = {
  main_title: "点字タイピング練習",
  main_btnFree: "入力練習(e)",
  main_btnGame: "ゲーム(g)",
  free_title: "入力練習",
  free_btnBack: "戻る(b)",
  game_btnCancel: "×",
  finish_btnRetry: "もう一回(r)",
  finish_btnBack: "メニューへ(m)",
};
// 効果音
const soundEffect = {
  standard: {
    mistake: "mistakeaudio",
    correct: "correctaudio",
    clear: "clearaudio",
    skip: "skipaudio",
  },
  cute: {
    mistake: "cute_mistakeaudio",
    correct: "cute_correctaudio",
    clear: "cute_clearaudio",
    skip: "cute_skipaudio",
  },
  support: {
    mistake: "support_mistakeaudio",
    correct: "support_correctaudio",
    clear: "support_clearaudio",
    skip: "support_skipaudio",
  },
  cyber: {
    mistake: "cyber_mistakeaudio",
    correct: "cyber_correctaudio",
    clear: "cyber_clearaudio",
    skip: "cyber_skipaudio",
  },
};
// ボタンの座標
const square_freeTyping = {
  x: 100,
  y: 500,
  w: 250,
  h: 50,
};
const square_typingGame = {
  x: 450,
  y: 500,
  w: 250,
  h: 50,
};
const square_freeBack = {
  x: 600,
  y: 40,
  w: 150,
  h: 50,
};
const square_gameCancel = {
  x: 10,
  y: 10,
  w: 30,
  h: 30,
};
const square_finishRetry = {
  x: 275,
  y: 400,
  w: 250,
  h: 50,
};
const square_finishBack = {
  x: 275,
  y: 460,
  w: 250,
  h: 50,
};
const colorPalette = {
  gray1: "#F7F9F9",
  gray2: "#DEE3E6",
  gray3: "#B5BAC2",
  gray4: "#717A84",
  gray5: "#333333",
  red1: "#FC8E9A",
  red2: "#FF5569",
  yellow1: "#FFFF77",
  yellow2: "#FFFF00",
};
const screenName = {
  menu: "0",
  free: "1",
  game1: "2",
  game2: "3",
  finish: "4",
};
// グローバル変数
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

// ゲームで動いている点字を表現するクラス
// update()で位置を設定し、draw()で描画している
var BrailleLine = class {
  constructor(braille, x, y, dx, dy, timestamp) {
    this.braille = braille;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.angle = 0;
    this.timestamp = timestamp;
    this.before = true;
    this.clearUp = false;
    this.outside = false;
    this.normal = true;
    this.open = false;
    this.close = false;
    this.wallPass = false;
    if (lowVision) {
      this.clearColor = colorPalette.yellow2;
      this.defaultColor = "white";
    } else {
      this.clearColor = colorPalette.red1;
      this.defaultColor = colorPalette.gray4;
    }
  }
  draw() {
    if (this.normal) {
      if (this.clearUp) {
        putBrailleNormal(this.braille, this.x, this.y, this.clearColor);
      } else {
        putBrailleNormal(this.braille, this.x, this.y, this.defaultColor);
      }
    } else if (this.open) {
      if (this.clearUp) {
        putBrailleRotate(this.braille, this.x, this.y, this.angle, this.clearColor);
      } else {
        putBrailleRotate(this.braille, this.x, this.y, this.angle, this.defaultColor);
      }
    } else if (this.close) {
      if (this.clearUp) {
        putBrailleRotate(this.braille, this.x, this.y, this.angle, this.clearColor);
      } else {
        putBrailleRotate(this.braille, this.x, this.y, this.angle, this.defaultColor);
      }
    } else {
      if (this.clearUp) {
        putBrailleHorizontal(this.braille, this.x, this.y, this.clearColor);
      } else {
        putBrailleHorizontal(this.braille, this.x, this.y, this.defaultColor);
      }
    }
  }
  update(timestamp) {
    if (time_remaining > 0) {
      if (this.x === max_moveX) {
        if (this.y > min_moveY) {
          if (this.y < 320) {
            this.normal = false;
            this.open = true;
            this.angle += 2;
            if (this.angle > 90) {
              this.normal = false;
              this.open = false;
              this.angle = 90;
            }
            this.y -= this.dy * 3;
          } else {
            this.y -= this.dy * 3;
          }
        } else {
          this.x -= this.dx;
          this.normal = false;
        }
      } else {
        if (this.x > center_moveX && this.x < max_moveX) {
          this.x -= this.dx;
        } else if (this.x === center_moveX) {
          if (this.y < max_moveY) {
            this.y += this.dy;
          } else if (this.y === max_moveY) {
            if (this.clearUp) {
              this.x -= this.dx;
              this.normal = false;
              this.open = false;
              this.close = false;
            } else {
              skipped++;
              if (soundEffectName != "none") {
                document.getElementById(soundEffect[soundEffectName]["skip"]).play();
              }
              //pos = abcPos;
              this.outside = true;
              //cancelAnimationFrame(animaid);
            }
          }
        } else {
          if (this.x > min_moveX) {
            this.x -= this.dx;
            this.timestamp = timestamp;
          } else {
            this.wallPass = true;
            if (this.y > min_moveY) {
              if (this.y < 370) {
                this.normal = false;
                this.open = false;
                this.close = true;
                this.angle -= 2;
                if (this.angle < 0) {
                  this.normal = true;
                  this.close = false;
                }
                this.y -= this.dy * 3;
              } else {
                this.y -= this.dy * 3;
              }
            } else {
              this.outside = true;
            }
          }
        }
      }
    }
  }
  setClearUp() {
    this.clearUp = true;
  }
};
// 入力課題が達成できなかった時に表示する煙を表現するクラス
// smoke.pngに5コマの絵があり、0.2秒お気に切り替えて表示している。
// update()でコマを移動し、draw()で描画
var Explosion = class {
  constructor(x, y, size) {
    this.image = new Image();
    this.image.src = ".../../assets/images/smoke.png";
    this.sw = 200;
    this.sh = 179;
    this.size = size;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.timeSinceLastFrame = 0;
    this.frameInterval = 200;
    this.smoke = true;
  }
  draw() {
    if (this.smoke) {
      context.drawImage(this.image, this.frame * this.sw, 0, this.sw, this.sh, this.x, this.y, this.size, this.size);
    }
  }
  update(deltatime) {
    this.timeSinceLastFrame += deltatime;
    if (this.timeSinceLastFrame > this.frameInterval) {
      this.frame++;
      this.timeSinceLastFrame = 0;
      if (this.frame > 5) this.smoke = false;
    }
  }
};
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

//-------------------------
/*
var btn_freeTyping = false;
var btn_typingGame = false;
var btn_freeBack = false;
var btn_finishBack = false;
var rect = null;

// Canvas上にマウスが乗った時
function onMouseOver(e) {
    rect = e.target.getBoundingClientRect();
    canvas.addEventListener('mousemove', onMouseMove, false);
}
// Canvasからマウスが離れた時
function onMouseOut() {
    canvas.removeEventListener('mousemove', onMouseMove, false);
}
// Canvas上でマウスが動いている時
function onMouseMove(e) {
    // マウスが動く度に要素上に乗っているかかどうかをチェック
    moveActions.updateTargetFlag(e);

    // 実行する関数には、間引きを噛ませる
    if (btn_freeTyping || btn_typingGame || btn_freeBack || btn_finishBack) {
        moveActions.throttle(moveActions.over, 50);
    } else {
        moveActions.throttle(moveActions.out, 50);
    }
}

// mouseMoveで実行する関数
var moveActions = {
    timer: null,
    / targetFlagの更新
    updateTargetFlag: function (e) {
        const point = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        console.log("x: " + point.x + ", y: " + point.y);
        // 最後の50は、該当する要素の半サイズを想定
        btn_freeTyping =
            (square_freeTyping.x <= point.x && point.x <= square_freeTyping.x + square_freeTyping.w)
            && (square_freeTyping.y <= point.y && point.y <= square_freeTyping.y + square_freeTyping.h)
        btn_typingGame =
            (square_typingGame.x <= point.x && point.x <= square_typingGame.x + square_typingGame.w)
            && (square_typingGame.y <= point.y && point.y <= square_typingGame.y + square_typingGame.h)
        btn_freeBack =
            (square_freeBack.x <= point.x && point.x <= square_freeBack.x + square_freeBack.w)
            && (square_freeBack.y <= point.y && point.y <= square_freeBack.y + square_freeBack.h)
        btn_finishBack =
            (square_finishBack.x <= point.x && point.x <= square_finishBack.x + square_finishBack.w)
            && (square_finishBack.y <= point.y && point.y <= square_finishBack.y + square_finishBack.h)
    },
    // 連続イベントの間引き
    throttle: function (targetFunc, time) {
        var _time = time || 100;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            targetFunc();
        }, _time);
    },
    out: function () {
        drawBtn();
    },
    over: function () {
        drawBtnIsHover();
    }
};

function drawBtn() {
    console.log("Called drawBtn();" + btn_freeTyping + ", " + btn_typingGame);
    // デフォルトもしくはマウスが要素から離れた時の描画処理
    if (!btn_freeTyping && screen_name == screenName.menu) {
        context.fillStyle = colorPalette.gray2;
        context.strokeStyle = colorPalette.gray2;
        fillRoundRect(context, square_freeTyping.x, square_freeTyping.y, square_freeTyping.w, square_freeTyping.h, 25);
        context.font = 'bold 16pt "メイリオ"';
        context.fillStyle = colorPalette.gray4;
        title = locale_en.main_btnFree;
        tw = context.measureText(title).width;
        context.fillText(title, square_freeTyping.x + square_freeTyping.w / 2 - tw / 2, square_freeTyping.y + square_freeTyping.h - 15);
    }
    if (!btn_typingGame && screen_name == screenName.menu) {
        context.fillStyle = colorPalette.gray2;
        context.strokeStyle = colorPalette.gray2;
        fillRoundRect(context, square_typingGame.x, square_typingGame.y, square_typingGame.w, square_typingGame.h, 25);
        context.font = 'bold 16pt "メイリオ"';
        context.fillStyle = colorPalette.gray4;
        title = locale_en.main_btnGame;
        tw = context.measureText(title).width;
        context.fillText(title, square_typingGame.x + square_typingGame.w / 2 - tw / 2, square_typingGame.y + square_typingGame.h - 15);
    }
}
function drawBtnIsHover() {
    console.log("Called drawBtnIsHover();");
    // マウスが要素に乗った時の描画処理
    if (btn_freeTyping && screen_name == screenName.menu) {
        context.fillStyle = colorPalette.red2;
        context.strokeStyle = colorPalette.red2;
        fillRoundRect(context, square_freeTyping.x, square_freeTyping.y, square_freeTyping.w, square_freeTyping.h, 25);
        context.font = 'bold 16pt "メイリオ"';
        context.fillStyle = 'white';
        title = locale_en.main_btnFree;
        tw = context.measureText(title).width;
        context.fillText(title, square_freeTyping.x + square_freeTyping.w / 2 - tw / 2, square_freeTyping.y + square_freeTyping.h - 15);
    }
    if (btn_typingGame && screen_name == screenName.menu) {
        context.fillStyle = colorPalette.red2;
        context.strokeStyle = colorPalette.red2;
        fillRoundRect(context, square_typingGame.x, square_typingGame.y, square_typingGame.w, square_typingGame.h, 25);
        context.font = 'bold 16pt "メイリオ"';
        context.fillStyle = 'white';
        title = locale_en.main_btnGame;
        tw = context.measureText(title).width;
        context.fillText(title, square_typingGame.x + square_typingGame.w / 2 - tw / 2, square_typingGame.y + square_typingGame.h - 15);
    }
}
*/
//-------------------------

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
    brailleLines.push(new BrailleLine(b, 650, 450, 10, 1, 0));
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
