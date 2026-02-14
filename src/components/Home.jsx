// 
'use client';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { bookBaseUrl } from '@/axiosInstance';

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
//BookName>BookTitle>BookAuthor>SellingPrice>PublishData
//tip

const Home = () => {

    const [bookForm, setBookForm] = useState(
        {
            BookName: "",
            BookTitle: "",
            Author: "",
            SellingPrice: "",
            PublishDate: "",
            Id: ""
        });

    const [bookList, setBookList] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);

    const getAllbookList = async () => {
        try {
            const { data } = await bookBaseUrl.get("booklists");
            setBookList(data?.BookList);
            console.log('booklist', data);
        } catch (error) {
            console.log(error)
        }

    };
    useEffect(() => {
        getAllbookList()
    }, []);

    const handleFormchange = (e) => {
        const { name, value } = e.target;
        setBookForm((prev) => ({
            ...prev,
            [name]: value

        }))

    };

    const handleSubmit = async () => {
        try {
            if (!isUpdating) {

                if (!bookForm?.BookName ||
                    !bookForm.BookTitle ||
                    !bookForm.Author ||
                    !bookForm.SellingPrice) {
                    alert("all fields are required");

                }


                const { data } = await bookBaseUrl.post('/addbook', bookForm);
                if (data?.Success) {
                    alert(data?.Message);
                    setBookForm({
                        BookName: "",
                        BookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        PublishDate: "",
                        Id: ""
                    });
                    getAllbookList();
                }

                // console.log(data);

            } else {



                const { data } = await bookBaseUrl.put('/updatebook', bookForm);
                if (data?.Success) {
                    alert(data?.Message);
                    setBookForm({
                        BookName: "",
                        BookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        PublishDate: "",
                        Id: ""
                    });
                    setIsUpdating(false);
                    getAllbookList();
                }

            }
        }
        catch (error) {
            console.log(error);

        }

    }

    const handleDelete = async (id) => {
        try {
            const { data } = await bookBaseUrl.post('deletebook', {
                Id: id,
            });
            if (data?.Success) {
                alert(data?.Message, 'data deleted Successfully');
                getAllbookList();
            }

        } catch (error) {
            console.log(error)

        }
    }

    const handleUpdate = (data) => {
        setBookForm(
            {
                Id: data?._id,
                BookName: data?.BookName,
                BookTitle: data?.BookTitle,
                Author: data?.Author,
                SellingPrice: data?.SellingPrice,
                PublishDate: data?.PublishDate ? data.PublishDate.substring(0, 10) : ""

            });
        setIsUpdating(true);

    }

    console.log('bookForm', bookForm)




    return (
        <>
            <div className='w-full px-5 min-h-[calc(100vh-80px)]'>
                <div className='w-full grid grid-cols-5 gap-4 my-6'>
                    <div className='w-full flex flex-col gap-2'   >
                        <label className="block" htmlFor="">Book Name</label>
                        <input type="text"
                            placeholder='Book Name'
                            className='w-full border border-gray-600 rounded outline-gray-500  h-8  px-2 '
                            name="BookName"
                            value={bookForm.BookName}
                            onChange={handleFormchange}
                        />

                    </div>

                    <div className='w-full flex flex-col gap-2'   >
                        <label className="block" htmlFor="">Book Title</label>
                        <input type="text" placeholder='Book Title'
                            className='w-full border border-gray-600 rounded outline-gray-500 h-8  px-2'
                            name="BookTitle"
                            value={bookForm.BookTitle}
                            onChange={handleFormchange}

                        />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label className="block" htmlFor="">Book Author</label>
                        <input type="text" placeholder='Book Author'
                            className='w-full border border-gray-600 rounded outline-gray-500 h-8 px-2 '
                            name="Author"
                            value={bookForm.Author}
                            onChange={handleFormchange}
                        />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label className="block" htmlFor="">Selling Price</label>
                        <input type="text" placeholder='Selling Price'
                            className='w-full border border-gray-600 rounded outline-gray-500 h-8 px-2 '
                            name="SellingPrice"
                            value={bookForm.SellingPrice}
                            onChange={handleFormchange}
                        />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label className="block" htmlFor="">Publish Date</label>
                        <input type="date" placeholder='Publish Date'
                            className='w-full border border-gray-600 rounded outline-gray-500 h-8 px-2 '
                            name="PublishDate"
                            value={bookForm.PublishDate}
                            onChange={handleFormchange}

                        />
                    </div>

                    <div>

                    </div>

                </div>
                <div className='w-full flex justify-end'>
                    <button className='bg-gray-800 text-white h-10 w-22 rounded-md cursor-pointer' onClick={handleSubmit}> SUBMIT</button>
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

                                {
                                    bookList?.map((book, index) => {
                                        return (
                                            <tr className='hover:bg-gray-200' key={index}>
                                                <td className='px-6 py-3 whitespace-nowrap'> {book?.BookName}</td>
                                                <td className='px-6 py-3 whitespace-nowrap'> {book?.BookTitle}</td>
                                                <td className='px-6 py-3 whitespace-nowrap'> {book?.Author}</td>
                                                <td className='px-6 py-3 whitespace-nowrap'> {book?.SellingPrice}</td>
                                                <td className='px-6 py-3 whitespace-nowrap'> {book?.PublishDate}</td>
                                                <td className='px-6 py-3 whitespace-nowrap'>
                                                    <div className='w-20 flex justify-center gap-5'>
                                                        <div className='h-8 w-5 flex justify-center itens-center bg-red-100 text-red-600 rounded text-lg cursor-pointer' onClick={() => handleDelete(book._id)}>
                                                            <span><MdDelete /></span>

                                                        </div>
                                                        <div className='h-8 w-5 flex justify-center itens-center bg-green-300  text-green-600 rounded text-lg cursor-pointer'
                                                            onClick={() => handleUpdate(book)}>
                                                            <span><FaEdit /></span>

                                                        </div>

                                                    </div>
                                                    Action</td>
                                            </tr>
                                        )

                                    })
                                }
                                {/* <tr className='hover:bg-gray-200'>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'> Name</td>
                                </tr> */}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
