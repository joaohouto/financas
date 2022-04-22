import { DatabaseConnection } from "./connection";

var db = null;
export default class DatabaseInit {
  constructor() {
    db = DatabaseConnection.getConnection();

    this.initialize();
  }

  async initialize() {
    var sql = [
      `CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        balance REAL,
        name TEXT
      );
      `,
      `CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount REAL,
        category TEXT,
        description TEXT,
        datetime TIMESTAMP,
        account_id INTEGER,
        FOREIGN KEY(account_id) REFERENCES accounts(id)
      );`,
    ];

    db.transaction(
      (tx) => {
        for (var i = 0; i < sql.length; i++) {
          tx.executeSql(sql[i]);
        }
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log("✅ Database initialized!");

        this.setupDefaultAccount();
      }
    );
  }

  setupDefaultAccount() {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `SELECT * FROM accounts WHERE id = ?`,
          [1],
          (_, { rows }) => {
            const isThereAnAccount = rows._array.length > 0;

            if (!isThereAnAccount) {
              db.transaction(
                (tx) => {
                  tx.executeSql(
                    `INSERT INTO accounts (balance, name) VALUES (?, ?)`,
                    [0, "Principal"],
                    (_, { insertId, rows }) => {
                      console.log("✅ Default account created");
                    }
                  ),
                    (sqlError) => {
                      console.error(sqlError);
                    };
                },
                (txError) => {
                  console.error(txError);
                }
              );
            }
          }
        ),
          (sqlError) => {
            console.error(sqlError);
          };
      },
      (txError) => {
        console.error(txError);
      }
    );
  }
}
