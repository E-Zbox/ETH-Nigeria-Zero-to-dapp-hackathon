import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deployer: ${deployer.address}`);

  // const afriKanvasContract = await ethers.deployContract("AfriKanvas");

  // await afriKanvasContract.waitForDeployment();

  console.log("Address AfriKanvas: ");
  // console.log(await afriKanvasContract.getAddress());

  const DEPLOYED_CONTRACT = "0xfdbb326e7b89f22a6e8e1a5fd16aa4bd0aec33ae";
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
