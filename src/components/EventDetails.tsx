import React from 'react';
import { Event } from '../types';
import { ApprovalWorkflow } from './ApprovalWorkflow';
import { Calendar, MapPin, Users, Building } from 'lucide-react';
import { format } from 'date-fns';

interface EventDetailsProps {
  event: Event;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="relative h-64">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={event.club.logo}
            alt={event.club.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
            <p className="text-gray-600">Organized by {event.club.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span>{format(event.date, 'PPp')}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span>{event.venue.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-400" />
            <span>{event.registrations}/{event.capacity} registered</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-gray-400" />
            <span>{event.venue.type.replace('_', ' ').toUpperCase()}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <h3 className="text-lg font-semibold mb-2">About the Event</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Approval Status</h3>
          <ApprovalWorkflow event={event} />
        </div>
      </div>
    </div>
  );
}