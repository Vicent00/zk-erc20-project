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
      <h2 className="h2-balance">Check Balance</h2>
      <input
      className="input-balance"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}      />
      <button className="button-balance"
      onClick={handleCheckBalance}>
        Consult</button>
      <p >Balance:<span>{balance}</span></p>
    </div>
  );
};

export default Balance;
