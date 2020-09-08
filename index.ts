'use-strict'

import { IMaze, IPosition } from "lib/types"

const minimist = require('minimist')
const { createMaze } = require('./lib/maze')
const argv = minimist(process.argv.slice(2))



async function main () {
  const { rows, cols } = argv

  const dimension: IPosition = {
    x: rows,
    y: cols
  }
  const maze = createMaze(dimension)
  const command = argv._.shift()

  const { x, y } = argv
  let position: IPosition = {
    x,
    y
  }
  switch (command) {
    case 'maze:addWall':
      maze.addWall(position)
      break
    case 'maze:addBomb':
      maze.addBomb(position)
      break
    case 'maze:moveUp':
      console.log('new movement');

      break
    case 'maze:moveDown':

      break
    case 'maze:moveLeft':

      break
    case 'maze:moveRight':

      break

    default:
      console.log(`command not found: ${command}`);

      break
  }
}

main().catch(err => console.log(err))