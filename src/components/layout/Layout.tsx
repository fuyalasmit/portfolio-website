import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className="min-h-screen bg-gray-950 text-cyan-100">{children}</div>;
}
