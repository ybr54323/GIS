import Tree from "./components/Tree";
import EditActionShell from './components/EditActionShell';
import ModalEdit from "./components/ModalEdit";
import NoData from './components/NoData';

import React, {useState, useRef, useReducer} from 'react';
import {Link} from "react-router-dom";

import 'zarm/dist/zarm.min.css';
import {Icon, Toast} from "zarm";
import {TREE_PAGE_ACTION, EDIT_TYPE, INIT_TEM_DATA, INIT_DIR, MyNode, Good} from "../../util/constant";

import {offLineSave, offLineRead} from "../../util";

import Node from "../Node";

export const GlobalContext = React.createContext({});


export default function TreePage(props) {
  const [data, setData] = useState([]);

  console.warn('data: ', data);
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
        setData([...data, new MyNode(rootName)]);
        offLineSave('data', data);
        handleToggle('editModalVisible');
      },
      handleEditAction(...args) {
        const [node, updateViewCb] = args;

        temData.currentNode = node;
        temData.updateViewCb = updateViewCb;

        handleToggle('editActionShellVisible');
      },
      handleAddGood() {
        editType.currentType = 'ADD_GOOD';
        handleToggle('editModalVisible');
      },
      handleDelGood() {
      },

      handleAddGoodSubmit(...args) {
        const [goodName] = args;
        const {currentNode, updateViewCb} = temData;
        updateViewCb({
          ...currentNode,
          goodList: currentNode.goodList.concat([new Good(goodName)])
        });
        handleToggle('editModalVisible');
        handleToggle('editActionShellVisible');
      },

      handleAddDir() {
        editType.currentType = 'ADD_DIR'
        handleToggle('editModalVisible');
      },
      handleAddDirSubmit(...args) {
        const [nodeName] = args;
        const {currentNode, updateViewCb} = temData;

        updateViewCb({
          ...currentNode,
          childNodeList: currentNode.childNodeList.concat([new MyNode(nodeName)])
        })

        handleToggle('editModalVisible');
        handleToggle('editActionShellVisible');
      },
      handleDelDir() {

      },
      handleOpenChildNode(...args) {
        const [currentNode, updateViewCb] = args;
        updateViewCb({...currentNode, checkedChildNodeList: !currentNode.checkedChildNodeList})
      },
      handleOpenGood(...args) {
        const [currentNode, updateViewCb] = args;
        updateViewCb({...currentNode, checkedGoodList: !currentNode.checkedGoodList})
      }
    }}>
      <div>
        {hasTreeData ?
          (
            data.map(n => (
              <Node key={n.id} {...n}/>
            ))
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
