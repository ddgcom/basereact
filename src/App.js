import React, { useContext, Suspense } from 'react'
import {GlobalStyle} from './styles/GlobalStyles'
import { Router, Redirect } from '@gatsbyjs/reach-router'
import { Context } from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))
const Dashboard = React.lazy(() => import('./pages/Admin/Dashboard'))
const NotFound = React.lazy(() => import('./pages/System/NotFound'))

export const App = () => {
  const isAuth = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      
      <Router>
        <NotFound default />
        <Home path='/' />
        {!isAuth && <Login path='/login' />}
        {!isAuth && <Redirect from='/dashboard' to='/login' />}
        {isAuth && <Redirect from='/login' to='/dashboard' />}
        <Dashboard path='/dashboard' />
      </Router>
    </Suspense>
  )
}
