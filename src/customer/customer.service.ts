import { Injectable } from '@nestjs/common';
import { CreateCustomerInterface } from './interface/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: CreateCustomerInterface[] = []


    getAllCustomer(): CreateCustomerInterface[] {
        return this.customers;
    }

    addCustomer(createCustomerDto: CreateCustomerDto):
        CreateCustomerInterface {
        const newCustomer: CreateCustomerInterface = {
            id: Date.now(),
            ...createCustomerDto
        }

        this.customers.push(newCustomer)
        return newCustomer
    }


}
