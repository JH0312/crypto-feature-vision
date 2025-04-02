
import React, { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Bell, AlertTriangle, TrendingUp, TrendingDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'alert' | 'price' | 'security' | 'info';
}

// Mock notifications
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Bitcoin Price Alert',
    message: 'BTC has increased by 5% in the last hour.',
    time: '10 minutes ago',
    read: false,
    type: 'price'
  },
  {
    id: '2',
    title: 'Security Alert',
    message: 'Unusual activity detected for Ethereum transactions.',
    time: '1 hour ago',
    read: false,
    type: 'security'
  },
  {
    id: '3',
    title: 'Market Update',
    message: 'Crypto market is showing bullish trends in the last 24 hours.',
    time: '3 hours ago',
    read: true,
    type: 'info'
  },
  {
    id: '4',
    title: 'Price Drop',
    message: 'Solana has dropped by 3.2% in the last 2 hours.',
    time: '5 hours ago',
    read: true,
    type: 'price'
  }
];

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const { user } = useAuth();

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'price':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'security':
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      default:
        return <Check className="h-4 w-4 text-sky-500" />;
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 px-1 min-w-[16px] h-4 flex items-center justify-center text-[10px] bg-red-500"
              variant="default"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row items-center justify-between pb-4 border-b border-gray-800">
          <SheetTitle>Notifications</SheetTitle>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="text-xs text-primary hover:text-primary/80"
            >
              Mark all as read
            </Button>
          )}
        </SheetHeader>
        
        {!user ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Bell className="h-12 w-12 text-muted-foreground mb-4 opacity-30" />
            <p className="text-muted-foreground">Please sign in to view your notifications</p>
          </div>
        ) : notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Bell className="h-12 w-12 text-muted-foreground mb-4 opacity-30" />
            <p className="text-muted-foreground">No notifications to display</p>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={cn(
                  "p-3 rounded-lg transition-colors",
                  notification.read 
                    ? "bg-muted/30" 
                    : "bg-muted/60 border-l-2 border-primary"
                )}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className={cn(
                      "text-sm font-medium mb-1",
                      !notification.read && "text-white"
                    )}>
                      {notification.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {notification.message}
                    </p>
                    <span className="text-[10px] text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default NotificationCenter;
