import React from 'react';
import { Calendar, Users, MapPin, Clock, BarChart } from 'lucide-react';

interface SidebarProps {
  activeView: 'events' | 'approvals' | 'clubs' | 'venues' | 'analytics';
  onViewChange: (view: 'events' | 'approvals' | 'clubs' | 'venues' | 'analytics') => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const navigation = [
    { name: 'Events', icon: Calendar, view: 'events' as const },
    { name: 'Clubs', icon: Users, view: 'clubs' as const },
    { name: 'Venues', icon: MapPin, view: 'venues' as const },
    { name: 'Pending Approvals', icon: Clock, view: 'approvals' as const },
    { name: 'Analytics', icon: BarChart, view: 'analytics' as const },
  ];

  return (
    <div className="h-screen w-64 bg-gray-50 border-r">
      <div className="space-y-4 py-4">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              if (item.view === 'events' || item.view === 'approvals') {
                onViewChange(item.view);
              }
            }}
            className={`w-full flex items-center px-6 py-2 text-sm font-medium ${
              activeView === item.view
                ? 'text-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className={`mr-3 h-5 w-5 ${
              activeView === item.view ? 'text-indigo-600' : 'text-gray-400'
            }`} />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}