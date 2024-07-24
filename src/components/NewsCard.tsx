import React from "react";

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default NewsCard;