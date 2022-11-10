export class Database {
  static database: Database;

  private constructor(private host: string, private user: string, private password: string) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Já existe uma instância à base de dados criada.');
      return Database.database;
    }
    Database.database = new Database(host, user, password);
    console.log('Nova instância à base de dados criada.');
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '1234');
db1.connect();

const db2 = Database.getDatabase('localhost1', 'root1', '12345');
db2.connect();

console.log(db1 === db2);
