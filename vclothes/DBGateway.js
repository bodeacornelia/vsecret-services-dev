'use strict'

const sql = require('./db.js')

class DBGateway {
    constructor(table) {
        this.table = table;
    }

    create(data, callback) {
        sql.query(`INSERT INTO ${this.table} SET ?`, data, function (err, res) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                console.log(res);
                callback(null, res);
            }
        })
    }

    getAll(callback) {
        sql.query(`SELECT * FROM ${this.table}`, function (err, res) {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
            } else {
                console.log("users: ", res);
                callback(null, res);
            }
        });
    }

    getById(id, callback) {
        sql.query(`SELECT * FROM ${this.table} WHERE id=${id}`, function (err, res) {
            if (err) {
                console.log("error: ", err);
                callback(err, null);
            } else {
                console.log(res);
                callback(null, res);
            }
        })
    }

    getByEmailAddress(email, callback) {
        sql.query(`SELECT * FROM ${this.table} WHERE email='${email}'`, function (err, res) {
            if (err) {
                console.log("error: ", err);
                callback(err, null);
            } else {
                console.log(res);
                callback(null, res);
            }
        })
    }
}

module.exports = DBGateway;