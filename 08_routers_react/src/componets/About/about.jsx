import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ipsa, consequuntur repellat corporis beatae culpa accusantium
              inventore. Molestiae necessitatibus accusantium porro eveniet quam
              doloribus adipisci non deserunt sequi voluptas quos commodi
              eligendi magnam itaque sunt consequuntur ad, similique nobis
              nesciunt. Quam, beatae commodi architecto tempore in odio
              voluptatibus expedita consequuntur!
            </p>
            <p className="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate beatae deleniti. Fuga libero fugit voluptatibus harum
              quis dignissimos sed accusantium debitis est. Eveniet neque
              consequatur quam inventore facilis laudantium?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
