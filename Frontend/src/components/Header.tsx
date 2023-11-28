import React from 'react'
import {AppBar , Toolbar} from '@mui/material'
import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink';


function Header() {
  const auth = useAuth();
  return (
    <AppBar
    sx={{bgcolor:"192655", position:"static", boxShadow:"none"}}
    >
        <Toolbar
        sx={{display:"flex"}}
        >
          <Logo/>
          <div>
            {auth?.isLoggedIn ? 
            <> 
                <NavigationLink 
                to="/chat"
                bg="#52c0f1"
                text="Go To Chat"
                textColor="black" />            
                <NavigationLink 
                to={'/'} 
                bg={'#548796'} 
                text={'logout'} 
                textColor={'white'}
                onClick={auth.logout}
                 />
            </>
            :
            <>
                   
                <NavigationLink 
                to="/login"
                bg="#52c0f1"
                text="Log In"
                textColor="black" />                
                <NavigationLink 
                to={'/signup'} 
                bg={'#548796'} 
                text={'Sign Up'} 
                textColor={'white'} />
            </>
            }
          </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header