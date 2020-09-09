export interface IMaze {
  addWall(p: IPosition): void
  addBomb(p: number[]): void
  addReward(p: number[]): void
  getRobot(): IRobot
  getMaze(): boolean[][]
  getBombs(): boolean[][]
  getRewards(): boolean[][]
  moveUp(): string
  moveDown(): string
  moveLeft(): string
  moveRight(): string
}

export interface IRobot {
  getPosition(): IPosition
  setPosition(p: IPosition): IPosition
  getBattery(): number
  setBattery(value: number): void
}

export interface IPosition {
  x: number
  y: number
}

export interface IMovementResult {
  validMove?: string
  invalidMove?: string
}

export enum MoveResult {
  ValidMove = 'valid move',
  InValidMove = 'invalid move',
}