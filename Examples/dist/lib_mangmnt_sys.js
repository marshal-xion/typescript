"use strict";
console.log("LIBRARY MANAGEMENT SYSTEM");
// Archive implementation (formerly LibraryImpl)
class ArchiveSystem {
    publications = [];
    addPublication(pub) {
        const newPublication = { ...pub, available: true };
        this.publications.push(newPublication);
        return newPublication;
    }
    borrowPublication(code) {
        const pub = this.publications.find((p) => p.code === code);
        if (!pub || !pub.available)
            return null;
        pub.available = false;
        return pub;
    }
    returnPublication(code) {
        const pub = this.publications.find((p) => p.code === code);
        if (!pub || pub.available)
            return null;
        pub.available = true;
        return pub;
    }
    listAvailablePublications() {
        return this.publications.filter((p) => p.available);
    }
}
// Example usage
const archive = new ArchiveSystem();
// Adding publications
const pub1 = archive.addPublication({
    code: "12345",
    name: "The Great Gatsby",
    writer: "F. Scott Fitzgerald",
    category: { kind: "Fiction", genre: "Classic" },
});
const pub2 = archive.addPublication({
    code: "67890",
    name: "Sapiens",
    writer: "Yuval Noah Harari",
    category: { kind: "NonFiction", subject: "History" },
});
console.log("Available publications:", archive.listAvailablePublications());
// Borrowing a publication
const borrowedPub = archive.borrowPublication("12345");
console.log("Borrowed publication:", borrowedPub);
console.log("Available publications after borrowing:", archive.listAvailablePublications());
// Returning a publication
archive.returnPublication("12345");
console.log("Available publications after return:", archive.listAvailablePublications());
// Attempting to borrow a non-existent publication
console.log("Borrow non-existent publication:", archive.borrowPublication("99999"));
