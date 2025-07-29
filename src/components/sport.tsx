'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/podium.jpg',
      alt: 'Cricket match victory celebration',
      caption: 'Celebrating a team victory in local cricket tournament',
    },
    {
      src: '/levens.JPG',
      alt: 'Sports competition',
      caption: 'Participating in college sports competition',
    },
    {
      src: '/marseille.JPG',
      alt: 'Athletic event',
      caption: 'Athletic event during university days',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Sports & Activities
        </h2>
        <p className="mt-4 text-muted-foreground">
          During my college years, I was actively involved in sports and various athletic activities. 
          Sports taught me teamwork, discipline, and perseverance - qualities that I bring to my professional work.
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;