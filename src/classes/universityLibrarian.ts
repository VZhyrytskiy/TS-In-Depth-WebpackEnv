import * as Interfaces from "../interfaces";
import {
  sealed,
  logger,
  writable,
  logMethod,
  logParameter,
  format
} from "../decorators";

// @sealed("UniversityLibrarian")
// @logger
export class UniversityLibrarian implements Interfaces.Librarian {
  @format("Mr.") name: string;
  email: string;
  department: string;

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assist ${custName}`);
  }
  // @writable(true)
  assistFaculty(): void {
    console.log(`Assisting faculty`);
  }
  // @writable(false)
  teachCommunity(): void {
    console.log(`Teaching community`);
  }
}
