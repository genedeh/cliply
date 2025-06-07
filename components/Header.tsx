import React from 'react'
import Image from 'next/image';
import DummyImage from '@/assets/images/dummy.png';
import Upload from '@/assets/icons/upload.png';
import Record from '@/assets/icons/record.png';
import Search from '@/assets/icons/search.png';
import Link from 'next/link';

interface HeaderProps {
    subHeader: string;
    title: string;
    userImage?: string
}

const Header = ({ subHeader, title, userImage }: HeaderProps) => {
    return (
        <header className="w-full justify-between">
            <section className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
                <div>
                    {userImage && (
                        <Image src={userImage || DummyImage} alt='user' width={66} height={66} className='rounded-full' />
                    )}
                    <article className='flex flex-col justify-around gap-[10px] mx-5'>
                        <p className='text-gray-400 font-light'>{subHeader}</p>
                        <h1 className='text-4xl font-bold'>{title}</h1>
                    </article>
                </div>
                <aside className='flex items-center gap-3'>
                    <Link href={'/upload'} className='flex items-center gap-3 no-underline border-gray-500 border-1 rounded-lg p-3'>
                        <Image src={Upload} alt="upload" width={20} height={20} />
                        <span className='text-black font-bold'>Upload a video</span>
                    </Link>
                    <div>
                        <button className='flex items-center gap-3 border-gray-500 border-1 rounded-lg p-3 bg-gray-500'>
                            <Image src={Record} alt="upload" width={20} height={20} />
                            <span className='text-blck font-bold'>Record a video</span>
                        </button>
                    </div>
                </aside>
            </section>
            <section className='flex items-center justify-between w-full px-3'>
                <div className="relative w-1/2 my-4">
                    <Image
                        src={Search}
                        alt="Search"
                        width={22}
                        height={22}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                        type="text"
                        className="border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 pl-12 p-3 rounded-3xl font-bold w-full outline-none transition duration-200"
                        placeholder="Search for videos, tags, folders..."
                    />
                </div>
                <div>
                    {'<DropdownList/>'}
                </div>
            </section>
        </header>
    )
}

export default Header