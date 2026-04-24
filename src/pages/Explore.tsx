import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Stepper } from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MapPin, CheckCircle2, HelpCircle } from "lucide-react";
import { saveSelection } from "@/lib/storage";

const triggerUpdate = () => window.dispatchEvent(new Event("careerpath:selection"));

const Explore = () => {
  const navigate = useNavigate();
  const choose = (country: string) => {
    if (country === "International") {
      saveSelection({ flow: "student", country, state: "International", district: undefined });
      triggerUpdate();
      navigate("/streams");
      return;
    }
    if (country === "Tamil Nadu") {
      // user picked the state directly — skip the state-picker step
      saveSelection({ flow: "student", country: "India", state: "Tamil Nadu", district: undefined });
      triggerUpdate();
      navigate("/streams");
      return;
    }
    saveSelection({ flow: "student", country, state: undefined, district: undefined });
    triggerUpdate();
    navigate("/state");
  };

  return (
    <PageLayout>
      <Stepper steps={["Location", "Education Details", "Interests", "Get Results"]} current={1} />
      <section className="container-page pb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="grid h-16 w-16 mx-auto mb-4 place-items-center rounded-2xl bg-primary-soft text-primary">
            <Globe className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Where do you want to <span className="gradient-text">explore opportunities?</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Choose your location to get personalized courses, colleges and job opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { name: "International", desc: "Explore study and job opportunities around the world.", emoji: "🌐", color: "primary" },
            { name: "India", desc: "Explore opportunities across different states in India.", emoji: "🇮🇳", color: "orange" },
            { name: "Tamil Nadu", desc: "Explore opportunities across districts in Tamil Nadu.", emoji: "🗺️", color: "success" },
          ].map((c) => (
            <button
              key={c.name}
              onClick={() => choose(c.name)}
              className="group relative text-left rounded-3xl border bg-card p-6 card-hover focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className={`grid h-20 w-20 mx-auto place-items-center rounded-full bg-${c.color}-soft text-3xl mb-4`}>
                {c.emoji}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{c.name}</h3>
              <p className="text-sm text-muted-foreground text-center mb-5">{c.desc}</p>
              <div className="px-4 py-2.5 rounded-xl bg-primary-soft text-primary text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                Choose {c.name} <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-2xl bg-primary-soft/60 p-5 border border-primary/15">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-card text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary">We respect your choice</div>
              <div className="text-xs text-muted-foreground">You can change your location anytime from settings.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-card p-5 border">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Not sure which to choose?</div>
              <button className="text-xs text-primary font-medium hover:underline">Help me decide</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Explore;
