import { Header } from "./Header";
import { ReactNode } from "react";

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-gradient-hero">
    <Header />
    <main className="animate-fade-in">{children}</main>
  </div>
);
