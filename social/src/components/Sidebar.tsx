import React from "react";
export const Sidebar = () => {
  const suggestions = [{
    name: "Sarah Wilson",
    handle: "@sarahw",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Alex Thompson",
    handle: "@alexthompson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Emma Davis",
    handle: "@emmad",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }];
  return <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold text-lg mb-4">Who to follow</h2>
      {suggestions.map(user => <div key={user.handle} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500">{user.handle}</div>
            </div>
          </div>
          <button className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:bg-blue-50">
            Follow
          </button>
        </div>)}
    </div>;
};