// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import {IDRBCoordinator} from "./interfaces/IDRBCoordinator.sol";

/**
 * @notice Interface for contracts using VRF randomness
 * @dev USAGE
 *
 * @dev Consumer contracts must inherit from VRFConsumerBase, and can
 * @dev initialize Coordinator address in their constructor as
 */
abstract contract DRBConsumerBase {
    error OnlyCoordinatorCanFulfill(address have, address want);

    /// @dev The RNGCoordinator contract
    IDRBCoordinator internal immutable i_drbCoordinator;

    /**
     * @param rngCoordinator The address of the RNGCoordinator contract
     */
    constructor(address rngCoordinator) {
        i_drbCoordinator = IDRBCoordinator(rngCoordinator);
    }

    /**
     * @return requestId The ID of the request
     * @dev Request Randomness to the Coordinator
     */
    function requestRandomness(
        uint16 security,
        uint16 mode,
        uint32 callbackGasLimit
    ) internal returns (uint256) {
        uint256 requestId = i_drbCoordinator.requestRandomWordDirectFunding{
            value: msg.value
        }(
            IDRBCoordinator.RandomWordsRequest({
                security: security,
                mode: mode,
                callbackGasLimit: callbackGasLimit
            })
        );
        return requestId;
    }

    /**
     * @param round The round of the randomness
     * @param hashedOmegaVal The hashed value of the random number
     * @dev Callback function for the Coordinator to call after the request is fulfilled.  Override this function in your contract
     */
    function fulfillRandomWords(
        uint256 round,
        uint256 hashedOmegaVal
    ) internal virtual;

    /**
     * @param requestId The round of the randomness
     * @param randomWord The random number
     * @dev Callback function for the Coordinator to call after the request is fulfilled. This function is called by the Coordinator
     */
    function rawFulfillRandomWords(
        uint256 requestId,
        uint256 randomWord
    ) external {
        if (msg.sender != address(i_drbCoordinator)) {
            revert OnlyCoordinatorCanFulfill(
                msg.sender,
                address(i_drbCoordinator)
            );
        }
        fulfillRandomWords(requestId, randomWord);
    }
}
