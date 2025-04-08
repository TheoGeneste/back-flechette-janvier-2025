const connection = require("../config/bdd.js");

const getAllGames = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT game.id_game, status, label, GROUP_CONCAT(pseudo) as players FROM game INNER JOIN gamemode ON gamemode.id_gamemode = game.id_gamemode LEFT JOIN play on play.id_game = game.id_game LEFT JOIN players ON players.id_players = play.id_players GROUP BY game.id_game;", (error, results) => {
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