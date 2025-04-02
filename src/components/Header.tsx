
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NotificationCenter from './NotificationCenter';
import SettingsPanel from './SettingsPanel';
import { LoginButton, RegisterButton } from './AuthForms';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  const { user } = useAuth();

  // Function to get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.name) return 'U';
    return user.name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="w-full bg-gradient-to-r from-crypto-blue to-crypto-purple p-4 border-b border-gray-800">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl md:text-2xl text-white">RFSA Crypto Analyzer</div>
        </div>
        
        <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search cryptocurrencies, features..." 
            className="pl-10 bg-gray-800 border-gray-700 text-white"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <NotificationCenter />
          <SettingsPanel />
          
          {user ? (
            <Avatar className="h-8 w-8 border-2 border-white/20">
              <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
          ) : (
            <>
              <LoginButton />
              <RegisterButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
