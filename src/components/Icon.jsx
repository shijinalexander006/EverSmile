import {
  Stethoscope,
  Sparkles,
  CircleDot,
  Activity,
  Minus,
  Scissors,
  Crown,
  GitCommitHorizontal,
  Anchor,
  AlignCenter,
  Square,
  Smile,
  Sun,
  Layers,
  Baby,
  HeartPulse,
  Grip,
  Siren,
  GraduationCap,
  Cpu,
  ShieldCheck,
  Feather,
  IndianRupee,
  UserCheck,
  MapPin,
  CalendarClock,
  CalendarPlus,
  MessageSquare,
  Search,
  ClipboardList,
  Syringe,
  CalendarCheck,
  ScanLine,
  Radar,
  RotateCw,
  Zap,
  Camera,
  HelpCircle,
} from "lucide-react";

/**
 * Renders a lucide-react icon by string name so data files (siteData.js)
 * can stay plain JS/JSON-friendly instead of importing components directly.
 *
 * Icons are imported individually (not `import * as icons`) to keep bundle
 * size small — add new entries to this map + the import list above when a
 * new icon name is introduced in siteData.js.
 */
const registry = {
  Stethoscope,
  Sparkles,
  CircleDot,
  Activity,
  Minus,
  Scissors,
  Crown,
  GitCommitHorizontal,
  Anchor,
  AlignCenter,
  Square,
  Smile,
  Sun,
  Layers,
  Baby,
  HeartPulse,
  Grip,
  Siren,
  GraduationCap,
  Cpu,
  ShieldCheck,
  Feather,
  IndianRupee,
  UserCheck,
  MapPin,
  CalendarClock,
  CalendarPlus,
  MessageSquare,
  Search,
  ClipboardList,
  Syringe,
  CalendarCheck,
  ScanLine,
  Radar,
  RotateCw,
  Zap,
  Camera,
};

export default function Icon({ name, className = "h-6 w-6", ...props }) {
  const LucideIcon = registry[name] || HelpCircle;
  return <LucideIcon className={className} {...props} />;
}
