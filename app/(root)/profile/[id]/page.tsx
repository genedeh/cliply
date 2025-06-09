import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react'

const page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return (
        <div className='wrapper page'>
            <Header title='Genesis | Next.js' subHeader='genesis.enedeh@gmail.com' userImg='/assets/images/dummy.jpg' />
            <section className='video-grid'>
                {dummyCards.map((cardInfo) => (
                    <VideoCard key={cardInfo.id} {...cardInfo} />
                ))}
            </section>
        </div>
    )
}

export default page