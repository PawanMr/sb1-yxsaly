import React from 'react';
import { Youtube } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center mb-12">
      <Youtube className="w-12 h-12 text-white mr-4" />
      <h1 className="text-4xl font-bold text-white">YouTube Downloader</h1>
    </div>
  );
}