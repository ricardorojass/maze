export interface IMaze {
  addWall(wall: IWall, p: number[]): string
  addBomb(bomb: IObstacleBase, p: number[]): string
  addReward(reward: IObstacleBase, p: number[]): string
  getRobot(): IRobot
  getMaze(): string[][]
  getReward(position: number[]): string
  moveUp(): string
  moveDown(): string
  moveLeft(): string
  moveRight(): string
}

export interface IWall {
  getType(): Obstacle
  getPosition(): void
  setPosition(p: number[]): void
}

export interface MazeProps {
  dimension: number[]
  initialPos: number[]
  endPos: number[]
}

export interface IRobot {
  getPosition(): number[]
  setPosition(p: number[]): number[]
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

export interface IObstacleBase {
  getType(): Obstacle
  getPosition(): number[]
  setPosition(p: number[]): void
  apply(robot: IRobot): string
}

export interface RewardBase {
  apply(): string
}

export interface AbstractFactoryReward {
  batteryReward(p: number[]): RewardBase
  doubleBatteryReward(p: number[]): RewardBase
}

export enum OperationType {
  BombAdded = 'bomb added',
  RewardAdded = 'reward added',
  WallAdded = 'wall added',
  ValidMove = 'valid move',
  InValidMove = 'invalid move',
}

export enum Obstacle {
  Wall,
  NoWall,
  Bomb,
  Reward,
}