import { Header } from "../components/ui/Header";
import { SocialLinks } from "../components/ui/SocialLinks";
import { StatusMessage } from "../components/ui/StatusMessage";

export function HeroPage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      <Header />
      <SocialLinks />
      <StatusMessage />
    </div>
  );
}
