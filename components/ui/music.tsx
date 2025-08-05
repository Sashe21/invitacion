"use client";

import { useState, useRef } from "react";
import { Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MusicToggle() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio
        .play()
        .then(() => setMusicPlaying(true))
        .catch((err) => {
          console.warn("Reproducción fallida:", err);
        });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/boda.mp3" loop />
      <Button
        onClick={toggleMusic}
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-rose-600 border border-rose-200"
        size="sm"
      >
        {musicPlaying ? (
          <Music className="w-4 h-4" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
        <span className="ml-2">{musicPlaying ? "Pausar" : "Música"}</span>
      </Button>
    </>
  );
}
