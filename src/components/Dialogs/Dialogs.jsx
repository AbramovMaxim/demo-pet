import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

  let newPost = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE' })
  }

  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text })
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <button onClick={addMessage} className={s.text}>add</button>
      <textarea
        value={props.dialogsPage.newMessageText}
        onChange={onPostChange}
        ref={newPost}
        className={s.textarea}
        cols="50" rows="2"></textarea>
    </div>
  )
}

export default Dialogs;

// const DialogItem = (props) => {
//   return (
//     <NavLink to={"/dialogs/" + props.id} className={`${s.dialog} ${s.active}`}>{props.name}</NavLink>
//   )
// }
// NavLink - это синтаксический сахар для работ с cылками, это тотже div, но имеет у себя в атрибутах "to".
// "to" в строке браузера меняет url на своё содержимое.
// затем в App.js с помощью родительского тэга Routes(пути) и дочернего тэга Route(путь) отслеживается содержимое
// браузерной строки и взависимости от содержимого отрисовывают компоненту:
{/* <Routes>
  <Route path='/profile' element={<Profile />} />
  <Route path='/dialogs/*' element={<Dialogs />} />
</Routes> */}
//  где path - это сылка которую ждут, а element - это компонента которую отрисуют.
// знак * в конце /dialogs/* означает, что ждут все ссылки где есть /dialogs/ , допустим /dialogs/1 , /dialogs/2 и т.п.
// кстати Routes не работают без тэга BrowserRouter, поэтому в App.js компоненты обёрнуты в BrowserRouter


