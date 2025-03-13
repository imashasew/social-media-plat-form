import React from "react";
import { Navbar } from "./components/Navbar";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
export function App() {
  const posts = [{
    id: 1,
    author: {
      name: "John Doe",
      handle: "@johndoe",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    content: "Just launched my new portfolio website! Check it out and let me know what you think 🚀",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
    likes: 42
  }, {
    id: 2,
    author: {
      name: "Jane Smith",
      handle: "@janesmith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    content: "Learning React has been such an amazing journey! The community is incredible 💻",
    likes: 28
  }];
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {posts.map(post => <Post key={post.id} {...post} />)}
          </div>
          <div className="hidden md:block">
            <div className="sticky top-20">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>;
}