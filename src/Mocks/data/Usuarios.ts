export interface User {
  id: number;
  nome: string;
  email: string;
  password: string;
  funcao: string;
}

export const Users: User[] = [
  {
    "id": 1,
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "password": "123456",
    "funcao": "Desenvolvedor Front-End"
  },
  {
    "id": 2,
    "nome": "Maria Oliveira",
    "email": "maria.oliveira@example.com",
    "password": "senhaSegura",
    "funcao": "Desenvolvedora Back-End"
  },
  {
    "id": 3,
    "nome": "Carlos Pereira",
    "email": "carlos.pereira@example.com",
    "password": "abc123",
    "funcao": "Engenheiro de Dados"
  }
]