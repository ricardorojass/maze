import { IPosition, IRobot } from "./types";

function createRobot (p: number[]): IRobot {
  let position = p
  let battery = 5

  function getPosition (): number[] {
    return position
  }

  function setPosition (p: number[]): number[] {
    position = p
    return position
  }

  function getBattery (): number {
    return battery
  }

  function setBattery (value: number): number {
    battery = value
    return battery
  }

  return {
    getPosition,
    setPosition,
    getBattery,
    setBattery
  }
}


export default createRobot