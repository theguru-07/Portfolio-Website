"use client";

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-[-10] opacity-[0.35]"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  );
}
