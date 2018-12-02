import { createAction } from 'redux-actions';
import { snakeCase } from 'lodash';
import * as constants from './constants';

const actionName = (namespace: string, identifier: string, action: string) =>
  `@${namespace}/${action}_${snakeCase(identifier)}`.toUpperCase();

const syncAction = (actionType: string) =>
  (namespace: string, identifier: string) =>
    createAction(actionName(namespace, identifier, actionType));

export const set = syncAction(constants.ACTION_SET);