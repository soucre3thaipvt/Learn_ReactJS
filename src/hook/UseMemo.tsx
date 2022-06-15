import React, { useMemo, useRef, useState } from 'react'
import ContentMemo from './ContentMemo'
// memo ghi nhớ lại props của 1 component để có render lại component đó hay không để lưu lại component
// 1. memo() => Higher Oder Component (HOC) tránh thực hiện 1 render không cần thiết
// 2. useCallback()
// useMemo tránh thực hiện 1 logic nào đó không cần thiết

const TotalProduct = () => { // Có sử dụng useMemo
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState(() => {
    //@ts-ignore
    const prods = JSON.parse(localStorage.getItem("prods")) || [];
    console.log(prods);
    return prods;
  });
  const nameRef: any = useRef();

  function handleClick() {
    setProducts([
      ...products,
      {
        name,
        price: Number(price)
      }
    ]);
    setName("");
    setPrice("");
    // tự động focus vào input name khi add event xong
    nameRef.current.focus();
    localStorage.setItem(
      "prods",
      JSON.stringify([
        ...products,
        {
          name: name,
          price: Number(price)
        }
      ])
    );
  }

  const tinhTong = useMemo(() => {
    const result = products.reduce((total: any, product: any) => {
      console.log('total không bi re-render lần nữa khi state input thay đổi\n state product thay đổi sẽ render lại: ', total, product);
      return total + product.price;
    }, 0);

    return result;
  }, [products])

  return (
    <div>
      <input
        ref={nameRef}
        type="text"
        placeholder="Tên sản phẩm..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Giá sản phẩm..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClick()
          }
        }}
      />
      <br />
      <button onClick={handleClick}>Add</button>
      Total: {tinhTong}
      <ul>
        {products.map((product: any, i: any) => {
          return (
            <li key={i}>
              {product.name}:  {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function UseMemo() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  return (
    <div>
      <h3>UseMemo</h3>
      <button onClick={() => { setShow(!show) }}> Memo </button>
      {show && <ContentMemo count={count} />}
      <h4>{count}</h4>
      <button onClick={() => { setCount(count + 1) }}> Memo Click</button>
      <br /><br />
      <button onClick={() => { setShowTotal(!showTotal) }}> {showTotal ? 'Tắt bài toán tính sản phẩm' : 'Bài toán tính tổng sản phẩm'} </button>
      {showTotal && <TotalProduct />}
    </div>
  )
}

