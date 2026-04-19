import React from 'react';

export const generateStaticParams = async()=>{
    const res  =await fetch('http://localhost:5000/books')
    const books = await res.json();
    return books.slice(1,3).map (book=>({bookId: book.id}));
}

const BookDetailsPage = async({params}) => {
    const {bookId} =await params;

    const res =await fetch(`http://localhost:5000/books/${bookId}`);
    const {title, author, price} = await res.json();
    return (
        <div>
            <h2>Book Details: {bookId}</h2>
            <p>{title}</p>
            <p><small>BY: {author}</small></p>
            <p>{price}</p>
        </div>
    );
};

export default BookDetailsPage;