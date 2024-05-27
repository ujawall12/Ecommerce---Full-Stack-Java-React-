import React from 'react';

const HomeSectionCard = () => {
    return (
        <div className= 'cursor-pointer flex flex-col items-center
         bg-white rounded-lg shadow-lg overflow-hidden w-[15re] mx-3'>

            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src='https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/SearchAlt/224x336/991191.jpg' alt=''/>
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Majestic Man</h3>
                <p className='mt-2 text-sm text-gray-500'>Mens Solid Pure Cotton Shirt</p>
            </div>

        </div>
    )
}
export default HomeSectionCard