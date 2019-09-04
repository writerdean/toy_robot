let robot = {
  position: {x: null, y: null},
  direction: "",
  move: true
}
function place(x, y, d) {
  robot.position.x = x;
  robot.position.y = y;
  robot.direction = d,
  robot.move = true
}
// place(0,1,'south')
// place(4,1,'north')
// place(0,4,'east')
// place(3,0,'west')

function move() {
  let x = robot.position.x
  let y = robot.position.y
  let direction = robot.direction
  console.log(x, direction)
  if (x == 0 || x == 4) {
    if (x == 0 && direction == 'south') {
      robot.move = false;
    }
    if (x == 4 && direction == 'north') {
      robot.move = false;
    }
  }
  if (y === 0 || y === 4) {
    if (y == 0 && direction == 'west') {
      robot.move = false;
    }
    if (y == 4 && direction == 'wast') {
      robot.move = false;
    }
  }
  console.log(`robot.move`, robot.move)

  if (robot.move==true) {
    direction=='north' ? robot.position.x = robot.position.x+1 : direction=='south' ? robot.position.x = robot.position.x-1 : direction=='east' ? robot.position.y = robot.position.y-1 : robot.position.y = robot.position.y+1
  }
};

function report() {
  let reportDisplay = robot.position.x + robot.position.y + robot.direction + robot.move
  console.log(reportDisplay)
  return reportDisplay
}

//  || (robot.position.x==4 && robot.direction=='north') || (robot.position.y==0 && robot.direction=='west') || (robot.position.y==4 && robot.direction=='east') 