import { Link, useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { BackButton } from "@/components/BackButton";
import { ArrowRight, HelpCircle, MapPin } from "lucide-react";
import { STREAMS, getRolesFor } from "@/data/mock";
import { loadSelection, saveSelection } from "@/lib/storage";

const StreamRoles = () => {
  const { category = "" } = useParams();
  const stream = STREAMS.find((s) => s.id === category);
  const sel = loadSelection();
  const location = sel.state || sel.country || "India";
  const roles = stream ? getRolesFor(location, category) : [];

  if (!stream) return <Navigate to="/streams" replace />;

  const color = stream.color;

  return (
    <PageLayout>
      <section className="container-page pt-6 pb-16">
        <div className="mb-6"><BackButton /></div>

        <div className="text-center lg:text-left mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className={`text-${color}`}>{stream.name}</span> Careers
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Explore top career roles in {stream.name}. Choose a role to discover courses, skills, roadmap and job opportunities.
          </p>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <div className={`h-6 w-1 rounded-full bg-${color}`} />
          <h2 className="text-lg font-bold">Popular {stream.name} Roles</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Showing {roles.length} role{roles.length !== 1 && "s"} in this category</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((r) => (
            <div key={r.id} className="rounded-2xl border bg-card p-5 card-hover flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-${r.color}-soft text-${r.color} shrink-0`}>
                  <r.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm leading-tight">{r.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{r.description}</p>
                </div>
              </div>
              <span className={`self-start text-[10px] px-2 py-0.5 rounded-md bg-${color}-soft text-${color} font-semibold mb-4`}>
                {r.demand}
              </span>
              <Link
                to={`/role/${r.id}`}
                onClick={() => saveSelection({ role: r.id, stream: category })}
                className={`mt-auto px-3 py-2 rounded-lg border border-${color}/40 text-${color} text-sm font-semibold flex items-center justify-center gap-2 hover:bg-${color}-soft transition-all`}
              >
                Explore Role <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className={`mt-8 rounded-2xl bg-${color}-soft border border-${color}/20 p-5 flex flex-wrap items-center justify-between gap-4`}>
          <div className="flex items-center gap-3">
            <div className={`grid h-10 w-10 place-items-center rounded-xl bg-card text-${color}`}>
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-sm">Not sure which role is right for you?</div>
              <div className="text-xs text-muted-foreground">Take our free career test and get personalized role recommendations.</div>
            </div>
          </div>
          <Link to="/streams" className={`px-4 py-2.5 rounded-xl border border-${color} text-${color} text-sm font-semibold hover:bg-${color} hover:text-${color}-foreground transition-all flex items-center gap-2`}>
            Change Path <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default StreamRoles;
