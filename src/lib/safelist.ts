// This file exists only so Tailwind's JIT doesn't purge dynamic color classes
// like `bg-${color}-soft` used for Stream/Role color theming. Do not import.
//
// bg-primary-soft text-primary border-primary/30 hover:bg-primary-soft hover:text-primary
// bg-success-soft text-success border-success/30 hover:bg-success-soft hover:text-success border-success/40 border-success/20 hover:bg-success hover:text-success-foreground
// bg-info-soft text-info border-info/30 hover:bg-info-soft hover:text-info
// bg-orange-soft text-orange border-orange/30 hover:bg-orange-soft hover:text-orange
// bg-pink-soft text-pink border-pink/30 hover:bg-pink-soft hover:text-pink
// bg-teal-soft text-teal border-teal/30 hover:bg-teal-soft hover:text-teal
// bg-warning text-warning border-warning/30 hover:bg-warning/10
// bg-muted text-muted-foreground border-muted
export {};
// Used for dynamic color classes like `bg-${color}-soft` in Streams/Roles.
export const SAFELIST_CLASSES = [
  "bg-primary-soft", "text-primary", "border-primary/30", "border-primary/40", "hover:bg-primary-soft", "hover:text-primary", "hover:bg-primary", "hover:text-primary-foreground",
  "bg-success-soft", "text-success", "border-success/30", "border-success/40", "border-success/20", "hover:bg-success-soft", "hover:text-success", "hover:bg-success", "hover:text-success-foreground",
  "bg-info-soft", "text-info", "border-info/30", "border-info/40", "hover:bg-info-soft", "hover:text-info",
  "bg-orange-soft", "text-orange", "border-orange/30", "border-orange/40", "hover:bg-orange-soft", "hover:text-orange",
  "bg-pink-soft", "text-pink", "border-pink/30", "border-pink/40", "hover:bg-pink-soft", "hover:text-pink",
  "bg-teal-soft", "text-teal", "border-teal/30", "border-teal/40", "hover:bg-teal-soft", "hover:text-teal",
  "bg-warning", "text-warning", "border-warning/30", "border-warning/40", "hover:bg-warning/10", "text-warning-foreground",
  "bg-muted", "text-muted-foreground",
];
