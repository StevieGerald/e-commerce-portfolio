import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { toast } from "react-toastify";

const Checkout = ({ email, amount, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const publicKey = "pk_test_82c1a22d516bae46f407effd5a7221f582221854";

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: loading ? "Processing..." : "Pay Now",
    className: "pay-btn",

    onSuccess: () => {
      onSuccess(); // Trigger parent success handler
      toast.success("Payment Successful!");
      setLoading(false);
    },

    onClose: () => {
      toast.info("Payment cancelled");
      setLoading(false);
    },

    onClick: () => setLoading(true),
  };

  return <PaystackButton {...componentProps} disabled={loading} />;
};

export default Checkout;