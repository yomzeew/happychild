import { useState, useRef, useEffect } from 'react';

const OtpComponent = ({ otp, onChange }) => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    if (otp) {
      const otpArray = otp.split('').slice(0, 6);
      setOtpValues(otpArray.concat(Array(6 - otpArray.length).fill('')));
    }
  }, [otp]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Emit complete OTP when all fields are filled
    if (onChange) {
      onChange(newOtpValues.join(''));
    }

    // Move to next input
    if (value !== '' && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && index > 0 && otpValues[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtpValues = [...otpValues];
    
    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtpValues[i] = pastedData[i];
      }
    }
    
    setOtpValues(newOtpValues);
    if (onChange) {
      onChange(newOtpValues.join(''));
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-sm font-semibold text-gray-700">
        Enter OTP Code
      </div>
      <div className="flex space-x-4">
        {otpValues.map((value, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center text-xl font-semibold text-gray-800 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpComponent;