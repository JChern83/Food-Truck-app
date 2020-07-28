import React from 'react'
import history from '../history'
import { OperatorHead, Logo, Navigation, NavLinks } from '../../styled-components'

const DinerHeader = () => {
    const signOut = () => {
        localStorage.removeItem('reduxState');
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        history.push('/login')
    }

    return(
        <OperatorHead>
            <NavLinks href='https://cranky-keller-308f13.netlify.app/index.html'>
                <Logo src='https://i.ibb.co/KVfN7Zq/logo.png' />
            </NavLinks>
            <Navigation>
                <NavLinks href='/diner/dashboard'>Dashboard</NavLinks>
                <NavLinks href='/diner/trucks'>Trucks</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </Navigation>
        </OperatorHead>
    )
}

export default DinerHeader