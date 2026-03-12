const { test, expect } = require('@playwright/test')
const io = require("socket.io-client")

test("Validate userCreated event", async () => {

const socket = io("http://localhost:3000")

let eventReceived = false

socket.on("userCreated", (data) => {

eventReceived = true

})

await new Promise(r => setTimeout(r, 3000))

expect(eventReceived).toBeTruthy()

socket.close()

})