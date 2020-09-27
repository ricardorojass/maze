import {
  Cell,
  Item,
  Maze,
  IRobot,
  MazeBuilder,
  MazeOptions
} from './types'
import {
  createWall,
  createEmptyCell,
  createBatteryReward
} from './cells'
import createMaze from './createMaze'

export function mazeBuilder (options: MazeOptions): MazeBuilder {
  const [ rows, cols ] = options.dimension
  const initialRobotPos = options.initialPos
  let maze: Cell[][] & Item[][] = []

  maze = Array.from({length: rows}, () => Array.from({length: cols}, () => createEmptyCell()))

  const builder: MazeBuilder = {
    addWall,
    addReward,
    addObstacle,
    build
  }

  function addWall (p: number[]): MazeBuilder {
    const [x, y] = p
    const wall = createWall()
    maze[x][y] = wall
    return builder
  }

  function addReward (p: number[]): MazeBuilder {
  // validar la posicion y lanzar error si hay
    const [ x, y ] = p
    maze[x][y] = createBatteryReward()
    return builder
  }

  function addObstacle (obstacle: Item, p: number[]): MazeBuilder {
    const [ x, y ] = p
    maze[x][y] = obstacle
    return builder
  }

  function build (): Maze {
    return createMaze(maze, initialRobotPos)
  }

  return builder
}