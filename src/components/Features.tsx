import React from 'react';
import { Download, Youtube, AlertCircle } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Download,
      title: 'Fast Download',
      description: 'High-speed video downloads with no waiting time',
    },
    {
      icon: Youtube,
      title: 'All Formats',
      description: 'Download in MP4, MP3, and various qualities',
    },
    {
      icon: AlertCircle,
      title: 'No Registration',
      description: 'Download videos without creating an account',
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div key={feature.title} className="text-center p-4">
          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <feature.icon className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}