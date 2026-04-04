import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoLight from "@/assets/logo-light.png";

const featureLinks = [
  { href: "/features/missed-call-text-back", label: "Missed Call Text Back" },
  { href: "/features/web-widget", label: "Web Widget Follow-Up" },
  { href: "/features/reviews", label: "Automated Review Requests" },
  { href: "/features/ai-voice", label: "Inbound AI Voice" },
];

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={logoLight} alt="Relay" className="h-11 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[1.05rem] font-bold text-muted-foreground hover:text-foreground transition-colors outline-none">
                Features
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {featureLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <a href={link.href} className="cursor-pointer">
                      {link.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[1.05rem] font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button size="sm">Talk to Us</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Mobile Features Collapsible */}
              <div>
                <button
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  Features
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
                </button>
                {featuresOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {featureLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Book a Demo</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
