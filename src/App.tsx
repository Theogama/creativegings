import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ContactSuccess from "./pages/ContactSuccess";
import ContactThankYou from "./pages/ContactThankYou";
import NotFound from "./pages/NotFound";
import PaymentError from "./pages/PaymentError";
import GetStartedConfirm from "./pages/GetStartedConfirm";
import useScrollToTop from "@/hooks/useScrollToTop";

const queryClient = new QueryClient();

function AppRoutes() {
  useScrollToTop();
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact-success" element={<ContactSuccess />} />
        <Route path="/contact-thank-you" element={<ContactThankYou />} />
        <Route path="/get-started-confirm" element={<GetStartedConfirm />} />
        <Route path="/payment-error" element={<PaymentError />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="creativegings-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
