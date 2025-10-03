import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navigation: NavItem[] = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Live Demo', href: '/projects', current: location.pathname === '/projects' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">VXN-Nexia</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 bg-muted/30 rounded-full px-6 py-2 backdrop-blur-sm border border-border/20">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 px-3 py-2 rounded-full relative',
                item.current 
                  ? 'text-primary bg-primary/10 shadow-sm' 
                  : 'text-foreground/70 hover:bg-primary/5'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-hover px-6 py-2.5 text-sm font-medium text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-full p-2.5 text-foreground hover:bg-primary/10 hover:text-primary focus:outline-none transition-all duration-300 border border-border/20"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/20">
          <div className="space-y-1 px-4 pb-4 pt-4 bg-muted/20 backdrop-blur-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300',
                  item.current
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-foreground/70 hover:bg-primary/5 hover:text-primary hover:translate-x-1'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 block w-full rounded-lg bg-gradient-to-r from-primary to-primary-hover px-4 py-3 text-center text-sm font-medium text-primary-foreground hover:shadow-lg transition-all duration-300 shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
