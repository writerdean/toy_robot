let robot = {
  placed: false,
  x: null,
  y: null,
  f: "",
}

function place(x, y, f) {
  robot.x = x;
  robot.y = y;
  robot.f = f;
  robot.placed = true
}

function move() {
  if (robot.placed == false) {
    return
  }
  (robot.f == 'north') ? robot.x = robot.x + 1 : (robot.f == 'south' ) ? robot.x = robot.x - 1 : (robot.f == 'east' ) ? robot.y = robot.y + 1 : (robot.f == 'west' ) ? robot.y = robot.y - 1 : null
  if (robot.x == 5) {
    robot.x = 4
  }
  if (robot.x == -1) {
    robot.x = 0
  }
  if (robot.y == 5) {
    robot.y = 4
  }
  if (robot.y == -1) {
    robot.y = 0
  }
  console.log(robot.x, robot.y, robot.f) 
}

function right() {
  if (robot.placed == false) {
    return
  }
  if (robot.f == 'north') {
    robot.f = 'east'
  } else if (robot.f == 'east') {
    robot.f = 'south'
  } else if (robot.f == 'south') {
    robot.f = 'west'
  } else if (robot.f == 'west') {
    robot.f = 'north'
  }
  console.log(robot.x, robot.y, robot.f) 
}

let left = () => {
  if (robot.placed == false) {
    return
  }
  if (robot.f == 'north') {
    robot.f = 'west'
  } else if (robot.f == 'west') {
    robot.f = 'south'
  } else if (robot.f == 'south') {
    robot.f = 'east'
  } else if (robot.f == 'east') {
    robot.f = 'north'
  }
  console.log(robot.x, robot.y, robot.f) 
}

function report() {
  if (robot.placed == false) {
    return
  }
  console.log(robot.x, robot.y, robot.f) 
}

// place(0,1,'south')
// place(4,1,'north')
// place(0,4,'east')
// place(3,0,'west')