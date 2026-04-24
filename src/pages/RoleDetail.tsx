import { Link, useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Wallet, Briefcase, TrendingUp, GraduationCap, BookOpen, Users, Trophy, ArrowRight, Flag, ExternalLink, Info } from "lucide-react";
import { getRoleById, APPLY_LINKS } from "@/data/mock";

const RoleDetail = () => {
  const { id = "" } = useParams();
  const role = getRoleById(id);
  if (!role) return <Navigate to="/streams" replace />;
  const apply = APPLY_LINKS[id];

  return (
    <PageLayout>
      <section className="container-page pt-6 pb-16">
        <div className="mb-6"><BackButton /></div>

        {/* Hero card */}
        <div className="rounded-3xl border bg-card p-6 md:p-8 mb-6 grid lg:grid-cols-[1fr,320px] gap-6 items-center">
          <div className="flex items-start gap-5">
            <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-${role.color}-soft text-${role.color}`}>
              <role.icon className="h-10 w-10" />
            </div>
            <div>
              <div className={`text-xs font-semibold text-${role.color} mb-1`}>{role.category}</div>
              <h1 className="text-3xl sm:text-4xl font-bold">{role.name}</h1>
              <p className="text-muted-foreground mt-2 max-w-xl">{role.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 rounded-full bg-success-soft text-success font-semibold">High Demand</span>
                <span className="text-xs px-3 py-1 rounded-full bg-primary-soft text-primary font-semibold">Great Career Growth</span>
                <span className="text-xs px-3 py-1 rounded-full bg-info-soft text-info font-semibold">Remote Opportunities</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-background p-5 space-y-4">
            <Stat icon={Wallet} label="Average Salary" value={role.salary} />
            <Stat icon={Briefcase} label="Job Opportunities" value={role.opportunities} />
            <Stat icon={TrendingUp} label="Career Growth" value={role.growth} />
          </div>
        </div>

        {/* About */}
        <div className="rounded-2xl border bg-card p-6 mb-6">
          <h2 className="font-bold mb-2">About {role.name}</h2>
          <p className="text-sm text-muted-foreground">
            {role.name}s build and maintain {role.category.toLowerCase()} solutions. They work across the stack
            (front-end, back-end, infrastructure) or specialize in a particular area.
          </p>
        </div>

        {/* Grid sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          <Section title="Key Skills You Need">
            <div className="flex flex-wrap gap-2">
              {role.skills.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-md border bg-background">{s}</span>
              ))}
            </div>
          </Section>

          <Section title="What You Need to Study">
            <div className="space-y-3">
              <Row icon={GraduationCap} title="Recommended Degree" sub={role.education.degree} />
              <Row icon={BookOpen} title="Other Options" sub={role.education.alt} />
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Trophy className="h-4 w-4 text-primary" /> Important Subjects
                </div>
                <ul className="text-xs text-muted-foreground space-y-0.5 list-disc pl-5">
                  {role.subjects.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Who Can Choose?">
            <ul className="space-y-2.5">
              {role.whoCan.map((w) => (
                <li key={w} className="flex items-center gap-2 text-sm">
                  <div className="grid h-7 w-7 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                  {w}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Top Companies Hiring">
            <div className="grid grid-cols-3 gap-2">
              {role.companies.map((c) => (
                <div key={c} className="text-[11px] text-center px-2 py-3 rounded-lg bg-muted font-semibold">{c}</div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground text-center mt-3">& many more...</div>
          </Section>
        </div>

        {/* Apply Now */}
        <div className="rounded-2xl bg-card border p-6 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`grid h-12 w-12 place-items-center rounded-xl bg-${role.color}-soft text-${role.color}`}>
              {apply ? <ExternalLink className="h-6 w-6" /> : <Info className="h-6 w-6" />}
            </div>
            <div>
              <div className="font-bold">Apply for {role.name}</div>
              <div className="text-xs text-muted-foreground">
                {apply
                  ? "You'll be redirected to the official portal to apply."
                  : "Application info is not available yet for this role. Please check back soon."}
              </div>
            </div>
          </div>
          {apply ? (
            <a href={apply.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-primary shadow-glow gap-2">
                {apply.label} <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          ) : (
            <Button disabled variant="outline" className="gap-2">
              Apply Link Unavailable
            </Button>
          )}
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-primary-soft border border-primary/20 p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-card text-primary">
              <Flag className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-primary">Ready to start your journey as a {role.name}?</div>
              <div className="text-xs text-muted-foreground">Follow a step-by-step roadmap to learn the right skills and build a successful career.</div>
            </div>
          </div>
          <Link to={`/role/${role.id}/roadmap`}>
            <Button className="bg-gradient-primary shadow-glow gap-2">
              View Roadmap <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

const Stat = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-3">
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-bold text-sm">{value}</div>
    </div>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border bg-card p-5">
    <h3 className="font-bold mb-4">{title}</h3>
    {children}
  </div>
);

const Row = ({ icon: Icon, title, sub }: any) => (
  <div className="flex items-start gap-2.5">
    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  </div>
);

export default RoleDetail;
