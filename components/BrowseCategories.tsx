import React from 'react'
import { CATEGORIES } from '../data/categories';
import Link from 'next/link';

export default function BrowseCategories() {
  return (
    <div>
      {" "}
      <section className="pb-6 md:pt-12 md:pb-12 pt-6 max-w-5xl mx-auto relative z-10">
        <div className="flex items-baseline space-x-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
            Browse by category
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 py-4">
          {CATEGORIES.map(({ name, imgUrl }, i) => (
            <div key={i} className="flex-none">
              <Link href="#" title={name}>
                <div className="aspect-h-3 aspect-w-4 mb-2 overflow-hidden rounded-lg">
                  <img
                    src={`https://tixel.com/cdn-cgi/image/width=400,format=auto/images/genres/${imgUrl}.png`}
                    className="absolute my-auto h-auto w-full"
                  />
                </div>
                <p>
                  <strong>{name}</strong>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
