// run this file with
// npx hardhat run scripts/run.js


// doc: https://hardhat.org/advanced/hardhat-runtime-environment.html
const main = async () => {
  // will compile "WavePortal" contract and create necessary files in artifact
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")

  // This will create a local network of Ethereum block chain.
  // Everytime it will new/fresh blockchain. which makes it easier to debug.
  const waveContract = await waveContractFactory.deploy();

  // Waiting for contract to be actually deployed, "constructors" would run when we actually deploy
  await waveContract.deployed();

  // Finally, once it's deployed waveContract.address will basically give us the address of the deployed contract.
  console.log("Contract deployed on: ", waveContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

runMain();
