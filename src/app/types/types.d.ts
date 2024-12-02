export class User {
    id: number;
    name: string;
    email: string;
    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export class Field {
    id: number;
    name: string;
    type: string;
    price: number;
    constructor(id: number, name: string, type: string, price: number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

export class Reservation {
    id: number;
    fieldId: number;
    userId: number;
    startTime: Date;
    endTime: Date;
    status: 'pending' | 'confirmed' | 'cancelled';
    constructor(id: number, fieldId: number, userId: number, startTime: Date, endTime: Date, status: 'pending' | 'confirmed' | 'cancelled') {
        this.id = id;
        this.fieldId = fieldId;
        this.userId = userId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
    }
}

export class Establishment {
    id: number;
    name: string;
    fields: Field[];
    constructor(id: number, name: string, fields: Field[]) {
        this.id = id;
        this.name = name;
        this.fields = fields;
    }
}