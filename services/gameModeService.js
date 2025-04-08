const connection = require('../config/bdd.js');

const getAllGameModes = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM gamemode', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const getGameModeById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM gamemode WHERE id_gamemode = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

const createGameMode = (gameMode) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO gamemode SET ?', gameMode, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

const updateGameMode = (id, gameMode) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE gamemode SET ? WHERE id_gamemode = ?', [gameMode, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const deleteGameMode = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM gamemode WHERE id_gamemode = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getAllGameModes,
    getGameModeById,
    createGameMode,
    updateGameMode,
    deleteGameMode
}