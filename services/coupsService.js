const connection = require('../config/bdd');

const getAllCoups = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM coups', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const getCoupsById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM coups WHERE id_coups = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

const createCoups = (coup) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO coups SET ?', coup, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

const updateCoups = (id, coup) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE coups SET ? WHERE id_coups = ?', [coup, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const deleteCoups = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM coups WHERE id_coups = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getAllCoups,
    getCoupsById,
    createCoups,
    updateCoups,
    deleteCoups
}
