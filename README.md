# Mobile Flashcards Project

This project is part of the Udacity React Nanodegree and utilises React Native. React Native has been used to create a mobile app for both Android and iOS platforms which allow users to create decks of flashcards. Questions can be added to each deck and and a user can view how many questions are in a deck. Decks can also be removed.

A user can take a quiz on questions within each deck, reveal the answer to the question, mark if they answered correctly or not and view how many questions they got correct overall. 

A daily notification is also sent if the user has not completed a quiz within the past 24 hours.  

## Running the Project

To start the project use:

* `npm install` or `yarn install` to install project dependencies
* Then start the web server with `npm start` or `yarn start`
* Then use either `yarn android` or the React Native CLI `npx react-native run-android` to start the project

## Backend Data

This project utilises AsyncStorage to store provided flashcard deck data locally on the device. 

## Testing

This project has been tested using the Android Studio Linux emulator, and a physical Android mobile device (running Android Version S).



