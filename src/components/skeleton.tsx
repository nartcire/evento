import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] rounder-md bg-white/5",
        className
      )}
    ></div>
  );
}
