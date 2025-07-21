import { ReactNode } from "react";

import Logo from "../../ui/logo";
import { Section } from "../../ui/section";
import Catalog from "../../logos/catalog";
import PictelAI from "../../logos/pictelai";
import CoreOS from "../../logos/coreos";
import EasyTax from "../../logos/easytax";
import Peregrin from "../../logos/peregrin";
import LeapYear from "../../logos/leapyear";

interface LogosProps {
  title?: string;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Trusted by world's leading companies",
  logos = [
    <Logo
      key="catalog"
      image={Catalog}
      name="Catalog"
      width={114}
      height={36}
      showName={false}
    />,
    <Logo
      key="pictelai"
      image={PictelAI}
      name="PictelAI"
      width={123}
      height={36}
      showName={false}
    />,
    <Logo
      key="coreos"
      image={CoreOS}
      name="CoreOS"
      width={110}
      height={36}
      showName={false}
    />,
    <Logo
      key="easytax"
      image={EasyTax}
      name="EasyTax"
      width={120}
      height={36}
      showName={false}
    />,
    <Logo
      key="peregrin"
      image={Peregrin}
      name="Peregrin"
      width={123}
      height={36}
      showName={false}
    />,
    <Logo
      key="leapyear"
      image={LeapYear}
      name="LeapYear"
      width={123}
      height={36}
      showName={false}
    />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <h2 className="text-md text-muted-foreground font-semibold">{title}</h2>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
