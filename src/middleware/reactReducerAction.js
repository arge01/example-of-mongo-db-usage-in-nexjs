import { toast } from 'react-toastify';
import toastMessage from './toast/toastMessage';

const reactReducerAction =
  (
    type = {
      loading: null,
      success: null,
      error: null,
    },
    actions,
    successCallback,
    errorCallback,
    warningCallback,
    nextData
  ) =>
  async (dispatch) => {
    const message = {
      success: toastMessage(type.success),
      error: toastMessage(type.error),
    };
    dispatch({
      type: type.loading,
    });
    try {
      const payload = await actions();
      const result = dispatch({
        status: payload,
        type: type.success,
        payload: payload?.data,
        info: payload?.data?.message,
        nextData,
      });
      if (result.type === type.success) {
        if (result.payload) {
          toast.success(message.success, {
            position: 'bottom-right',
            autoClose: 3000,
          });
        } else if (result.info) {
          toast.info(result.info, {
            position: 'bottom-right',
            autoClose: 3000,
          });
        }
        if (typeof successCallback === 'function') {
          successCallback();
        }
      } else if (typeof warningCallback === 'function') {
        warningCallback();
      }
      return result;
    } catch (err) {
      const result = dispatch({
        type: type.error,
        payload: err?.message,
      });
      if (typeof result?.payload === 'string') {
        toast.error(result?.payload, {
          position: 'bottom-right',
          autoClose: 3000,
        });
      }
      if (typeof errorCallback === 'function') {
        errorCallback();
      }
      return result;
    }
  };

export default reactReducerAction;
