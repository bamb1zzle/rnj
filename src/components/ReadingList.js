import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Book from './Book';
import { db } from '../firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc, } from 'firebase/firestore';

const style = {
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-10`,
  heading: `text-3xl font-bold text-center text-gray-900 p-2`,
  form: `flex justify-between`,
  input: `border p-4 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

const ReadingList= () => {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState('');


  const createBook = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Cannot enter blank statement. Please try again!');
      return;
    }
    await addDoc(collection(db, 'books'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  // Read list from firebase
  useEffect(() => {
    const q = query(collection(db, 'books'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let booksArr = [];
      querySnapshot.forEach((doc) => {
        booksArr.push({ ...doc.data(), id: doc.id });
      });
      setBooks(booksArr);
    });
    return () => unsubscribe();
  }, []);

  // Update list in firebase
  const toggleComplete = async (book) => {
    await updateDoc(doc(db, 'books', book.id), {
      completed: !book.completed,
    });
  };

  // Delete list
  const deleteBook = async (id) => {
    await deleteDoc(doc(db, 'books', id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Your Reading List</h3>
        <form onSubmit={createBook} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Add Book'
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {books.map((book, index) => (
            <Book
              key={index}
              book={book}
              toggleComplete={toggleComplete}
              deleteBook={deleteBook}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${books.length} to read!`}</p>
        )}
      </div>
    </div>
  );
}

export default ReadingList;

// use navigate hook - try 
// fetch data + display mapping function or props
// map
// udemy