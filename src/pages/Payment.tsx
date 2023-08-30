import { usePaystackPayment } from "react-paystack";

function Payment() {
  const config: any = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const onSuccess: any = (reference: any) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Paystack Hooks Implementation
      </button>
    </div>
  );
}

export default Payment;
