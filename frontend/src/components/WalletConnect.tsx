import React, { useState } from "react";
import { connectWallet } from "../web3.ts"; // Importar la función de conexión desde web3.js

const WalletConnect: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  const handleConnect = async () => {
    try {
      const connectedAccount = await connectWallet();
      setAccount(connectedAccount); // Guarda la cuenta conectada
      alert(`Conectado con éxito: ${connectedAccount}`);
    } catch (error) {
      console.error("Error al conectar MetaMask:", error);
      alert("No se pudo conectar con MetaMask");
    }
  };

  return (
    <div>
      <button onClick={handleConnect}>
        {account ? `Conectado: ${account}` : "Conectar MetaMask"}
      </button>
    </div>
  );
};

export default WalletConnect;
