import * as Interfaces from "../interfaces";
import { sealed, logger, writable } from "../decorators";

@sealed("UniversityLibrarian")
@logger
export class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string): void {
    console.log(`${this.name} is assist ${custName}`);
  }
  @writable(true)
  assistFaculty(): void {
    console.log(`Assisting faculty`);
  }
  @writable(false)
  teachCommunity(): void {
    console.log(`Teaching community`);
  }
}
