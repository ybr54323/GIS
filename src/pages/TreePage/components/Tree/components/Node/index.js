import React, {useState, useContext} from 'react';
import {Popup, Modal, Cell, Button, Select, Message, Icon} from 'zarm';

import {GlobalContext} from "../../../../index";

const renderChild = (children, cb) => {
  if (!Array.isArray(children)) throw new Error('children需要是数组类型');
  if (!children.length) return (
    <div>没有数据</div>
  )
  return children.map((n, i) => <Node key={n.val + '' + i} tree={n} onSelect={cb}/>)
}


export default function Node(props) {

  const {tree, isRoot = false, onSelect} = props;

  const [data, setData] = useState(tree || {});
  console.warn('render Node')


  const handleClick = (...args) => {
    const [t, e] = args;
    e.stopPropagation();
    setData({
      ...t,
      checked: !t.checked
    })
  }

  const hasChild = Array.isArray(data.children) && data.children.length > 0
  const showChild = data.checked;

  const GC = useContext(GlobalContext);

  return (
    <>
      <div
        className={
          `node-box ${isRoot ? 'root-node' : ''}`
        }
      >
        <div className='node-item'
             style={{
               borderRight: showChild && hasChild ? '1px solid #000' : ''
             }}
        >
          {
            !isRoot &&
            (
              <div className='node-line'/>
            )
          }
          <div
            className='node-point'
          >
            {data.val}
            <Button
              onClick={GC.handleEditAction.bind(GC, data)}
              size='xs' shape="round" theme="default">编辑</Button>
            {
              hasChild && (
                <Icon
                  className='icon'
                  onClick={handleClick.bind(null, data)}
                  type={showChild ? 'arrow-bottom' : 'arrow-top'} theme="primary"/>
              )
            }
          </div>
        </div>
        {
          showChild && hasChild && (
            <ul className='node-con'>
              {
                renderChild(data.children, onSelect)
              }
            </ul>
          )
        }

      </div>

    </>
  )
}
