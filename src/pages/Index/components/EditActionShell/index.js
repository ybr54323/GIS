import {ActionSheet} from "zarm";
import React, {useContext} from "react";

import {GlobalContext} from "@/pages/Index/index";

export default function EditPopup(props) {
  const {visible, setVisible} = props;
  const GC = useContext(GlobalContext);

  const ACTIONS = [
    {
      actionType: 'ADD_GOOD',
      text: '增加物品',
      onClick: GC.handleAddGood.bind(null),
    },
    {
      actionType: 'DEL_GOOD',
      text: '删除物品',
      onClick: GC.handleDelGood.bind(null),
    },
    {
      actionType: 'ADD_DIR',
      theme: 'primary',
      text: '增加子节点',
      onClick: GC.handleAddDir.bind(null),
    },
    {
      actionType: 'DEL_DIR',
      theme: 'danger',
      text: '删除节点',
      onClick: GC.handleDelDir.bind(null),
    },
  ]

  return (
    <>
      <ActionSheet
        spacing
        visible={visible}
        actions={ACTIONS}
        onMaskClick={setVisible}
        onCancel={setVisible}
      />
    </>
  )

}
