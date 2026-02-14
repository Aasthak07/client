// 
import React from 'react'
//BookName>BookTitle>BookAuthor>SellingPrice>PublishData

const Home = () => {
    return (
        <>
            <div className='w-full px-5 min-h-[calc(100vh-80px)]'>
                <div className='w-full grid grid-cols-5 gap-4 my-6'>
                    <div className='w-full flex flex-col gap-2'   >
                        <label className="block" htmlFor="">Book Name</label>
                        <input type="text" placeholder='Book Name' className='w-full border border-gray-600 rounded outline-gray-500  h-8  px-2 ' />
                    </div>

                    <div className='w-full flex flex-col gap-2'   >
                        <label className="block" htmlFor="">Book Title</label>
                        <input type="text" placeholder='Book Title' className='w-full border border-gray-600 rounded outline-gray-500 h-8  px-2' />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label className="block" htmlFor="">Book Author</label>
                        <input type="text" placeholder='Book Author' className='w-full border border-gray-600 rounded outline-gray-500 h-8 px-2 ' />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label className="block" htmlFor="">Selling Price</label>
                        <input type="text" placeholder='Selling Price' className='w-full border border-gray-600 rounded outline-gray-500 h-8 px-2 ' />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label className="block" htmlFor="">Publish Date</label>
                        <input type="date" placeholder='Publish Date' className='w-full border border-gray-600 rounded outline-gray-500 h-8 px-2 ' />
                    </div>

                    <div>

                    </div>

                </div>
                <div className='w-full flex justify-end'>
                    <button className='bg-gray-800 text-white h-10 w-22 rounded-md'> SUBMIT</button>
                </div>

                <div className='w-full mt-10'>
                    <div className='w-full'>
                        <table className='w-full bg-white divide-y divide-gray-200'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-600  uppercase'>Book name</th>
                                    <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase'> book title</th>
                                    <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase'>Author</th>
                                    <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase'>Selling price</th>
                                    <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase'>publish Date</th>
                                    <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='w-ful bg-white divide-y divide-gray-200'>
                                <tr className='hover:bg-gray-200'>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
