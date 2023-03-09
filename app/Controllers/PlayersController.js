import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { setHTML } from "../Utils/Writer.js";
import { Player } from "../Models/Player.js";
import { getFormData } from "../Utils/FormHandler.js";

function _drawPlayer() {
    let players = appState.players
    let template = ''
    players.forEach(p => template += p.playerCard)

    setHTML('playerCard', template)
}

function _drawPlayerForm() {
    setHTML('playerForm', Player.playerForm())
}

export class PlayersController {
    constructor() {
        // console.log('hello from the player controller');
        _drawPlayer()
        _drawPlayerForm()

    }
    createPlayer() {
        window.event.preventDefault()
        let form = event.target
        let newPlayer = getFormData(form)
        // console.log(newPlayer)
        playersService.createPlayer(newPlayer)


    }
}