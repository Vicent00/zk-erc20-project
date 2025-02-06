
import './App.css';
import React from "react";
import WalletConnect from "./components/WalletConnect.tsx";
import Balance from "./components/Balance.tsx";
import Transfer from "./components/Transfer.tsx";

/**
 * Main application component that renders the essential UI elements.
 * It includes:
 * - Wallet connection functionality (`WalletConnect`).
 * - Checking token balance (`Balance`).
 * - Performing token transfers (`Transfer`).
 */
const App: React.FC = () => {
  return (
    <div>
      <h1 className='h1-app'>ERC-20 in Arbitrum One</h1>
      <WalletConnect />
      <Balance />
      <Transfer />
    </div>
  );
};

export default App;
