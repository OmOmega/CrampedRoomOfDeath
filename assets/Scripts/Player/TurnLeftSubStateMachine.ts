import DirectionSubStateMachine from '../../Base/DirectionSubStateMachine'
import StateMachine from '../../Base/StateMachine'
import { DIRECTION_ENUM } from '../../Enum'
import State from '../../Base/State'
import { AnimationClip } from 'cc'

const BASE_URL = 'texture/player/turnleft'

export default class TurnLeftSubStateMachine extends DirectionSubStateMachine {
  constructor(fsm: StateMachine) {
    super(fsm)
    this.stateMachines.set(
      DIRECTION_ENUM.TOP,
      new State(fsm.animationComponent, `${BASE_URL}/top/turnleft`, AnimationClip.WrapMode.Normal),
    )
    this.stateMachines.set(
      DIRECTION_ENUM.BOTTOM,
      new State(fsm.animationComponent, `${BASE_URL}/bottom/turnleft`, AnimationClip.WrapMode.Normal),
    )
    this.stateMachines.set(
      DIRECTION_ENUM.LEFT,
      new State(fsm.animationComponent, `${BASE_URL}/left/turnleft`, AnimationClip.WrapMode.Normal),
    )
    this.stateMachines.set(
      DIRECTION_ENUM.RIGHT,
      new State(fsm.animationComponent, `${BASE_URL}/right/turnleft`, AnimationClip.WrapMode.Normal),
    )
  }
}