// License
// SPDX-License-Identifier: LGPL-3.0-only

import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

// Compiler version
pragma solidity 0.8.28;

contract MainContract is ERC20 {

 address public owner;

    // Constructor to initialize token
    constructor(string memory name,string memory symbol,uint256 initialSupply) ERC20(name, symbol) {
        owner = msg.sender; // Set the deployer as the owner
        _mint(msg.sender, initialSupply); // Mint the initial supply to the owner
    }

    // Function to mint new tokens (only the owner can do this)
    function mint(address to, uint256 amount) external {
        require(msg.sender == owner, "Only the owner can mint tokens");
        _mint(to, amount);
    }

    // Function to burn tokens
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }


}


