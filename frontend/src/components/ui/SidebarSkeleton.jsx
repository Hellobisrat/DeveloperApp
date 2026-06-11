import Skeleton from "./Skeleton";

export default function SidebarSkeleton() {
  return (
    <div className="hidden lg:block md:col-span-1 border border-purple-100 rounded-lg shadow-lg bg-white m-3 p-6">
      <Skeleton className="w-40 h-6 mb-6" />

      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4 mb-4">
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="w-32 h-4" />
        </div>
      ))}

      <hr className="border-t-2 border-purple-200 w-3/4 my-6 mx-auto" />

      <Skeleton className="w-40 h-6 mb-6" />

      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4 mb-4">
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="w-32 h-4" />
        </div>
      ))}

      <hr className="border-t-2 border-purple-200 w-3/4 my-6 mx-auto" />

      <Skeleton className="w-48 h-20" />
    </div>
  );
}
