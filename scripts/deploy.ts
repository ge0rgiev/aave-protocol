import { ethers } from "hardhat";
import { constants } from "../utils";

async function main() {
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const { ERC20 } = constants;
  const AaveDemo = await ethers.getContractFactory("AaveDemo");
  const aaveDemo = await AaveDemo.deploy(ERC20.DAI as string);

  await aaveDemo.deployed();

  console.log("AaveDemo deployed to:", aaveDemo.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
