// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;
import "hardhat/console.sol";

contract UnpackOnApproveData {
    function decodeOnApporveData(bytes memory _data) public pure returns (uint32, bytes memory) {
        return abi.decode(_data, (uint32, bytes));
    }

    function unpackOnApproveData(
        bytes memory _data
    ) public pure returns (uint32 _minGasLimit, bytes memory _message) {
        console.log(_data.length);
        if (_data.length < 4) {
            _minGasLimit = 200_000;
            _message = bytes("");
        } else {
            assembly {
                // The layout of a "bytes memory" is:
                // The first 32 bytes: length of a "bytes memory"
                // The next 4 bytes: _minGasLimit
                // The rest: _message

                let _pos := _data
                // Get _data.length
                let _length := mload(_pos)
                // Pass first 32 bytes. Now the pointer "pos" is pointing to _minGasLimit
                _pos := add(_pos, 32)
                // Load value from the next 4 bytes
                // mload() works with 32 bytes so we need shift right 32-4=28(bytes) = 224(bits)
                //_minGasLimit := shr(224, mload(_pos))
                _minGasLimit := mload(_pos)
                if iszero(eq(_length, 4)) {
                    // Pass 4 bytes to get embedded _message
                    _message := add(_pos, 64)
                }
            }
        }
    }
}
