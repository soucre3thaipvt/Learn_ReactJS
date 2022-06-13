import React, { useState } from 'react'


// component được render khi setState
// có thể setState thêm trường mới
const initState = {
  number: 0,
  stringNumber: 'Zero'
}
// mảng 1 chiều: là kiểu ràng buộc khi nhấn handle click //  tương tác với dữ liệu
const gitf = ['CPU i9', 'RAM 32GB RBG', 'RBG Keyboard']
// mảng 2 chiều: nghĩa là khi thay đổi chiều nhập vào input thì chiều render cũng thay đổi theo
interface typeData { id: number, name: string }
const dataCourse: typeData[] = [
  { id: 1, name: 'HTML, CSS' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'ReactJS' },
  { id: 4, name: 'TypeScript' },
]
const dataCars: typeData[] = [
  { id: 1, name: 'Honda' },
  { id: 2, name: 'Yamaha' },
  { id: 3, name: 'C300' },
  { id: 4, name: 'Ahihi' },
]
export default function UseState() {
  const [counter, setCounter] = useState(initState)
  // mangr 1 chiều 
  const [git, setGit] = useState(null)
  // mang 2 chieu
  const [name, setName] = useState('')
  const [checked, setChecked] = useState()
  const [checkBox, setCheckBox] = useState([])
  const [show, setShow] = useState(false)

  const TodoList = () => {
    //@ts-ignore
    const localToDoList = JSON.parse(localStorage.getItem('todo'));
    console.log(localToDoList)
    const [input, setInput] = useState('');
    const [listTodo, setListTodo] = useState(localToDoList ?? []);
    const handleInsert = () => {
      //@ts-ignore
      setListTodo((prev) => {
        //@ts-ignore
        const newJob = [...prev, { name: input, isBoolean: false }]
        localStorage.setItem('todo', JSON.stringify(newJob))
        return newJob;
      });
      setInput('');
    }
    const handleDelete = () => {
      
        //@ts-ignore
        setListTodo((prev) => {
          //@ts-ignore
          const newJob = listTodo.filter(e => e.isBoolean === false)
          localStorage.setItem('todo', JSON.stringify(newJob))
          return newJob;
        })
    }
    const handleCheck = (item: any) => {
      item.isBoolean = !item.isBoolean
      setListTodo((prev: any) => {
        let newJob = [...listTodo];
        localStorage.setItem('todo', JSON.stringify(newJob))
        return newJob;
      });
    }
    return <div>
      <h3>Todo list</h3>
      <label htmlFor='todo'>Nhập công việc cần làm</label>
      <input id='todo' value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleInsert}>Thêm</button>
      <button onClick={handleDelete}>Xóa</button>
      <ul>

        {
          listTodo?.map((item: any, index: number) => (
            <li key={`${index}`} style={item.isBoolean ? { color: 'red', textDecoration: 'line-through' } : {}}>{item.name}
              <input type={'checkbox'} value={item.isBoolean} checked={item.isBoolean} onChange={() => handleCheck(item)} />
            </li>

          ))}
      </ul>
    </div>
  }

  const Content = () =>{
    return <div>
      <h3>Xin chao 500 anh em nha</h3>
    </div>
  }
  const handleCounter = () => {
    setCounter({
      ...counter,
      number: ++counter.number,
      //@ts-ignore
      maxNumber: 100,
    })
    //setState callback 
    setCounter(prev => prev)
    { console.log('data', counter) }
    // callback state 
    setCounter(prev => {
      return {
        ...prev,
        number: prev.number + 1,
        minHeight: 200
      }
    })
  }
  const randomGit = () => {
    const index = Math.floor(Math.random() * gitf.length)
    console.log(index)
    //@ts-ignore
    setGit(gitf[index])
  }
  const handleChangedName = () => {
    setName('Nguyeen Van B')
  }
  console.log(name)
  return (
    <div>
      <h3>UseState {counter.number} {counter.stringNumber}</h3>
      <button onClick={handleCounter}>Click setState</button>

      <h3>{git || 'Chưa có phần thưởng'}</h3>
      <button onClick={randomGit}>Lấy phần thưởng</button>
      <br />

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleChangedName}>Changed</button>

      {dataCourse.map(e =>
        <div key={e.id}>
          <input
            type={'radio'}
            checked={checked === e.id}
            onChange={
              //@ts-ignore
              () => setChecked(e.id)
            }
          />
          <span>{e.name}</span>
        </div>)}
      {dataCars.map(course => {
        return (
          <div key={course.id}>
            <input
              type="checkbox"
              onChange={() => {
                //@ts-ignore
                setCheckBox(pre => {
                  //@ts-ignore
                  const isChecked = checkBox.includes(course.id) // lấy giá trị value của id đó đã tích hay chưa tích true||false
                  console.log('checl ', isChecked)
                  if (isChecked) {
                    // loại bỏ id hiện tại và trả về mảng mới
                    const result = checkBox.filter((item) =>
                      item !== course.id)
                    console.log(result, 'ds')
                    return result
                  } else {
                    return [...pre, course.id]
                  }

                })
              }}
            />
            {course.name}
          </div>
        )
      })
      }

      <TodoList />

      <button onClick={()=>setShow(!show)}>Mounted and Unmounted</button>
      {show&&<Content/>}
    </div>
  )
}
