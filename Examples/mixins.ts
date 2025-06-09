//tsc .\mixins.ts --target ES2016 --lib ES2016,DOM



//Mixins

//🧪 1. Validation Mixin


type Constructor<T = {}> = new (...args: any[]) => T;

function Validatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    validateEmail(email: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    validateNotEmpty(field: string): boolean {
      return field.trim().length > 0;
    }
  };
}

class BaseModel {}

class UserModel extends Validatable(BaseModel) {
  createUser(name: string, email: string) {
    if (!this.validateNotEmpty(name) || !this.validateEmail(email)) {
      throw new Error("Invalid input");
    }
    console.log("User created:", name, email);
  }
}

const user = new UserModel();
user.createUser("Tab", "john@example.com");



 //2. Role-Based Access Control (RBAC) Mixin


 function RoleCheck<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    hasRole(userRoles: string[], requiredRole: string): boolean {
      return userRoles.includes(requiredRole);
    }
  };
}

class ServiceBase {}

class AdminService extends RoleCheck(ServiceBase) {
  deleteUser(userId: string, userRoles: string[]) {
    if (!this.hasRole(userRoles, 'admin')) {
      throw new Error("Forbidden");
    }
    console.log(`User ${userId} deleted.`);
  }
}

const admin = new AdminService();
admin.deleteUser("123", ["admin", "editor"]);



//Cachable Mixin

function Cachable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private cache = new Map<string, any>();

    getFromCache(key: string) {
      return this.cache.get(key);
    }

    setCache(key: string, value: any) {
      this.cache.set(key, value);
    }
  };
}

class DataFetcher {}

class UserFetcher extends Cachable(DataFetcher) {
  async fetchUser(id: string) {
    const cached = this.getFromCache(id);
    if (cached) return cached;

    // Simulate API call
    const result = { id, name: "Alice" };
    this.setCache(id, result);
    return result;
  }
}

const fetcher = new UserFetcher();
fetcher.fetchUser("u123").then(console.log);



//Auditable Mixin


function Auditable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
    updatedAt = new Date();

    touch() {
      this.updatedAt = new Date();
    }
  };
}

class Entity {}

class Document1 extends Auditable(Entity) {
  updateContent() {
    this.touch();
    console.log("Document1 updated at:", this.updatedAt);
  }
}

const doc = new Document1();
doc.updateContent();



//EventEmitter Mixin (Node.js)

// import { EventEmitter } from 'events';

// function WithEvents<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     private emitter = new EventEmitter();

//     on(event: string, listener: (...args: any[]) => void) {
//       this.emitter.on(event, listener);
//     }

//     emit(event: string, ...args: any[]) {
//       this.emitter.emit(event, ...args);
//     }
//   };
// }

// class Processor {}

// class JobProcessor extends WithEvents(Processor) {
//   run() {
//     this.emit("start", "Job started");
//     // Simulate work
//     this.emit("complete", "Job finished");
//   }
// }

// const job = new JobProcessor();
// job.on("start", msg => console.log(msg));
// job.on("complete", msg => console.log(msg));
// job.run();


// Mixin Name	Use Case
// Validatable	Validate user input in services/models
// RoleCheck	Enforce role-based access control
// Cachable	Cache/memoize expensive operations
// Auditable	Track timestamps on changes
// WithEvents	Add event-emitting to service/logic classes