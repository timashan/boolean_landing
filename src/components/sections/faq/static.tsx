import { ReactNode } from "react";
import Link from "next/link";

import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions && Answers",
  items = [
    {
      question: "What is Boolean?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Boolean is a microblogging platform built for opinions. Instead of
            endless feeds, it&apos;s about short, sharp takes that spark debate
            and reveal collective beliefs.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Every opinion is data — Boolean uses NLP and statistical analysis to
            uncover trends, clusters of belief, and where people align or
            diverge.
          </p>
        </>
      ),
    },
    {
      question: "Why use Boolean instead of traditional social media?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Most platforms focus on engagement, not clarity. Opinions get buried
            under noise, ads, and algorithms designed for attention.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Boolean is designed for structured expression. It&apos;s not about
            likes or followers — it&apos;s about mapping what people actually
            think and how those views evolve.
          </p>
        </>
      ),
    },
    {
      question: "How is Boolean different from polls or surveys?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Surveys ask pre-set questions. Boolean flips it: anyone can post an
            opinion, and others respond organically.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            The platform then aggregates those responses into belief maps, trend
            lines, and insights you won&apos;t get from static surveys.
          </p>
        </>
      ),
    },
    {
      question: "What happens to the opinions I post?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Every post becomes part of a living dataset. Boolean tracks shifts
            in sentiment, regional differences, and alignment across groups.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Your opinion isn&apos;t just content — it&apos;s a signal that
            contributes to collective understanding.
          </p>
        </>
      ),
    },
    {
      question: "Can I see how my opinions compare to others?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Yes. Boolean gives you analytics on how your views align with
          different communities, regions, or the overall public mood. You can
          literally see where you stand in the bigger picture.
        </p>
      ),
    },
    {
      question: "Who is Boolean for?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Boolean is for anyone who wants to express, explore, and understand
            opinions — from casual users debating pizza toppings to researchers
            studying social trends.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            If you believe opinions shape the world, Boolean is where you can
            see it happen in real time.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 md:flex-row md:items-start">
        <h2 className="max-w-[480px] text-center text-3xl leading-tight font-semibold sm:text-5xl md:text-left md:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="flex flex-col gap-4 py-6">
            {items.map((item, index) => (
              <article key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                {item.answer}
              </article>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
