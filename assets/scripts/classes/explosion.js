export class Explosion {
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
}
