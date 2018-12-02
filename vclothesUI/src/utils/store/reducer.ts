import { Map } from 'immutable';
import * as constants from './constants';
import { camelCase } from 'lodash';

const INITIAL_STATE = Map({});

const actionHandlersMap: any = {
  [constants.ACTION_SET]: (storePath: any, payload: any, state: any) =>
    state.setIn(storePath, payload) // Ex: state.setIn(['x', 'y', 'z'], 456) // { x: { y: { z: 456 }}} 
}

export default (state = INITIAL_STATE, action: any = {}) => {
  const { type, payload } = action;

  const actionTypes = [
    constants.ACTION_SET,
  ];

  const actionTypeTegExp = new RegExp(`@([A-Z0-9_]+)\/(${actionTypes.join('|')})\_([A-Z\_]+)`);

  const matchResult = type.match(actionTypeTegExp)

  if (matchResult) {
    const [
      match,
      namespace,
      actionType,
      identifier
    ] = matchResult;

    const storePath = [camelCase(namespace), camelCase(identifier), constants.RESOURCE_TYPE_DATA];

    return actionHandlersMap[actionType](storePath, payload, state);
  }

  return state;
}