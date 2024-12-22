import React, { useState } from 'react';
import { Users, Search } from 'lucide-react';

interface Club {
  id: number;
  name: string;
  members: number;
  description: string;
  category: string;
}

const clubsData: Club[] = [
  {
    id: 1,
    name: "Tech Club",
    members: 150,
    description: "A community for technology enthusiasts and innovators",
    category: "Technology"
  },
  {
    id: 2,
    name: "Cultural Club",
    members: 200,
    description: "Celebrating diversity through arts and culture",
    category: "Culture"
  },
  // Add more clubs as needed
];

export default function Clubs() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClubs = clubsData.filter(club =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users className="w-6 h-6" />
          Clubs
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search clubs..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <div key={club.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
            <p className="text-gray-600 mb-4">{club.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{club.members} members</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {club.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}