'use client';
import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) {
      console.error('Google OAuth error:', error.message)
    } else {
      console.log('Redirecting to Google...')
    }
  }
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href={'/'}>
          <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32} />
          <h1>Clipy</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image src="/assets/icons/star.svg" key={index} alt='star' width={20} height={20} />
              ))}
            </figure>
            <p>
              Clipy makes screen recording easy.
              From quick tutorials to detailed walkthroughs, capture and share your screen effortlessly.
            </p>
            <article>
              <Image src="/assets/images/jason.png" alt='jason' width={64} height={64} className='rounded-full' />
              <div>
                <h2>
                  Jason Rivera
                </h2>
                <p>Product Designer, Google</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Clipy {(new Date()).getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href={'/'}>
            <Image src="/assets/icons/logo.svg" alt="logo" width={40} height={40} />
            <h1>Clipy</h1>
          </Link>
          <p>Create and share your very first <span>Clipy video</span> in no time!</p>
          <button onClick={() => { handleGoogleSignIn() }}>
            <Image src="/assets/icons/google.svg" alt='google' width={22} height={22} />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className='overlay' />
    </main>
  )
}

export default Page