import React from 'react'

export default function HeroBanner() {
  return (
    <header className="relative">
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center relative -z-1 w-full object-cover"
        style={{
          backgroundImage: `url('https://tixel.com/cdn-cgi/image/width=1792,format=auto/images/home/hero-20210901.jpg?size=1792')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="w-full h-full"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="mx-auto px-4 flex items-center h-full">
            <div className="w-full text-black">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                    Buy Safe. Sell Easy.
                  </span>
                </h1>
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                  The honest ticket marketplace.
                </h3>
                <div className="my-6">
                  <input
                    placeholder="Search anything..."
                    className="px-3.5 py-2 rounded-full inline-flex w-full sm:w-1/2 md:w-2/3 max-w-sm md:max-w-xl align-middle font-semibold leading-tight 
                      focus:outline-none space-x-2 relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
