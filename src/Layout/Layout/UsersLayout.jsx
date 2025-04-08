import React from 'react'
import UsersHeader from '../UsersHeader'
import { Outlet } from 'react-router'

function UsersLayout() {
  return (
    <div>
     <UsersHeader/>
     <Outlet/>
     
    </div>
  )
}

export default UsersLayout
