import React, { useReducer, useRef } from 'react'
import reducer , { initState } from './reducer'
import { addJob, deleteJob, setJob } from './action'
import logger from './logger' // cách log ra mà không cần log trực tiếp


export default function RenderTodos() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs }: any = state
  console.log('jobs', jobs);
  const inputRef: any = useRef()

  return (
    <div>
      <h3>Todo App</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder={'Enter todo .........'}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(addJob(job)); dispatch(setJob('')); inputRef.current.focus()
          }
        }}
        onChange={(e) => { dispatch(setJob(e.target.value)) }} />
      <button onClick={() => { dispatch(addJob(job)); dispatch(setJob('')); inputRef.current.focus() }}>Add</button>


      <ul>
        {jobs.map((jobs: any, index: any) => {
          return (
            <li key={index} >
              {jobs}
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/OOjs_UI_icon_close-ltr-destructive.svg/480px-OOjs_UI_icon_close-ltr-destructive.svg.png'
                style={{ width: 20, height: 20, left: 20, marginTop: 0 }}
                onClick={() => { dispatch(deleteJob(index)) }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  )
}