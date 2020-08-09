import { callApi } from "../api/api";
import { actions } from "../state";
import { loadingActions } from "../../common/loading/state";

export const fetchTodoList = (params) => async (dispatch) => {
  dispatch(loadingActions.setValue("open", true));

  try {
    const response = await callApi({
      url: "/todos",
      params,
    });

    dispatch(loadingActions.setValue("open", false));
    dispatch(actions.setTodoList(response.data));
  } catch (e) {
    console.log(e);
    dispatch(loadingActions.setValue("open", false));
    throw e;
  }
};

export const changeTodoList = (todo) => (dispatch, getState) => {
  const todoList = getState().todo.todoGrid.rowData;
  const findTodo = todoList.find(
    (item) => item.userId === Number(todo.userId) && item.id === Number(todo.id)
  );

  if (findTodo) {
    const changedList = todoList.map((item) =>
      item.userId === Number(todo.userId) && item.id === Number(todo.id)
        ? todo
        : item
    );
    dispatch(actions.setTodoList(changedList));
  } else {
    dispatch(actions.addTodo(todo));
  }
};
