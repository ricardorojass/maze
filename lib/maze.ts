import {
  IMaze,
  IRobot,
  MoveResult,
  IPosition,
  IMovementResult
} from './types'
import createRobot from './robot'

let maze: boolean[][] = []
let bombs: boolean[][] = []
let rewards: boolean[][] = []
let robot: IRobot

function createMaze (dimension: number[], initialPos: number[], endPos: number[]): IMaze {
  const [ rows, cols ] = dimension
  maze = Array.from({length: rows}, () => Array.from({length: cols}, () => false))
  bombs = Array.from({length: rows}, () => Array.from({length: cols}, () => false))
  rewards = Array.from({length: rows}, () => Array.from({length: cols}, () => false))
  robot = createRobot(initialPos)

  return {
    addWall,
    addBomb,
    addReward,
    getRobot,
    getMaze,
    getBombs,
    getRewards,
    moveUp,
    moveDown,
    moveLeft,
    moveRight
  }
}

function addWall (p: IPosition): void {
  maze[p.x][p.y] = true
}

function addBomb (p: number[]): void {
  const [ x, y ] = p
  bombs[x][y] = true
}

function addReward (p: number[]): void {
  const [ x, y ] = p
  rewards[x][y] = true
}

function getRobot (): IRobot {
  return robot
}

function getMaze (): boolean[][] {
  return maze
}

function getBombs (): boolean[][] {
  return bombs
}

function getRewards (): boolean[][] {
  return rewards
}

function moveUp (): string {
  const position = robot.getPosition()
  const isThereWall = maze[position.x-1][position.y] ? true : false

  if (isThereWall) {
    throw new Error(MoveResult.InValidMove)
  } else {
    const nextPosition = { x: position.x-1, y: position.y }
    let robotBattery = robot.getBattery()
    if (isThereReward(nextPosition)) {
      robotBattery += 1
      robot.setBattery(robotBattery)
    }
    if (isThereBomb(nextPosition)) {
      robotBattery -= 1
      robot.setBattery(robotBattery)
    }
    robot.setPosition(nextPosition)
    throw new Error(MoveResult.ValidMove)
  }
}

function moveDown (): string {
  const position = robot.getPosition()
  const isThereWall = maze[position.x+1][position.y] ? true : false

  if (isThereWall) {
    throw new Error(MoveResult.InValidMove)
  } else {
    const nextPosition = { x: position.x+1, y: position.y }
    let robotBattery = robot.getBattery()
    if (isThereReward(nextPosition)) {
      robotBattery += 1
      robot.setBattery(robotBattery)
    }
    if (isThereBomb(nextPosition)) {
      robotBattery -= 1
      robot.setBattery(robotBattery)
    }
    robot.setPosition(nextPosition)
    throw new Error(MoveResult.ValidMove)
  }
}

function moveLeft (): string {
  const position = robot.getPosition()
  const isThereWall = maze[position.x][position.y-1] ? true : false

  if (isThereWall) {
    throw new Error(MoveResult.InValidMove)
  } else {
    const nextPosition = { x: position.x, y: position.y-1 }
    let robotBattery = robot.getBattery()
    if (isThereReward(nextPosition)) {
      robotBattery += 1
      robot.setBattery(robotBattery)
    }
    if (isThereBomb(nextPosition)) {
      robotBattery -= 1
      robot.setBattery(robotBattery)
    }
    robot.setPosition(nextPosition)
    throw new Error(MoveResult.ValidMove)
  }
}

function moveRight (): string {
  // validate walls, rewards && bombs
  const position = robot.getPosition()
  const isThereWall = maze[position.x][position.y+1] ? true : false
  if (isThereWall) {
    throw new Error(MoveResult.InValidMove)
  } else {
    const nextPosition = { x: position.x, y: position.y+1 }
    let robotBattery = robot.getBattery()
    if (isThereReward(nextPosition)) {
      robotBattery += 1
      robot.setBattery(robotBattery)
    }
    if (isThereBomb(nextPosition)) {
      robotBattery -= 1
      robot.setBattery(robotBattery)
    }
    robot.setPosition(nextPosition)
    throw new Error(MoveResult.ValidMove)
  }
}

function isThereReward(nextRobotPosition: IPosition): boolean {
  const { x, y } = nextRobotPosition
  const reward = rewards[x][y]

  return reward
}

function isThereBomb(nextRobotPosition: IPosition): boolean {
  const { x, y } = nextRobotPosition
  const bomb = bombs[x][y]

  return bomb
}

export default createMaze