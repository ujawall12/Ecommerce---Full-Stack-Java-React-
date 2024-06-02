import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img
                    className='h-full w-full object-cover object-left-top'
                    src={product.imageUrl}
                    alt=""
                />
            </div>

            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>Label Shalini</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='text-green-600'>{product.discountPersent} % off</p>
                </div>
            </div>
        </div>
    );
}
/*
const ProductCard = ({product}) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={product.imageUrl} alt="A product" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Reebok</div>
                    <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Puffer Jacket</h1>
                    <p className="mt-2 text-gray-500">$550.00</p>
                    <div className="mt-4">
                        <div className="flex space-x-2">
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">38</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">36</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">34</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">32</button>
                        </div>
                        <button className="mt-4 w-full bg-black text-white py-2 rounded">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
 */
export default ProductCard;
