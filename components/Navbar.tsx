import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/icons/logo.png';
import DummyImage from '@/assets/images/dummy.png';
import LogOut from '@/assets/icons/logout.png';

const user = {}

const Navbar = () => {
    return (
        <header className="w-full justify-between ">
            <nav className='flex justify-between items-center'>
                <Link href='/' className='flex items-center gap-3 no-underline'>
                    <Image src={Logo} alt="Logo" width={60} height={60} />
                    <h1 className="text-2xl font-extrabold text-black">Clipy</h1>
                </Link>
                {user &&
                    (
                        <figure className='flex justify-around gap-[10px] px-5 items-center'>
                            <button className='cursor-pointer'>
                                <Image src={DummyImage} alt="User" width={66} height={66} className='rounded-full aspect-square' />
                            </button>
                            <button className='cursor-pointer'>
                                <Image src={LogOut} alt="Logout" width={34} height={34} />
                            </button>
                        </figure>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar