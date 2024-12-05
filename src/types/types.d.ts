export class Usuario {
    id: number;
    nome: string;
    email: string;
    tipo: 'admin' | 'user';
    endereco: string;
    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export class Campo {
    id: number;
    nome: string;
    tipo: string;
    valor: number;
    tamanho: string;
    rented: boolean;
    selectedTime: string;
    
    constructor(id: number, nome: string, tipo: string, valor: number, tamanho: string) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.valor = valor;
        this.tamanho = tamanho;
    }
}

export class Reserva {
    id: number;
    data: Date;
    usuario: Usuario;
    horarioInicio: Date;
    horarioFim: Date;
    status: 'pendente' | 'confirmada' | 'cancelada';
    campo: Campo;
}

export class Endereco {
    id: number;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    cep: string;

    constructor(id: number, rua: string, numero: string, bairro: string, cidade: string, estado: string, cep: string) {
        this.id = id;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
    }
}

export class Estabelecimento {
    id: number;
    nome: string;
    descricao: string;
    telefone: string;
    endereco: Endereco;
    campos: Campo[];

    constructor(id: number, name: string, endereco: Endereco, campos: Campo[]) {
        this.id = id;
        this.name = name;
        this.endereco = endereco;
        this.campos = campos;
    }
}