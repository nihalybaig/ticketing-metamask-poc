import React from 'react'
import { HOT_CARD_DETAILS } from '../data/hot_card_details';
import Link from 'next/link';

export default function WhatsHot() {
  return (
    <div>
      {" "}
      <section
        id="trends-card"
        className="pb-6 md:pt-12 md:pb-12 pt-6 max-w-5xl mx-auto relative z-10"
      >
        <div className="flex items-baseline space-x-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
            What&#39;s hot
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 py-4">
          {HOT_CARD_DETAILS.map((items, key) => (
            <div className="flex-none" key={key}>
              <aside className="rounded-lg border-gray-100 border relative overflow-hidden hover:border-gray-300 group">
                <div className="flex h-full flex-col">
                  <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-t-lg fix-mask-image-border-radius-on-scaling-image">
                    <img
                      src={items.img}
                      className="m-auto h-auto w-full transform transition-transform group-hover:scale-110"
                      alt="Event Cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-lg font-bold">
                      <Link href="/k/rising-melbourne">{items.title}</Link>
                    </p>
                    <p>{items.number_of_events} upcoming events</p>
                  </div>
                </div>
              </aside>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
