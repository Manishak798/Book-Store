import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import { useSnackbar } from 'notistack';

const Deletebook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`http://localhost:5000/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false)
                enqueueSnackbar('Error, No book Found ', { variant: 'error' });
            })
    }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are You Sure Ypu Want To Delete This Book?</h3>
                <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}

export default Deletebook