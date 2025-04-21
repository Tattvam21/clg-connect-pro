import { Bell, Calendar, Check, MessageSquare, User, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";

// Sample notifications data
const notifications = [
  {
    id: "1",
    type: "connection",
    title: "New connection request",
    description: "Alex Johnson wants to connect with you",
    time: "2 min ago",
    read: false,
    avatar: "Alex Johnson"
  },
  {
    id: "2",
    type: "message",
    title: "New message",
    description: "Sarah Smith sent you a message",
    time: "1 hour ago",
    read: false,
    avatar: "Sarah Smith"
  },
  {
    id: "3",
    type: "job",
    title: "Job application update",
    description: "Your application for Software Engineer at Tech Innovations has been reviewed",
    time: "Yesterday",
    read: true,
    avatar: "TI"
  },
  {
    id: "4",
    type: "event",
    title: "Upcoming event reminder",
    description: "Alumni Meetup starts in 3 days",
    time: "2 days ago",
    read: true,
    avatar: "AM"
  }
];

export function NotificationDropdown() {
  // Get unread count
  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" aria-hidden="true"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between p-4">
          <span className="text-base font-semibold">Notifications</span>
          {unreadCount > 0 && (
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
              {unreadCount} new
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[300px] overflow-auto">
          <DropdownMenuGroup className="p-2">
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className={`flex items-start gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 mb-1 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                <div className="relative mt-0.5">
                  <Avatar className="h-9 w-9">
                    {notification.type === 'connection' || notification.type === 'message' ? (
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${notification.avatar}`} alt={notification.avatar} />
                    ) : null}
                    <AvatarFallback className={`
                      ${notification.type === 'connection' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : ''}
                      ${notification.type === 'message' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' : ''}
                      ${notification.type === 'job' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : ''}
                      ${notification.type === 'event' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400' : ''}
                    `}>
                      {notification.type === 'connection' && <User className="h-4 w-4" />}
                      {notification.type === 'message' && <MessageSquare className="h-4 w-4" />}
                      {notification.type === 'job' && <Bell className="h-4 w-4" />}
                      {notification.type === 'event' && <Calendar className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                  {!notification.read && (
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-sm dark:text-white">{notification.title}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">{notification.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{notification.description}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </ScrollArea>
        <DropdownMenuSeparator />
        <div className="p-2 flex justify-between">
          <Button variant="ghost" size="sm" className="w-full text-xs text-gray-600 dark:text-gray-300 mr-1" aria-label="Mark all as read">
            <Check className="h-3.5 w-3.5 mr-1" />
            Mark all read
          </Button>
          <Button variant="ghost" size="sm" className="w-full text-xs text-gray-600 dark:text-gray-300 ml-1" aria-label="Clear all notifications">
            <X className="h-3.5 w-3.5 mr-1" />
            Clear all
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 