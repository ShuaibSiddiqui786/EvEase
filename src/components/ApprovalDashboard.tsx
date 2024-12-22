import React from 'react';
import { Event } from '../types';
import { format } from 'date-fns';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface ApprovalDashboardProps {
  pendingEvents: Event[];
  onApprove: (eventId: string) => void;
  onReject: (eventId: string) => void;
}

export function ApprovalDashboard({ pendingEvents, onApprove, onReject }: ApprovalDashboardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Pending Approvals</h3>
        <p className="mt-1 text-sm text-gray-500">Review and manage event requests</p>
      </div>
      <div className="border-t border-gray-200">
        <ul role="list" className="divide-y divide-gray-200">
          {pendingEvents.map((event) => (
            <li key={event.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-lg object-cover"
                    src={event.image}
                    alt={event.title}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-1.5 h-4 w-4" />
                        {format(event.date, 'PPp')}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1.5 h-4 w-4" />
                        {event.venue.name}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1.5 h-4 w-4" />
                        {event.capacity} capacity
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1.5 h-4 w-4" />
                        Pending since {format(new Date(), 'PP')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => onReject(event.id)}
                    className="inline-flex items-center px-3 py-1.5 border border-red-600 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => onApprove(event.id)}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Approve
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}