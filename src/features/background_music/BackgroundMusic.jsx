import music from '../../assets/Kokoroko - ABUSEY JUNCTION ⧸⧸ WE OUT HERE.mp3';
import './Background-Music.css';
import { useState, useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  useEffect(() => {
    // Configure the audio object
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // 50% volume

    // Cleanup when component unmounts
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='sound-container'>
      <button 
      className='sound'
      onClick={toggleMusic}>
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
};

export default BackgroundMusic;