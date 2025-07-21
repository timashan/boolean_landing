import RippleIllustration from "@/components/illustrations/ripple";
import BentoGrid from "@/components/sections/bento-grid/2-rows-bottom";
import FAQ from "@/components/sections/faq/static";
import FeatureStickyLeft from "@/components/sections/feature/sticky-left";
import FeatureStickyRight from "@/components/sections/feature/sticky-right";
import Hero from "@/components/sections/hero/illustration";
import Hero1 from "@/components/sections/hero/top-glow";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero
          // badge={
          //   <Badge variant="outline" className="animate-appear p-3">
          //     <span className="text-muted-foreground text-sm font-bold">
          //       Project
          //     </span>
          //     <Image
          //       src="/logo.png"
          //       alt="Mockup"
          //       width={100}
          //       height={100}
          //       className="invert"
          //     />
          //   </Badge>
          // }
          title="Mapping How The World Thinks"
          description="The single platform to understand collective beliefs — revealing alignment, division, and emerging consensus."
          form={
            <>
              <form className="flex w-full max-w-[420px] gap-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="border-border/10 bg-foreground/10 grow"
                />
                <Button variant="default" size="lg" asChild>
                  {/* <a href="https://www.launchuicomponents.com/"> */}
                  Join waitlist
                  {/* </a> */}
                </Button>
              </form>
              <p className="text-muted-foreground text-xs">
                We&apos;ll notify you when we launch.
              </p>
            </>
          }
          // mockup={
          //   <Image
          //     src="/hero.png"
          //     alt="Mockup"
          //     width={1248}
          //     height={765}
          //     className="w-full"
          //   />
          // }
        />
        <FeatureStickyLeft
          // imageDark={"/hero.png"}
          visual={<RippleIllustration />}
          title="Let Me Explain..."
          description="Today’s social platforms are designed for sharing, posting, and reacting — but they rarely reveal what people truly believe. You scroll through endless posts, yet you have no way of knowing how many silently agree with a bold opinion, where genuine consensus ends and division begins, or how much insight gets lost beneath the noise of virality and engagement tactics. It’s time to look deeper and uncover the real pulse of collective belief."
        />
        <FeatureStickyRight
          imageDark={"/hero.png"}
          title="Belief Mapping"
          description=" Collective Belief Mapping is a new way to visualize and understand the beliefs of groups, communities, and societies. It helps you see where people agree, disagree, and how opinions evolve over time."
        />

        <BentoGrid />
        <FAQ />
      </main>
      <footer className=""></footer>
    </div>
  );
}
