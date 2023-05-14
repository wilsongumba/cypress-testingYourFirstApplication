// generateSeedUsers.js
/// <reference types="cypress" />

import path from "path"
import * as fs from 'fs';
import shortid from "shortid"
import {faker} from "@faker-js/faker"
import bcrypt from "bcryptjs"
import { times } from "lodash"

const passwordHash = bcrypt.hashSync("s3cret", 10)

const createFakeUser = () => ({
  id: shortid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  username: faker.internet.userName(),
  password: passwordHash,
  email: faker.internet.email(),
  createdAt: faker.date.past(),
  modifiedAt: faker.date.recent(),
})

export const createSeedUsers = (numberOfUsers) =>
  times(numberOfUsers, () => createFakeUser())

export const saveUsersSeed = (numberOfUsers) => {
  const seedUsers = createSeedUsers(numberOfUsers)
  // write seed users to seedUsers.json
  fs.writeFile(path.join(process.cwd(), "seedUsers.json"), JSON.stringify(seedUsers), (err) => {
    if (err) throw err;
    console.log("Seed users saved to file.");
  });
}
