import {
  IMaze,
  IWall,
  MazeProps,
  IRobot,
  OperationType,
  IObstacleBase,
  Obstacle
} from './types'
import createRobot from './robot'
import createBatteryReward from './batteryReward'
import createBatteryBomb from './batteryBomb'
import createWall from './wall'

let maze: any[][] = []
let robot: IRobot

function createMaze (mazeProps: MazeProps): IMaze {
  const [ rows, cols ] = mazeProps.dimension
  // Refactor utilizar una sola matriz, representado con varios tipos
  maze = Array.from({length: rows}, () => Array.from({length: cols}, () => undefined))

  robot = createRobot(mazeProps.initialPos)

  return {
    addWall,
    addBomb,
    addReward,
    getRobot,
    getMaze,
    getReward,
    moveUp,
    moveDown,
    moveLeft,
    moveRight
  }
}

function addWall (wall: IWall = createWall(Obstacle.Wall), p: number[]): string {
  const [x, y] = p
  wall.setPosition([x,y])
  maze[x][y] = wall
  throw new Error(OperationType.WallAdded)
}

function addBomb (bomb: IObstacleBase = createBatteryBomb(Obstacle.Bomb), p: number[]): string {
  const [ x, y ] = p
  bomb.setPosition([x,y])
  maze[x][y] = bomb
  throw new Error(OperationType.BombAdded)
}

function addReward (reward: IObstacleBase = createBatteryReward(Obstacle.Reward), p: number[]): string {
  const [ x, y ] = p
  reward.setPosition([x,y])
  maze[x][y] = reward
  throw new Error(OperationType.RewardAdded)
}

function getRobot (): IRobot {
  return robot
}

function getMaze (): string[][] {
  return maze
}

function getReward (position: number[]): string {
  const [x, y] = position
  return maze[x][y]
}

function moveUp (): string {

  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const obstacle = maze[x-1][y]

  if (obstacle == Obstacle.Wall) {
    throw new Error(OperationType.InValidMove)
  } else {
    if (obstacle == Obstacle.Reward) {
      obstacle.apply(robot)
    }
    // Todo: refactorizar B
    if (obstacle == Obstacle.Bomb) {
      obstacle.apply()
    }
    robot.setPosition([x-1, y])
    throw new Error(OperationType.ValidMove)
  }
}

function moveDown (): string {
  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const obstacle = maze[x+1][y]

  if (obstacle == Obstacle.Wall) {
    throw new Error(OperationType.InValidMove)
  } else {
    if (obstacle == Obstacle.Reward) {
      obstacle.apply(robot)
    }
    if (obstacle == Obstacle.Bomb) {
      obstacle.apply()
    }
    robot.setPosition([x+1, y])
    throw new Error(OperationType.ValidMove)
  }
}

function moveLeft (): string {
  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const obstacle = maze[x][y-1]

  if (obstacle == Obstacle.Wall) {
    throw new Error(OperationType.InValidMove)
  } else {
    if (obstacle == Obstacle.Reward) {
      obstacle.apply(robot)
    }
    // Todo: refactorizar B
    if (obstacle == Obstacle.Bomb) {
      obstacle.apply()
    }
    robot.setPosition([x, y-1])
    throw new Error(OperationType.ValidMove)
  }
}

function moveRight (): string {
  const [x, y] = robot.getPosition()
  // Todo: Create Obstacle class
  const obstacle = maze[x][y+1]

  if (obstacle == Obstacle.Wall) {
    throw new Error(OperationType.InValidMove)
  } else {
    if (obstacle == Obstacle.Reward) {
      obstacle.apply(robot)
    }
    // Todo: refactorizar B
    if (obstacle == Obstacle.Bomb) {
      obstacle.apply()
    }
    robot.setPosition([x, y+1])
    throw new Error(OperationType.ValidMove)
  }
}

export default createMaze