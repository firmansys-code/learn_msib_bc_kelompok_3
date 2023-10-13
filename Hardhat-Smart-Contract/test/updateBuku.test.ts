import { ethers } from "hardhat";
import { expect } from "chai";
import { Perpustakaan } from "../typechain/Perpustakaan";

describe("Perpustakaan - updateBuku", function () {
  let PerpustakaanContract: Perpustakaan;

  beforeEach(async function () {
    const [owner] = await ethers.getSigners();
    const PerpustakaanFactory = await ethers.getContractFactory("Perpustakaan");
    const perpustakaan = await PerpustakaanFactory.deploy();
    // await perpustakaan.deployed();
    PerpustakaanContract = perpustakaan as Perpustakaan;
  });

  it("Update buku", async function () {
    const [owner] = await ethers.getSigners();

    // Tambah buku
    const tambahBukuTx = await PerpustakaanContract.tambahBuku("Buku 1", 2021, "Pengarang 1");
    const tambahBukuReceipt = await tambahBukuTx.wait();
    const ISBN = tambahBukuReceipt.events?.[0].args?.ISBN;

    // Update buku
    const updateBukuTx = await PerpustakaanContract.updateBuku(ISBN, "Buku 1 - Edisi 2", 2022, "Pengarang 2");
    const updateBukuReceipt = await updateBukuTx.wait();
    const bukuDiperbaruiEvent = updateBukuReceipt.events?.[0];

    expect(bukuDiperbaruiEvent?.event).to.equal("BukuDiperbarui");
    expect(bukuDiperbaruiEvent?.args?.ISBN).to.equal(ISBN);
    expect(bukuDiperbaruiEvent?.args?.judul).to.equal("Buku 1 - Edisi 2");
    expect(bukuDiperbaruiEvent?.args?.tahun).to.equal(2022);
    expect(bukuDiperbaruiEvent?.args?.pengarang).to.equal("Pengarang 2");
  });
});