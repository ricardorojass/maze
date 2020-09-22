import {
  Item,
  Cell,
  CellType,
  IRobot
} from './types'

export function createEmptyCell(): Cell {

  function getType (): CellType {
    return CellType.Empty
  }

  return {
    getType,
  }
}

export function createWall (): Cell {

  function getType (): CellType {
    return CellType.Wall
  }

  return {
    getType,
  }
}

export function createBatteryReward (): Item {

  function getType (): CellType {
    return CellType.Reward
  }

  function apply (robot: IRobot): void {
    let robotBattery = robot.getBattery()
    robotBattery += 1
    robot.setBattery(robotBattery)
  }

  return {
    getType,
    apply
  }
}

export function createBatteryBomb (): Item {

  function getType (): CellType {
    return CellType.Obstacle
  }

  function apply (robot: IRobot): string {
    let robotBattery = robot.getBattery()
    robotBattery -= 1
    robot.setBattery(robotBattery)
    throw new Error(`Robot battery is now ${robot.getBattery()}`)
  }

  return {
    getType,
    apply
  }
}
