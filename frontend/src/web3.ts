import Web3 from "web3"; // Import Web3
import abi from "./abi/abi.json"; // ABI of the contract (Replace with your ABI when deploying the contract)

// Check if MetaMask is available and configure Web3
const web3 = new Web3((window as any).ethereum || "https://arb1.arbitrum.io/rpc");

// Address of the deployed contract on Arbitrum One
const contractAddress = "0xYourContractAddress"; // Replace with your actual contract address

// Create an instance of the smart contract
const contract = new web3.eth.Contract(abi as any, contractAddress);

/**
 * Connect MetaMask and return the connected account.
 * @returns {Promise<string>} The address of the connected account.
 * @throws Will throw an error if the connection fails.
 */
export const connectWallet = async (): Promise<string> => {
  if ((window as any).ethereum) {
    try {
      // Request the user to connect their wallet
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });

      // Retrieve the available accounts
      const accounts: string[] = await web3.eth.getAccounts();

      // Check if there are connected accounts
      if (accounts.length === 0) {
        throw new Error("No connected accounts found in MetaMask.");
      }

      return accounts[0]; // Return the first connected account
    } catch (error: any) {
      console.error("Error connecting to MetaMask:", error.message);
      throw new Error("User rejected the MetaMask connection request.");
    }
  } else {
    throw new Error("MetaMask is not available. Please install it and try again.");
  }
};

/**
 * Retrieve the balance of a given Ethereum address.
 * @param {string} address - The Ethereum address to check the balance for.
 * @returns {Promise<string>} The balance in tokens.
 * @throws Will throw an error if the balance retrieval fails.
 */
export const getBalance = async (address: string): Promise<string> => {
  try {
    const balance: string = await contract.methods.balanceOf(address).call();
    return balance.toString(); // Return balance in tokens
  } catch (error: any) {
    console.error("Error retrieving balance:", error.message);
    throw new Error("Failed to retrieve balance.");
  }
};

/**
 * Transfer tokens to another account.
 * @param {string} to - The recipient's Ethereum address.
 * @param {string} amount - The amount of tokens to transfer.
 * @returns {Promise<void>} A promise that resolves when the transfer is completed.
 * @throws Will throw an error if the transfer fails.
 */
export const transferTokens = async (to: string, amount: string): Promise<void> => {
  try {
    // Get the connected account
    const accounts: string[] = await web3.eth.getAccounts();
    const sender = accounts[0];

    // Check if an account is connected
    if (!sender) {
      throw new Error("MetaMask is not connected.");
    }

    // Call the transfer method on the smart contract
    await contract.methods.transfer(to, amount).send({ from: sender });
    console.log(`Successfully transferred ${amount} tokens to ${to}.`);
  } catch (error: any) {
    console.error("Error transferring tokens:", error.message);
    throw new Error("Failed to complete the transfer.");
  }
};

export default contract;
