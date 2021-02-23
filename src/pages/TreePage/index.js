import Tree from "./components/Tree";
import EditActionShell from './components/EditActionShell';
import ModalEdit from "./components/ModalEdit";
import NoData from './components/NoData';

import React, {useState, useRef, useReducer} from 'react';
import {Link} from "react-router-dom";

import 'zarm/dist/zarm.min.css';
import {Icon, Toast} from "zarm";
import {TREE_PAGE_ACTION, EDIT_TYPE, INIT_TEM_DATA, INIT_DIR, MyNode} from "../../util/constant";
import {offLineSave, offLineRead} from "../../util";


export const GlobalContext = React.createContext({});


export default function TreePage(props) {
  const {tree = offLineRead('data') || []} = props;

  const [data, setData] = useState(tree);

  const hasTreeData = data.length > 0;


  const [{editActionShellVisible, editModalVisible}, dispatch] = useReducer((state, action) => {
    const {actionType} = action;
    return {
      ...state,
      [actionType]: !state[actionType]
    }
  }, TREE_PAGE_ACTION);
  const handleToggle = (actionType) => dispatch({actionType});

  const {current: temData} = useRef({...INIT_TEM_DATA});

  let {current: editType} = useRef({...EDIT_TYPE})


  const handleCreateRoot = () => {
    editType.currentType = 'CREATE_ROOT';
    dispatch({actionType: 'editModalVisible'});
  }

  return (
    <GlobalContext.Provider value={{
      handleCreateRootSubmit(...args) {
        const [rootName] = args;
        data.push(new MyNode(rootName));
        offLineSave('data', data);
        handleToggle('editModalVisible');
      },
      handleEditAction(...args) {
        const [node] = args;
        temData.currentNode = node;
        handleToggle('editActionShellVisible');
      },
      handleAddGood() {
        editType.currentType = 'ADD_GOOD';
        handleToggle('editModalVisible');
      },
      handleDelGood() {
      },
      handleAddDir() {
        editType.currentType = 'ADD_DIR'
        handleToggle('editModalVisible');
      },
      handleAddDirSubmit(...args) {
        const [dirName] = args;
        temData.currentNode.children.push(new MyNode(dirName));
        offLineSave('data', data);
        handleToggle('editModalVisible');
        handleToggle('editActionShellVisible');
      },
      handleDelDir() {

      }
    }}>
      <div>
        {hasTreeData ?
          (
            <Tree
              tree={data}
              onSelect={setData}
            />
          ) : (
            <NoData
              onCreateRoot={handleCreateRoot}
            />
          )
        }
        <EditActionShell
          visible={editActionShellVisible}
          setVisible={dispatch.bind(null, {actionType: 'editActionShellVisible'})}
        />
        <ModalEdit
          visible={editModalVisible}
          setVisible={dispatch.bind(null, {actionType: 'editModalVisible'})}
          editType={editType.currentType}
        />
      </div>
    </GlobalContext.Provider>
  );
}
