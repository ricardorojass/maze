import {
  IWall,
  Obstacle,
} from './types'

function createWall (t: Obstacle): IWall {
  let position: number[]
  const type = t

  function getType (): Obstacle {
    return type
  }

  function getPosition (): number[] {
    return position
  }

  function setPosition (p: number[]): void {
    position = p
  }


  return {
    getType,
    getPosition,
    setPosition,
  }
}

export default createWall