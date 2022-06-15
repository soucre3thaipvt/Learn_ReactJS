import { ADD_JOB, DELETE_JOB, SET_JOB } from './type'

// init state
export const initState = {
    job: '',
    jobs: []
}

const reducer = (state: any, action: any) => {

    switch (action.type) {
        case SET_JOB:
            return  { ...state, job: action.payload }
        case ADD_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return { ...state, jobs: newJobs }
        default:
            return state
    };

}
export default reducer