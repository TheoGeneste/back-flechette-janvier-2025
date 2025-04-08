const connection = require("../config/bdd.js");

const getAllGames = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM game", (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

const getGameById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM game WHERE id_game = ?", [id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results[0]);
        }
        });
    });
}

const createGame = (game) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO game SET ?", game, (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results.insertId);
        }
        });
    });
}

const updateGame = (id, game) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE game SET ? WHERE id_game = ?", [game, id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

const deleteGame = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM game WHERE id_game = ?", [id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
}