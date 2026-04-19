import Product from '@/components/Product';
import React from 'react';

const getProducts = async () => {
    // const res = await fetch('http://localhost:5000/products',{cache: 'no-store'});

// 👇 this 20 means after 20 seconds the cash will update.
    const res = await fetch('http://localhost:5000/products',{next:{revalidate:20}});
    return res.json();

}

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    products.map(product=><Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;