Class Player {
    constructor(player) {
        firstName: i.firstName,
        lastName: i.lastName,
        position: i.pos, 
        jersey: i.jersey
        picture: `https://nba-players.herokuapp.com/players/{{lastName}}/{{firstName}}`
        // `https://nba-players.herokuapp.com/players/$(this.lastName)/$(this.lastName)`
    }

    getPicture(){
        this.picture = 
    }

    draft (team) {
        team.roster.push(this)
    }

    getStats (){

    }
}