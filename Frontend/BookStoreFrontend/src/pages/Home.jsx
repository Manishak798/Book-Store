import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BookTable from '../Components/Home/BookTable';
import BookCard from '../Components/Home/BookCard';
const Home = () => {
    const [books, setBooks] = useState([]);//setting books;
    const [loading, setloading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setloading(true);//until books are fetched
        axios
            .get('http://localhost:5000/books/')
            .then((response) => {
                setBooks(response.data.data);
                setloading(false);
            })
            .catch((error) => {
                setloading(false);
            })

    }, [])
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}> Table</button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}> Card </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Book List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'></MdOutlineAddBox>
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                showType === 'table' ?
                    (<BookTable books={books} />) : (<BookCard books={books} />)
            )
            }
        </div>
    )
}

export default Home