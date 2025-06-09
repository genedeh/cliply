import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ICONS } from '@/constants';
import DropdownList from './DropdownList';


const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
    return (
        <header className="header">
            <section className="header-container">
                <div className='details'>
                    {userImg && (
                        <Image src={userImg} alt='user' width={66} height={66} className='rounded-full' />
                    )}
                    <article>
                        <p>{subHeader}</p>
                        <h1>{title}</h1>
                    </article>
                </div>
                <aside>
                    <Link href={'/upload'}>
                        <Image src="/assets/icons/upload.svg" alt="upload" width={16} height={16} />
                        <span>Upload a video</span>
                    </Link>
                    <div className='record'>
                        <button className='primary-btn'>
                            <Image src={ICONS.record} alt="record" width={20} height={20} />
                            <span className='text-blck font-bold'>Record a video</span>
                        </button>
                    </div>
                </aside>
            </section>
            <section className='search-filter'>
                <div className="search">
                    <input
                        type="text"
                        className="border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 pl-12 p-3 rounded-3xl font-bold w-full outline-none transition duration-200"
                        placeholder="Search for videos, tags, folders..."
                    />
                    <Image
                        src="/assets/icons/search.svg"
                        alt="Search"
                        width={16}
                        height={16}
                    />
                </div>
                <DropdownList/>
            </section>
        </header>
    )
}

export default Header