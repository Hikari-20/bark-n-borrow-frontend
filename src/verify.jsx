import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function VerifyEmail() {
  const [message, setMessage] = useState("Verifying...");
  const [searchParams] = useSearchParams();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const token = searchParams.get("token"); // token from verification link

    if (token) {
      axios
        .post(`${API_URL}/finalize-registration`, { token })
        .then((res) => {
          setMessage("Email verified! Your account is now active.");
        })
        .catch((err) => {
          console.error(err);
          setMessage("Verification failed or token expired.");
        });
    }
  }, []);

  return <div>{message}</div>;
}

export default VerifyEmail;
