import React from 'react';
import { Venue } from '../types';
import { Calendar } from 'lucide-react';

interface VenueSelectorProps {
  onVenueSelect: (venue: Venue | null) => void;
  selectedVenue: Venue | null;
}

const sampleVenues: Venue[] = [
  {
    id: '1',
    name: 'Main Auditorium',
    type: 'auditorium',
    capacity: 500,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: '2',
    name: 'Seminar Hall A',
    type: 'seminar_hall',
    capacity: 100,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&auto=format',
  },
];

export function VenueSelector({ onVenueSelect, selectedVenue }: VenueSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Venue</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sampleVenues.map((venue) => (
          <div
            key={venue.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedVenue?.id === venue.id
                ? 'border-indigo-500 ring-2 ring-indigo-200'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
            onClick={() => onVenueSelect(venue)}
          >
            <div className="relative h-32 mb-4">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="font-medium text-gray-900">{venue.name}</h3>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Capacity: {venue.capacity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}