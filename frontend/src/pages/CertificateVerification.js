import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CertificateVerification.css";

const CertificateVerification = () => {
  const [certificateIDs, setCertificateIDs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleVerify = async () => {
    setError(null);
    setLoading(true);
  
    const certificateArray = certificateIDs.split(",").map((id) => id.trim());
  
    if (certificateArray.length === 0 || certificateArray.some((id) => id === "")) {
      setError("Please enter valid certificate IDs.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(
        "https://backend-51k4.onrender.com/api/certificates/verify",
        { certificateIDs: certificateArray }
      );
  
      if (Array.isArray(response.data) && response.data.length > 0) {
        // Navigate to the details page with query params
        const idsQuery = certificateArray.join(",");
        navigate(`/details?ids=${idsQuery}`, { state: { certificates: response.data } });
      } else {
        setError("No certificates found with the provided IDs.");
      }
    } catch (error) {
      console.error("Error verifying certificates:", error);
      setError("Error verifying certificates. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="certificate-verification-container">
      <h2>Certificate Verification</h2>

      <textarea
        placeholder="Enter Certificate IDs (comma-separated)"
        value={certificateIDs}
        onChange={(e) => setCertificateIDs(e.target.value)}
        rows="5"
        className="certificate-input"
      />

      <button
        onClick={handleVerify}
        disabled={loading}
        className={`verify-btn ${loading ? "loading" : ""}`}
      >
        {loading ? "Verifying..." : "Verify Certificates"}
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CertificateVerification;
