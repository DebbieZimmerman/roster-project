const express = require('express')
const urllib = require('urllib')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get('/nba/:team', function (request, response) {
    const teamName = request.params.team
    const teamNum = teamToIDs[teamName]
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data) {
        let nba = JSON.parse(data.toString()).league.standard
        let teamRoster = nba.filter(element => element.teamId === teamNum && element.isActive )
                            .map(i => { return { 
                                name: (`${i.firstName + ' ' + i.lastName}`),
                                firstName: i.firstName,
                                lastName: i.lastName,
                                position: i.pos, 
                                jersey: i.jersey
                            }
                        })
        response.send(teamRoster)
    })
})

const port = 3000
app.listen(port, function () {
    console.log(`server is up and running at port ${port}`)
})
