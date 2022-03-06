import React from 'react';
import { Route, Switch } from 'react-router-dom';
import reduxClass from './components/reduxClass';
import CustomHooks from './components/screens/hooks/CustomHooks';
import ChildClass from './components/screens/hooks/ChildClass';
import USE_REDUCE from './components/screens/hooks/USE_REDUCE';
import USE_REF from './components/screens/hooks/USE_REF';
import USE_LAYOUTEFFECT from './components/screens/hooks/USE_LAYOUTEFFECT';
import USE_Custom from './components/screens/hooks/USE_Custom';
import CountyError from './components/screens/advance_guide/CountyError';
import Error_Boundry from './components/screens/advance_guide/Error_Boundry';
import Child_Ref from './components/screens/advance_guide/Child_Ref';
import Click_Counter from './components/screens/advance_guide/Click_Counter';
import Hover_Counter from './components/screens/advance_guide/Hover_Counter';
import HOC from './components/screens/advance_guide/HOC';
import Components_Lifecycles from './components/screens/advance_guide/Components_Lifecycles';
import Jquery from './components/screens/advance_guide/Jquery';
import Portal from './components/screens/advance_guide/Portal';
import Main from './components/screens/advance_guide/RenderProps/Main';
import ClickCounterHOC from './components/screens/advance_guide/HOC/ClickCounter';
import Proptypes from './components/screens/advance_guide/Proptypes';
import Practice from './components/screens/hooks/Practice';
import axios from './components/screens/axios/Index';

function Router() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={CustomHooks}></Route>
        <Route path='/child' exact component={ChildClass}></Route>
        <Route path='/reduce' exact component={USE_REDUCE}></Route>
        <Route path='/ref' exact component={USE_REF}></Route>
        <Route path='/lay' exact component={USE_LAYOUTEFFECT}></Route>
        <Route path='/cus' exact component={USE_Custom}></Route>
        <Route path='/forward' exact component={Child_Ref}></Route>
        <Route path='/click' exact component={Click_Counter}></Route>
        <Route path='/hoc' exact component={HOC}></Route>
        <Route path='/hover' exact component={Hover_Counter}></Route>
        <Route
          path='/lifecycle'
          exact
          component={Components_Lifecycles}></Route>
        <Route path='/jquery' exact component={Jquery}></Route>
        <Route path='/portal' exact component={Portal}></Route>
        <Route path='/renderprop' exact component={Main}></Route>
        <Route path='/clickCounter' exact component={ClickCounterHOC}></Route>
        <Route path='/axios' exact component={axios}></Route>
        <Error_Boundry>
          <Route path='/errorBoundry' exact component={CountyError}></Route>
          <Route path='/proptypes' exact component={Proptypes}></Route>
          <Route path='/prac' exact component={Practice}></Route>
        </Error_Boundry>
      </Switch>
    </div>
  );
}

export default Router;
