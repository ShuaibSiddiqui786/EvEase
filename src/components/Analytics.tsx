import React from 'react';
import { BarChart, Calendar, Users, MapPin } from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

const stats: StatCard[] = [
  {
    title: "Total Events",
    value: "156",
    change: "+12% from last month",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: "Active Clubs",
    value: "28",
    change: "+3 new clubs",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Venue Utilization",
    value: "85%",
    change: "+5% from last month",
    icon: <MapPin className="w-6 h-6" />
  },
  {
    title: "Total Participants",
    value: "2,845",
    change: "+18% from last month",
    icon: <Users className="w-6 h-6" />
  }
];

export default function Analytics() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BarChart className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Analytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <h3 className="text-gray-600 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
            <p className="text-sm text-green-600 mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Event Distribution by Category</h3>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder - Event distribution visualization</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Event Trends</h3>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder - Monthly trends visualization</p>
          </div>
        </div>
      </div>
    </div>
  );
}