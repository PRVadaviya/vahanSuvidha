

import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleGetOtp = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9203/validate-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setShowOtpField(true);
      } else {
        setMessage(data.message || "Error sending OTP.");
      }
    } catch (error) {
      setMessage("Failed to send OTP. Try again.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setMessage("Please enter the OTP.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9203/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("OTP verified successfully! Now reset your password.");
        setShowResetPassword(true);
      } else {
        setMessage(data.message || "Invalid OTP.");
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setMessage("Please enter both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9203/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Password reset successfully!");
        setShowResetPassword(false);
        setShowOtpField(false);
      } else {
        setMessage(data.message || "Error resetting password.");
      }
    } catch (error) {
      setMessage("Failed to reset password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96 text-center">
        <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>

        {/* Email Input */}
        {!showOtpField && !showResetPassword && (
          <>
            <div className="mb-3 text-left">
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800 transition"
              onClick={handleGetOtp}
            >
              Get OTP
            </button>
          </>
        )}

        {/* OTP Input Field */}
        {showOtpField && !showResetPassword && (
          <>
            <div className="mt-4 text-left">
              <label className="block text-sm font-medium text-gray-700">Enter OTP:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                className="w-full bg-blue-600 text-white py-2 mt-3 rounded hover:bg-blue-800 transition"
                onClick={handleVerifyOtp}
              >
                Submit OTP
              </button>
            </div>
          </>
        )}

        {/* Reset Password Fields */}
        {showResetPassword && (
          <>
            <div className="mt-4 text-left">
              <label className="block text-sm font-medium text-gray-700">New Password:</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mt-4 text-left">
              <label className="block text-sm font-medium text-gray-700">Confirm Password:</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-green-600 text-white py-2 mt-3 rounded hover:bg-green-800 transition"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </>
        )}

        {/* Message Display */}
        {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;






// import { useState } from "react";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const [showOtpField, setShowOtpField] = useState(false);

//   const handleGetOtp = async () => {
//     if (!email) {
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:9203/validate-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       console.log("response is ready");

//       const data = await response.json();
//       if (response.ok) {
//         setMessage(data.message);
//         setShowOtpField(true);
//       } else {
//         setMessage(data.message || "Error sending OTP.");
//       }
//     } catch (error) {
//       setMessage("Failed to send OTP. Try again.");
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (!otp) {
//       setMessage("Please enter the OTP.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:9203/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ otp }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setMessage("OTP verified successfully!");
//       } else {
//         setMessage(data.message || "Invalid OTP.");
//       }
//     } catch (error) {
//       setMessage("Error verifying OTP.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 w-96 text-center">
//         <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
        
//         {/* Email Input */}
//         <div className="mb-3 text-left">
//           <label className="block text-sm font-medium text-gray-700">Email:</label>
//           <input
//             type="email"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
        
//         {/* Get OTP Button */}
//         <button
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800 transition"
//           onClick={handleGetOtp}
//         >
//           Get OTP
//         </button>

//         {/* OTP Input Field (Shown After Email Validation) */}
//         {showOtpField && (
//           <div className="mt-4 text-left">
//             <label className="block text-sm font-medium text-gray-700">Enter OTP:</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button
//               className="w-full bg-green-600 text-white py-2 mt-3 rounded hover:bg-green-800 transition"
//               onClick={handleVerifyOtp}
//             >
//               Submit OTP
//             </button>
//           </div>
//         )}

//         {/* Message Display */}
//         {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;







