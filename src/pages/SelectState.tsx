import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Stepper } from "@/components/Stepper";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ChevronRight, ShieldCheck, ArrowRight, List } from "lucide-react";
import { POPULAR_STATES } from "@/data/mock";
import { saveSelection } from "@/lib/storage";

const SelectState = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string>("");

  const filtered = POPULAR_STATES.filter((s) => s.toLowerCase().includes(q.toLowerCase()));

  const pick = (s: string) => {
    setSelected(s);
    saveSelection({ state: s });
    window.dispatchEvent(new Event("careerpath:selection"));
  };

  const cont = () => {
    if (!selected) return;
    navigate("/streams");
  };

  return (
    <PageLayout>
      <Stepper steps={["Location", "Select State", "Choose Path", "Get Recommendations"]} current={2} />

      <section className="container-page pb-16">
        <div className="grid lg:grid-cols-[320px,1fr] gap-6">
          {/* Side info */}
          <aside className="rounded-3xl border bg-card p-6 text-center h-fit">
            <div className="grid h-32 w-32 mx-auto place-items-center rounded-3xl bg-primary-soft mb-4">
              <MapPin className="h-16 w-16 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Select Your <span className="gradient-text">State</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Choose your state to discover courses, colleges and career opportunities available in your region.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              <ShieldCheck className="h-4 w-4 text-primary" /> Your information is safe with us
            </div>
          </aside>

          {/* Search & list */}
          <div className="rounded-3xl border bg-card p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-3">Search for your state</h3>
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Type your state name..."
                className="pl-11 h-12 rounded-xl border-primary/30 focus-visible:ring-primary"
              />
            </div>

            <div className="text-sm font-semibold mb-3">Popular States</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((s) => (
                <button
                  key={s}
                  onClick={() => pick(s)}
                  className={`flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl border bg-background text-left transition-all hover:border-primary hover:bg-primary-soft hover:shadow-medium ${
                    selected === s ? "border-primary bg-primary-soft shadow-medium" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary text-xs">
                      🏛️
                    </div>
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex-1 h-px bg-border" /> OR <div className="flex-1 h-px bg-border" />
            </div>

            <button className="w-full flex items-center justify-between px-4 py-4 rounded-xl border bg-background hover:bg-primary-soft hover:border-primary transition-all">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary">
                  <List className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Browse All States</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <BackButton />
          <Button onClick={cont} disabled={!selected} size="lg" className="bg-gradient-primary shadow-glow gap-2 px-8">
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default SelectState;
