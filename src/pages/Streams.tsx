import { Link, useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { BackButton } from "@/components/BackButton";
import { ArrowRight, Lightbulb } from "lucide-react";
import { STREAMS } from "@/data/mock";
import { saveSelection } from "@/lib/storage";

const Streams = () => {
  const navigate = useNavigate();
  const choose = (id: string) => {
    saveSelection({ stream: id });
    navigate(`/streams/${id}`);
  };

  return (
    <PageLayout>
      <section className="container-page pt-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <BackButton />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Choose Your <span className="gradient-text">Stream / Path</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Select the stream or career path that interests you. We'll show you the best courses, exams, colleges and career opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STREAMS.map((s) => (
            <button
              key={s.id}
              onClick={() => choose(s.id)}
              className="group text-left rounded-2xl border bg-card p-6 card-hover focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className={`grid h-16 w-16 mx-auto place-items-center rounded-2xl bg-${s.color}-soft text-${s.color} mb-4`}>
                <s.icon className="h-8 w-8" />
              </div>
              <h3 className={`text-lg font-bold text-center text-${s.color} mb-2`}>{s.name}</h3>
              <p className="text-xs text-muted-foreground text-center mb-4">{s.description}</p>

              <div className="border-t pt-3">
                <div className="text-xs font-semibold mb-1.5">Examples:</div>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                  {s.examples.map((e) => <li key={e}>{e}</li>)}
                </ul>
              </div>

              <div className={`mt-4 px-3 py-2 rounded-lg border border-${s.color}/30 text-${s.color} text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-${s.color}-soft transition-all`}>
                Explore <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-primary-soft/60 border border-primary/20 p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-card text-primary">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-sm">Not sure which path is right for you?</div>
              <div className="text-xs text-muted-foreground">Take a short career test and get personalized recommendations.</div>
            </div>
          </div>
          <Link to="/skill-test" className="px-4 py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2">
            Take Career Test <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Streams;
