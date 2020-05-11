import React from 'react';
import { BrowserRouter , Switch ,Route ,Redirect } from 'react-router-dom'

import  Login from './pages/login/login'
import  Operation from './pages/operation/operation'
import Register from './pages/register/register'
function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={ Login } />
          <Route path={'/register'}  component={ Register }/>
          <Route path='/' component={ Operation }/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
