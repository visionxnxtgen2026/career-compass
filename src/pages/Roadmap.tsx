import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { BackButton } from "@/components/BackButton";
import { CheckCircle2, BookOpen, Lightbulb, Star } from "lucide-react";
import { IT_ROLES, WEB_DEV_ROADMAP, HOW_TO_STUDY } from "@/data/mock";

const Roadmap = () => {
  const { id } = useParams();
  const role = IT_ROLES.find((r) => r.id === id);
  const [tab, setTab] = useState<"roadmap" | "study">("roadmap");
  if (!role) return <Navigate to="/streams/it" replace />;

  return (
    <PageLayout>
      <section className="container-page pt-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <BackButton />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            {role.name} <span className="gradient-text">Roadmap</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Follow this step-by-step roadmap to become a successful {role.name}. Learn the skills, tools and technologies in the right order.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-md mx-auto mb-8 grid grid-cols-2 p-1 rounded-xl bg-muted">
          <button
            onClick={() => setTab("roadmap")}
            className={`px-4 py-2.5 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
              tab === "roadmap" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
            }`}
          >
            <BookOpen className="h-4 w-4" /> Roadmap
          </button>
          <button
            onClick={() => setTab("study")}
            className={`px-4 py-2.5 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
              tab === "study" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
            }`}
          >
            <Lightbulb className="h-4 w-4" /> How to Study
          </button>
        </div>

        {tab === "roadmap" ? (
          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20 hidden md:block" />

            <div className="space-y-5">
              {WEB_DEV_ROADMAP.map((s) => (
                <div key={s.step} className="relative md:pl-16">
                  <div className="absolute left-0 top-5 hidden md:grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow">
                    {s.step}
                  </div>

                  <div className="rounded-2xl border bg-card p-5 grid md:grid-cols-4 gap-5 card-hover">
                    {/* Title */}
                    <div className="md:border-r md:pr-5">
                      <div className="flex items-center gap-2 md:hidden mb-2">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{s.step}</div>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-primary-soft text-primary font-semibold">{s.duration}</span>
                      </div>
                      <h3 className="font-bold">{s.title}</h3>
                      <span className="hidden md:inline-block mt-1 text-[10px] px-2 py-0.5 rounded-md bg-primary-soft text-primary font-semibold">{s.duration}</span>
                      <p className="text-xs text-muted-foreground mt-2">{s.description}</p>
                    </div>

                    {/* What You'll Learn */}
                    <div>
                      <div className="text-xs font-semibold mb-2">What You'll Learn</div>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                        {s.learn.map((l) => (
                          <li key={l} className={l.startsWith("Mini Project") ? "font-semibold text-foreground" : ""}>{l}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources */}
                    <div>
                      <div className="text-xs font-semibold mb-2">Resources</div>
                      <ul className="space-y-1.5">
                        {s.resources.map((r) => (
                          <li key={r.name} className="flex items-center gap-2 text-xs">
                            <div className="h-5 w-5 grid place-items-center rounded bg-primary-soft text-primary text-[9px] font-bold">{r.type[0]}</div>
                            {r.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div>
                      <div className="text-xs font-semibold mb-2">Outcome</div>
                      <ul className="space-y-1.5">
                        {s.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-1.5 text-xs">
                            <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" /> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-primary-soft border border-primary/20 p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-card text-primary">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">Keep Building Projects</div>
                  <div className="text-xs text-muted-foreground">Practice by building real-world projects after every step. It's the best way to strengthen your skills and portfolio.</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Portfolio Website", "E-commerce Site", "Blog App", "Admin Dashboard"].map((p) => (
                  <span key={p} className="text-xs px-2.5 py-1 rounded-md bg-card border">{p}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {HOW_TO_STUDY.map((b) => (
              <div key={b.title} className="rounded-2xl border bg-card p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> {b.title}
                </h3>
                <ul className="space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  );
};

export default Roadmap;
