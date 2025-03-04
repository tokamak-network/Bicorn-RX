// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TonTokenForTitan is ERC20 {
    constructor() ERC20("Tokamak Network Token", "TON") {
        _mint(msg.sender, 1000000000000000000000000000);
    }
}
