import React from "react";

interface PlanetProps {
  size?: number;
  variant?: "ring" | "crater" | "stripe";
  style?: React.CSSProperties;
}

export default function Planet({ size = 64, variant = "ring", style }: PlanetProps) {
  if (variant === "ring") {
    return (
      <svg width={size} height={size} style={style} viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="32" rx="24" ry="24" fill="#7dd3fc" />
        <ellipse cx="32" cy="38" rx="28" ry="8" fill="#fbbf24" opacity="0.7" transform="rotate(-15 32 38)" />
        <ellipse cx="32" cy="38" rx="28" ry="8" fill="#fbbf24" opacity="0.3" transform="rotate(10 32 38)" />
      </svg>
    );
  }
  if (variant === "crater") {
    return (
      <svg width={size} height={size} style={style} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="24" fill="#f472b6" />
        <circle cx="22" cy="28" r="4" fill="#be185d" opacity="0.4" />
        <circle cx="40" cy="40" r="3" fill="#be185d" opacity="0.3" />
        <circle cx="36" cy="24" r="2" fill="#be185d" opacity="0.2" />
      </svg>
    );
  }
  // Stripe variant
  return (
    <svg width={size} height={size} style={style} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="24" fill="#a3e635" />
      <rect x="12" y="28" width="40" height="8" rx="4" fill="#65a30d" opacity="0.7" />
      <rect x="16" y="38" width="32" height="4" rx="2" fill="#65a30d" opacity="0.5" />
    </svg>
  );
} 