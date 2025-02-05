import React, { useState } from "react";
import { transferTokens } from "../web3.ts";

const Transfer: React.FC = () => {
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleTransfer = async () => {
    try {
      await transferTokens(to, amount);
      alert(`Transferencia de ${amount} tokens a ${to} realizada con éxito`);
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
      <h2>Transferir Tokens</h2>
      <input
        type="text"
        placeholder="Dirección destino"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transferir</button>
    </div>
  );
};

export default Transfer;
