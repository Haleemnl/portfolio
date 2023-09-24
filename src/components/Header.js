import React, { useState } from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {

    const [expaned, setExpanded] = useState(false)

    return (
        <div className='header'>

            <Link to='/'>
                <h1 className='header-logo'>haleemalao</h1>
            </Link>

            <MenuIcon onClick={() => setExpanded(true)} className={expaned ? 'menu-icon none' : 'menu-icon'} />

            <div className={expaned ? 'header-nav' : 'header-nav close'}>

                <CloseIcon onClick={() => setExpanded(false)} className='close-icon' />


                <Link to='/'>
                    <p onClick={() => setExpanded(false)}>HOME</p>
                </Link>
                <Link to='/about'>
                    <p onClick={() => setExpanded(false)}>ABOUT</p>
                </Link>
                <Link to='/projects'>
                    <p onClick={() => setExpanded(false)}>PROJECTS</p>
                </Link>
                <Link to='/contact'>
                    <p onClick={() => setExpanded(false)}>CONTACT</p>
                </Link>

            </div>



        </div >
    )
}

export default Header