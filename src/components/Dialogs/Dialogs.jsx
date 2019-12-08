import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.dialogsData.map(el => {
    return <DialogItem name={el.name} id={el.id} />;
  });
  let messagesElements = props.messagesData.map(el => {
    return <Message message={el.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
