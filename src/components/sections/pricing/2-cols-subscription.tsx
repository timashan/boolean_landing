"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { User, Users } from "lucide-react";

import { Section } from "../../ui/section";
import { Switch } from "../../ui/switch";
import {
  PricingColumn,
  PricingColumnProps,
} from "../../ui/pricing-column";

type Plan = {
  name: string;
  description: string;
  icon?: ReactNode;
  monthlyPrice: number;
  yearlyPrice: number;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
  variant?: PricingColumnProps["variant"];
};

interface PricingProps {
  title?: string;
  description?: string;
  yearlyDiscount?: number;
  plans?: Plan[] | false;
  className?: string;
}

export default function Pricing({
  title = "Pricing",
  description = "This is just a preview of a component variant for subscription products. Launch UI Pro version is available as one-time purchase with lifetime access.",
  yearlyDiscount = 20,
  plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and growing businesses",
      icon: <User className="size-4" />,
      monthlyPrice: 15,
      yearlyPrice: 144,
      cta: {
        variant: "default",
        label: "Get started",
        href: "#",
      },
      features: [
        "Up to 5 team members",
        "20GB storage",
        "Basic analytics",
        "24/7 email support",
        "API access",
      ],
      variant: "glow-brand",
    },
    {
      name: "Enterprise",
      description: "For larger teams with advanced needs",
      icon: <Users className="size-4" />,
      monthlyPrice: 75,
      yearlyPrice: 720,
      cta: {
        variant: "glow",
        label: "Contact sales",
        href: "#",
      },
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Advanced analytics",
        "24/7 priority support",
        "Custom integrations",
        "SSO authentication",
        "Dedicated account manager",
      ],
      variant: "glow",
    },
  ],
  className,
}: PricingProps) {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="max-w-[720px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[760px] font-medium sm:text-xl">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm">Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-brand"
            />
            <span className="text-sm">
              Yearly
              <span className="bg-brand/10 text-brand ml-1.5 rounded-full px-2 py-0.5 text-xs">
                Save {yearlyDiscount}%
              </span>
            </span>
          </div>
        </div>

        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={
                  isYearly
                    ? Math.round(plan.yearlyPrice / 12)
                    : plan.monthlyPrice
                }
                priceNote={`${isYearly ? "Billed yearly" : "Billed monthly"} (${isYearly ? "$" + plan.yearlyPrice + "/year" : "$" + plan.monthlyPrice + "/month"})`}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
