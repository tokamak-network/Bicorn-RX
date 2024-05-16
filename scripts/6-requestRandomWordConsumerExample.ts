// Copyright 2024 justin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { deployments, ethers, getNamedAccounts, network } from "hardhat"

async function requestRandomWordConsumerExample() {
    const chainId: number = network.config.chainId as number
    const { deployer } = await getNamedAccounts()
    const crrrngCoordinatorAddress = (await deployments.get("CRRNGCoordinator")).address
    console.log("CRRNGCoordinator address:", crrrngCoordinatorAddress)
    const crrngCoordinatorContract = await ethers.getContractAt(
        "CRRNGCoordinator",
        crrrngCoordinatorAddress,
    )
    const consumerExampleAddress = (await deployments.get("ConsumerExample")).address
    console.log("ConsumerExample address:", consumerExampleAddress)
    const consumerExampleContract = await ethers.getContractAt(
        "ConsumerExample",
        consumerExampleAddress,
    )
    const callback_gaslimit = 50000n
    const provider = ethers.provider
    const fee = await provider.getFeeData()
    const gasPrice = fee.gasPrice as bigint
    console.log("gasPrice", gasPrice.toString())
    const directFundingCost = await crrngCoordinatorContract.estimateDirectFundingPrice(
        callback_gaslimit,
        gasPrice,
    )

    try {
        const estimateGasUsed = await consumerExampleContract.requestRandomWord.estimateGas({
            value: (directFundingCost * (100n + 1n)) / 100n,
        })
        console.log("estimateGasUsed", estimateGasUsed)
        const tx = await consumerExampleContract.requestRandomWord({
            value: (directFundingCost * (100n + 1n)) / 100n,
            gasLimit: (estimateGasUsed * (100n + 20n)) / 100n,
        })
        console.log("directFundingCost", directFundingCost)
        const receipt = await tx.wait()
        const requestId = await consumerExampleContract.lastRequestId()
        console.log("Transaction receipt")
        console.log(receipt)
        console.log("Random word requested, roundId:", requestId.toString())
    } catch (e) {
        console.error(e)
    }
}

requestRandomWordConsumerExample()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
