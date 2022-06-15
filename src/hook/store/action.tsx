import {
    SET_TODO_INPUT,
    ADD_TODO_INPUT,
    DELETE_TODO_INPUT,
    UPDATE_TODO_INPUT
  } from "./type";
  
  export const setTodoInput = (payload:any) => ({
    type: SET_TODO_INPUT,
    payload
  });
  
  export const addTodoInput = (payload:any) => ({
    type: ADD_TODO_INPUT,
    payload
  });
  
  export const deleteTodoInput = (payload:any) => ({
    type: DELETE_TODO_INPUT,
    payload
  });
  
  export const updateTodoInput = (index:any, payload:any) => ({
    type: UPDATE_TODO_INPUT,
    index,
    payload
  });
  