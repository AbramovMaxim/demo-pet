import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <NavLink to={"/props/" + props.id} className={`${s.dialog} ${s.active}`}>{props.name}</NavLink>
  )
}

export default DialogItem;