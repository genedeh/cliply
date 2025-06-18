'use client';
import Navbar from '@/components/Navbar'
import { supabase } from '@/lib/supabaseClient';
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();
    const pathname = usePathname()
    useEffect(() => {
        supabase.auth.onAuthStateChange(async (_event, session) => {
            if (session) {
                if (pathname.startsWith('/sign-in')) {
                    router.replace('/')   
                }
                setAuthenticated(true)
                console.log(session)
            } else {
                setAuthenticated(false)
                router.replace('/sign-in')
            }
        })
    })
    if (authenticated) {
        return (
            <div>
                <Navbar />
                {children}
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-6 border-pink-100 border-4 border-b-6"></div>
            <div className='flex items-center justify-between gap-1 mt-2'>
                <Image src="/assets/icons/logo.svg" alt="Logo" width={32} height={32} />
                <h1>Clipy</h1>
            </div>
        </div>
    )

}

export default layout