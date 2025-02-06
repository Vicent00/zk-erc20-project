import React, { useState } from "react";
import { getBalance } from "../web3.ts";

/**
 * Component for checking the balance of an ERC-20 token.
 * Users must input an Ethereum address, and the system retrieves and displays the balance.
 */
const Balance: React.FC = () => {
  const [address, setAddress] = useState<string>(""); // Stores the Ethereum address input by the user
  const [balance, setBalance] = useState<string>(""); // Stores the retrieved balance

  /**
   * Handles the balance check request.
   * Calls the blockchain to fetch the balance and updates the state.
   */
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
      alert("Failed to retrieve balance"); // Translated message
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
        onChange={(e) => setAddress(e.target.value)}
      />
      <button className="button-balance" onClick={handleCheckBalance}>
        Check
      </button>
      <p>Balance: <span>{balance}</span></p>
    </div>
  );
};

export default Balance;

