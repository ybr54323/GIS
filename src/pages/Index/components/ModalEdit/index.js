import React from 'react';
import {Modal} from 'zarm';

import FormCreateRoot from './components/FormCreateRoot/index';
import FormAddDir from "./components/FormAddDir/index";
import FormAddGood from './components/FormAddGood/index';


import {EDIT_TYPE} from "@/util/constant";

export default function EditModal(props) {
  const {visible, setVisible, editType} = props;

  const handleRenderForm = (editType) => {
    switch (editType) {
      case EDIT_TYPE.createRoot:
        return <FormCreateRoot/>
      case EDIT_TYPE.addDir:
        return <FormAddDir/>;
      case EDIT_TYPE.addGood:
        return <FormAddGood/>;
      default:
        return <div>404</div>
    }
  }

  return (
    <>
      <Modal
        visible={visible}
        closable
        maskClosable
        onCancel={setVisible}
      >
        {handleRenderForm(editType)}
      </Modal>
    </>
  )
}
