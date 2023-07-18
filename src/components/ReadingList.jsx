import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { mangapanel } from '../assets';
import styles from '../style';
import Book from './Book';
import { db } from '../firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';




function ReadingList() {
  const [books, setBooks]= useState(['']);
  const [input, setInput] = useState('');
  
//Add Book to list
const addBook = async (e) => {
  e.preventDefault(e);
  if(input === '') {
    alert('Please enter book')
    return
  }
  await addDoc(collection(db, 'readinglist'),
  {
    text: input,
    completed: false,
  })
  //creates a new database if one is not there and if it is there, it will update it.
  // after the collection and database, when we do text,etc it will configure everything for us.
  setInput('')
}


//Read Booklist from Firebase
useEffect(()=>{
  const q = query(collection(db, 'readinglist'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let booksArr = []
    querySnapshot.forEach((doc) => {
      booksArr.push({...doc.data(), id: doc.id})
    });
    // set snapshot to our state 
    setBooks(booksArr)
  })
  return () => unsubscribe();
},[]);
//Update Book from booklist in firebase
  const toggleComplete = async (book) => {
    await updateDoc(doc(db, 'readinglist', book.id), {
      completed: !book.completed,
    });
  };
//Delete Book from booklist in firebase

const deleteBook = async (id) => {
  await deleteDoc(doc(db, 'readinglist', id))
}

  return(
    <div className={styles.bg}>
      <div classname={styles.container}>
        <div className={styles.heading3}>Your Reading List: </div>
        <form onSubmit={addBook} className={styles.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={styles.input} type="text" placeholder="Add Book"/>
          <button className={styles.button1}><AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {books.map((book, index)=>( 
          <Book key={index} book={book} toggleComplete={toggleComplete} deleteBook={deleteBook} />
          // Passing down book, passing up toggleComplete and deleteBook
          ))} 
        </ul>

        {books.length < 1 ? 'You have no new reads' : (
          <p className={styles.count}>{`You have ${books.length} books to read!`}</p>
        )}

      </div>
    </div>
  )
}


export default ReadingList;