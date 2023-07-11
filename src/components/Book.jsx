import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize',
    liComplete: 'flex justify-between bg-slate-400 p-4 my-2 capitalize',
    row: 'flex',
    text: 'ml-2 cursor-pointer',
    textComplete: 'ml-2 cursor-pointer line-through',
    button: 'cursor-pointer flex items-center',
};

const Book = ({book, toggleComplete, deleteBook }) => {
  return (
    <li className={book.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={() => toggleComplete(book)} type='checkbox' checked={book.completed ? 'checked' : ''}/>
            <p onClick={() => toggleComplete(book)} className={book.completed ? style.textComplete : style.text}>{book.text}</p>
        </div>
        {/* <button></button> */}
        <button onClick={() => deleteBook(book.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Book;