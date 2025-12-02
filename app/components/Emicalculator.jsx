'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { calculateEMI, calculateAmortization, formatCurrency, formatCompact } from '../lib/calculator';
import InputSlider from './InputSlider';

import AmortizationTable from './AmortizationTable';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  useEffect(() => {
    const calculatedEMI = calculateEMI(loanAmount, interestRate, loanTerm);
    const schedule = calculateAmortization(loanAmount, interestRate, loanTerm);
    
    setEmi(calculatedEMI);
    setAmortizationSchedule(schedule);
    
    const totalInterestPaid = schedule.reduce((sum, payment) => sum + payment.interestPaid, 0);
    setTotalInterest(totalInterestPaid);
    setTotalPayment(loanAmount + totalInterestPaid);
  }, [loanAmount, interestRate, loanTerm]);

  const chartData = [
    { name: 'Principal', value: loanAmount, color: '#0ea5e9' },
    { name: 'Interest', value: totalInterest, color: '#22c55e' },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium text-gray-900">{payload[0].name}</p>
          <p className="text-sm text-gray-600">
            {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen gradient-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Home Loan EMI Calculator
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Calculate your monthly mortgage payments and plan your home purchase with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="glass-card rounded-2xl p-8">
            <div className="space-y-8">
              <InputSlider
                label="Loan Amount"
                value={loanAmount}
                onChange={setLoanAmount}
                min={100000}
                max={50000000}
                step={500000}
                unit="₹"
                formatValue={(val) => formatCompact(val)}
              />

              <InputSlider
                label="Interest Rate"
                value={interestRate}
                onChange={setInterestRate}
                min={1}
                max={20}
                step={0.1}
                unit="%"
              />

              <InputSlider
                label="Loan Term"
                value={loanTerm}
                onChange={setLoanTerm}
                min={1}
                max={30}
                step={1}
                unit="years"
              />

              {/* Reset Button */}
              <button
                onClick={() => {
                  setLoanAmount(5000000);
                  setInterestRate(8.5);
                  setLoanTerm(20);
                }}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Reset to Default
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            {/* EMI Card */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-gray-600 mb-2">Your Monthly EMI</p>
              <div className="text-4xl font-bold text-primary-600 mb-4">
                {formatCurrency(emi)}
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Total Payment: {formatCurrency(totalPayment)}</p>
                <p>Total Interest: {formatCurrency(totalInterest)}</p>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {formatCompact(loanAmount)}
                </div>
                <div className="text-xs text-gray-500">Loan Amount</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-secondary-600 mb-1">
                  {formatCompact(totalInterest)}
                </div>
                <div className="text-xs text-gray-500">Total Interest</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {formatCompact(totalPayment)}
                </div>
                <div className="text-xs text-gray-500">Total Payment</div>
              </div>
            </div>

            {/* Chart */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Breakdown
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                {chartData.map((item, index) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Amortization Table */}
        <div className="mt-12">
          <AmortizationTable schedule={amortizationSchedule} showMonths={12} />
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;