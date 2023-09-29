import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cojo.ru/wp-content/uploads/2022/12/pepe-retroveiv-3.webp" className={s.img} alt="блин" />
            <i className={s.messege}>{props.message}</i>
            <span className={s.likesCount}>
                {props.likesCount}
            </span>
        </div>
    )
}

export default Post;