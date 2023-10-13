import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const instance_perpustakaan = await ethers.deployContract("Perpustakaan");
  await instance_perpustakaan.waitForDeployment();
  const addressPerpustakaan = await instance_perpustakaan.getAddress();
  console.log(`Perpustakaan Contract: ${addressPerpustakaan}`);

  // Get the deployer's address
  const deployerAddress = await deployer.getAddress();
  console.log(`Deployer's Address: ${deployerAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});