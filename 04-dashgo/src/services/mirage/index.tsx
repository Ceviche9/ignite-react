import {createServer, Factory, Model} from "miragejs"
import faker from "faker"

type UserProps = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({

    models: {
      /* Partial => indica que aquela variável não precisa conter todos
        os campos da Props
      */
      user: Model.extend<Partial<UserProps>>({})
    },

    // Para gerar dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `ÙSer ${i + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      // O tempo que cada chamada irá durar
      this.timing = 750;

      // Para que retornar a lista  completa de usuários
      this.get('/users');
      // Para criar usuários
      this.post('/users');

      // Para não prejudicar as rotas de api do Next 
      this.namespace = '';
      // Para que todas as chamadas que forem para o endereço api passem pelo mirage e passem para a rota original.
      this.passthrough()
    }
  })

  return server
}