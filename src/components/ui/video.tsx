"use client"

import { useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoProps {
    src: string;
    playing?: boolean;
    muted?: boolean;
    width?: string | number;
    height?: string | number;
    className?: string;
    [key: string]: any;
}

export function Video({
    src,
    playing = true,
    muted = true,
    width = "100%",
    height = "auto",
    className = "",
    ...props
}: VideoProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleReady = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className={`${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 rounded-md">
                    <div className="flex flex-col items-center gap-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                        <span className="text-sm text-foreground/70">Loading video...</span>
                    </div>
                </div>
            )}

            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 rounded-md">
                    <div className="flex flex-col items-center gap-2 text-center p-4">
                        <div className="text-red-500 text-2xl">⚠️</div>
                        <span className="text-sm text-foreground/70">Failed to load video</span>
                    </div>
                </div>
            )}

            <ReactPlayer
                url={src}
                playing={playing}
                muted={muted}
                width={width}
                height={height}
                onReady={handleReady}
                onError={handleError}
                {...(props as any)}
            />
        </div>
    );
}
