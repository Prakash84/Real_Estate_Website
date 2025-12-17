"use client";
import { useState } from "react";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(12);

  const calculateEMI = () => {
    const P = Number(loanAmount);
    const R = Number(interestRate) / 12 / 100;
    const N = Number(loanTenure);
    const emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    return emi ? emi.toFixed(2) : 0;
  };

  const emi = calculateEMI();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          EMI <span className="text-blue-600">Calculator</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-md mx-auto">
          Calculate your monthly installment easily using loan amount, interest rate and tenure.
        </p>

        <div className="space-y-7">
          {/* Loan Amount */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Loan Amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Loan Tenure */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Loan Tenure (Months)</label>
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* EMI Output */}
        <div className="mt-10 bg-blue-600 text-white rounded-xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Your Monthly EMI</h3>
          <div className="text-4xl font-bold">₹ {emi}</div>
        </div>
      </div>
    </section>
  );
}