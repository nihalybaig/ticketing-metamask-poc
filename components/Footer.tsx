import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <>
      {" "}
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-5">
          <div className="pt-16 pb-4 md:flex md:flex-wrap lg:pb-16">
            <div className="space-y-lg mb-10 md:w-1/2 lg:mb-0 lg:w-1/4">
              <h4 className="text-lg md:text-lg lg:text-xl font-bold mb-4">
                Join the mosh
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/au"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Buy a ticket
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Sell a ticket
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Working together
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login?partner"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Partner sign in
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-lg mb-10 md:w-1/2 lg:mb-0 lg:w-1/4">
              <h4 className="text-lg md:text-lg lg:text-xl font-bold mb-4">
                The full lineup
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/help"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tixel.com/terms"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tixel.com/blog"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Media &amp; updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jobs.wrkhq.com/tixel"
                    target="_blank"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-lg mb-10 md:w-1/2 lg:mb-0 lg:w-1/4">
              <h4 className="text-lg md:text-lg lg:text-xl font-bold mb-4">
                More locations
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/au/Brisbane/"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Brisbane
                  </Link>
                </li>
                <li>
                  <Link
                    href="/au/Melbourne/"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Melbourne
                  </Link>
                </li>
                <li>
                  <Link
                    href="/au/Perth/"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Perth
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tixel.com/global"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    +13 more
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-lg mb-10 md:w-1/2 lg:mb-0 lg:w-1/4">
              <h4 className="text-lg md:text-lg lg:text-xl font-bold mb-4">
                Events around the world
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/au/?change=1"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Australia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nl/?change=1"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    Netherlands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nz/?change=1"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    New Zealand
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?change=1"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    United States
                  </Link>
                </li>
                <li>
                  <Link
                    href="/uk/?change=1"
                    className="text-black hover:text-gray-600 space-x-1"
                  >
                    United Kingdom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-0.5 bg-black opacity-10" />
          <div className="mt-4 space-y-xl pb-6 md:flex md:justify-between md:space-y-0">
            <div>© 2018-2023 Tixel Pty Ltd. ACN 625 710 581</div>
            <div className="space-y-xl">
              <div className="flex justify-start space-x-8 md:justify-end py-2 md:py-0">
                <Link
                  href="https://www.facebook.com/tixelofficial/"
                  className="hover:text-black text-orange-500 space-x-1"
                >
                  <div className="w-6 text-black">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        id="svg_1"
                        fill="currentColor"
                        d="m15.2563,5.69565l2.5641,0c0.2831,0 0.5128,-0.23374 0.5128,-0.52174l0,-3.51495c0,-0.2734 -0.2067,-0.50087 -0.4744,-0.52018c-0.8158,-0.05895 -2.4097,-0.13878 -3.55582,-0.13878c-3.1492,0 -5.20046,1.92 -5.20046,5.40939l0,3.46018l-3.58971,0c-0.28307,0 -0.51281,0.23373 -0.51281,0.52173l0,3.6522c0,0.288 0.22974,0.5217 0.51282,0.5217l3.5897,0l0,9.9131c0,0.288 0.22974,0.5217 0.51282,0.5217l3.5897,0c0.28308,0 0.51282,-0.2337 0.51282,-0.5217l0,-9.9131l3.70354,0c0.2615,0 0.481,-0.1998 0.5098,-0.4643l0.3989,-3.6522c0.0339,-0.30887 -0.2041,-0.57913 -0.5097,-0.57913l-4.10254,0l0,-2.6087c0,-0.86452 0.68871,-1.56522 1.53844,-1.56522z"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/tixelofficial"
                  className="hover:text-black text-orange-500 space-x-1"
                >
                  <div className="w-6 text-black">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        id="svg_1"
                        fill="currentColor"
                        d="m24,4.63412c-0.8984,0.39844 -1.8008,0.69922 -2.8008,0.80078c1,-0.60156 1.8008,-1.60156 2.1992,-2.70312c-1,0.60156 -2,1 -3.0976,1.20312c-1,-1 -2.3008,-1.60156 -3.6992,-1.60156c-2.7032,0 -4.9024,2.19922 -4.9024,4.89844c0,0.40234 0,0.80078 0.1016,1.10156c-4.10158,-0.19922 -7.69924,-2.10156 -10.10158,-5.10156c-0.5,0.70312 -0.69922,1.60156 -0.69922,2.5c0,1.70312 0.89844,3.20312 2.19922,4.10156c-0.80078,-0.10156 -1.59766,-0.30078 -2.19922,-0.60156c0,0 0,0 0,0.10156c0,2.39844 1.69922,4.3984 3.89844,4.8008c-0.39844,0.0976 -0.79688,0.1992 -1.29688,0.1992c-0.30078,0 -0.60156,0 -0.90234,-0.1016c0.60156,2 2.40234,3.4024 4.60156,3.4024c-1.69922,1.3008 -3.80078,2.0976 -6.10156,2.0976c-0.39844,0 -0.80078,0 -1.19922,-0.0976c2.19922,1.3984 4.80078,2.1992 7.5,2.1992c9.1016,0 14,-7.5 14,-14c0,-0.19922 0,-0.39844 0,-0.60156c1,-0.69922 1.8008,-1.59766 2.5,-2.59766z"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/tixelofficial/"
                  className="hover:text-black text-orange-500 space-x-1"
                >
                  <div className="w-6 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 671.79 671.79"
                    >
                      <g fill="currentColor">
                        <path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"></path>
                        <path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"></path>
                      </g>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div aria-hidden="true" className="flex h-2">
        <div className="w-1/3 bg-yellow-500" />
        <div className="w-1/3 bg-pink-500" />
        <div className="w-1/3 bg-orange-500" />
      </div>
    </>
  );
}
