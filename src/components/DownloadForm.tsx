import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { downloadVideo } from '../services/api';
import { VideoInfo } from '../types';

interface DownloadFormProps {
  onDownloadStart: () => void;
  onDownloadComplete: (data: VideoInfo) => void;
  onError: (error: string) => void;
}

export function DownloadForm({ onDownloadStart, onDownloadComplete, onError }: DownloadFormProps) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsLoading(true);
    onDownloadStart();

    try {
      const data = await downloadVideo(url);
      onDownloadComplete(data);
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Failed to download video');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
          Video URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Download Video</span>
          </>
        )}
      </button>
    </form>
  );
}