import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ChevronRight, Briefcase, Building2, Bell, ArrowRight, ShieldCheck, Target, Clock, Award } from "lucide-react";
import { DISTRICTS } from "@/data/mock";
import { saveSelection, loadSelection } from "@/lib/storage";

const POPULAR = DISTRICTS["Tamil Nadu"];

const JobLocation = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string>(loadSelection().district || "");

  const filtered = POPULAR.filter((c) => c.toLowerCase().includes(q.toLowerCase()));

  const pick = (c: string) => {
    setSelected(c);
    saveSelection({ flow: "job", state: "Tamil Nadu", district: c });
    window.dispatchEvent(new Event("careerpath:selection"));
  };

  return (
    <PageLayout>
      <section className="container-page pt-8 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Choose Your <span className="gradient-text">Location</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Select the location where you want to search for job opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px,1fr] gap-6">
          <aside className="rounded-3xl border bg-card p-6">
            <div className="grid h-32 w-32 mx-auto place-items-center rounded-3xl bg-primary-soft mb-4">
              <MapPin className="h-16 w-16 text-primary" strokeWidth={1.5} />
            </div>
            <ul className="space-y-3 mt-4">
              {[
                { icon: Briefcase, t: "Find jobs near your location", d: "Get relevant job opportunities closer to you." },
                { icon: Building2, t: "Location specific results", d: "Discover jobs from top companies hiring in your area." },
                { icon: Bell, t: "Stay updated", d: "Receive alerts for new job openings in your selected location." },
              ].map((b) => (
                <li key={b.t} className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <b.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{b.t}</div>
                    <div className="text-xs text-muted-foreground">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="rounded-3xl border bg-card p-6 md:p-8">
            <h3 className="font-semibold mb-3">Search City, District or Locality</h3>
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="Type your city, district or locality..."
                className="pl-11 h-12 rounded-xl border-primary/30"
              />
            </div>

            <div className="text-sm font-semibold mb-3">Popular Cities</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((c) => (
                <button
                  key={c}
                  onClick={() => pick(c)}
                  className={`flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl border bg-background hover:border-primary hover:bg-primary-soft transition-all ${
                    selected === c ? "border-primary bg-primary-soft shadow-medium" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary text-xs">🏛️</div>
                    <span className="text-sm font-medium">{c}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex-1 h-px bg-border" /> OR <div className="flex-1 h-px bg-border" />
            </div>

            <button
              onClick={() => pick("Current Location")}
              className="w-full flex items-center justify-between px-4 py-4 rounded-xl border bg-background hover:bg-primary-soft hover:border-primary transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary">
                  <Target className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">Use My Current Location</div>
                  <div className="text-xs text-muted-foreground">Find jobs near your current location</div>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <BackButton />
          <Button onClick={() => navigate("/jobs")} disabled={!selected} size="lg" className="bg-gradient-primary shadow-glow gap-2 px-8">
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, t: "100% Safe & Secure", d: "Your information is protected and kept confidential." },
            { icon: Target, t: "Personalized Job Matches", d: "Get job recommendations based on your location." },
            { icon: Clock, t: "Save Time", d: "Find relevant jobs faster in your area." },
            { icon: Award, t: "Top Companies", d: "Access to opportunities from trusted companies." },
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

export default JobLocation;
