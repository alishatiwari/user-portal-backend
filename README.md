## Description

It contains user management APIs.

## Modules

# Auth

- It includes user Registration & Login functionality.

# Profile

- It includes user profile management.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Environment variables

- Add following variables in `.env` file to run the app

SERVER_PORT=3000  
PG_HOST=localhost  
PG_PORT=5432  
PG_USER=postgres  
PG_PASSWORD=postgres  
PG_DATABASE=user-management  
JWT_SECRET=dfhkgkgkug  
JWT_EXPIRY=30d

# Api docs

- Navigate to `{serverurl}/swagger` to access api documentation.
