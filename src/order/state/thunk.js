import callApi from "../../common/util/api";
import { loadingActions } from "../../common/loading/state";
import { snackbarActions } from "../../common/snackbar/state";

export const insertOrder = () => async (dispatch, getState) => {
  dispatch(loadingActions.setValue("open", true));
  const order = getState().order;

  try {
    const response = await callApi({
      url: "/contract/orders",
      method: "post",
      data: order,
    });

    console.log(response);

    dispatch(loadingActions.setValue("open", false));
    if (getState().snackbar.snackbarOpen === true) {
      dispatch(snackbarActions.setClose());
    }
    dispatch(snackbarActions.setOpen("등록됐습니다.", "success"));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    dispatch(snackbarActions.setOpen("주문등록 실패했습니다..", "error"));
    throw e;
  }
};

export const fetchGoodList = () => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));

  try {
    const response = await callApi({
      url: "/base/goods",
    });

    console.log(response);

    dispatch(loadingActions.setValue("open", false));

    return Promise.resolve(response.data);
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};
