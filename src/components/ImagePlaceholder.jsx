import { ImageIcon } from "lucide-react";

/**
 * Visual placeholder for a photo that hasn't been supplied yet
 * (doctor headshots, clinic interior, treatment/gallery photos, logo, etc.)
 * Swap for a real <img> once assets are available.
 */
export default function ImagePlaceholder({ label = "Image placeholder", className = "" }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-navy-200 bg-navy-50 text-navy-400 ${className}`}
    >
      <ImageIcon className="h-8 w-8" />
      <span className="px-4 text-center text-xs font-medium">{label}</span>
    </div>
  );
}
