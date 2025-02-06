
import './App.css';
import React from "react";
import WalletConnect from "./components/WalletConnect.tsx";
import Balance from "./components/Balance.tsx";
import Transfer from "./components/Transfer.tsx";

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
