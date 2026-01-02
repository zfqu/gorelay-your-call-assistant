import logoLight from "@/assets/logo-light.png";
import { Mail } from "lucide-react";

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

export function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onPrivacyClick?.();
    setTimeout(() => {
      document.getElementById("privacy")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onTermsClick?.();
    setTimeout(() => {
      document.getElementById("terms")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="section-padding border-t border-border">
      <div className="container-wide mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoLight} alt="Relay" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Voice AI receptionist for home service contractors. Never miss a call. Never miss a job.
            </p>
            <a
              href="mailto:support@gorelay.ai"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              support@gorelay.ai
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  onClick={handlePrivacyClick}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={handleTermsClick}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Relay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
