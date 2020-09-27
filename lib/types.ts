export interface MazeBuilder {
  addWall(p: number[]): MazeBuilder
  addReward(p: number[]): MazeBuilder
  addObstacle(obstacle: Item, p: number[]): MazeBuilder
  build(): Maze
}

export interface Maze {
  moveUp(): void
  moveDown(): void
  moveLeft(): void
  moveRight(): void
  getRobot(): IRobot
}

export interface MazeOptions {
  dimension: number[]
  initialPos: number[]
  endPos: number[]
}

export interface IMaze {
  addWall(p: number[]): void
  addReward(p: number[]): void
  addObstacle(obstacle: Item, p: number[]): void
  getRobot(): IRobot
  getMaze(): Cell[][]
  moveUp(): void
  moveDown(): void
  moveLeft(): void
  moveRight(): void
}

export interface Cell {
  getType(): CellType
}

export interface Item {
  getType(): CellType
  apply(robot: IRobot): void
}

export interface Actionable {
  apply(robot: IRobot): void
}

export interface MazeProps {
  dimension: number[]
  initialPos: number[]
  endPos: number[]
}

export interface IRobot {
  getPosition(): number[]
  setPosition(p: number[]): void
  getBattery(): number
  setBattery(value: number): void
}

export interface IMovementResult {
  validMove?: string
  invalidMove?: string
}

export interface RewardStrategy {
  apply(): string
}

export enum OperationType {
  BombAdded = 'bomb added',
  RewardAdded = 'reward added',
  WallAdded = 'wall added',
  ValidMove = 'valid move',
  InValidMove = 'invalid move',
}

export enum CellType {
  Empty,
  Wall,
  Reward,
  Obstacle,
}