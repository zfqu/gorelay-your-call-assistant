import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SmsConsent from "./pages/SmsConsent";
import PricingPage from "./pages/PricingPage";
import MissedCallTextBack from "./pages/MissedCallTextBack";
import WebWidgetFollowUp from "./pages/WebWidgetFollowUp";
import AutomatedReviews from "./pages/AutomatedReviews";
import AIVoice from "./pages/AIVoice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sms-consent" element={<SmsConsent />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/features/missed-call-text-back" element={<MissedCallTextBack />} />
          <Route path="/features/web-widget" element={<WebWidgetFollowUp />} />
          <Route path="/features/reviews" element={<AutomatedReviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
