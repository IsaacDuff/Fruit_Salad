import { generateId } from "../Utils/generateId.js";



export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = data.score
    }


    get playerCard() {
        return `

    <div class="col-6">
    <p>Player: ${this.name}</p>
    </div>
    <div class="col-6">
    <p>Score: ${this.score}</p>
    </div>
    `
    }

    static playerForm() {
        return `
        <form class="col-4" onsubmit="app.playersController.createPlayer()" action="">
        <label for="name">Enter New Contestant</label>
        <input type="text" class="elevation-2" name="name" id="name" placeholder="Player Name">
    </form>
        `
    }

}