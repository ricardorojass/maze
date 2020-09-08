import {
  IMaze,
  IRobot,
  MoveResult,
  IPosition
} from './types'

let matrix: boolean[][] = []
let bombs: boolean[][] = []

function createMaze (dimension: IPosition, initialPos: number[], endPos: number[]) {


  matrix = Array.from({length: dimension.x}, () => Array.from({length: dimension.y}, () => false))
  bombs = Array.from({length: dimension.x}, () => Array.from({length: dimension.y}, () => false))

  return {
    addWall,
    addBomb
  }
}

function addWall (p: IPosition): void {
  matrix[p.x][p.y] = true
}

function addBomb (p: IPosition): void {
  bombs[p.x][p.y] = true
  console.log(bombs);

}


module.exports = {
  createMaze
}