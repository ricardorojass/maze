'use-strict'

import {
  IMaze,
  OperationType,
  CellType,
} from "./lib/types"
import {
  createWall,
  createBatteryBomb,
  createBatteryReward
} from './lib/cells'

import createMaze from './lib/maze'

const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))



async function main () {
  const command = argv._.shift()

  const mazeProperties = {
    dimension: [10, 10],
    initialPos: [5, 0],
    endPos: [2, 9],
  }

  const maze: IMaze = createMaze(mazeProperties)
  const robot = maze.getRobot()
  generateWallByRow(0, maze)
  generateWallByRow(1, maze)
  generateWallByRow(6, maze)
  generateWallByRow(7, maze)
  generateWallByRow(8, maze)
  generateWallByRow(9, maze)

  maze.addReward([5, 1])
  maze.addObstacle(createBatteryBomb(), [2, 4])

  console.log(robot.getPosition())

  try {
    maze.moveRight()
    console.log(OperationType.ValidMove)
  } catch (err) {
    if (err.name == OperationType.InValidMove) {
      console.log(OperationType.InValidMove)
    }
  }
  try {
    maze.moveRight()
    console.log(OperationType.ValidMove)
  } catch (err) {
    if (err.name == OperationType.InValidMove) {
      console.log(OperationType.InValidMove)
    }
  }
  try {
    maze.moveRight()
    console.log(OperationType.ValidMove)
  } catch (err) {
    if (err.name == OperationType.InValidMove) {
      console.log(OperationType.InValidMove)
    }
  }


  console.log(robot.getBattery())
  console.log(robot.getPosition())

}

function generateWallByRow(row: number, maze: IMaze) {
  for (let j = 0; j < 10; j++) {
    maze.addWall([row, j])
  }
}

main().catch(err => console.log(err))