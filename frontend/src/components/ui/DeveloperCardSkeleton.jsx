import Skeleton from "./Skeleton";

export default function DeveloperCardSkeleton() {
  return (
    <div className="relative mt-12 py-6 px-2 w-full rounded-lg border-2 border-purple-200 shadow-md flex items-center gap-4 justify-evenly">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-32 h-4" />
        <Skeleton className="w-28 h-4" />
      </div>

      <div className="hidden lg:flex flex-col gap-2">
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-32 h-4" />
      </div>

      <Skeleton className="absolute top-2 right-2 w-6 h-6 rounded-full" />
    </div>
  );
}
