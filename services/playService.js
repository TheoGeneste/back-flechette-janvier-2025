const connection = require("../config/bdd.js");

const getAllPlays = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM play", (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

const getPlayById = (idPlayer, idGame) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM play WHERE id_players = ? AND id_games = ?", [idPlayer, idGame], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results[0]);
        }
        });
    });
}

const createPlay = (play) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO play SET ?", play, (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results.insertId);
        }
        });
    });
}

const updatePlay = (id, play) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE play SET ? WHERE id_players = ?", [play, id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

const deletePlay = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM play WHERE id_players = ?", [id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    updatePlay,
    deletePlay
}