import React from "react";
import { Bell, Home, MessageSquare, Search, User } from "lucide-react";
export const Navbar = () => {
  return <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600">SocialHub</h1>
            <div className="hidden md:block ml-10">
              <div className="relative">
                <input type="text" placeholder="Search..." className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500" />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Home className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            <MessageSquare className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>
    </nav>;
};