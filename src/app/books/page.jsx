import BookCard from '@/components/BookCard';
import React from 'react';


const BooksPage = async() => {

    /**
     * cache:'no-store' -> It will fetch the data on every request, and it will not cache the data. (SSR)
     * cache: 'force-cache' -> It wil cache the data and it will not fetch data on every request. (SSR)
     * next:{revalidate:9} -> It will cache the data for 9 seconds, and it will fetch data after 9 seconds. (ISR)
     */


    // const res = await fetch('http://localhost:5000/books',{cache:'no-store'});

    // const res = await fetch('http://localhost:5000/books',{cache:'force-cache'});

    const res = await fetch('http://localhost:5000/books',{next:{revalidate:9}});

    const books =await res.json();
    return (
        <div>
            <h2>books: {books.length}</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    books.map(book=> <BookCard book={book} key={book.id}/>)
                }
            </div>
        </div>
    );
};

export default BooksPage;