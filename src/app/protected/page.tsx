"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Protected: React.FC = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3001/protected", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data.message);
      } catch (error) {
        setError("You are not authorized to view this page");
        router.push("/login");
      }
    };

    fetchData();
  }, [router]);

  return (
    <div>
      <h2>Protected Page</h2>
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{data}</p>}
    </div>
  );
};

export default Protected;
