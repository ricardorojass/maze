'use-strict'

import {
  OperationType
} from "./lib/types"

import { mazeBuilder } from "./lib/mazeBuilder"
import { createBatteryBomb } from "./lib/cells"

const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))



async function main () {
  const command = argv._.shift()

  const mazeOptions = {
    dimension: [10, 10],
    initialPos: [3, 0],
    endPos: [1, 3],
  }

  const maze = mazeBuilder(mazeOptions)
    .addWall([0, 0])
    .addWall([0, 1])
    .addWall([0, 2])
    .addWall([0, 3])
    .addWall([1, 0])
    .addWall([2, 0])
    .addWall([2, 2])
    .addWall([2, 3])
    .addWall([3, 2])
    .addWall([3, 3])
    .addReward([3, 1])
    .addObstacle(createBatteryBomb(), [2,1])
    .addObstacle(createBatteryBomb(), [1,1])
    .addObstacle(createBatteryBomb(), [1,2])
    .build()

  const robot = maze.getRobot()
  console.log('initial position: ', robot.getPosition())
  console.log('initial battery: ', robot.getBattery())

  try {
    maze.moveRight()
    console.log(OperationType.ValidMove)
  } catch (err) {
    if (err.name == OperationType.InValidMove) {
      console.log(OperationType.InValidMove)
    }
  }
  try {
    maze.moveUp()
    console.log(OperationType.ValidMove)
  } catch (err) {
    if (err.message == OperationType.InValidMove) {
      console.log(OperationType.InValidMove)
    }
  }
  try {
    maze.moveUp()
    console.log(OperationType.ValidMove)
  } catch (err) {
    if (err.message == OperationType.InValidMove) {
      console.log(OperationType.InValidMove)
    }
  }
  try {
    maze.moveRight()
    console.log(OperationType.ValidMove)
  } catch (err) {
    if (err.message == OperationType.InValidMove) {
      console.log(OperationType.InValidMove)
    }
  }


  console.log('Robot battery: ',robot.getBattery())
  console.log('End position: ',robot.getPosition())

}

main().catch(err => console.log(err))