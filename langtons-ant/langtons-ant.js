const printKMoves = (k) => {
  let grid = [...Array(k+1)].map(e => Array(k+1).fill(false))
  let ant = {
    x: Math.ceil(k / 2),
    y: Math.ceil(k / 2),
    direction: 0,
  };
// console.log(grid);
// console.log(ant);

  for (let i = 0; i < k; i++) {
    const oldValue = grid[ant.x][ant.y]
    grid[ant.x][ant.y] = !grid[ant.x][ant.y];
    // console.log(`flip ${ant.x}, ${ant.y}`)

    if(oldValue) {
      // console.log('its black, turn left')
      ant.direction = turnLeft(ant.direction)
    } else {
      // console.log('its white, turn right')
      ant.direction = turnRight(ant.direction)
    }
    const {x, y} = goForward(ant)
    ant = {
      ...ant,
      x,
      y
    }
    // console.log(ant.x, ant.y)
  }

  // console.log(grid);
  return printGrid(grid)
};

const printGrid = grid => {
  return grid.map(row => `${row.map(cell => cell ? '1' : '0').join('')}`).join('\n')
}

const turnLeft = direction => direction - 1 < 0 ? 3 : direction - 1
const turnRight = direction => direction + 1 > 3 ? 0 : direction + 1

const goForward = ({x, y, direction}) => {
  if (direction === 0) {
    // console.log('go east')
    return {x, y: y + 1}
  } else if (direction === 1) {
    // console.log('go south')
    return {x: x + 1, y}
  } else if (direction === 2) {
    // console.log('go west')
    return {x, y: y - 1}
  } else if (direction === 3) {
    // console.log('go north')
    return {x: x - 1, y}
  }
}

module.exports = printKMoves;
