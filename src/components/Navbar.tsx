import React from 'react';
import { Calendar, PlusCircle, Settings } from 'lucide-react';

interface NavbarProps {
  onCreateClick: () => void;
}

export function Navbar({ onCreateClick }: NavbarProps) {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold">EvEase</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onCreateClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Create Event
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="w-6 h-6" />
            </button>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}