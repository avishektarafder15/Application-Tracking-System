
import React, { useState, useEffect } from 'react';

interface TwoFactorViewProps {
  onVerify: () => void;
  onBack: () => void;
}

const TwoFactorView: React.FC<TwoFactorViewProps> = ({ onVerify, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight">Two-Factor Auth</h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Enter the OTP sent to your email / authenticator app
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-4 shadow-xl shadow-slate-200 rounded-2xl border border-slate-100 sm:px-10">
          <div className="flex justify-center space-x-2 mb-8">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                className="w-12 h-14 text-center text-2xl font-bold border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
              />
            ))}
          </div>

          <button
            onClick={onVerify}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all"
          >
            Verify OTP
          </button>

          <div className="mt-6 flex flex-col items-center space-y-4">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">Resend code</button>
            <button onClick={onBack} className="text-xs text-slate-400 hover:text-slate-600">Back to login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorView;
