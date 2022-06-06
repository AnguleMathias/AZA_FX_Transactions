# AZA_FX_Transactions

Microservice to store FX transactions

## Features

- Users can:

    1. Create a new transaction

    2. List all transactions in the system

    3. Get the specific transaction by ID

## Endpoints

| Method | Endpoint            | Functionality                      |
| ------ | ------------------- | ---------------------------------- |
| GET    | `/transactions`     | Get all transactions in the system |
| GET    | `/transactions/:id` | Gets a transaction by id           |
| POST   | `/transactions`     | Creates a new transaction          |

## Tools Used

- [Node Js](https://nodejs.org/en/) - a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Node.js web application framework

## Getting Started

- Clone the project into your local repository using this command:

  `git clone https://github.com/AnguleMathias/AZA_FX_Transactions.git`

- Change directory to the cloned folder using the following command for Windows, Linux and MacOS

  `cd AZA_FX_Transactions`

* Install the app dependencies.(for Windows, Linux and MacOS)

  `yarn install`

* Run the app(for Windows, Linux and MacOS)

  `yarn start`

## Running the tests

- Run the tests.

  `yarn test --coverage`

:wink:
