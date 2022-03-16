import { _decorator, Component, Node, instantiate, Prefab, director, view } from 'cc';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;
import Levels, { ILevel } from '../Levels';
import { TILE_HEIGHT, TILE_WIDTH } from './TileManager';

const size = view.getVisibleSize();
export const SCREEN_WIDTH = size.width;
export const SCREEN_HEIGHT = size.height;

// @ts-ignore
if (window.vConsole) {
  // @ts-ignore
  window.vConsole.$dom.style.display = 'none';
}

@ccclass('BattleManager')
export class BattleManager extends Component {
  @property(Node)
  stage: Node = null;

  @property(Prefab)
  tileMap: Prefab = null;

  private level: ILevel;

  start() {
    this.initLevel();
  }

  initLevel() {
    const level = Levels['level' + DataManager.Instance.levelIndex];
    if (level) {
      //生成新关卡数据
      this.level = level;
      // //地图信息
      DataManager.Instance.mapInfo = this.level.mapInfo;
      DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
      DataManager.Instance.mapColumnCount = this.level.mapInfo[0]?.length || 0;

      this.generateTileMap();
    }
  }

  generateTileMap() {
    const tileMap = instantiate(this.tileMap);
    tileMap.setParent(this.stage);
    this.adaptMapPos();
  }

  adaptMapPos() {
    const { mapRowCount, mapColumnCount } = DataManager.Instance;
    const disX = (TILE_WIDTH * mapRowCount) / 2;
    const disY = (TILE_HEIGHT * mapColumnCount) / 2 + 75;
    this.stage.setPosition(-disX, disY);
  }
}