'use-strict'

import {
  IMaze,
  OperationType,
  Obstacle,
} from "./lib/types"
import createMaze from './lib/maze'
import createBatteryReward from './lib/batteryReward'
import createBatteryBomb from "./lib/batteryBomb"
import createWall from "./lib/wall"
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

  try {
    maze.addReward(createBatteryReward(Obstacle.Reward), [5, 1])
  } catch (err) {
    if (err.message == OperationType.RewardAdded) {
      console.log(OperationType.RewardAdded)
    }
  }

  try {
    maze.addBomb(createBatteryBomb(Obstacle.Bomb), [2, 4])
  } catch (err) {
    if (err.message == OperationType.RewardAdded) {
      console.log(OperationType.RewardAdded)
    }
  }

  console.log(robot.getPosition())

  try {
    maze.moveRight()
  } catch (err) {
    if (err.message == OperationType.ValidMove) {
      console.log(OperationType.ValidMove)
    } else {
      console.log(OperationType.InValidMove)
    }
  }
  try {
    maze.moveRight()
  } catch (err) {
    if (err.message == OperationType.ValidMove) {
      console.log(OperationType.ValidMove)
    } else {
      console.log(OperationType.InValidMove)
    }
  }
  try {
    maze.moveRight()
  } catch (err) {
    if (err.message == OperationType.ValidMove) {
      console.log(OperationType.ValidMove)
    } else {
      console.log(OperationType.InValidMove)
    }
  }

  console.log(robot.getBattery())
  console.log(robot.getPosition())

}

function generateWallByRow(row: number, maze: IMaze) {
  for (let j = 0; j < 10; j++) {
    try {
      maze.addWall(createWall(Obstacle.Wall), [row, j])
    } catch (err) {
      if (err.message == OperationType.WallAdded) {
        console.log(OperationType.WallAdded)
      }
    }

  }
}

main().catch(err => console.log(err))