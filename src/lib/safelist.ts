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
  "bg-primary", "bg-primary-soft", "text-primary", "border-primary", "border-primary/20", "border-primary/30", "border-primary/40", "bg-primary/20", "hover:bg-primary-soft", "hover:text-primary", "hover:bg-primary", "hover:text-primary-foreground", "text-primary-foreground",
  "bg-success", "bg-success-soft", "text-success", "border-success", "border-success/20", "border-success/30", "border-success/40", "bg-success/20", "hover:bg-success-soft", "hover:text-success", "hover:bg-success", "hover:text-success-foreground", "text-success-foreground",
  "bg-info", "bg-info-soft", "text-info", "border-info", "border-info/20", "border-info/30", "border-info/40", "bg-info/20", "hover:bg-info-soft", "hover:text-info", "hover:bg-info", "hover:text-info-foreground", "text-info-foreground",
  "bg-orange", "bg-orange-soft", "text-orange", "border-orange", "border-orange/20", "border-orange/30", "border-orange/40", "bg-orange/20", "hover:bg-orange-soft", "hover:text-orange", "hover:bg-orange", "hover:text-orange-foreground", "text-orange-foreground",
  "bg-pink", "bg-pink-soft", "text-pink", "border-pink", "border-pink/20", "border-pink/30", "border-pink/40", "bg-pink/20", "hover:bg-pink-soft", "hover:text-pink", "hover:bg-pink", "hover:text-pink-foreground", "text-pink-foreground",
  "bg-teal", "bg-teal-soft", "text-teal", "border-teal", "border-teal/20", "border-teal/30", "border-teal/40", "bg-teal/20", "hover:bg-teal-soft", "hover:text-teal", "hover:bg-teal", "hover:text-teal-foreground", "text-teal-foreground",
  "bg-warning", "bg-warning-soft", "text-warning", "border-warning", "border-warning/20", "border-warning/30", "border-warning/40", "bg-warning/20", "hover:bg-warning-soft", "hover:text-warning", "hover:bg-warning", "hover:text-warning-foreground", "text-warning-foreground",
  "bg-muted", "bg-muted-soft", "text-muted", "text-muted-foreground", "border-muted", "border-muted/20", "border-muted/30", "border-muted/40", "hover:bg-muted", "hover:text-muted-foreground",
];
