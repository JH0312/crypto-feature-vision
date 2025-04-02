
import React from 'react';
import { Bell, Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
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
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
