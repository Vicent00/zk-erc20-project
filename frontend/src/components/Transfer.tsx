import React, { useState } from "react";
import { transferTokens } from "../web3.ts";

const Transfer: React.FC = () => {
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleTransfer = async () => {
    try {
      await transferTokens(to, amount);
      alert(`Transference from ${amount} tokens to ${to} successful done`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error occurred");
      }
      alert("No se pudo realizar la transferencia");
    }
  };

  return (
    <div>
      <h2 className="h2-transfer">Transfer tokens</h2>
      <input
        type="text"
        placeholder="Destination address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default Transfer;
