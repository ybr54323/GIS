import React, {useState, useContext} from 'react';
import './index.css'
import {Icon, Button} from "zarm";
import {GlobalContext} from '../Index/index';

export default function Node(props) {

  const [data, setData] = useState(props);
  const {checkedChildNodeList, checkedGoodList, name, childNodeList, goodList} = data;

  const GC = useContext(GlobalContext);

  const rendChild = (list) => {
    if (!Array.isArray(list)) return <span>no data</span>;
    return list.map(n => <Node key={n.id} {...n}/>)
  }

  const rendGood = (list) => {
    if (!Array.isArray(list)) return <span>no data</span>;
    return list.map(n => <p key={n.id}>{n.name}</p>);
  }

  const changeVisibility = (list) => ({visibility: list.length > 0 ? 'visible' : 'hidden'})

  return (
    <>
      <div>
        <div className='icon-box' onClick={GC.handleOpenChildNode.bind(null, data, setData)}
             style={changeVisibility(childNodeList)}
        >
          <Icon type={checkedChildNodeList ? 'arrow-bottom' : 'arrow-right'} theme="primary" size='sm'/>
        </div>

        {name}

        <div className='icon-box'>
          <Button onClick={GC.handleEditAction.bind(null, data, setData)}
                  size='xs' shape="round" theme="default">编辑</Button>
        </div>

        <div className='node-con' style={{display: checkedChildNodeList ? 'block' : 'none'}}>

          <div className='icon-box' onClick={GC.handleOpenGood.bind(null, data, setData)}
               style={changeVisibility(goodList)}
          >
            <Icon type={checkedGoodList ? 'arrow-bottom' : 'arrow-right'} theme="primary" size='sm'/>
          </div>
          <div className='good-con' style={{display: checkedGoodList ? 'block' : 'none'}}>
            {rendGood(goodList)}
          </div>
          {rendChild(childNodeList)}
        </div>


      </div>
    </>
  )
}
