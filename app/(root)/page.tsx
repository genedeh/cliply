import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <main className="wrapper page">
      <Header title='All Videos' subHeader='Public Library' />
      <section className='video-grid'>
        {dummyCards.map((cardInfo) => (
          <VideoCard key={cardInfo.id} {...cardInfo} />
        ))}
      </section>
    </main>
  )
}

export default page