import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("order"));

  if (!order) return <h2>No order found</h2>;

  return (
    <div className="order-success">
      <h1>🎉 Order Successful!</h1>
      <p>Thank you, {order.name}!</p>

      <div className="order-box">
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Delivery:</strong> {order.delivery}</p>
        <p><strong>Total Paid:</strong> ₦{order.total}</p>
        <p><strong>Date:</strong> {order.date}</p>
      </div>

      <button className="pay-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;