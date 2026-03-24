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
    className: "pay-btn",
    text: loading ? "Processing..." : "Pay Now",

    onSuccess: () => {
      setLoading(false);
      toast.success("Payment Successful!");
      onSuccess();
    },

    onClose: () => {
      setLoading(false);
      toast.info("Payment cancelled");
    },

    onClick: () => setLoading(true),
  };

  return <PaystackButton {...componentProps} disabled={loading} />;
};

export default Checkout;