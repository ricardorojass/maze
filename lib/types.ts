export interface IMaze {
  addWall(p: Position): void
  addBomb(p: Position): Position
  addReward(p: Position): Position
  getPosition(): Position
  getRobot(): IRobot
  moveUp(): IMovementResult
  moveDown(): IMovementResult
  moveLeft(): IMovementResult
  moveRight(): IMovementResult
}

export interface IRobot {
  position: Position
  battery: number
}

export interface IPosition {
  x: number
  y: number
}

export interface IMovementResult {
  validMove: string
  invalidMove: string
}

export enum MoveResult {
  ValidMove = 'valid move',
  InValidMove = 'invalid move',
}