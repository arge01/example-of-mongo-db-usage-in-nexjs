import { initialState } from '../initial';
import { TYPES } from './type';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.PENDING:
      return {
        ...state,
        loading: true,
      };

    case TYPES.FIND:
      return {
        ...state,
        loading: false,
        isSuccess: payload?.isSuccess,
        entity: payload?.data || {},
      };

    case TYPES.CREATE:
      return {
        ...state,
        loading: false,
        isSuccess: payload?.isSuccess,
        entity: payload?.data || {},
      };

    case TYPES.UPDATE:
      return {
        ...state,
        loading: false,
        isSuccess: payload?.isSuccess,
        update: payload?.data || {},
      };

    case TYPES.DELETE:
      return {
        ...state,
        loading: false,
        isSuccess: payload?.isSuccess,
        delete: payload?.data || {},
      };

    case TYPES.LIST:
      return {
        ...state,
        loading: false,
        isSuccess: payload?.isSuccess,
        entities: payload?.data || [],
      };

    case TYPES.ERROR:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error: payload,
      };

    default:
      return state;
  }
};
