import React, {useState, useContext} from 'react';
import {Button, Cell, Input} from "zarm";
import {GlobalContext} from '@/pages/TreePage/index';


export default function Index(props) {
  const [dirName, setDirName] = useState('');
  const GC = useContext(GlobalContext);

  return (
    <>
      <Cell title="子节点名">
        <Input
          clearable
          type="text"
          placeholder="请输入子节点名"
          value={dirName}
          onChange={setDirName}
        />
      </Cell>
      <Cell>
        <Button
          disabled={!dirName}
          block theme="primary"
          onClick={GC.handleAddDirSubmit.bind(GC, dirName)}
        >确认</Button>
      </Cell>
    </>
  )

}
