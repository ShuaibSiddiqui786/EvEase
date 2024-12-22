import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { EventCard } from './components/EventCard';
import { CreateEventForm } from './components/CreateEventForm';
import { Modal } from './components/Modal';
import { Event } from './types';
import { ApprovalDashboard } from './components/ApprovalDashboard';
import { EventDetails } from './components/EventDetails';

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Symposium 2024',
    description: 'Join us for a day of innovation and technology',
    club: {
      id: '1',
      name: 'Tech Club',
      type: 'technical',
      logo: 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=64&h=64&fit=crop&auto=format',
    },
    date: new Date('2024-04-15T09:00:00'),
    venue: {
      id: '1',
      name: 'Main Auditorium',
      type: 'auditorium',
      capacity: 500,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&auto=format',
    },
    capacity: 200,
    registrations: 150,
    status: 'approved',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&auto=format',
  },
  {
    id: '2',
    title: 'Cultural Night 2024',
    description: 'A celebration of art and culture',
    club: {
      id: '2',
      name: 'Cultural Club',
      type: 'cultural',
      logo: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=64&h=64&fit=crop&auto=format',
    },
    date: new Date('2024-04-20T18:00:00'),
    venue: {
      id: '2',
      name: 'Open Air Theatre',
      type: 'auditorium',
      capacity: 1000,
      image: 'https://images.unsplash.com/photo-1578944032637-f09897c5233d?w=800&h=600&fit=crop&auto=format',
    },
    capacity: 500,
    registrations: 320,
    status: 'pending',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop&auto=format',
  },
];

export default function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeView, setActiveView] = useState<'events' | 'approvals'>('events');

  const pendingEvents = sampleEvents.filter(event => event.status === 'pending');

  const handleApprove = (eventId: string) => {
    console.log('Approved event:', eventId);
  };

  const handleReject = (eventId: string) => {
    console.log('Rejected event:', eventId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCreateClick={() => setIsCreateModalOpen(true)} />
      <div className="flex">
        <Sidebar onViewChange={setActiveView} activeView={activeView} />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {activeView === 'events' ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
                  <div className="flex gap-4">
                    <select className="bg-white border rounded-md px-4 py-2 text-sm">
                      <option>All Clubs</option>
                      <option>Technical</option>
                      <option>Cultural</option>
                      <option>Sports</option>
                    </select>
                    <select className="bg-white border rounded-md px-4 py-2 text-sm">
                      <option>All Status</option>
                      <option>Approved</option>
                      <option>Pending</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onClick={() => setSelectedEvent(event)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <ApprovalDashboard
                pendingEvents={pendingEvents}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            )}
          </div>
        </main>
      </div>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New Event"
      >
        <CreateEventForm />
      </Modal>

      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title="Event Details"
      >
        {selectedEvent && <EventDetails event={selectedEvent} />}
      </Modal>
    </div>
  );
}