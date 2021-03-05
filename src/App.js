import './App.css';
import React, {useState, useReducer, useRef} from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";

import 'zarm/dist/zarm.min.css';
import {TabBar, Icon} from "zarm";
// import TreePage from '@/pages/TreePage'
import FormPage from '@/pages/FormPage';
import Login from '@/pages/Login';
import Mine from '@/pages/Mine';
import Index from '@/pages/Index';
const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_1340918_lpsswvb7yv.js');

function App(props) {

  const {location: {pathname}, history} = props;
  const [activeKey, setActiveKey] = useState('/');
  const handleTabChange = (activeKey) => {
    setActiveKey(activeKey);
    history.push(activeKey);
  }
  return (

    <div className='app-con'>

      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/formPage" component={FormPage}/>
        <Route exact path="/login" component={Login}/>
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route exact path="/mine" component={Mine}/>

        <Route component={() => (<div>404</div>)}/>
      </Switch>

      {/*<TabBar*/}
      {/*  visible={*/}
      {/*    ['/', '/mine'].indexOf(pathname) > -1*/}
      {/*  }*/}
      {/*  activeKey={activeKey}*/}
      {/*  onChange={handleTabChange}*/}
      {/*>*/}
      {/*  <TabBar.Item*/}
      {/*    itemKey="/"*/}
      {/*    title="主页"*/}
      {/*    icon={<TabIcon type="home"/>}*/}
      {/*  />*/}
      {/*  <TabBar.Item*/}
      {/*    itemKey="/mine"*/}
      {/*    title="我的"*/}
      {/*    icon={<TabIcon type="user"/>}*/}
      {/*    badge={{shape: 'dot'}}*/}
      {/*  />*/}
      {/*</TabBar>*/}
    </div>

  );
}

export default withRouter(App);
