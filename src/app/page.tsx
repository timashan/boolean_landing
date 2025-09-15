"use client";
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
import Features from "./feature9";
import { useState } from "react";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isProd = process.env.NODE_ENV === "production";

  return (
    <div className="">
      <main className="">
        <div className="flex justify-center">
          <Image
            src={`/${isProd && "/boolean_landing"}logo.svg`}
            alt="Mockup"
            width={600}
            height={100}
            className="invert absolute top-0 z-50 opacity-10 px-12"
          />
        </div>
        <Hero1
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
          title=""
          description="Building a platform to understand collective beliefs — revealing alignment, division, and emerging consensus."
          // form={
          //   <>
          //     <iframe
          //       src="https://docs.google.com/forms/d/e/1FAIpQLSd8l7vmRHwnQFYqCZOfQcVRt7CFQolN6blNNTVYRLI_QXYLCg/viewform?embedded=true"
          //       width="640"
          //       height="418"
          //       frameborder="0"
          //       marginheight="0"
          //       marginwidth="0"
          //     >
          //       Loading…
          //     </iframe>
          //   </>
          // }
          form={
            <>
              {!isSubmitted && (
                <form
                  className="flex w-full max-w-[420px] gap-2"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    fetch(
                      "https://script.google.com/macros/s/AKfycbzTw6-_2LfDfl5VpKYzV1h2cnkV8jpW2XP36TifI_c5gvD8YoWhbqXPy0ppjGcXVB6S/exec",
                      {
                        method: "POST",
                        body: new FormData(e.currentTarget),
                      }
                    );
                    e.currentTarget.reset();
                    setIsSubmitted(true);
                  }}
                >
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="border-border/10 bg-foreground/10 grow"
                    name="email"
                  />
                  <Button variant="default" size="lg">
                    Join waitlist
                    {/* <a href="https://www.launchuicomponents.com/">Join waitlist</a> */}
                  </Button>
                </form>
              )}
              {isSubmitted && (
                <p className="text-muted-foreground text-xs">
                  We&apos;ll notify you when we launch.
                </p>
              )}
            </>
          }
          mockup={
            <div>
              <Image
                src="/hero.png"
                alt="Mockup"
                width={1248}
                height={765}
                className="w-full"
              />
              {/* <div className="absolute bottom-0 left-150 scale-[1.2] border">
                <Image
                  src="/hero2.png"
                  alt="Mockup"
                  width={1248}
                  height={765}
                  className="w-full"
                />
              </div> */}
            </div>
          }
        />
        {/* <FeatureStickyLeft
          // imageDark={"/hero.png"}
          visual={<RippleIllustration />}
          title="Let Me Explain..."
          description="Today’s social platforms are designed for sharing, posting, and reacting — but they rarely reveal what people truly believe. You scroll through endless posts, yet you have no way of knowing how many silently agree with a bold opinion, where genuine consensus ends and division begins, or how much insight gets lost beneath the noise of virality and engagement tactics. It’s time to look deeper and uncover the real pulse of collective belief."
        />
        <FeatureStickyRight
          imageDark={"/hero.png"}
          title="Belief Mapping"
          description=" Collective Belief Mapping is a new way to visualize and understand the beliefs of groups, communities, and societies. It helps you see where people agree, disagree, and how opinions evolve over time."
        /> */}
        {/* <BentoGrid /> */}
        <Features />
        <FAQ />
      </main>
      <footer className=""></footer>
    </div>
  );
}
