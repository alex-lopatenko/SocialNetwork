import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://static.timesofisrael.com/www/uploads/2015/06/shutterstock_243039475-1024x640.jpg" alt="img"/>
            {props.message}
             <div>
                 <span>like</span> {props.lickesCount}
             </div>
        </div>
    )
}

export default Post;