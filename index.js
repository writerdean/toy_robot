
class Board {
  constructor(robot) {
    this.robot = {
      placed: false,
      x: null,
      y: null,
      f: '',
    };
  }

  place(x, y, f) {
    this.robot.x = x;
    this.robot.y = y;
    this.robot.f = f;
    this.robot.placed = true;
  }

  move() {
    if (this.robot.placed === false) {
      return;
    }
    const direction = this.robot.f;
    switch (direction) {
      case 'NORTH':
        this.robot.x += 1;
        break;
      case 'SOUTH':
        this.robot.x -= 1;
        break;
      case 'EAST':
        this.robot.y += 1;
        break;
      case 'WEST':
        this.robot.y -= 1;
        break;
      default:
        break;
    }

    if (this.robot.x === 5) {
      this.robot.x = 4;
    }
    if (this.robot.x === -1) {
      this.robot.x = 0;
    }
    if (this.robot.y === 5) {
      this.robot.y = 4;
    }
    if (this.robot.y === -1) {
      this.robot.y = 0;
    }
  }

  right() {
    if (this.robot.placed === false) {
      return;
    }
    const direction = this.robot.f;
    switch (direction) {
      case 'NORTH':
        this.robot.f = 'EAST';
        break;
      case 'SOUTH':
        this.robot.f = 'WEST';
        break;
      case 'EAST':
        this.robot.f = 'SOUTH';
        break;
      case 'WEST':
        this.robot.f = 'NORTH';
        break;
      default:
        break;
    }
  }

  left() {
    if (this.robot.placed === false) {
      return;
    }
    const direction = this.robot.f;
    switch (direction) {
      case 'NORTH':
        this.robot.f = 'WEST';
        break;
      case 'SOUTH':
        this.robot.f = 'EAST';
        break;
      case 'EAST':
        this.robot.f = 'NORTH';
        break;
      case 'WEST':
        this.robot.f = 'SOUTH';
        break;
      default:
        break;
    }
  }

  report() {
    if (this.robot.placed === false) {
      return;
    }
    console.log(`${this.robot.x},${this.robot.y},${this.robot.f}`);
  }
}

console.log(this.robot);

const robot = new Board('joshua');
robot.place(2, 2, 'NORTH');
