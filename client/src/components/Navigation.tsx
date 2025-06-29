import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
    } border-b border-github-border dark:border-gray-700`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-sf-pro font-semibold text-xl text-github-dark dark:text-white hover:text-github-blue dark:hover:text-blue-400 transition-colors duration-200">
            Yatin Garg
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-github-blue dark:text-blue-400 font-medium'
                    : 'text-github-text dark:text-gray-300 hover:text-github-blue dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 hover:bg-github-light dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-github-text dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-github-text dark:text-gray-300" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 hover:bg-github-light dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-github-text dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-github-text dark:text-gray-300" />
              )}
            </Button>
            <button
              className="p-2 rounded-lg hover:bg-github-light dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="text-github-text dark:text-gray-300 text-lg" />
              ) : (
                <Menu className="text-github-text dark:text-gray-300 text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-github-border dark:border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-github-blue dark:text-blue-400 font-medium'
                      : 'text-github-text dark:text-gray-300 hover:text-github-blue dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
