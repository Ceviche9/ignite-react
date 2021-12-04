import {createServer, Factory, Model, Response, ActiveModelSerializer} from "miragejs"
import faker from "faker"

type UserProps = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    
    models: {
      /* Partial => indica que aquela variável não precisa conter todos
        os campos da Props
      */
      user: Model.extend<Partial<UserProps>>({})
    },

    // Para gerar dados em massa
    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName()
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(5);
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
      this.get('/users', function (schema, request) {
        const {page = 1, per_page = 8} = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

        return new Response(
          200,
          {'x-total-count': String(total)},
          {users}
        )

      });
      this.get('/users/:id');
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