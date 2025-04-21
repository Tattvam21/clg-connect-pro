import { CalendarX, MousePointerClick, Search, Users } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-6 border border-dashed rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
      <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4 mb-4 text-blue-600 dark:text-blue-400">
        {icon || <Search className="h-6 w-6" />}
      </div>
      <h3 className="text-lg font-semibold mb-1 dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mb-4">{description}</p>
      {action && (
        <Button 
          onClick={action.onClick} 
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

export function EmptyJobsState({ onAction }: { onAction: () => void }) {
  return (
    <EmptyState
      title="No job postings found"
      description="There are no job postings matching your criteria. Try adjusting your filters or explore more opportunities."
      icon={<Search className="h-6 w-6" />}
      action={{
        label: "Browse All Jobs",
        onClick: onAction
      }}
    />
  );
}

export function EmptyConnectionsState({ onAction }: { onAction: () => void }) {
  return (
    <EmptyState
      title="No connections yet"
      description="Start growing your professional network by connecting with fellow alumni and industry professionals."
      icon={<Users className="h-6 w-6" />}
      action={{
        label: "Find Connections",
        onClick: onAction
      }}
    />
  );
}

export function EmptyEventsState({ onAction }: { onAction: () => void }) {
  return (
    <EmptyState
      title="No upcoming events"
      description="There are no events scheduled in the near future. Check back later or create your own event."
      icon={<CalendarX className="h-6 w-6" />}
      action={{
        label: "Browse All Events",
        onClick: onAction
      }}
    />
  );
}

export function FirstTimeUserState({ onAction }: { onAction: () => void }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="shrink-0 bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
          <MousePointerClick className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Welcome to Alumni Connect!</h2>
            <p className="text-gray-600 dark:text-gray-300">Complete your profile to get the most out of your alumni network.</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white font-medium text-sm">1</div>
              <span className="text-sm text-gray-800 dark:text-gray-200">Add your professional experience</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white font-medium text-sm">2</div>
              <span className="text-sm text-gray-800 dark:text-gray-200">Connect with fellow alumni</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white font-medium text-sm">3</div>
              <span className="text-sm text-gray-800 dark:text-gray-200">Explore job opportunities</span>
            </div>
          </div>
          
          <Button 
            onClick={onAction} 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            aria-label="Complete your profile"
          >
            Complete Your Profile
          </Button>
        </div>
      </div>
    </div>
  );
} 