
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentError = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 flex items-center justify-center bg-background px-4 py-16">
      <div className="bg-card rounded-2xl shadow-lg p-12 text-center border max-w-lg w-full">
        <XCircle className="text-red-500 mx-auto mb-6" size={80} />
        <h1 className="text-3xl font-bold text-foreground mb-4">Payment Failed</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your payment could not be processed. Please try again or contact support.
        </p>
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default PaymentError;
