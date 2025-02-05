import React, { useState } from "react";
import { getBalance } from "../web3.ts";

const Balance: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");

  const handleCheckBalance = async () => {
    try {
      const result = await getBalance(address);
      setBalance(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
      alert("No se pudo consultar el balance");
    }
  };

  return (
    <div>
      <h2>Consultar Balance</h2>
      <input
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleCheckBalance}>Consultar</button>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default Balance;
