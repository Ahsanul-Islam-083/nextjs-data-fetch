import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    const { title, author } = book;
    return (
        <div className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>By: {author}</p>
                <div className="justify-end card-actions">
                    <Link href={`/books/${book.id}`} className="btn btn-primary">Show Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;