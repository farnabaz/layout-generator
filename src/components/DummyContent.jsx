import React, { useState } from 'react'

export default function DummyContent() {
    const [value, setValue] = useState(Math.ceil(Math.random() * 1000));
    return (
      <div onClick={() => setValue(Math.ceil(Math.random() * 1000))}>
        {value}
      </div>
    )
}