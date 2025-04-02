
import React, { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetDescription,
  SheetFooter
} from '@/components/ui/sheet';
import { 
  Settings, 
  Bell, 
  Moon, 
  Sun, 
  Lock, 
  User as UserIcon, 
  LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';

const SettingsPanel = () => {
  const { user, logout } = useAuth();
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [newsletterUpdates, setNewsletterUpdates] = useState(false);
  const [riskThreshold, setRiskThreshold] = useState([30]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Configure your crypto analysis experience
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          {user ? (
            <div className="space-y-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <UserIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={logout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </Button>
            </div>
          ) : (
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Sign in to access all settings
              </p>
            </div>
          )}

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="price-alerts" className="flex flex-col">
                  <span>Price alerts</span>
                  <span className="font-normal text-xs text-muted-foreground">
                    Get notified about significant price changes
                  </span>
                </Label>
                <Switch 
                  id="price-alerts"
                  checked={priceAlerts}
                  onCheckedChange={setPriceAlerts}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="security-alerts" className="flex flex-col">
                  <span>Security alerts</span>
                  <span className="font-normal text-xs text-muted-foreground">
                    Get notified about security risks and threats
                  </span>
                </Label>
                <Switch 
                  id="security-alerts"
                  checked={securityAlerts}
                  onCheckedChange={setSecurityAlerts}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="newsletter" className="flex flex-col">
                  <span>Newsletter updates</span>
                  <span className="font-normal text-xs text-muted-foreground">
                    Receive weekly market insights and analysis
                  </span>
                </Label>
                <Switch 
                  id="newsletter"
                  checked={newsletterUpdates}
                  onCheckedChange={setNewsletterUpdates}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Security Settings
            </h3>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex justify-between items-center">
                  <Label htmlFor="risk-threshold">Risk Threshold</Label>
                  <span className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded">
                    {riskThreshold[0]}%
                  </span>
                </div>
                <Slider
                  id="risk-threshold"
                  defaultValue={riskThreshold}
                  max={100}
                  step={1}
                  onValueChange={setRiskThreshold}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Adjust the threshold for risk alerts. Higher values mean fewer alerts.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium flex items-center">
              <Sun className="h-4 w-4 mr-2" />
              Appearance
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm" className="justify-center px-0 py-4 h-auto flex flex-col gap-1">
                <Sun className="h-4 w-4" />
                <span className="text-xs">Light</span>
              </Button>
              <Button variant="outline" size="sm" className="justify-center px-0 py-4 h-auto flex flex-col gap-1 border-primary bg-primary/10">
                <Moon className="h-4 w-4" />
                <span className="text-xs">Dark</span>
              </Button>
              <Button variant="outline" size="sm" className="justify-center px-0 py-4 h-auto flex flex-col gap-1">
                <div className="flex">
                  <Sun className="h-4 w-4" />
                  <Moon className="h-4 w-4" />
                </div>
                <span className="text-xs">System</span>
              </Button>
            </div>
          </div>
        </div>

        <SheetFooter>
          <Button variant="outline" className="w-full">
            Save preferences
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsPanel;
