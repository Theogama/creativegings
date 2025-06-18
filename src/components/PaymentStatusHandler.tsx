
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const PaymentStatusHandler = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const paymentStatus = searchParams.get('payment');
    const service = searchParams.get('service');

    if (paymentStatus === 'success') {
      toast({
        title: "Payment Successful!",
        description: `Thank you for your purchase${service ? ` of ${service}` : ''}. We'll be in touch soon to start your project.`,
        variant: "default",
      });
      
      // Clear the URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (paymentStatus === 'cancelled') {
      toast({
        title: "Payment Cancelled",
        description: "Your payment was cancelled. You can try again anytime.",
        variant: "destructive",
      });
      
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (paymentStatus === 'failed') {
      toast({
        title: "Payment Failed",
        description: "Your payment could not be processed. Please try again or contact support.",
        variant: "destructive",
      });
      
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [searchParams]);

  return null;
};

export default PaymentStatusHandler;
