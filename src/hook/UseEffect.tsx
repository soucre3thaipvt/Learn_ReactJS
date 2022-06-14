import React, { useEffect, useState } from 'react'
// useEffect: side effect : sự tác động xẩy ra dẫn tới bị dữ liệu thay đổi ( state ) 
// 1. update DOM // 2. Call API  // 3. Listen DOM render  // 4. Cleanup
const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
function Content() {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState([])
  const [type, setType] = useState(tabs[0])
  const [showGoTop, setShowGoTop] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [countDown, setCountDown] = useState(180)
  const [number, setNumber] = useState(0)
  const [avatar, setAvatar] = useState()
  // 1 useEffect(callback) 
  // - Gọi call back mỗi khi component re-render
  // - Gọi callback sau khi component thêm element vào DOM
  // 2 useEffect(callback, []) 
  // - Chỉ gọi gọi callback 1 lần sau khi // không call api nhiều nữa
  // 3 useEffect(callback, [deps]) 
  // - callback được gọi mỗi khi deps thay đổi

  //--------------
  // 1. callback luôn được gọi sau khi component mounted
  // 2. clean function luôn được gọi khi component unmound
  // 3. clean function luôn được gọi khi callback được gọi (trừ lần mounted đầu tiên)
  console.log(type);

  useEffect(() => {
    console.log('Mounted');
    // thay đổi tiêu đề trang web
    // document.title = title
    getApi(type);
  }, [])
  // 3 useEffect(callback, [deps])  
  useEffect(() => {
    console.log('render 2');

    getApi(type);
  }, [type])

  const getApi = (url: string) => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
      .then(res => res.json())
      .then(post => {
        setPost(post)
      })
  }
  // 3. Listen DOM render 
  // document https://www.w3schools.com/jsref/dom_obj_event.asp
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      window.scrollY >= 1200 ? setShowGoTop(true) : setShowGoTop(false)
      // setShowGoTop(window.scrollY>=200)
    }
    // listen event scroll toan trang
    window.addEventListener('scroll', handleScroll)
    // unmound nhung ko xoa dòng code 49 ở trên
    return () => {
      //gỡ bỏ đi khi unmound
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // reSize
  useEffect(() => {
    const handleReSize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleReSize)
  }, [])

  // setTime out
  useEffect(() => {

    const timeID = setInterval(() => {
      setCountDown(prev => prev - 1)
    }, 1000)

    return () => {
      clearInterval(timeID)
    }
  }, [])
  // useEffect(()=>{
  //     setTimeout(()=>{
  //       setCountDown(countDown-1)
  //     },1000) 
  // },[countDown])

  // 3. clean function luôn được gọi khi callback được gọi (trừ lần mounted đầu tiên)
  // khi giá trị deps thay đổi thì sẽ cleanup và chạy lại useEffect // tránh trùng bộ nhớ
  useEffect(() => {
    console.log('mouted re-render lần ', number); // 1
    return () => {
      console.log('Cleanup func ', number); // 0, khi click cleanup chạy trước

    }
  }, [number])
  const handlePreviewAvatar = (e: any) => {
    // console.log(e);  
    const file = e.target.files[0]
    //@ts-ignore
    file.preview = URL.createObjectURL(file)
    console.log(file);
    setAvatar(file)
  }
  useEffect(() => {
    return () => {
      // xóa ảnh
      avatar && URL.revokeObjectURL(
        //@ts-ignore
        avatar.preview)
      console.log('Cleanup Avatar tránh rò rỉ bộ nhớ');
    }
  }, [avatar])
  return (
    <div>
      <h4>width reSize {width}</h4>
      <h4>Count down {countDown}</h4>
      <button onClick={() => { setNumber(number + 1) }}>Tăng thêm 1</button><h4>Count number {number}</h4>
      <div>
        <label>Thêm ảnh</label>
        <input type={'file'} onChange={(handlePreviewAvatar)} />
        <br />
        {avatar && (<img src={
          //@ts-ignore
          avatar.preview} width={'20%'} />)}
      </div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      {tabs.map(e => <button
        key={e}
        style={type === e ? { backgroundColor: 'green', color: '#fff' } : {}}
        onClick={() => setType(e)}
      >
        {e}
      </button>)}
      <ul>
        {post.map((item: any, index: any) => (<li key={index}>{item.title ?? item.name}</li>))}
        {showGoTop && (<button
          onClick={() => { }}
          style={{ position: 'fixed', bottom: 20, right: 20 }}
        >Go To Top
        </button>)}
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
