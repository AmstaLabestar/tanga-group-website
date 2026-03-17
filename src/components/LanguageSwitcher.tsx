"use client";

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLanguage = (newLocale: 'en' | 'fr') => {
    const currentPath = pathname || '/';
    const withLocale = currentPath.replace(/^\/(en|fr)/, `/${newLocale}`);
    const targetPath = withLocale.startsWith(`/${newLocale}`)
      ? withLocale
      : `/${newLocale}${withLocale}`;

    window.location.href = targetPath;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan/30">
        <Globe className="w-5 h-5" />
        <span className="sr-only">Changer de langue</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        <DropdownMenuItem 
          onClick={() => switchLanguage('en')}
          className={`cursor-pointer ${locale === 'en' ? 'text-cyan font-bold bg-cyan/10' : 'text-foreground'}`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => switchLanguage('fr')}
          className={`cursor-pointer ${locale === 'fr' ? 'text-cyan font-bold bg-cyan/10' : 'text-foreground'}`}
        >
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
