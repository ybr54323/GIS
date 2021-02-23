import React from 'react';
import {Button} from "zarm";
import './index.css';
import {Link} from "react-router-dom";

export default function NoData(props) {
  const {onCreateRoot} = props;

  return (
    <>
      <div className='no-data-con'>
        no data
        <Button
          onClick={onCreateRoot}
          className='button-add-root' block theme="primary">创建根节点</Button>
      </div>

    </>
  )
}
