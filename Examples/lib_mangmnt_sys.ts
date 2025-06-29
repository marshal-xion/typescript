console.log("LIBRARY MANAGEMENT SYSTEM")


/* Design a TypeScript program for a library management system. 
Define interfaces for Book and Library. Each Book should have an 
ISBN, title, author, and availability status. 
The Library should support adding a book, borrowing a book, 
returning a book, and listing available books. Use union types or 
discriminated unions to handle different book categories 
(e.g., Fiction, Non-Fiction).
 */


// Union type for Category
type PublicationCategory = 
  | { kind: "Fiction"; genre: string } 
  | { kind: "NonFiction"; subject: string };

// Interface for Publication (formerly Book)
interface Publication {
  code: string;
  name: string;
  writer: string;
  category: PublicationCategory;
  available: boolean;
}

// Interface for Archive (formerly Library)
interface Archive {
  addPublication(pub: Omit<Publication, "available">): Publication;
  borrowPublication(code: string): Publication | null;
  returnPublication(code: string): Publication | null;
  listAvailablePublications(): Publication[];
}

// Archive implementation (formerly LibraryImpl)
class ArchiveSystem implements Archive {
  private publications: Publication[] = [];

  addPublication(pub: Omit<Publication, "available">): Publication {
    const newPublication: Publication = { ...pub, available: true };
    this.publications.push(newPublication);
    return newPublication;
  }

  borrowPublication(code: string): Publication | null {
    const pub = this.publications.find((p) => p.code === code);
    if (!pub || !pub.available) return null;
    pub.available = false;
    return pub;
  }

  returnPublication(code: string): Publication | null {
    const pub = this.publications.find((p) => p.code === code);
    if (!pub || pub.available) return null;
    pub.available = true;
    return pub;
  }

  listAvailablePublications(): Publication[] {
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
