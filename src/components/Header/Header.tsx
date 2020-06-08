import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return <header className={s.header}>
        {/*<img src='https://img2.freepng.ru/20180602/exk/kisspng-computer-icons-africa-organization-behaviors-5b12ee4e4b26c3.3531791915279673103078.jpg' />*/}
        <img src='https://banner2.cleanpng.com/20180326/ldw/kisspng-google-search-keyword-research-company-search-5ab933f01d0dc5.792598231522086896119.jpg' />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;