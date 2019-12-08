import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"


const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: "Dymych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Vova" }
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r u" },
    { id: 3, message: "How is your" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
  ];
  let postData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r u" },
    { id: 3, message: "How is your" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
  ];
  let dialogsElements = dialogsData.map(el => {
    return <DialogItem name={el.name} id={el.id} />;
  });
  let messagesElements = messagesData.map(el => {
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
