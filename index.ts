'use-strict'

import { IMaze, MoveResult } from "./lib/types"
import createMaze from './lib/maze'
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))



async function main () {
  const command = argv._.shift()

  const dimension = [10, 10]
  const initialPos = [5, 0]
  const endPos = [2, 9]

  const maze: IMaze = createMaze(dimension, initialPos, endPos)
  const robot = maze.getRobot()
  generateWallsByRow(0, maze)
  generateWallsByRow(1, maze)
  generateWallsByRow(6, maze)
  generateWallsByRow(7, maze)
  generateWallsByRow(8, maze)
  generateWallsByRow(9, maze)

  maze.addBomb([5, 2])
  maze.addBomb([3, 2])
  maze.addBomb([2, 2])
  maze.addReward([2, 5])
  maze.addReward([2, 7])

  // console.log(maze.getMaze())
  console.log(robot.getPosition())

  try {
    maze.moveRight()
  } catch (err) {
    if (err.message == MoveResult.ValidMove) {
      console.log(MoveResult.ValidMove)
    } else {
      console.log(MoveResult.InValidMove)
    }
  }
  try {
    maze.moveRight()
  } catch (err) {
    if (err.message == MoveResult.ValidMove) {
      console.log(MoveResult.ValidMove)
    } else {
      console.log(MoveResult.InValidMove)
    }
  }
  try {
    maze.moveRight()
  } catch (err) {
    if (err.message == MoveResult.ValidMove) {
      console.log(MoveResult.ValidMove)
    } else {
      console.log(MoveResult.InValidMove)
    }
  }

  console.log(robot.getBattery())
  console.log(robot.getPosition())

}

function generateWallsByRow (row: number, maze: IMaze) {
  maze.addWall({ x: row, y: 0})
  maze.addWall({ x: row, y: 1})
  maze.addWall({ x: row, y: 2})
  maze.addWall({ x: row, y: 3})
  maze.addWall({ x: row, y: 4})
  maze.addWall({ x: row, y: 5})
  maze.addWall({ x: row, y: 6})
  maze.addWall({ x: row, y: 7})
  maze.addWall({ x: row, y: 8})
  maze.addWall({ x: row, y: 9})
}

main().catch(err => console.log(err))