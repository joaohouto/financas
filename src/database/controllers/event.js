import { DatabaseConnection } from "../connection";

const db = DatabaseConnection.getConnection();

export default class EventController {
  static create({ amount, datetime, category, description, account_id }) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO events (amount, datetime, category, description, account_id) VALUES (?, ?, ?, ?, ?)`,
            [amount, datetime, category, description, account_id],
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
          `DELETE FROM events WHERE id = ?;`,
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

  static updateById({
    id,
    amount,
    datetime,
    category,
    description,
    account_id,
  }) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `UPDATE events SET amount = ?, datetime = ?, category = ?, description = ?, account_id = ? where id = ?;`,
            [amount, datetime, category, description, account_id, id],
            () => {}
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
            `SELECT * FROM events WHERE id = ?`,
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
          tx.executeSql(`SELECT * FROM events`, [], (_, { rows }) => {
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

  static findLatest() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT * FROM events ORDER BY datetime DESC LIMIT 10`,
            [],
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

  static findByMonth(month) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT * FROM events WHERE strftime('%m', datetime) = ? ORDER BY datetime DESC`,
            [month],
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
}
