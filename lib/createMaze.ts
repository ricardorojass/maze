import {
  Item,
  Cell,
  Maze,
  IRobot,
  CellType,
  OperationType
} from './types'
import createRobot from './robot'
import { MovementError } from './errors'

let robot: IRobot

const createMaze = (maze: Cell[][] & Item[][], initialPos: number[]): Maze => {
  robot = createRobot(initialPos)

  function moveUp (): void {

    const [x, y] = robot.getPosition()
    // Todo: Create Obstacle class
    const itemInNextPos = maze[x-1][y]
    const itemType = itemInNextPos.getType()

    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {
      if (itemType == CellType.Reward) {
        itemInNextPos.apply(robot)
      }
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
      robot.setPosition([x-1, y])
    }
  }

  function moveDown (): void {
    const [x, y] = robot.getPosition()
    const itemInNextPos = maze[x+1][y]
    const itemType = itemInNextPos.getType()

    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {
      if (itemType == CellType.Reward) {
        itemInNextPos.apply(robot)
      }
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
      robot.setPosition([x+1, y])
    }
  }

  function moveLeft (): void {
    const [x, y] = robot.getPosition()
    const itemInNextPos = maze[x][y-1]
    const itemType = itemInNextPos.getType()

    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {
      if (itemType == CellType.Reward) {
        itemInNextPos.apply(robot)
      }
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
      robot.setPosition([x, y-1])
    }
  }

  function moveRight (): void {

    const [x, y] = robot.getPosition()
    const itemInNextPos = maze[x][y+1]
    const itemType = itemInNextPos.getType()

    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {

      if (itemType == CellType.Reward) {
        itemInNextPos.apply(robot)
      }
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
      robot.setPosition([x, y+1])
    }
  }

  function getRobot (): IRobot {
    return robot
  }

  return {
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    getRobot
  }
}




export default createMaze