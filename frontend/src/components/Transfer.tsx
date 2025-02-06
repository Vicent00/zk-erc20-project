import React, { useState } from "react";
import { transferTokens } from "../web3.ts";

/**
 * Component for transferring ERC-20 tokens.
 * Users must input a recipient address and an amount of tokens to send.
 */
const Transfer: React.FC = () => {
  const [to, setTo] = useState<string>(""); // Stores the recipient's Ethereum address
  const [amount, setAmount] = useState<string>(""); // Stores the amount of tokens to transfer

  /**
   * Handles the token transfer process.
   * Calls the blockchain function to perform the transfer.
   */
  const handleTransfer = async () => {
    try {
      await transferTokens(to, amount);
      alert(`Successfully transferred ${amount} tokens to ${to}`); // Translated message
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error occurred");
      }
      alert("Failed to complete the transfer"); // Translated message
    }
  };

  return (
    <div>
      <h2 className="h2-transfer">Transfer Tokens</h2>
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
