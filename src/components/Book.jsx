import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import styles from '../style'

const Book = ({ book, toggleComplete, deleteBook }) => {
  return (
    <li className={book.completed ? styles.liComplete : styles.li}>
      <div className={styles.row}>
        <input onChange={() => toggleComplete(book)} checked={book.completed ? 'checked' : ''} type="checkbox" />
        <p onClick={() => toggleComplete(book)} className={book.completed ? styles.textComplete : styles.text}>{book.text}</p>
      </div>
      <button onClick={() => deleteBook(book.id)}>{<FaRegTrashAlt />}</button>
{/* ID is auto generated. Grabbing it from firestore */}

    </li>
  )
}


export default Book;  