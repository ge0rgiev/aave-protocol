import { expect } from "chai";
import { ethers } from "hardhat";
import { constants } from "../utils";
import { AaveDemo } from "../typechain";

describe("AaveDemo", function () {
  it("Should initialize the AaveDemo contract", async function () {
    const { ERC20 } = constants;

    const AaveDemo = await ethers.getContractFactory("AaveDemo");
    const aaveDemo: AaveDemo = await AaveDemo.deploy(ERC20.DAI as string);
    await aaveDemo.deployed();

    expect((await aaveDemo.collateral()).toLocaleLowerCase()).to.equal(
      ERC20.DAI?.toLowerCase()
    );
  });
});
