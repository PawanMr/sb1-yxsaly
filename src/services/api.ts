import axios from 'axios';
import { VideoInfo, ApiError } from '../types';

const API_URL = import.meta.env.PROD ? '/api' : 'http://localhost:3000/api';

export async function downloadVideo(url: string): Promise<VideoInfo> {
  try {
    const response = await axios.post<VideoInfo>(`${API_URL}/download`, { url });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ApiError>(error)) {
      throw new Error(error.response?.data?.message || 'Failed to download video');
    }
    throw new Error('Failed to download video');
  }
}