// Copyright 2024 justin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config"
import { TestCase } from "../test/shared/interfacesV2"
import { createTestCaseV2 } from "../test/shared/testFunctionsV2"
import verify from "../utils/verify"
const deployCRRRNGCoordinator: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const waitBlockConfirmations =
        chainId === 31337 || chainId === 5050 || chainId === 55004 || chainId === 111551115050
            ? 1
            : VERIFICATION_BLOCK_CONFIRMATIONS
    log("----------------------------------------------------")
    const testcases: TestCase = createTestCaseV2()
    const crrRngCoordinator = await deploy("CRRRNGCoordinator", {
        from: deployer,
        log: true,
        args: [testcases.setupProofs],
        waitConfirmations: waitBlockConfirmations,
    })
    // deploy result
    log("CRRRNGCoordinator deployed at:", crrRngCoordinator.address)
    if (chainId !== 31337 && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(crrRngCoordinator.address, [testcases.setupProofs])
    }
    log("----------------------------------------------------")
}
export default deployCRRRNGCoordinator
deployCRRRNGCoordinator.tags = ["all", "CRRRNGCoordinator"]
