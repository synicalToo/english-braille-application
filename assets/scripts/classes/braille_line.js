export class Braille_line {
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
}
