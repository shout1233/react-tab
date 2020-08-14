import callApi from "../../common/util/api";
import { actions } from ".";
import { loadingActions } from "../../common/loading/state";
import { snackbarActions } from "../../common/snackbar/state";

export const fetchList = (params) => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));

  try {
    const response = await callApi({
      url: "/base/goods",
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

export const insertGood = (good) => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));
  const newGridRow = { ...good };
  try {
    const response = await callApi({
      url: "/base/goods",
      method: "post",
      data: good,
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

export const deleteGood = (goodId) => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));

  try {
    const response = await callApi({
      url: "/base/goods/" + goodId,
      method: "delete",
    });

    console.log("server 응답");
    console.log(response);
    dispatch(actions.deleteFromList(goodId));
    dispatch(loadingActions.setValue("open", false));
    dispatch(snackbarActions.setOpen("삭제됐습니다.", "success"));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};
