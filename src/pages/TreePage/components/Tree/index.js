import './Tree.css';
import Node from "./components/Node";

import React, {useMemo} from 'react';

export default function Tree(props) {
  const {tree, onSelect} = props;

  console.warn('render Tree')


  const hasData = Array.isArray(tree) && tree.length > 0;

  return (
    <div
      className='tree'
    >
      {
        hasData &&
        tree.map(t =>
          <Node
            tree={t}
            isRoot={true}
            onSelect={onSelect}
          >

          </Node>
        )
      }
    </div>
  )
}
