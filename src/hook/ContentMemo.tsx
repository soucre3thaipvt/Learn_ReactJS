import React, { memo } from 'react'

function ContentMemo({ count, onIncrease }: any) {
  console.log('Khong con bi re-render nua khi thang cha thay doi State')
  return (
    <div>
      <h3>
        Hello anh em nha {count}
      </h3>
      <button onClick={onIncrease}>Click me</button>
    </div>

  )
}

export default memo(ContentMemo)