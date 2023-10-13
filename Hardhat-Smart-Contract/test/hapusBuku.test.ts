import { ethers } from "hardhat";
import { expect } from "chai";
import { Perpustakaan } from "../typechain/Perpustakaan";

describe("Perpustakaan - hapusBuku", function () {
  let PerpustakaanContract: Perpustakaan;

  beforeEach(async function () {
    const [owner] = await ethers.getSigners();
    const PerpustakaanFactory = await ethers.getContractFactory("Perpustakaan");
    const perpustakaan = await PerpustakaanFactory.deploy();
    // await perpustakaan.deployed();
    PerpustakaanContract = perpustakaan as Perpustakaan;
  });

  it("Hapus buku", async function () {
    const [owner] = await ethers.getSigners();

    // Tambah buku
    const tambahBukuTx = await PerpustakaanContract.tambahBuku("Buku 1", 2021, "Pengarang 1");
    const tambahBukuReceipt = await tambahBukuTx.wait();
    const ISBN = tambahBukuReceipt.events?.[0].args?.ISBN;

    // Hapus buku
    const hapusBukuTx = await PerpustakaanContract.hapusBuku(ISBN);
    const hapusBukuReceipt = await hapusBukuTx.wait();
    const bukuDihapusEvent = hapusBukuReceipt.events?.[0];

    expect(bukuDihapusEvent?.event).to.equal("BukuDihapus");
    expect(bukuDihapusEvent?.args?.ISBN).to.equal(ISBN);
    expect(bukuDihapusEvent?.args?.judul).to.equal("Buku 1");
    expect(bukuDihapusEvent?.args?.tahun).to.equal(2021);
    expect(bukuDihapusEvent?.args?.pengarang).to.equal("Pengarang 1");
  });
});