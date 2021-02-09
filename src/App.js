import './App.css';
import React, {useState, useReducer, useRef} from 'react';
import {Link, Route, Switch} from "react-router-dom";

import 'zarm/dist/zarm.min.css';
import {TabBar, Icon} from "zarm";
import TreePage from '@/pages/TreePage'
import FormPage from '@/pages/FormPage';

const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_1340918_lpsswvb7yv.js');

function App() {

  return (

    <div>

      <Switch>
        <Route exact path="/" component={TreePage}/>
        <Route exact path="/formPage" component={FormPage}/>
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={() => (<div>404</div>)}/>
      </Switch>

      <TabBar
        visible={true}
        // activeKey={activeKey}
        // onChange={setActiveKey}
      >
        <TabBar.Item
          itemKey="home"
          title="主页"
          icon={<TabIcon type="home"/>}
        />
        <TabBar.Item
          itemKey="found"
          title="保险"
          icon={<TabIcon type="insurance"/>}
          badge={{shape: 'circle', text: '3'}}
        />
        <TabBar.Item
          itemKey="me"
          title="我的"
          icon={<TabIcon type="user"/>}
          badge={{shape: 'dot'}}
        />
      </TabBar>
    </div>

  );
}

export default App;
