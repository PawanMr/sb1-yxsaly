import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Header } from './components/Header';
import { DownloadForm } from './components/DownloadForm';
import { Features } from './components/Features';
import { VideoInfo } from './types';

function App() {
  const [downloadInfo, setDownloadInfo] = useState<VideoInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDownloadStart = () => {
    setError(null);
    setDownloadInfo(null);
  };

  const handleDownloadComplete = (data: VideoInfo) => {
    setDownloadInfo(data);
  };

  const handleError = (error: string) => {
    setError(error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700">
      <div className="container mx-auto px-4 py-16">
        <Header />

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <DownloadForm
              onDownloadStart={handleDownloadStart}
              onDownloadComplete={handleDownloadComplete}
              onError={handleError}
            />

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            {downloadInfo && (
              <div className="mt-4 p-4 bg-green-50 text-green-600 rounded-lg flex items-start space-x-4">
                <img
                  src={downloadInfo.thumbnail}
                  alt={downloadInfo.title}
                  className="w-24 h-auto rounded"
                />
                <div>
                  <h3 className="font-semibold mb-1">{downloadInfo.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">By {downloadInfo.author}</p>
                  <a
                    href={downloadInfo.url}
                    download
                    className="inline-flex items-center space-x-2 text-blue-600 hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Video</span>
                  </a>
                </div>
              </div>
            )}

            <Features />
          </div>

          <div className="bg-gray-50 p-6 text-center">
            <p className="text-sm text-gray-600">
              This tool is for educational purposes only. Please respect YouTube's terms of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;