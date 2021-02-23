import React, {useState, useContext} from 'react';
import {Button, Cell, Input} from "zarm";
import {GlobalContext} from "@/pages/TreePage/index";

export default function FormCreateRoot(props) {
  const [rootName, setRootName] = useState('');
  const GC = useContext(GlobalContext);

  return (
    <>
      <Cell title="根节点名称">
        <Input
          clearable
          type="text"
          placeholder="请输入根节点名称"
          value={rootName}
          onChange={v => setRootName(v)}
        />
      </Cell>
      <Cell>
        <Button
          disabled={!rootName}
          block theme="primary"
          onClick={GC.handleCreateRootSubmit.bind(GC, rootName)}
        >确认</Button>
      </Cell>
    </>
  )
}
