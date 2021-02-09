import React, {useState} from 'react';
import {Button, Cell, Input} from "zarm";

export default function FormAddGood(props) {
  return (
    <>
      <Cell title="物品名">
        <Input
          clearable
          type="text"
          placeholder="请输入子节点名"
        />
      </Cell>
      <Cell>
        <Button
          // disabled={!dirName}
          block theme="primary"
          // onClick={GC.handleAddDirSubmit.bind(GC, dirName)}
        >确认</Button>
      </Cell>
    </>
  )
}
