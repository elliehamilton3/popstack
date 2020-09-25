# PopStack

The mononrepo for the popstack project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1. `git clone` the repo
2. Ensure you have the prerequisites installed (see below)
3. Run `npm install` from the root
4. Run `npm start` to start up all of the apps (see [docker-compose.yml](./docker-compose.yml) for ports)
    - NOTE: You may need to run the start and stop command in `sudo`. This is particularly true on Linux machines.
    - Alternatively, run `npm start -- -d` to run docker headless (in the background)
    - Run `npm stop` to stop the containers

### Prerequisites

You need to have these things installed:
- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/en/)

## Running the tests

- All tests are run using [Jest](https://jestjs.io/)

To run service and integration tests from the root or the front or api subrepositories use:

```
npm test
```

To run only unit tests:

```
npm run test:unit
```


To run only service tests:

```
npm run test:service
```

## CI/CD

- We use [GitHub Actions](https://github.com/features/actions) for CI:

## Deployment
- The UI and storybook apps are hosted with [Netlify](https://www.netlify.com/)
- The API is hosted with [Heroku](https://dashboard.heroku.com/)

### Links to live sites
- **UI:** 
- **Storybook:** 
- **API:** 

## Built With

* [NodeJS](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Hapi](https://hapi.dev/)
* [Storybook](https://storybook.js.org/)
* [WebPack](https://webpack.js.org/)
* [Jest](https://jestjs.io/en/)
* [MaterialUI](https://material-ui.com/)

## Versioning

We have no versioning in place at the moment.
