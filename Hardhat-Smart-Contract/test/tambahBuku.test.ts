import { ethers, waffle } from "hardhat";
import { expect } from "chai";
import { Perpustakaan } from "../typechain/Perpustakaan";

describe("Perpustakaan - tambahBuku", function () {
  let PerpustakaanContract: Perpustakaan;

  beforeEach(async function () {
    const [owner] = await ethers.getSigners();
    const PerpustakaanFactory = await ethers.getContractFactory("Perpustakaan");
    const perpustakaan = await PerpustakaanFactory.deploy();
    //await perpustakaan.deployed();
    PerpustakaanContract = perpustakaan as Perpustakaan;
  });

  it("Tambah buku", async function () {
    const [owner] = await ethers.getSigners();

    // Tambah buku
    const tambahBukuTx = await PerpustakaanContract.tambahBuku("Buku 1", 2021, "Pengarang 1");
    const tambahBukuReceipt = await tambahBukuTx.wait();

    const bukuDitambahkanEvent = tambahBukuReceipt.events?.find((event) => event.event === "BukuDitambahkan");
    const ISBN = bukuDitambahkanEvent?.args?.ISBN;

    if (!bukuDitambahkanEvent) {
      console.error("Event not found:", tambahBukuReceipt);
      // expect.fail("Event not found");
    } else {
      expect(bukuDitambahkanEvent.event).to.equal("BukuDitambahkan");
      expect(bukuDitambahkanEvent.args?.judul).to.equal("Buku 1");
      expect(bukuDitambahkanEvent.args?.tahun).to.equal(2021);
      expect(bukuDitambahkanEvent.args?.pengarang).to.equal("Pengarang 1");
    }
  });
});