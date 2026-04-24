import { Link, useLocation } from "react-router-dom";
import { GraduationCap, MapPin, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { loadSelection } from "@/lib/storage";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses", caret: true },
  { label: "Colleges", to: "/colleges" },
  { label: "Jobs", to: "/jobs" },
  { label: "Skill Test", to: "/skill-test" },
  { label: "Resources", to: "/resources", caret: true },
  { label: "Blog", to: "/blog" },
  { label: "About Us", to: "/about" },
];

export const Header = () => {
  const { pathname } = useLocation();
  const [loc, setLoc] = useState<string>("Location: Not Selected");

  useEffect(() => {
    const update = () => {
      const s = loadSelection();
      if (s.district && s.state) setLoc(`${s.district}, ${s.state}`);
      else if (s.state) setLoc(s.state);
      else if (s.country) setLoc(s.country);
      else setLoc("Location: Not Selected");
    };
    update();
    window.addEventListener("storage", update);
    window.addEventListener("careerpath:selection", update as EventListener);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("careerpath:selection", update as EventListener);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold">
              Career<span className="gradient-text">Path</span>
            </div>
            <div className="text-[10px] text-muted-foreground">Your Future. Our Guidance.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                  active ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {item.caret && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                {active && <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/location"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl bg-primary-soft text-primary hover:bg-primary/10 transition-colors max-w-[200px]"
          >
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate">{loc}</span>
            <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-70" />
          </Link>
          <Button className="bg-gradient-primary hover:opacity-95 shadow-glow gap-2">
            <User className="h-4 w-4" />
            Login / Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
