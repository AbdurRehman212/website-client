import Image from "next/image";
import { founder } from "@/content/site";

export default function FounderPortrait({ eager = false }: { eager?: boolean }) {
  return (
    <div className="mx-auto flex aspect-[8/9] w-full max-w-sm items-center justify-center">
      <div className="relative aspect-[2/3] w-3/4 overflow-hidden rounded-sm border-[6px] border-white bg-white ring-1 ring-gold/40">
        <Image
          src={founder.photo}
          alt={`Portrait of ${founder.name}, founder of Ledger & Beyond Consultancy`}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 640px) 75vw, 288px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
