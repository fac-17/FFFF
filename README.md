# :seedling: [Food Miles](https://foodmiles.herokuapp.com/) :seedling:
As a user, I need an easy way to find out how local my shopping list is by comparing supermarkets and where they source their food from.

![](https://media.giphy.com/media/yaxcIHO5OgP4Y/giphy.gif)

[![Build Status](https://travis-ci.com/fac-17/FFFF.svg?branch=master)](https://travis-ci.com/fac-17/FFFF)
[![codecov](https://codecov.io/gh/fac-17/FFFF/branch/master/graph/badge.svg)](https://codecov.io/gh/fac-17/FFFF)

## Tech Stack
1. NodeJS + ExpressJS
2. PostgreSQL
3. HandlebarsJS
4. SASS
5. Testing with tape, tap-spec and supertest
6. CI with Travis CI
7. Deployment on Heroku

## Getting Started

### Installing

A step by step series of examples that tell you how to get a development env running

```
npm install
```
Create a .env file and paste your database links there:
```
TEST_DATABASE_URL=yourPostgreSQLTestingLink
DATABASE_URL=yourPostgreSQLLink
```
```
npm run db_init
npm run lint
npm test
npm run watch
```
## Screenshots & Audits
![](https://i.imgur.com/LrD7pCn.png)
![](https://i.imgur.com/ltjhniA.png)

## Authors

- [Andy](https://github.com/andy-mc-donald)
- [Gigi](https://github.com/gminova)
- [Jack](https://github.com/jackbridger)
- [Jan](https://github.com/crianonim)

