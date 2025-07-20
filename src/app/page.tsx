import Hero from "@/components/sections/hero/default";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero
          badge={
            <Badge variant="outline" className="animate-appear p-3">
              <span className="text-muted-foreground text-sm font-bold">
                Project
              </span>
              <Image
                src="/logo.png"
                alt="Mockup"
                width={100}
                height={100}
                className="invert"
              />
            </Badge>
          }
          title="Mapping How The World Thinks"
          description="Most platforms are built to share, debate, and react. But they don’t tell you what people actually believe.
          You scroll through thousands of posts, but:
          You don’t know how many people silently agree with a strong opinion.
          You can’t see where collective consensus or polarization truly lies.
          Beliefs get lost in noise, virality, or engagement hacks."
          mockup={
            <Image
              src="/hero.png"
              alt="Mockup"
              width={1248}
              height={765}
              className="w-full"
            />
          }
        />
      </main>
      <footer className=""></footer>
    </div>
  );
}
