const connection = require("../config/bdd");

const getAllPlayers = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM players", (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
    }

const getPlayerById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM players WHERE id_players = ?", [id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results[0]);
        }
        });
    });
}

const createPlayer = (player) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO players SET ?", player, (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results.insertId);
        }
        });
    });
}

const updatePlayer = (id, player) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE players SET ? WHERE id_players = ?", [player, id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

const deletePlayer = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM players WHERE id_players = ?", [id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
}

module.exports = {
    getAllPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer,
};
