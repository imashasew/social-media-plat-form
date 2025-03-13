import React, { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
export const Post = ({
  author,
  content,
  image,
  likes: initialLikes
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };
  return <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full" />
          <div className="ml-3">
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-gray-500">{author.handle}</div>
          </div>
        </div>
        <p className="text-gray-800 mb-4">{content}</p>
        {image && <img src={image} alt="Post content" className="w-full h-auto rounded-lg mb-4" />}
        <div className="flex items-center space-x-6 pt-2 border-t">
          <button onClick={handleLike} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <Heart className={`w-5 h-5 ${isLiked ? "fill-blue-600 text-blue-600" : ""}`} />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>;
};