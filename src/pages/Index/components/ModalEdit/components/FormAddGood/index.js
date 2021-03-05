import React, {useState, useContext} from 'react';
import {Button, Cell, Input} from "zarm";
import {GlobalContext} from "../../../../index";

export default function FormAddGood(props) {

  const [goodName, setGoodName] = useState('');
  const GC = useContext(GlobalContext);

  return (
    <>
      <Cell title="物品名">
        <Input
          clearable
          type="text"
          placeholder="请输入物品名"
          value={goodName}
          onChange={setGoodName}
        />
      </Cell>
      <Cell>
        <Button
          block theme="primary"
          onClick={GC.handleAddGoodSubmit.bind(null, goodName)}
        >确认</Button>
      </Cell>
    </>
  )
}
