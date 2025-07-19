import getAllProducts from '@/lib/getAllProducts';
import Image from 'next/image';
import React from 'react';

const Products = async () => {
    const products = await getAllProducts();

    return (
        <div className='my-16'>
            <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 font-poppins'>
                {
                    products.map((product) => <div
                        key={product.id}
                        className='relative flex flex-col rounded-md bg-white shadow-lg space-y-2.5 group hover:cursor-pointer'
                    >
                        <span className='w-fit absolute top-3 left-2.5 bg-purple-800 text-white px-2.5 py-0.5 text-[10px] rounded-e-full z-10'>
                            Save: {(product.originalPrice - product.currentPrice).toFixed(2)}৳  (-{product.discount}%)
                        </span>
                        <div className='flex justify-center items-center grow p-6 scale-95 group-hover:scale-110 duration-500'>
                            <Image src={product.images[0]} alt={product.title} width={300} height={200} loading='lazy' />
                        </div>
                        <div className='space-y-2 p-6 border-t-2 border-gray-100'>
                            <h1 title={product.title} className='font-medium text-sm line-clamp-1 group-hover:underline'>{product.title}</h1>
                            <p className='text-red-600 font-bold'>{product.currentPrice.toFixed(2)}৳ <span className='ms-3 line-through text-xs text-gray-600'>{product.originalPrice.toFixed(2)}৳</span></p>
                        </div>
                    </div>)
                }
            </section>
            <section className='my-5 text-center'>
                {/* <button
                    type='button'
                    onClick={loadMore}
                    className='text-white font-medium text-base bg-[#eb9235] px-5 py-1.5 rounded cursor-pointer'>
                    Load More
                </button> */}
            </section>
        </div>
    );
};

export default Products;