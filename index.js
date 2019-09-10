const robot = {
  placed: false,
  x: null,
  y: null,
  f: '',
};
// define left as if current f === 'NORTH', f = 'EAST', etc.
// define right as if current f === 'NORTH', f = 'WEST', etc.

const place = (x, y, f) => {
  robot.x = x;
  robot.y = y;
  robot.f = f;
  robot.placed = true;
};

const move = () => {
  if (robot.placed === false) {
    return;
  }
  (robot.f === 'north') ? robot.x = robot.x + 1 : (robot.f === 'south') ? robot.x = robot.x - 1 : (robot.f === 'east') ? robot.y = robot.y + 1 : (robot.f === 'west') ? robot.y = robot.y - 1 : null;
  if (robot.x === 5) {
    robot.x = 4;
  }
  if (robot.x === -1) {
    robot.x = 0;
  }
  if (robot.y === 5) {
    robot.y = 4;
  }
  if (robot.y === -1) {
    robot.y = 0;
  }
};

const right = () => {
  if (robot.placed === false) {
    return;
  }
  const direction = robot.f;
  switch (direction) {
    case 'NORTH':
      robot.f = 'EAST';
      break;
    case 'SOUTH':
      robot.f = 'WEST';
      break;
    case 'EAST':
      robot.f = 'SOUTH';
      break;
    case 'WEST':
      robot.f = 'NORTH';
      break;
    default:
      break;
  }
};

const left = () => {
  if (robot.placed === false) {
    return;
  }
  const direction = robot.f;
  switch (direction) {
    case 'NORTH':
      robot.f = 'WEST';
      break;
    case 'SOUTH':
      robot.f = 'EAST';
      break;
    case 'EAST':
      robot.f = 'NORTH';
      break;
    case 'WEST':
      robot.f = 'SOUTH';
      break;
    default:
      break;
  }
};

const report = () => {
  if (robot.placed === false) {
    return;
  }
  console.log(`${robot.x},${robot.y},${robot.f}`);
};

// place(0,1,'south')
// place(4,1,'north')
// place(0,4,'east')
// place(3,0,'west')
