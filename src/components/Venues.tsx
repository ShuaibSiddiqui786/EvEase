import React, { useState } from 'react';
import { MapPin, Search, Calendar } from 'lucide-react';

interface Venue {
  id: number;
  name: string;
  capacity: number;
  location: string;
  availability: string;
  facilities: string[];
}

const venuesData: Venue[] = [
  {
    id: 1,
    name: "Main Auditorium",
    capacity: 500,
    location: "Main Campus",
    availability: "Available",
    facilities: ["Stage", "Sound System", "Projector"]
  },
  {
    id: 2,
    name: "Open Air Theatre",
    capacity: 1000,
    location: "East Campus",
    availability: "Booked",
    facilities: ["Stage", "Lighting", "Seating"]
  },
  // Add more venues as needed
];

export default function Venues() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVenues = venuesData.filter(venue =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Venues
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search venues..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVenues.map((venue) => (
          <div key={venue.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Capacity:</span> {venue.capacity} people
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Location:</span> {venue.location}
              </p>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className={`text-sm ${
                  venue.availability === 'Available' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {venue.availability}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {venue.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}