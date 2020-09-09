import { IPosition, IRobot } from "./types";

function createRobot (p: number[]): IRobot {
  const [ x, y ] = p
  let position = { x, y }
  let battery = 5

  function getPosition (): IPosition {
    return position
  }

  function setPosition (p: IPosition): IPosition {
    position = p
    return position
  }

  function getBattery (): number {
    return battery
  }

  function setBattery (value: number): IPosition {
    battery = value
    return position
  }

  return {
    getPosition,
    setPosition,
    getBattery,
    setBattery
  }
}


export default createRobot