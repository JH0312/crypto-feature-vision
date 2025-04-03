
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NotificationCenter from './NotificationCenter';
import SettingsPanel from './SettingsPanel';
import { LoginButton, RegisterButton } from './AuthForms';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { useCryptoData } from '@/hooks/useCryptoData';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { allData, selectCrypto, updateFilter } = useCryptoData();
  const [commandOpen, setCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Handle command menu open
  const handleCommandOpen = () => {
    setCommandOpen(true);
  };

  // Handle command menu close
  const handleCommandClose = () => {
    setCommandOpen(false);
  };

  // Handle crypto selection from command menu
  const handleSelectCrypto = (crypto: any) => {
    selectCrypto(crypto);
    setCommandOpen(false);
    setSearchQuery('');
  };

  // Handle search input change in the header
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    updateFilter(value);
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchQuery('');
    updateFilter('');
  };

  return (
    <header className="w-full bg-gradient-to-r from-crypto-blue to-crypto-purple p-4 border-b border-gray-800">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div 
            className="font-bold text-xl md:text-2xl text-white cursor-pointer" 
            onClick={() => navigate('/')}
          >
            RFSA Crypto Analyzer
          </div>
        </div>
        
        <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <Search 
            className="absolute left-3 h-4 w-4 text-gray-400"
            onClick={handleCommandOpen}
          />
          <Input 
            placeholder="Search cryptocurrencies, features..." 
            className="pl-10 bg-gray-800 border-gray-700 text-white pr-8"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onClick={handleCommandOpen}
          />
          {searchQuery && (
            <button 
              className="absolute right-3 p-1"
              onClick={handleClearSearch}
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
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

      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Search cryptocurrencies..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Cryptocurrencies">
            {allData
              .filter(crypto => 
                crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(crypto => (
                <CommandItem
                  key={crypto.id}
                  onSelect={() => handleSelectCrypto(crypto)}
                  className="flex items-center"
                >
                  <div className="mr-2 rounded-full bg-gradient-to-br from-crypto-blue to-crypto-purple p-1 h-6 w-6 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{crypto.symbol.substring(0, 1)}</span>
                  </div>
                  <span>{crypto.name}</span>
                  <span className="ml-2 text-gray-400 text-sm">{crypto.symbol}</span>
                  <span className="ml-auto font-medium">${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;
