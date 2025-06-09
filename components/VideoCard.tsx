'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VideoCard = ({ id, thumbnail, title, createdAt, duration, userImg, username, views, visibility }: VideoCardProps) => {
    return (
        <Link href={`/video/${id}`} className='video-card'>
            <Image src={thumbnail} className='thumbnail' alt='thumbnail' width={290} height={160} />
            <article>
                <div>
                    <figure>
                        <Image src={userImg || '/assets/images/dummy.jpg'} className='rounded-full aspect-square' alt='avatar' width={34} height={34} />
                        <figcaption>
                            <h3>{username}</h3>
                            <p>{visibility}</p>
                        </figcaption>
                    </figure>
                    <aside>
                        <Image src="/assets/icons/eye.svg" alt='views' width={16} height={16} />
                        {views}
                    </aside>
                </div>
                <h2>{title} - {" "} {createdAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}</h2>
            </article>
            <button className='copy-btn' onClick={() => { }}>
                <Image src="/assets/icons/link.svg" alt='copy' width={18} height={18}/>
            </button>
            {duration && (
                <div className="duration">
                    {Math.ceil(duration/ 60)}min
                </div>
            )}
        </Link>
    )
}

export default VideoCard