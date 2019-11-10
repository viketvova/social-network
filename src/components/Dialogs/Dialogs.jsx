import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        //Вынести NavLink можно создав переменную: let path=`/dialogs/${props.id}` и в NavLink заменить на path
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

               <DialogItem name="Dimych" id="1"/>
               <DialogItem name="Vetal" id="2"/>
               <DialogItem name="Roma" id="3"/>
               <DialogItem name="Mashs" id="4"/>
               <DialogItem name="Vova" id="5"/>

            </div>


            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How r u"/>
                <Message message="How is your> Yo"/>
                </div>
        </div>
    );
}

export default Dialogs;