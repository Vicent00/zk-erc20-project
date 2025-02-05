import Web3 from "web3"; // Importar web3
import abi from "./abi/abi.json"; // ABI del contrato

// Verificar si MetaMask está disponible y configurar Web3
const web3 = new Web3((window as any).ethereum || "https://arb1.arbitrum.io/rpc");

// Dirección del contrato desplegado en Arbitrum One
const contractAddress = "0x2A536bA18778ec0Bd44a358e7aeA60a765994112"; // Cambia por tu dirección real

// Crear una instancia del contrato
const contract = new web3.eth.Contract(abi as any, contractAddress);

/**
 * Conectar MetaMask y devolver la cuenta conectada
 * @returns {Promise<string>} La dirección de la cuenta conectada
 */
export const connectWallet = async (): Promise<string> => {
  if ((window as any).ethereum) {
    try {
      // Solicitar al usuario que conecte su billetera
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });

      // Obtener las cuentas disponibles
      const accounts: string[] = await web3.eth.getAccounts();

      // Verificar si hay cuentas conectadas
      if (accounts.length === 0) {
        throw new Error("No hay cuentas conectadas en MetaMask");
      }

      return accounts[0]; // Retorna la primera cuenta conectada
    } catch (error: any) {
      console.error("Error al conectar MetaMask:", error.message);
      throw new Error("Usuario rechazó la conexión con MetaMask");
    }
  } else {
    throw new Error("MetaMask no está disponible. Instálalo y vuelve a intentarlo.");
  }
};

/**
 * Consultar el balance de una dirección
 * @param {string} address Dirección de la cuenta
 * @returns {Promise<string>} Balance en tokens
 */
export const getBalance = async (address: string): Promise<string> => {
  try {
    const balance: string = await contract.methods.balanceOf(address).call();
    return balance.toString(); // Retorna el balance en tokens
  } catch (error: any) {
    console.error("Error al consultar el balance:", error.message);
    throw new Error("No se pudo obtener el balance");
  }
};

/**
 * Transferir tokens a otra cuenta
 * @param {string} to Dirección destino
 * @param {string} amount Cantidad de tokens a transferir
 * @returns {Promise<void>}
 */
export const transferTokens = async (to: string, amount: string): Promise<void> => {
  try {
    // Obtener la cuenta conectada
    const accounts: string[] = await web3.eth.getAccounts();
    const sender = accounts[0];

    // Verificar si hay una cuenta conectada
    if (!sender) {
      throw new Error("MetaMask no está conectado");
    }

    // Llamar al método de transferencia en el contrato
    await contract.methods.transfer(to, amount).send({ from: sender });
    console.log(`Transferencia de ${amount} tokens a ${to} realizada con éxito`);
  } catch (error: any) {
    console.error("Error al transferir tokens:", error.message);
    throw new Error("No se pudo completar la transferencia");
  }
};

export default contract;
