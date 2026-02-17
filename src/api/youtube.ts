// Configuration constants
export const YOUTUBE_PLAYLIST_ID = 'PLBNUP7DvK1GCabnNvIoxJoP7BFtPzJpsp'
export const YOUTUBE_API_KEY = process.env.YT_API_KEY
// Types for YouTube API responses
interface YouTubePlaylistItem {
    snippet: {
        resourceId: {
            videoId: string;
        };
        title: string;
        description: string;
        thumbnails: {
            default: { url: string; };
            medium: { url: string; };
            high: { url: string; };
        };
    };
}

interface YouTubePlaylistResponse {
    items: YouTubePlaylistItem[];
    nextPageToken?: string;
}

/**
 * Fetches all videos from a YouTube playlist
 * @returns Array of video IDs that can be used with YouTube embed
 */
export async function fetchPlaylistVideos(): Promise<string[]> {
    
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
        );
        
        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({}));
            const message =
                (errorBody as { error?: { message?: string; errors?: unknown[] } })?.error?.message ??
                `HTTP ${response.status}`;
            throw new Error(`Failed to fetch playlist items: ${response.status}: ${message}`);
        }

        const data: YouTubePlaylistResponse = await response.json();
        
        // Extract video IDs from the response
        const videoIds = data.items.map(item => item.snippet.resourceId.videoId);
        
        return videoIds;
    } catch (error) {
        console.error('Error fetching playlist videos:', error);
        return [];
    }
}

/**
 * Generates a YouTube embed URL from a video ID
 * @param videoId The YouTube video ID
 * @returns The full embed URL
 */
export function getYouTubeEmbedUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`;
} 
