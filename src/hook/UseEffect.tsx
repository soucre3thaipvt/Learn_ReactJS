import React, { useEffect, useState } from 'react'
// useEffect: side effect : sự tác động xẩy ra dẫn tới bị dữ liệu thay đổi ( state ) 
// 1. update DOM // 2. Call API  // 3. Listen DOM render  // 4. Cleanup

function Content() {
  const [title, setTitle] = useState('')
  const [post , setPost] = useState([])
  // 1 useEffect(callback) 
  // - Gọi call back mỗi khi component re-render
  // - Gọi callback sau khi component thêm element vào DOM
  // 2 useEffect(callback, []) 
  // - Chỉ gọi gọi callback 1 lần sau khi 
  // 3 useEffect(callback, [deps]) 

  //--------------
  // 1. callback luôn được gọi sau khi component mounted

  useEffect(() => {
    console.log('Mounted');
    // thay đổi tiêu đề trang web
    document.title = title
    getApi();
  },[])
  const getApi = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json() )
      .then(post => {
        setPost(post)
      })
  }
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {post.map((item:any, index: any)=>(<li key={index}>{item.title}</li>))}
      </ul>
    </div>
  )
}

export default function UseEffect() {
  const [show, setShow] = useState(false)
  
  return (
    <div>
      <h3>UseEffect</h3>
      <button onClick={() => setShow(!show)}>Mounted and Unmounted</button>
      {show && <Content />}
    </div>
  )
}
