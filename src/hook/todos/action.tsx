import { ADD_JOB, DELETE_JOB, SET_JOB } from './type'

export const setJob = (payload: any) => {
    return {
        type: SET_JOB,
        payload
    }
}
export const addJob = (payload: any) => {
    return {
        type: ADD_JOB,
        payload
    }
}
export const deleteJob = (payload: any) => {
    return {
        type: DELETE_JOB,
        payload
    }
}