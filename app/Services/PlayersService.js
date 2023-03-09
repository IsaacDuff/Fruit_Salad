import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js";



class PlayersService {

    createPlayer(newPlayerData) {
        console.log(newPlayerData);
        let newPlayer = new Player(newPlayerData)
        appState.players.push(newPlayer)
        // console.log(appState.players);
    }
}


export const playersService = new PlayersService()