import {
  createSetValueAction,
  createReducer,
  setValueReducer,
  NOT_IMMUTABLE,
} from "../../common/redux-helper";
import { initialState } from "./initialState";

export const Types = {
  SetValue: "todo/SetValue",
  SetTodoList: "todo/SetTodoList",
  FetchTodoList: "todo/FetchTodoList",
  AddTodo: "todo/AddTodo",
  Initialize: "todo/Initialize",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  setTodoList: (todoList) => ({
    type: Types.SetTodoList,
    todoList,
  }),
  fetchTodoList: (userId) => ({
    type: Types.FetchTodoList,
    userId,
  }),
  addTodo: (todo) => ({
    type: Types.AddTodo,
    todo,
  }),
  initialize: () => ({
    type: Types.Initialize,
    [NOT_IMMUTABLE]: true,
  }),
};

const reducer = createReducer(initialState, {
  [Types.SetValue]: setValueReducer,
  [Types.SetTodoList]: (state, action) => {
    state.todoGrid.rowData = action.todoList;
  },
  [Types.AddTodo]: (state, action) => {
    state.todoGrid.rowData.push(action.todo);
  },
  [Types.Initialize]: () => initialState,
});

export default reducer;
