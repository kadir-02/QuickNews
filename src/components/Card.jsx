import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={data.urlToImage}
        alt={data.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <a
          onClick={() => window.open(data.url)}
          className="text-xl font-semibold text-gray-800 mb-2 hover:underline hover:cursor-pointer "
        >
          {data.title}
        </a>
        <p className="text-gray-600 text-base mb-4">{data.description}</p>
        <button
          onClick={() => window.open(data.url)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
