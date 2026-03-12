const { test, expect } = require('@playwright/test')
const Ajv = require("ajv")

const schema = require("../schemas/user.schema.json")
const testData = require("../data/userData.json")

const ajv = new Ajv()

test.describe("User API Automation", () => {

let userId

test("Create user", async ({ request }) => {

const response = await request.post("/users", {

data: {
name: "TestUser",
email: "test@test.com"
}

})

expect(response.status()).toBe(201)

const body = await response.json()

userId = body.id

const validate = ajv.compile(schema)

expect(validate(body)).toBe(true)

})

test("Get all users", async ({ request }) => {

const response = await request.get("/users")

expect(response.status()).toBe(200)

})

test("Get user by ID", async ({ request }) => {

const response = await request.get(`/users/${userId}`)

expect(response.status()).toBe(200)

})

test("Update user", async ({ request }) => {

const response = await request.put(`/users/${userId}`, {

data: {
name: "UpdatedUser"
}

})

expect(response.status()).toBe(200)

})

test("Delete user", async ({ request }) => {

const response = await request.delete(`/users/${userId}`)

expect(response.status()).toBe(200)

})

testData.forEach((user) => {

test(`Create user ${user.name}`, async ({ request }) => {

const res = await request.post("/users", {
data: user
})

expect(res.status()).toBe(201)

})

})
})