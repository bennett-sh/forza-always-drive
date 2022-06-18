
import ForzaServer from 'forza-horizon'
import { keyTap } from 'robotjs'
import { env } from 'process'
import 'dotenv/config'

const server = new ForzaServer(env.port)

function pauseIfNotPaused({PositionX, PositionY, PositionZ}) {
    // the position is reported as 0 if the user is in a menu
    if(![PositionX, PositionY, PositionZ].every(v => v == 0)) {
        keyTap('escape')
    }
}

server.on('data', data => {
    if(![data.VelocityX, data.VelocityY, data.VelocityZ].some(v => v > 0.1)) {
        pauseIfNotPaused(data)
    }
})

setTimeout(() => server.bind(), 1000*parseInt(env.INITIAL_DELAY ?? "5"))
