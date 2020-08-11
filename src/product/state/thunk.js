import { callApi } from "../api/api";
import { actions } from ".";
import { loadingActions } from "../../common/loading/state";
import { snackbarActions } from "../../common/snackbar/state";

export const fetchList = (params) => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));

  try {
    const response = await callApi({
      url: "/products",
      params,
    });

    dispatch(loadingActions.setValue("open", false));
    dispatch(actions.setList(response.data));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};

export const insertProduct = (apiData, gridRow) => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));
  const newGridRow = { ...gridRow };
  try {
    const response = await callApi({
      url: "/products",
      method: "post",
      data: apiData,
    });

    console.log("server 응답");
    console.log(response);
    newGridRow.id = response.data.id;
    dispatch(actions.insertInList(newGridRow));
    dispatch(loadingActions.setValue("open", false));
    dispatch(snackbarActions.setOpen("등록됐습니다.", "success"));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));

  try {
    const response = await callApi({
      url: "/products/" + productId,
      method: "delete",
    });

    console.log("server 응답");
    console.log(response);
    dispatch(actions.deleteFromList(productId));
    dispatch(loadingActions.setValue("open", false));
    dispatch(snackbarActions.setOpen("삭제됐습니다.", "success"));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};
