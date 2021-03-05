import Node from '../Node/index';
import React, {useState, useRef} from 'react';

const generate = () => {
  return {
    id: 'dasd132dasd',
    name: 'node1',
    childNodeList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => ({
      id: 'node' + i,
      name: 'node' + i,
      childNodeList: [],
      goodList: [],
    })),
    goodList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => ({
      id: i,
      name: 'good' + i,
    }))
  }
}

const mock = {
  id: 'dasd132dasd',
  name: 'node1',
  childNodeList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => (generate())),
  goodList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => ({
    id: i,
    name: 'good' + i,
  }))
}

export default function Index(props) {

  const {id, name, childNodeList, goodList} = mock;
  const [data, setData] = useState(mock);
  const ref = useRef();
  const handleCreate = () => {
    if (!ref.current.value) return;
    const r = Math.random();
    setData(
      {
        ...data,
        childNodeList: data.childNodeList.concat([
          {
            id: r,
            name: 'node' + r,
            childNodeList: [],
            goodList: [],
          }
        ])
      }
    )
    ref.current.value = '';
  }

  return (
    <>
      <input ref={ref} type="text"/>
      <button onClick={handleCreate}>添加</button>

      <Node
        {...data}
      >
      </Node>
    </>
  )
}
