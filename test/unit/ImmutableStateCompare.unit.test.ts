import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers"
import { time } from "@nomicfoundation/hardhat-network-helpers"
import { BigNumberish } from "ethers"
import { ethers, getNamedAccounts, network } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { assertTestAfterDeploy, assertTestAfterGettingOmega } from "../shared/assertFunctions"
import { CommitParams, RevealParams, SetUpParams, TestCase } from "../shared/interfaces"
import {
    commit,
    deployCImmutableStateCompare,
    reveal,
    setUpCommitRevealRecoverRNGRound,
} from "../shared/testFunctions"
import { createTestCases2MinuteLength } from "../shared/testFunctionsV2"
//const { time } = require("@nomicfoundation/hardhat-network-helpers")}

//const { time } = require("@nomicfoundation/hardhat-network-helpers")}
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Immutable State Compare Test", () => {
          const testcases: TestCase[] = createTestCases2MinuteLength()
          const chainId = network.config.chainId
          let deployer: SignerWithAddress
          let commitDuration = networkConfig[chainId!].commitDuration
          let commitRevealDuration = networkConfig[chainId!].commitRevealDuration
          let _n: BigNumberish
          before(async () => {
              deployer = await ethers.getSigner((await getNamedAccounts()).deployer)
              console.log(
                  "\n   ___  _                       ___  _  __  ___       _____ \n \
  / _ )(_)______  _______  ____/ _ | |/_/ / _ ___  / ___/ \n \
  / _  / / __/ _ / __/ _ /___/ , _/>  <  / ___/ _ / /__  \n \
  /____/_/__/___/_/ /_//_/   /_/|_/_/|_| /_/   ___/___/  \n",
              )
          })
          describe("deploy contract and check", () => {
              it("try deploy several times and should pass", async () => {
                  for (let i = 0; i < testcases.length; i++) {
                      const { CommitRevealRecoverRNGContract, receipt } =
                          await deployCImmutableStateCompare()
                      await assertTestAfterDeploy(CommitRevealRecoverRNGContract)
                  }
              })
          })
          describe("setUp", () => {
              it("setUp for every testcase should pass, multiple rounds", async () => {
                  for (let round = 0; round < testcases.length; round++) {
                      let { CommitRevealRecoverRNGContract, receipt } =
                          await deployCImmutableStateCompare()
                      let params: SetUpParams = {
                          commitDuration,
                          commitRevealDuration,
                          T: testcases[round].T,
                          n: testcases[round].n,
                          setupProofs: testcases[round].setupProofs,
                      }
                      let setUpReceipt = await setUpCommitRevealRecoverRNGRound(
                          CommitRevealRecoverRNGContract,
                          params,
                      )
                  }
              })
          })
          let signers: SignerWithAddress[]
          describe("commit", () => {
              it("commit for every testcase should pass, multiple rounds", async () => {
                  let { CommitRevealRecoverRNGContract, receipt } =
                      await deployCImmutableStateCompare()
                  for (let round = 0; round < testcases.length; round++) {
                      let params: SetUpParams = {
                          commitDuration,
                          commitRevealDuration,
                          T: testcases[round].T,
                          n: testcases[round].n,

                          setupProofs: testcases[round].setupProofs,
                      }
                      let setUpReceipt = await setUpCommitRevealRecoverRNGRound(
                          CommitRevealRecoverRNGContract,
                          params,
                      )
                      signers = await ethers.getSigners()
                      for (let j = 0; j < testcases[round].commitList.length; j++) {
                          let commitParams: CommitParams = {
                              round: round,
                              commit: testcases[round].commitList[j],
                          }
                          await commit(CommitRevealRecoverRNGContract, signers[j], commitParams)
                      }
                  }
              })
          })
          describe("reveal", () => {
              it("reveal for every testcase should pass, multiple rounds", async () => {
                  let { CommitRevealRecoverRNGContract, receipt } =
                      await deployCImmutableStateCompare()
                  for (let round = 0; round < testcases.length; round++) {
                      let params: SetUpParams = {
                          commitDuration,
                          commitRevealDuration,
                          T: testcases[round].T,
                          n: testcases[round].n,
                          setupProofs: testcases[round].setupProofs,
                      }
                      let setUpReceipt = await setUpCommitRevealRecoverRNGRound(
                          CommitRevealRecoverRNGContract,
                          params,
                      )
                      signers = await ethers.getSigners()
                      for (let j = 0; j < testcases[round].commitList.length; j++) {
                          let commitParams: CommitParams = {
                              round: round,
                              commit: testcases[round].commitList[j],
                          }
                          await commit(CommitRevealRecoverRNGContract, signers[j], commitParams)
                      }
                      await time.increase(commitDuration)
                      for (let j = 0; j < testcases[round].randomList.length; j++) {
                          let revealParams: RevealParams = {
                              round: round,
                              reveal: testcases[round].randomList[j],
                          }
                          await reveal(CommitRevealRecoverRNGContract, signers[j], revealParams)
                      }
                  }
              })
          })
          describe("calculate Omega", () => {
              it("All Revealed, Calculated Omega should be correct for every testcase, multiple rounds", async () => {
                  let { CommitRevealRecoverRNGContract, receipt } =
                      await deployCImmutableStateCompare()
                  for (let round = 0; round < testcases.length; round++) {
                      let params: SetUpParams = {
                          commitDuration,
                          commitRevealDuration,
                          T: testcases[round].T,
                          n: testcases[round].n,
                          setupProofs: testcases[round].setupProofs,
                      }
                      let setUpReceipt = await setUpCommitRevealRecoverRNGRound(
                          CommitRevealRecoverRNGContract,
                          params,
                      )
                      signers = await ethers.getSigners()
                      for (let j = 0; j < testcases[round].commitList.length; j++) {
                          let commitParams: CommitParams = {
                              round: round,
                              commit: testcases[round].commitList[j],
                          }
                          await commit(CommitRevealRecoverRNGContract, signers[j], commitParams)
                      }
                      await time.increase(commitDuration)
                      for (let j = 0; j < testcases[round].randomList.length; j++) {
                          let revealParams: RevealParams = {
                              round: round,
                              reveal: testcases[round].randomList[j],
                          }
                          await reveal(CommitRevealRecoverRNGContract, signers[j], revealParams)
                      }
                      const tx = await CommitRevealRecoverRNGContract.calculateOmega(round)
                      const receipt = await tx.wait()
                      const omega = (await CommitRevealRecoverRNGContract.getValuesAtRound(round))
                          .omega
                      assertTestAfterGettingOmega(
                          omega,
                          testcases[round].omega,
                          testcases[round].recoveredOmega,
                      )
                  }
              })
          })
          describe("recoverState", () => {
              it("Recovered Omega should be correct for every testcase, multiple rounds", async () => {
                  let { CommitRevealRecoverRNGContract, receipt } =
                      await deployCImmutableStateCompare()
                  for (let round = 0; round < testcases.length; round++) {
                      let params: SetUpParams = {
                          commitDuration,
                          commitRevealDuration,
                          T: testcases[round].T,
                          n: testcases[round].n,
                          setupProofs: testcases[round].setupProofs,
                      }
                      let setUpReceipt = await setUpCommitRevealRecoverRNGRound(
                          CommitRevealRecoverRNGContract,
                          params,
                      )
                      signers = await ethers.getSigners()
                      for (let j = 0; j < testcases[round].commitList.length; j++) {
                          let commitParams: CommitParams = {
                              round: round,
                              commit: testcases[round].commitList[j],
                          }
                          await commit(CommitRevealRecoverRNGContract, signers[j], commitParams)
                      }
                      await time.increase(commitDuration)
                      const tx = await CommitRevealRecoverRNGContract.recover(
                          round,
                          testcases[round].recoveryProofs,
                      )
                      const receipt = await tx.wait()
                      const omega = (await CommitRevealRecoverRNGContract.getValuesAtRound(round))
                          .omega
                      assertTestAfterGettingOmega(
                          omega,
                          testcases[round].omega,
                          testcases[round].recoveredOmega,
                      )
                  }
              })
          })
          describe("recoverImmutable", () => {
              it("Recovered Omega should be correct for every testcase, multiple rounds", async () => {
                  let { CommitRevealRecoverRNGContract, receipt } =
                      await deployCImmutableStateCompare()
                  for (let round = 0; round < testcases.length; round++) {
                      let params: SetUpParams = {
                          commitDuration,
                          commitRevealDuration,
                          T: testcases[round].T,
                          n: testcases[round].n,
                          setupProofs: testcases[round].setupProofs,
                      }
                      let setUpReceipt = await setUpCommitRevealRecoverRNGRound(
                          CommitRevealRecoverRNGContract,
                          params,
                      )
                      signers = await ethers.getSigners()
                      for (let j = 0; j < testcases[round].commitList.length; j++) {
                          let commitParams: CommitParams = {
                              round: round,
                              commit: testcases[round].commitList[j],
                          }
                          await commit(CommitRevealRecoverRNGContract, signers[j], commitParams)
                      }
                      await time.increase(commitDuration)
                      const tx = await CommitRevealRecoverRNGContract.recoverImmutable(
                          round,
                          testcases[round].recoveryProofs,
                      )
                      const receipt = await tx.wait()
                      const omega = (await CommitRevealRecoverRNGContract.getValuesAtRound(round))
                          .omega
                      assertTestAfterGettingOmega(
                          omega,
                          testcases[round].omega,
                          testcases[round].recoveredOmega,
                      )
                  }
              })
          })
          describe("recoverImmutable2", () => {
              it("Recovered Omega should be correct for every testcase, multiple rounds", async () => {
                  let { CommitRevealRecoverRNGContract, receipt } =
                      await deployCImmutableStateCompare()
                  for (let round = 0; round < testcases.length; round++) {
                      let params: SetUpParams = {
                          commitDuration,
                          commitRevealDuration,
                          T: testcases[round].T,
                          n: testcases[round].n,
                          setupProofs: testcases[round].setupProofs,
                      }
                      let setUpReceipt = await setUpCommitRevealRecoverRNGRound(
                          CommitRevealRecoverRNGContract,
                          params,
                      )
                      signers = await ethers.getSigners()
                      for (let j = 0; j < testcases[round].commitList.length; j++) {
                          let commitParams: CommitParams = {
                              round: round,
                              commit: testcases[round].commitList[j],
                          }
                          await commit(CommitRevealRecoverRNGContract, signers[j], commitParams)
                      }
                      await time.increase(commitDuration)
                      const tx = await CommitRevealRecoverRNGContract.recoverImmutable2(
                          round,
                          testcases[round].recoveryProofs,
                      )
                      const receipt = await tx.wait()
                      const omega = (await CommitRevealRecoverRNGContract.getValuesAtRound(round))
                          .omega
                      assertTestAfterGettingOmega(
                          omega,
                          testcases[round].omega,
                          testcases[round].recoveredOmega,
                      )
                  }
              })
          })
      })
