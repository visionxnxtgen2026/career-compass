import { useMemo, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { BackButton } from "@/components/BackButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, Filter, Calendar, ExternalLink } from "lucide-react";
import { JOBS, type Job } from "@/data/mock";
import { loadSelection } from "@/lib/storage";

const CATEGORIES: Job["category"][] = ["MNCs", "Startups", "Small Companies", "Work From Home", "Internships"];
const TYPES: Job["type"][] = ["Full Time", "Internship", "Part Time", "Remote"];

const Jobs = () => {
  const sel = loadSelection();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Job["category"] | "All">("All");
  const [type, setType] = useState<Job["type"] | "All">("All");

  // Match jobs by selected district / state. Remote roles always show.
  const matchesLocation = (jobLoc: string) => {
    const loc = jobLoc.toLowerCase();
    if (loc.includes("remote")) return true;
    if (sel.district && loc.includes(sel.district.toLowerCase())) return true;
    if (sel.state && loc.includes(sel.state.toLowerCase())) return true;
    if (!sel.district && !sel.state) return true;
    return false;
  };

  const filtered = useMemo(() => {
    return JOBS.filter((j) =>
      matchesLocation(j.location) &&
      (cat === "All" || j.category === cat) &&
      (type === "All" || j.type === type) &&
      (q === "" || j.role.toLowerCase().includes(q.toLowerCase()) || j.company.toLowerCase().includes(q.toLowerCase()))
    );
  }, [q, cat, type, sel.district, sel.state]);

  const buildApplyUrl = (j: Job) => {
    const query = encodeURIComponent(`${j.role} ${j.company} ${j.location}`);
    return `https://www.linkedin.com/jobs/search/?keywords=${query}`;
  };

  return (
    <PageLayout>
      <section className="container-page pt-6 pb-16">
        <div className="flex items-center justify-between mb-6 gap-4">
          <BackButton />
          <div className="text-sm text-muted-foreground flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            {sel.district ? `${sel.district}, ${sel.state}` : sel.state || "All locations"}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Latest <span className="gradient-text">Jobs</span> {sel.district ? `in ${sel.district}` : ""}
          </h1>
          <p className="mt-3 text-muted-foreground">Apply to top companies hiring now. Filter by category, type and experience.</p>
        </div>

        {/* Filters */}
        <div className="rounded-2xl border bg-card p-4 mb-6 grid lg:grid-cols-[1fr,auto,auto] gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search role or company..."
              className="pl-11 h-11 rounded-xl"
            />
          </div>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value as any)}
            className="h-11 px-4 rounded-xl border bg-background text-sm font-medium"
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="h-11 px-4 rounded-xl border bg-background text-sm font-medium"
          >
            <option value="All">All Types</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Chip active={cat === "All"} onClick={() => setCat("All")}>All</Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>
          ))}
        </div>

        <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
          <Filter className="h-4 w-4" /> Showing {filtered.length} jobs
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((j) => (
            <div key={j.id} className="rounded-2xl border bg-card p-5 card-hover flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground font-bold text-sm shadow-glow">
                  {j.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground truncate">{j.company}</div>
                  <div className="font-semibold truncate">{j.role}</div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {j.location}</div>
                <div className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {j.experience}</div>
                {j.salary && <div className="flex items-center gap-1.5"><span className="font-semibold text-foreground">{j.salary}</span></div>}
              </div>

              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-success-soft text-success font-medium">{j.type}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-primary-soft text-primary font-medium">{j.category}</span>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1 ml-auto">
                  <Calendar className="h-3 w-3" /> {j.applyBy}
                </span>
              </div>

              <Button asChild className="w-full bg-gradient-primary mt-auto gap-2">
                <a href={buildApplyUrl(j)} target="_blank" rel="noopener noreferrer">
                  Apply Now <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No jobs match your filters.</div>
        )}
      </section>
    </PageLayout>
  );
};

const Chip = ({ active, onClick, children }: any) => (
  <button
    onClick={onClick}
    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
      active
        ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
        : "bg-card hover:border-primary hover:text-primary"
    }`}
  >
    {children}
  </button>
);

export default Jobs;
