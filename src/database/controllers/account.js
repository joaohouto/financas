import { DatabaseConnection } from "../connection";

const db = DatabaseConnection.getConnection();

export default class AccountController {
  static create({ balance, name }) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO accounts (balance, name) VALUES (?, ?)`,
            [balance, name],
            (_, { insertId, rows }) => {
              resolve(insertId);
            }
          ),
            (sqlError) => {
              console.error(sqlError);
            };
        },
        (txError) => {
          console.error(txError);
        }
      )
    );
  }

  static deleteById(id) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `DELETE FROM accounts WHERE id = ?;`,
          [id],
          (_, { rows }) => {}
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

  static updateById({ id, balance, name }) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `UPDATE accounts SET balance = ?, name = ? WHERE id = ?`,
            [balance, name, id],
            (_, { rows }) => {
              console.log(rows);
              resolve(rows);
            }
          ),
            (sqlError) => {
              console.error(sqlError);
            };
        },
        (txError) => {
          console.error(txError);
        }
      )
    );
  }

  static addEvent({ id, amount }) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `UPDATE accounts SET balance = balance + ? WHERE id = ?`,
            [amount, id],
            (txObj, resultSet) => {
              resolve(resultSet);
            }
          ),
            (sqlError) => {
              console.error(sqlError);
            };
        },
        (txError) => {
          console.error(txError);
        }
      )
    );
  }

  static findById(id) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT * FROM accounts WHERE id = ?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError) => {
              console.error(sqlError);
            };
        },
        (txError) => {
          console.error(txError);
        }
      )
    );
  }

  static findAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`SELECT * FROM accounts`, [], (_, { rows }) => {
            resolve(rows);
          }),
            (sqlError) => {
              console.error(sqlError);
            };
        },
        (txError) => {
          console.error(txError);
        }
      )
    );
  }
}
