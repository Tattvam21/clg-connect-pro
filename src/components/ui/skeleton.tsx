import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200 dark:bg-slate-800", className)}
      {...props}
    />
  )
}

function JobCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="h-2 bg-slate-300 dark:bg-slate-700"></div>
      <div className="p-5">
        <div className="flex items-start gap-4">
          <Skeleton className="h-10 w-10 rounded-md" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
        <Skeleton className="h-4 w-24" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function ConnectionSkeleton() {
  return (
    <div className="flex items-center gap-3 py-3">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="flex-1">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-4 w-10" />
        </div>
        <Skeleton className="h-3 w-28" />
      </div>
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
  );
}

function ChatMessageSkeleton() {
  return (
    <div className="flex items-start gap-2 my-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-10 w-60 rounded-2xl" />
      </div>
    </div>
  );
}

export { 
  Skeleton,
  JobCardSkeleton,
  ConnectionSkeleton,
  ChatMessageSkeleton
};
