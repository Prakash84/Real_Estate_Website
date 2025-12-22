"use client";
import { useState } from "react";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(120); // months

  const calculateEMI = () => {
    const P = Number(loanAmount);
    const R = Number(interestRate) / 12 / 100;
    const N = Number(loanTenure);
    if (!P || !R || !N) return 0;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi.toFixed(0);
  };

  const emi = calculateEMI();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          EMI <span className="text-blue-600">Calculator</span>
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Calculate your monthly home loan EMI instantly
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-5">
        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="range"
            min="100000"
            max="50000000"
            step="50000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full mt-2 accent-blue-600"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="range"
            min="6"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full mt-2 accent-blue-600"
          />
        </div>

        {/* Tenure */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Tenure (Months)
          </label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="range"
            min="12"
            max="360"
            step="12"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full mt-2 accent-blue-600"
          />
        </div>
      </div>

      {/* Result */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-5 text-center shadow-lg">
        <p className="text-sm sm:text-base mb-1">
          Your Monthly EMI
        </p>
        <div className="text-2xl sm:text-3xl font-bold">
          ₹ {emi}
        </div>
      </div>
    </div>
  );
}
