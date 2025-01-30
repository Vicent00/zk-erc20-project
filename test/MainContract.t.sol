// License
// SPDX-License-Identifier: LGPL-3.0-only

pragma solidity 0.8.28;

import "../lib/forge-std/src/Test.sol";
import "../src/MainContract.sol";

contract MainContractTest is Test {
    MainContract private token;
    address private owner;
    address private user1;
    
    function setUp() public {
        owner = address(this);
        user1 = address(1);
        token = new MainContract("TestToken", "TTK", 1000 ether);
    }

    function testInitialSupply() public view {
        assertEq(token.balanceOf(owner), 1000 ether);
    }

    function testMint() public {
        token.mint(user1, 500 ether);
        assertEq(token.balanceOf(user1), 500 ether);
    }

    function testBurn() public {
        token.burn(200 ether);
        assertEq(token.balanceOf(owner), 800 ether);
    }

    function testTransfer() public {
        token.transfer(user1, 100 ether);
        assertEq(token.balanceOf(user1), 100 ether);
    }
}


