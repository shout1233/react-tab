import callApi from "../../common/util/api";
import { loadingActions } from "../../common/loading/state";
import { snackbarActions } from "../../common/snackbar/state";
import { actions } from ".";

export const saveDelivery = () => async (dispatch, getState) => {
  dispatch(loadingActions.setValue("open", true));
  const delivery = getState().delivery.selectedDelivery;

  try {
    const response = await callApi({
      url: "/delivery/deliveries",
      method: "post",
      data: delivery,
    });

    console.log(response);

    dispatch(loadingActions.setValue("open", false));
    dispatch(snackbarActions.setOpen("등록됐습니다.", "success"));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};

export const fetchDeliveryList = () => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));

  try {
    const response = await callApi({
      url: "/delivery/deliveries",
    });

    console.log(response);

    dispatch(loadingActions.setValue("open", false));
    dispatch(actions.setList(response.data));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};
