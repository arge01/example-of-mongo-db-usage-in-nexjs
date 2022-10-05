import reactReducerAction from 'middleware/reactReducerAction';

import { TYPES } from './reducer/type';
import { services } from './services';

export const findAll = (successCallback, errorCallback, warningCallback) =>
  reactReducerAction(
    {
      loading: TYPES.PENDING,
      success: TYPES.LIST,
      error: TYPES.ERROR,
    },
    () => services.findAll(),
    successCallback,
    errorCallback,
    warningCallback
  );

export const find = (id, successCallback, errorCallback, warningCallback) =>
  reactReducerAction(
    {
      loading: TYPES.PENDING,
      success: TYPES.FIND,
      error: TYPES.ERROR,
    },
    () => services.find(id),
    successCallback,
    errorCallback,
    warningCallback
  );

export const create = (data, successCallback, errorCallback, warningCallback) =>
  reactReducerAction(
    {
      loading: TYPES.PENDING,
      success: TYPES.CREATE,
      error: TYPES.ERROR,
    },
    () => services.create(data),
    successCallback,
    errorCallback,
    warningCallback
  );

export const update = (data, successCallback, errorCallback, warningCallback) =>
  reactReducerAction(
    {
      loading: TYPES.PENDING,
      success: TYPES.UPDATE,
      error: TYPES.ERROR,
    },
    () => services.update(data),
    successCallback,
    errorCallback,
    warningCallback
  );

export const del = (id, successCallback, errorCallback, warningCallback) =>
  reactReducerAction(
    {
      loading: TYPES.PENDING,
      success: TYPES.DELETE,
      error: TYPES.ERROR,
    },
    () => services.del(id),
    successCallback,
    errorCallback,
    warningCallback
  );
