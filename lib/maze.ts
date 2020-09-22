import {
  IMaze,
  IRobot,
  Item,
  Cell,
  CellType,
  MazeProps,
  OperationType,
} from './types'
import createRobot from './robot'
import {
  createWall,
  createEmptyCell
} from './cells'
import { MovementError } from './errors'

let maze: Cell[][] | Item[][] = []
let robot: IRobot

function createMaze (mazeProps: MazeProps): IMaze {
  const [ rows, cols ] = mazeProps.dimension
  // Refactor utilizar una sola matriz, representado con varios tipos
  maze = Array.from({length: rows}, () => Array.from({length: cols}, () => createEmptyCell()))

  robot = createRobot(mazeProps.initialPos)

  return {
    addWall,
    addObstacle,
    getRobot,
    getMaze,
    moveUp,
    moveDown,
    moveLeft,
    moveRight
  }
}

function addWall (p: number[]): void {
  const [x, y] = p
  const wall = createWall()
  maze[x][y] = wall
}

function addObstacle (obstacle: Item, p: number[]): void {
  // validar la posicion y lanzar error si hay
  const [ x, y ] = p
  maze[x][y] = obstacle
}

function getRobot (): IRobot {
  return robot
}

function getMaze (): Cell[][] {
  return maze
}

function moveUp (): void {

  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const itemInNextPos = maze[x-1][y]

  if (!itemInNextPos) {
    robot.setPosition([x-1, y])
    // Todo, remove throw
    throw new MovementError(OperationType.ValidMove)
  } else {
    const itemType = itemInNextPos.getType()
    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
    }
  }
}

function moveDown (): void {
  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const itemInNextPos = maze[x+1][y]

  if (!itemInNextPos) {
    robot.setPosition([x-1, y])
    // Todo, remove throw
    throw new MovementError(OperationType.ValidMove)
  } else {
    const itemType = itemInNextPos.getType()
    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
    }
  }
}

function moveLeft (): void {
  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const itemInNextPos = maze[x][y-1]

  if (!itemInNextPos) {
    robot.setPosition([x-1, y])
    // Todo, remove throw
    throw new MovementError(OperationType.ValidMove)
  } else {
    const itemType = itemInNextPos.getType()
    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
    }
  }
}

function moveRight (): void {
  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const itemInNextPos = maze[x][y+1]

  if (!itemInNextPos) {
    robot.setPosition([x-1, y])
    // Todo, remove throw
    throw new MovementError(OperationType.ValidMove)
  } else {
    const itemType = itemInNextPos.getType()
    if (itemType == CellType.Wall) {
      throw new MovementError(OperationType.InValidMove)
    } else {
      if (itemType == CellType.Obstacle) {
        itemInNextPos.apply(robot)
      }
    }
  }
}

export default createMaze