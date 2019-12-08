import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
   // let path = "/dialogs" + props.id;
  return (
    //Вынести NavLink можно создав переменную: let path=`/dialogs/${props.id}` и в NavLink заменить на path
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
