export const braille_key_to_ueb_lower_alphabets = {
  0b100000: "a", // Braille A
  0b110000: "b", // Braille B
  0b100100: "c", // Braille C
  0b100110: "d", // Braille D
  0b100010: "e", // Braille E
  0b110100: "f", // Braille F
  0b110110: "g", // Braille G
  0b110010: "h", // Braille H
  0b010100: "i", // Braille I
  0b010110: "j", // Braille J
  0b101000: "k", // Braille K
  0b111000: "l", // Braille L
  0b101100: "m", // Braille M
  0b101110: "n", // Braille N
  0b101010: "o", // Braille O
  0b111100: "p", // Braille P
  0b111110: "q", // Braille Q
  0b111010: "r", // Braille R
  0b011100: "s", // Braille S
  0b011110: "t", // Braille T
  0b101001: "u", // Braille U
  0b111001: "v", // Braille V
  0b010111: "w", // Braille W
  0b101101: "x", // Braille X
  0b101111: "y", // Braille Y
  0b101011: "z", // Braille Z
};

export const braille_key_to_ueb_upper_alphabets = {
  0b100000: "A", // Braille A
  0b110000: "B", // Braille B
  0b100100: "C", // Braille C
  0b100110: "D", // Braille D
  0b100010: "E", // Braille E
  0b110100: "F", // Braille F
  0b110110: "G", // Braille G
  0b110010: "H", // Braille H
  0b010100: "I", // Braille I
  0b010110: "J", // Braille J
  0b101000: "K", // Braille K
  0b111000: "L", // Braille L
  0b101100: "M", // Braille M
  0b101110: "N", // Braille N
  0b101010: "O", // Braille O
  0b111100: "P", // Braille P
  0b111110: "Q", // Braille Q
  0b111010: "R", // Braille R
  0b011100: "S", // Braille S
  0b011110: "T", // Braille T
  0b101001: "U", // Braille U
  0b111001: "V", // Braille V
  0b010111: "W", // Braille W
  0b101101: "X", // Braille X
  0b101111: "Y", // Braille Y
  0b101011: "Z", // Braille Z
};

export const braille_key_to_ueb_numbers = {
  0b100000: "1",
  0b110000: "2",
  0b100100: "3",
  0b100110: "4",
  0b100010: "5",
  0b110100: "6",
  0b110110: "7",
  0b110010: "8",
  0b010100: "9",
  0b010110: "0",
};

export const braille_key_to_ueb_unicode = {
  0b000000: "⠀", // space

  // alphabets
  0b100000: "⠁", // letter A
  0b110000: "⠃", // letter B
  0b100100: "⠉", // letter C
  0b100110: "⠙", // letter D
  0b100010: "⠑", // letter E
  0b110100: "⠋", // letter F
  0b110110: "⠛", // letter G
  0b110010: "⠓", // letter H
  0b010100: "⠊", // letter I
  0b010110: "⠚", // letter J

  0b101000: "⠅", // letter K
  0b111000: "⠇", // letter L
  0b101100: "⠍", // letter M
  0b101110: "⠝", // letter N
  0b101010: "⠕", // letter O
  0b111100: "⠏", // letter P
  0b111110: "⠟", // letter Q
  0b111010: "⠗", // letter R
  0b011100: "⠎", // letter S
  0b011110: "⠞", // letter T

  0b101001: "⠥", // letter U
  0b111001: "⠧", // letter V
  0b010111: "⠺", // letter W
  0b101101: "⠭", // letter X
  0b101111: "⠽", // letter Y
  0b101011: "⠵", // letter Z

  // numbers
  0b100000: "⠂", // 1
  0b110000: "⠆", // 2
  0b100100: "⠒", // 3
  0b100110: "⠲", // 4
  0b100010: "⠢", // 5
  0b110100: "⠖", // 6
  0b110110: "⠶", // 7
  0b110010: "⠦", // 8
  0b010100: "⠔", // 9
  0b010110: "⠴", // 0

  // indicators
  0b001111: "⠼", // numeric
  0b000001: "⠠", // capital letter
  0b000000: "⠠⠠", // word
  0b000000: "⠠⠠⠠", // passage
  0b000000: "⠠⠄", // capital terminator

  /*
  // punctuation
  0b010000: "⠂", // Braille comma (,)
  0b000000: "⠄", // Braille period (.)
  0b000000: "⠊", // Braille apostrophe (')
  0b011010: "⠖", // Braille colon (:)
  0b000000: "\u2829", // Braille dash (–)
  0b000000: "", // long dash
  0b000000: "⠌", // Braille exclamation mark (!)
  0b000000: "⠎", // Braille hyphen (-)
  0b000000: "⠈", // Braille question mark (?)
  0b011000: "⠆", // Braille semicolon (;)


  0b000000: "⠜", // Braille slash (/)
  0b000000: "⠠", // Braille space
  0b000000: "⠁", // Braille capital sign
  0b000000: "⠰", // Braille opening parenthesis (⠷)
  0b000000: "⠱", // Braille closing parenthesis (⠾)
  0b000000: "\u2828", // Braille quotation mark (")
  0b000000: "\u2832", // Braille opening bracket ([)
  0b000000: "\u2833", // Braille closing bracket (])
  0b000000: "\u2834", // Braille number sign (#)
  0b000000: "\u282C", // Braille colon (:)
  */
};

export const word_list = [
  [
    // level 1
    ["boy", "boy", "unicode", "boy", "123"],
  ],
];

export const locale_en = {
  main_title: "Braille Typing Exercises",
  main_btnFree: "Free Typing",
  main_btnGame: "Typing Game",
  free_title: "Free Typing",
  free_btnBack: "Back",
  game_btnCancel: "×",
  finish_btnRetry: "Retry",
  finish_btnBack: "Back",
};

export const locale_ja = {
  main_title: "点字タイピング練習",
  main_btnFree: "入力練習(e)",
  main_btnGame: "ゲーム(g)",
  free_title: "入力練習",
  free_btnBack: "戻る(b)",
  game_btnCancel: "×",
  finish_btnRetry: "もう一回(r)",
  finish_btnBack: "メニューへ(m)",
};
