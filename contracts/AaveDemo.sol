//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract AaveDemo {
    address public collateral;

    constructor(address _collateral) {
        collateral = _collateral;
    }
}
