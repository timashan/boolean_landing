import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import SocialProofItem from "../../ui/social-proof-item";

interface SocialProofItemProps {
  name: string;
  username: string;
  text: ReactNode;
  image: string;
  url: string;
}

interface SocialProofProps {
  title?: string;
  description?: string;
  items?: SocialProofItemProps[] | false;
  className?: string;
}

export default function SocialProof({
  title = "Loved by designers and developers across the planet",
  description = "Here's what people are saying about Launch UI",
  items = [
    {
      name: "Fabrizio Fernandez",
      username: "fab3304",
      text: (
        <>
          Playing around with <span className="text-brand">@launchui</span>{" "}
          suddenly made me feeling inspired to launch that side project.
        </>
      ),
      image: "/avatars/fabrizio.jpg",
      url: "https://twitter.com/mikolajdobrucki",
    },
    {
      name: "Darius Flynn",
      username: "flynnn",
      text: (
        <>
          Exploring <span className="text-brand">@launchui</span>
          &apos;s sleek UI. It&apos;s like a dark mode enthusiast&apos;s
          playground. Simply incredible stuff.
        </>
      ),
      image: "/avatars/darius.jpg",
      url: "https://twitter.com/mikolajdobrucki",
    },
    {
      name: "Luna Martinez",
      username: "lunacode",
      text: (
        <>
          <span className="text-brand">@launchui</span> is a game-changer for
          rapid prototyping. The components are so well thought out.
        </>
      ),
      image: "/avatars/luna.jpg",
      url: "https://twitter.com/mikolajdobrucki",
    },
    {
      name: "Olivia Blackwood",
      username: "olivia1992",
      text: (
        <>
          <span className="text-brand">@launchui</span> is not messing around
          with its component library game.
        </>
      ),
      image: "/avatars/olivia.jpg",
      url: "https://twitter.com/mikolajdobrucki",
    },
    {
      name: "Esme Rothschild",
      username: "EmeRothArt",
      text: (
        <>
          <span className="text-brand">@launchui</span> is slick. That globe
          graphic though. Making me feel like I&apos;m building websites for a
          sci-fi movie.
        </>
      ),
      image: "/avatars/esme.jpg",
      url: "https://twitter.com/mikolajdobrucki",
    },
    {
      name: "Kai Nakamura",
      username: "KaiNakWaves",
      text: (
        <>
          Just made my first website with{" "}
          <span className="text-brand">@launchui</span>. Its flexibility is
          speaking my language. No drama, just seamless integration.
        </>
      ),
      image: "/avatars/kai.jpg",
      url: "https://twitter.com/mikolajdobrucki",
    },
  ],
  className,
}: SocialProofProps) {
  return (
    <Section className={cn(className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            {description}
          </p>
        </div>
        {items !== false && items.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {items.map((item) => (
              <SocialProofItem
                key={item.username}
                {...item}
                className="w-full max-w-full"
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
