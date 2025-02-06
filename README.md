# ✨ ERC-20 Web3 with React and Remix IDE

## 📖 Project Description
This project enables interaction with an ERC-20 contract deployed on the Arbitrum One blockchain through a React-based interface utilizing Web3.js.

### 🚀 Key Features
- ✅ **Connect with MetaMask** to interact with the blockchain.
- ✅ **Check ERC-20 token balance** of any address.
- ✅ **Transfer tokens** between wallets.
- ✅ **Deploy the ERC-20 contract** on Arbitrum One using Remix IDE.
- ✅ **Manual configuration of ABI and contract address** in `web3.ts`.
- ✅ **Use of pure CSS** without additional frameworks.
- ✅ **Integration with Foundry** for contract testing and deployment.

---

## 📚 Table of Contents
1. [🎯 Technologies Used](#-technologies-used)
2. [💻 Prerequisites](#-prerequisites)
3. [🚀 Project Installation](#-project-installation)
4. [⚡ ABI and Contract Address Configuration](#-abi-and-contract-address-configuration)
5. [🖥️ Running Locally](#️-running-locally)
6. [🔗 Features](#-features)
7. [🔨 Deploying the Contract on Remix IDE](#-deploying-the-contract-on-remix-ide)
8. [🔮 Future Improvements](#-future-improvements)
9. [📜 License](#-license)

---

## 🎯 Technologies Used
| 🛠️ **Technology** | 📌 **Purpose** |
|-------------------|-----------|
| **Solidity** | Language for writing the ERC-20 contract. |
| **Remix IDE** | Platform for compiling and deploying the contract on Arbitrum One. |
| **React.js** | Framework for the graphical interface. |
| **Web3.js** | Library for interacting with the blockchain contract. |
| **CSS** | Styling without additional frameworks. |
| **Foundry** | Smart contract development, testing, and deployment framework. |

### ✅ Advantages of Using Foundry:
- Fast contract compilation and testing.
- Highly optimized Solidity debugging.
- Flexible scripting for contract deployment.
- Seamless integration with Web3 tooling.

---

## 💻 Prerequisites
Before running the project, ensure you have installed:

- **Node.js and npm** (Recommended: **v18+**)
```bash
node -v
npm -v
```

- **MetaMask** (connected to Arbitrum One).
- **ETH on Arbitrum One** (to cover gas fees).
- **Install dependencies:**
```bash
npm install web3
npm install @openzeppelin/contracts
```

- **(Optional) Install Foundry for contract testing and deployment**
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

---

## 🚀 Project Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2️⃣ Install Dependencies
```bash
npm install
```

---

## ⚡ ABI and Contract Address Configuration
This project requires manual configuration of the **ABI** and **contract address**.

### 📌 Steps to Configure ABI and Contract Address
1️⃣ **Copy the ABI** from your deployed contract in Remix IDE and save it in `frontend/src/abi/abi.json`.
2️⃣ **Modify the contract address in `web3.ts`**:
```typescript
const contractAddress = "0xYourContractAddress"; // Replace with your deployed address
```

---

## 🖥️ Running Locally
```bash
npm run dev
```
Then, open in your browser 👉 **http://localhost:3000**  

---

## 🔗 Features
### 1️⃣ Connect to MetaMask
🔹 **Button:** "Connect MetaMask"  
🔹 **Expected Result:** The connected wallet address is displayed.

### 2️⃣ Check Token Balance
🔹 **Enter wallet address**  
🔹 **Button:** "Check Balance"  
🔹 **Expected Result:** The token balance is displayed.

### 3️⃣ Transfer Tokens
🔹 **Enter recipient's wallet address**  
🔹 **Enter amount**  
🔹 **Button:** "Transfer"  
🔹 **Confirm transaction in MetaMask**  
🔹 **Expected Result:** Transaction successfully processed on the blockchain.

---

## 🔨 Deploying the Contract on Remix IDE
### 1️⃣ Open Remix IDE
1. Navigate to [Remix IDE](https://remix.ethereum.org).
2. Create a new file and paste the following contract code:

📌 **`MainContract.sol`**:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }
}
```

### 2️⃣ Compile and Deploy on Arbitrum One
1. **Compile:**
   - Open **"Solidity Compiler"** in Remix.
   - Select **"Compiler Version: 0.8.x"**.
   - Click **"Compile MyToken.sol"**.

2. **Deploy:**
   - Go to **"Deploy & Run Transactions"**.
   - Select **"Injected Web3"** and connect to MetaMask.
   - Enter contract parameters (`name`, `symbol`, `initialSupply`).
   - Click **"Deploy"** and confirm the transaction in MetaMask.

3. **Retrieve ABI and Contract Address:**
   - Copy the deployed contract address and paste it into `web3.ts`.
   - Copy the ABI and store it in `abi.json`.

---

## 🔮 Future Improvements
### 🛡️ Enhancing Privacy with Aztec Network
- **Integrate Aztec zk-rollups** to enhance transaction privacy.
- **Enable zero-knowledge transactions** so token transfers remain anonymous.
- **Improve smart contract confidentiality** without sacrificing Ethereum security.

### 🔗 Additional Features
- **Implement governance mechanisms** using DAO functionalities.
- **Optimize gas fees** by implementing Layer 2 transaction batching.
- **Enhance UI/UX** for a more seamless Web3 experience.

---

## 📜 License
This project is licensed under the **LGPL-3.0-only** license. See the `LICENSE` file for more details.



