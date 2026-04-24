import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, GraduationCap, Briefcase, BookOpen, Building2, Target,
  ShieldCheck, CheckCircle2, MapPin, Send,
} from "lucide-react";
import { JOBS } from "@/data/mock";
import { saveSelection } from "@/lib/storage";

const stats = [
  { icon: GraduationCap, value: "50,000+", label: "Students Guided", color: "primary" },
  { icon: BookOpen, value: "500+", label: "Courses Available", color: "success" },
  { icon: Briefcase, value: "1000+", label: "Job Opportunities", color: "orange" },
  { icon: Building2, value: "200+", label: "Top Colleges", color: "info" },
];

const Index = () => {
  const featuredJobs = JOBS.slice(0, 4);

  return (
    <PageLayout>
      <section className="container-page pt-12 pb-8">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary-soft text-primary text-xs font-semibold">
            <Target className="h-3.5 w-3.5" /> From Confusion to Career
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            What Are You <span className="gradient-text">Looking For?</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose your path and let us help you build your future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Student card */}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-soft via-card to-card p-8 card-hover">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-4">
                  For 12th Passed Students
                </span>
                <h2 className="text-3xl font-bold mb-2">I want to choose<br />what to study</h2>
                <p className="text-muted-foreground">
                  Explore courses, colleges, fees, career options and build your future
                </p>
              </div>
              <div className="grid place-items-center h-16 w-16 rounded-2xl bg-gradient-primary shadow-glow shrink-0">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            <ul className="space-y-2.5 mb-8">
              {[
                "Courses After 12th (Science, Commerce, Arts)",
                "Top Colleges & Fees",
                "Career Opportunities",
                "Detailed Course Guidance",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <Link to="/explore" onClick={() => saveSelection({ flow: "student" })}>
              <Button size="lg" className="w-full bg-gradient-primary hover:opacity-95 shadow-glow gap-2 h-12 text-base">
                Explore Courses <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Job card */}
          <div className="group relative overflow-hidden rounded-3xl border border-success/20 bg-gradient-to-br from-success-soft via-card to-card p-8 card-hover">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-success-soft text-success text-xs font-semibold mb-4">
                  For College Graduates / Job Seekers
                </span>
                <h2 className="text-3xl font-bold mb-2">I want to find<br />a job</h2>
                <p className="text-muted-foreground">
                  Find the best job opportunities, companies hiring and apply directly
                </p>
              </div>
              <div className="grid place-items-center h-16 w-16 rounded-2xl bg-gradient-success shadow-medium shrink-0">
                <Briefcase className="h-8 w-8 text-success-foreground" />
              </div>
            </div>

            <ul className="space-y-2.5 mb-8">
              {[
                "Latest Job Openings",
                "Filter by Location, Role, Company Type",
                "Apply Directly",
                "Track Your Applications",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <Link to="/jobs/location" onClick={() => saveSelection({ flow: "job" })}>
              <Button
                size="lg"
                className="w-full bg-gradient-success hover:opacity-95 gap-2 h-12 text-base text-success-foreground"
              >
                Find Jobs <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="container-page py-10">
        <div className="rounded-3xl border bg-card p-6 md:p-8 shadow-soft">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div className="text-center md:text-left mx-auto md:mx-0">
              <h3 className="text-2xl font-bold">Find Jobs in Salem</h3>
              <p className="text-sm text-muted-foreground mt-1">Apply to top companies hiring now</p>
            </div>
            <Link to="/jobs">
              <Button variant="outline" className="rounded-xl border-primary/30 text-primary hover:bg-primary-soft">
                View All Jobs in Salem
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-6 text-sm text-muted-foreground">
            {[
              { label: "MNCs", icon: Building2 },
              { label: "Startups", icon: Send },
              { label: "Small Companies", icon: Briefcase },
              { label: "Work From Home", icon: MapPin },
              { label: "Internships", icon: GraduationCap },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <c.icon className="h-4 w-4 text-primary" /> {c.label}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredJobs.map((j) => (
              <div key={j.id} className="rounded-2xl border bg-background p-4 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary font-bold text-sm">
                    {j.logo}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground truncate">{j.company}</div>
                    <div className="text-sm font-semibold truncate">{j.role}</div>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {j.location}</div>
                  <div className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {j.experience}</div>
                </div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-success-soft text-success font-medium">{j.type}</span>
                  <span className="text-[11px] text-muted-foreground">Apply by {j.applyBy}</span>
                </div>
                <Button size="sm" className="w-full bg-gradient-primary hover:opacity-95">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / trust strip */}
      <section className="container-page pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-card p-5 flex items-center gap-3 card-hover">
              <div className={`grid h-12 w-12 place-items-center rounded-xl bg-${s.color}-soft text-${s.color}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, t: "100% Free", d: "No registration or hidden charges to use our platform" },
            { icon: CheckCircle2, t: "Verified Companies", d: "All companies are verified and genuine" },
            { icon: Send, t: "Direct Apply", d: "Apply directly on company or job portal" },
            { icon: Target, t: "Application Tracking", d: "Track and manage all your job applications" },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl bg-card border p-5 flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
