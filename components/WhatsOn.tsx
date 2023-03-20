import Link from 'next/link';
import React from 'react'
import { CARD_DETAILS } from '../data/card_details';

export default function WhatsOn() {
  return (
    <div>
      {" "}
      <section
        id="carousel-card"
        className="pb-6 md:pt-12 md:pb-12 pt-6 max-w-5xl mx-auto relative z-10"
      >
        <div className="flex items-baseline space-x-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
            What&#39;s on in Sydney
          </h2>
          <p>
            <Link
              href="/au/Sydney/discover/all"
              className="text-orange-500 space-x-1"
            >
              <span className="font-semibold">View all</span>
            </Link>
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-4 py-4">
          {CARD_DETAILS.map((items, key) => (
            <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
              <div className="overflow-hidden rounded-t-lg">
                <img
                  className="m-auto h-auto w-full transform transition-transform group-hover:scale-110 hover:scale-110"
                  src={items.img}
                  alt="image"
                />
              </div>

              <div className="p-3 relative">
                <div className="absolute -mt-12 w-10">
                  <time className="flex items-center justify-center bg-gray-50 text-center rounded-lg leading-none w-12 min-h-12 shadow">
                    <div>
                      <p className="text-xs text-orange-500 uppercase rounded-t-lg">
                        {items.month}
                      </p>
                      <p className="text-lg font-semibold">{items.date}</p>
                    </div>
                  </time>
                </div>
                <div className="absolute top-0 right-0 m-1.5">
                  <div>
                    <button
                      className="h-10 w-10 rounded-full hover:bg-opacity-100 bg-gray-900 bg-opacity-90"
                      data-e2e="components/follow:button"
                    >
                      <div className="text-white absolute top-1/2 left-1/2 mx-auto -mt-3 -ml-3 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <p className="pt-1.5 font-bold">{items.title}</p>
                <p className=" text-gray-500 text-sm">{items.place}</p>
              </div>
              <div className="p-3 mt-auto flex-none pt-0">
                <Link
                  href="#!"
                  className="font-semibold text-orange-500 inline-block"
                >
                  Tickets from {items.price}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
