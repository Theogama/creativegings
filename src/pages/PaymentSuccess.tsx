
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const [verification, setVerification] = useState<null | { status: string, error?: string }>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const checkoutId = searchParams.get("checkoutId");
    if (!checkoutId) {
      setVerification({ status: "error", error: "Missing payment reference. Please contact support." });
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch("/functions/verify-yoco-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkoutId }),
        });
        const data = await res.json();

        if (!res.ok || !data.status) {
          setVerification({ status: "error", error: data.error || "Verification failed." });
        } else if (data.status === "PAID") {
          setVerification({ status: "success" });
        } else {
          setVerification({ status: "error", error: "Payment not completed. Status: " + data.status });
        }
      } catch (err: any) {
        setVerification({ status: "error", error: err.message || "Unknown error" });
      }
    };
    verifyPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-background px-4 py-16">
        <div className="bg-card rounded-2xl shadow-lg p-12 text-center border max-w-lg w-full">
          {verification === null ? (
            <>
              <div className="animate-spin mb-6">
                <CheckCircle className="text-green-500 mx-auto" size={80} />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">Verifying payment...</h1>
            </>
          ) : verification.status === "success" ? (
            <>
              <CheckCircle className="text-green-500 mx-auto mb-6" size={80} />
              <h1 className="text-3xl font-bold text-foreground mb-4">Payment Successful!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for your payment. We’ll be in contact soon to start your project.
              </p>
              <Button asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </>
          ) : (
            <>
              <XCircle className="text-red-500 mx-auto mb-6" size={80} />
              <h1 className="text-3xl font-bold text-foreground mb-4">Payment Not Verified</h1>
              <p className="text-xl text-muted-foreground mb-8">
                {verification.error || "There was an issue verifying your payment. Please contact support or try again."}
              </p>
              <Button asChild variant="outline">
                <Link to="/">Back to Home</Link>
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
