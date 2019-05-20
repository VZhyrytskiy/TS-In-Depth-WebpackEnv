import * as Interfaces from "../interfaces";
import { sealed, logger } from "../decorators";

@sealed("UniversityLibrarian")
@logger
export class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string): void {
    console.log(`${this.name} is assist ${custName}`);
  }
}
