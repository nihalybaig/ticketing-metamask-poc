import Link from 'next/link';
import React from 'react'
import { ARTISTS_CARD_DETAILS } from '../data/artists_card_details';

export default function TrendsArtist() {
  return (
    <div>
      {" "}
      <section
        id="trends-artist"
        className="pb-6 md:pt-12 md:pb-12 pt-6 max-w-5xl mx-auto relative z-10"
      >
        <div className="flex items-baseline space-x-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
            Trending artists
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 py-4">
          {ARTISTS_CARD_DETAILS.map((items, key) => (
            <div className="flex-none" key={key}>
              <aside className="relative overflow-hidden border rounded-lg border-gray-100 bg-gray-top-left-slash hover:border-gray-300 group  ">
                <Link
                  href="https://tixel.com/au/music-tickets/spiritbox"
                  className="block p-2"
                >
                  <div className="flex flex-col h-full">
                    <div className="p-4 pb-0">
                      <div className="relative w-16 h-16">
                        <img
                          src={items.img}
                          className="object-cover w-16 h-16 rounded-full"
                          alt={items.title}
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-bold">{items.title}</p>
                      <p>{items.number_of_events} upcoming events</p>
                    </div>
                  </div>
                </Link>
              </aside>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
