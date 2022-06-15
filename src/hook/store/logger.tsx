function logger(reducer:any){
    return (state:any, action:any) =>{
        console.group(action.type)
        console.log('Prev State ', state)
        console.log('Action ', action);
        
        const newState = reducer(state,action)

        console.log('New state', newState);
        console.groupEnd()
        return newState
    }
 }
export default logger;