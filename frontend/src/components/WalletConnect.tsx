import React, { useState } from "react";
import { connectWallet } from "../web3.ts"; // Import connection function from web3.ts

/**
 * Component for connecting a cryptocurrency wallet (e.g., MetaMask).
 * Displays the connected wallet address once successfully connected.
 */
const WalletConnect: React.FC = () => {
  const [account, setAccount] = useState<string>(""); // Stores the connected wallet address

  /**
   * Handles the wallet connection process.
   * Calls the blockchain connection function and updates the state with the wallet address.
   */
  const handleConnect = async () => {
    try {
      const connectedAccount = await connectWallet();
      setAccount(connectedAccount); // Stores the connected account
      alert(`Connected successfully: ${connectedAccount}`); // Message remains the same
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Error: Unexpected response"); // Message remains the same
    }
  };

  return (
    <div>
      <button className="transfer-button" onClick={handleConnect}>
        {account ? `Connected: ${account}` : "Connect MetaMask"}
      </button>
    </div>
  );
};

export default WalletConnect;
