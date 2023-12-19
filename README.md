# Pop

Welcome to Pop, a simple and fun game where the objective is to pop randomly generated numbers or letters in ascending order.

## Getting Started

Follow the instructions below to set up the client and server for the Pop game.

### Setting Up Your Environment

1. Navigate to the `server` directory, install dependencies, run the server.

   ```bash
   cd path/to/Slickdeals-TakeHomeChallenge/server
   npm install
   npm run dev
   ```

2. Open a new terminal and do the same with the `client`.

   ```bash
   cd path/to/Slickdeals-TakeHomeChallenge/client
   npm install
   npm run dev
   ```

   Keep an eye on the localhost url provided to you in the terminal (defaults to `http://localhost:5173`)

3. Navigate to the localhost url provided in your browser to play the game.

## Project Details

This application is separated into a client and server for independent deployment.

**Server** - This is an Express server where game logic is handled through the `/game/startRound` route and the `gameController` controller. - Business logic is handled by the `gameManagementService` service. - Generation of random numbers or letters. - Randomization of whether numbers or letters are generated.

**Client** - Displays the randomly generated elements to the user. - Handles logic of checking if a user-selected element matches the lowest element. - Requests a new sequence from the server if a winning or losing condition is met.

## Testing

Testing is not fully configured on the frontend, but the test is written out in the **tests** directory.

The business critical functions of generating random numbers or letters is tested in the server directory. Navigate to the `server` directory and run `npm run test`.
