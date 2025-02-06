import React, { useState } from "react";
import { connectWallet } from "../web3.ts"; // Importar la función de conexión desde web3.js

const WalletConnect: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  const handleConnect = async () => {
    try {
      const connectedAccount = await connectWallet();
      setAccount(connectedAccount); // Guarda la cuenta conectada
      alert(`Connected successfully: ${connectedAccount}`);
    } catch (error) {
      console.error("Error by connecting Metamask:", error);
      alert("Error: unexpected response");
    }
  };

  return (
    <div>
      <button className="transfer-button" onClick={handleConnect}>
        {account ? `Connected: ${account}` : "Connecting Metamask"}
      </button>
    </div>
  );
};

export default WalletConnect;
