import Link from "next/link";
import { RadioTower } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <RadioTower className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold">GadgetSpot</span>
    </Link>
  );
}
