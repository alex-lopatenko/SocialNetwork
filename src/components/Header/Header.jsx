import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg' />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;