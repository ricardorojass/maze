import {
  IObstacleBase,
  IRobot,
  Obstacle
} from './types'

function createBatteryBomb (t: Obstacle): IObstacleBase {
  let position: number[]
  const type = t

  function getType (): Obstacle {
    return type
  }

  function getPosition (): number[] {
    return position
  }

  function setPosition (p: number[]): string {
    position = p
    throw new Error(`The new Bomb position is ${position}`)
  }

  function apply (robot: IRobot): string {
    let robotBattery = robot.getBattery()
    robotBattery -= 1
    robot.setBattery(robotBattery)
    throw new Error(`Robot battery is now ${robot.getBattery()}`)
  }

  return {
    getType,
    getPosition,
    setPosition,
    apply
  }
}

export default createBatteryBomb