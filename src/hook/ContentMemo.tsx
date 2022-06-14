import React ,{memo}from 'react'

function ContentMemo({count}:any) {
    console.log('Khong con bi re-render nua khi thang cha thay doi State')
  return (
    <div>Hello anh em nha {count}</div>
  )
}

export default memo(ContentMemo)