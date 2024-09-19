import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const PaymentView = () => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await fetch('http://localhost:8000/payment-details'); // Adjust the URL as needed
        if (!response.ok) throw new Error('Failed to fetch payment details');
        const data = await response.json();
        setPaymentDetails(data);
      } catch (error) {
        console.error('Error fetching payment details:', error);
        await Swal.fire({
          title: 'Error!',
          text: 'Unable to fetch payment details.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentDetails();
  }, []);

  const handleRenewPlan = async () => {
    try {
      const response = await fetch('http://localhost:8000/renew-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Failed to renew plan');

      const result = await Swal.fire({
        title: 'Success!',
        text: 'Plan renewed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      if (result.isConfirmed) {
        // Optionally refresh payment details after renewal
        // fetchPaymentDetails();
      }
    } catch (error) {
      console.error('Error renewing plan:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Unable to renew the plan.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!paymentDetails) {
    return <div>No payment details available.</div>;
  }

  const { amount, paymentType, plan, endDate } = paymentDetails;

  // Check if renewal is needed
  const today = new Date();
  const isRenewalNeeded = new Date(endDate) <= today;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Plan:</p>
            <p>{plan}</p>
          </div>
          <div>
            <p className="font-medium">Amount:</p>
            <p>${amount.toFixed(2)}</p>
          </div>
          <div>
            <p className="font-medium">Payment Type:</p>
            <p>{paymentType}</p>
          </div>
          <div>
            <p className="font-medium">End Date:</p>
            <p>{new Date(endDate).toLocaleDateString()}</p>
          </div>
          {isRenewalNeeded && (
            <button
              onClick={handleRenewPlan}
              className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            >
              Renew Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentView;
