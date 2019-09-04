let robot = {
  x: null,
  y: null,
  f: "",
}
function place(x, y, f) {
  robot.x = x;
  robot.y = y;
  robot.f = f;
}
// place(0,1,'south')
// place(4,1,'north')
// place(0,4,'east')
// place(3,0,'west')

function move() {
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
}

function report() {
  console.log(robot.x, robot.y, robot.f) 
}