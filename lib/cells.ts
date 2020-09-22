import {
  Item,
  Cell,
  IRobot,
  CellType,
  Actionable
} from './types'

export function createEmptyCell(): Cell & Actionable {

  function getType (): CellType {
    return CellType.Empty
  }

  function apply (): void {}

  return {
    getType,
    apply
  }
}

export function createWall (): Cell & Actionable {

  function getType (): CellType {
    return CellType.Wall
  }

  function apply (): void {}

  return {
    getType,
    apply
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

  function apply (robot: IRobot): void {
    let robotBattery = robot.getBattery()
    robotBattery -= 1
    robot.setBattery(robotBattery)
  }

  return {
    getType,
    apply
  }
}
