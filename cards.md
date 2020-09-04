# Thinking in React For the Study Functionality

This is my iteration for the study functionality following the guides from 'Thinking in React'.

## Break the UI into a component hierarchy

In the #50reactprojects layout idea + my own design, I can identify the following components:

1. card: contains a question and an answer.
2. stack of cards: contains an array of cards to play.
3. button
4. button panel: contains a set of the current actions (buttons): show; easy, hard; and next.
4. progress bar: contains the progress indicater in form of text and as a progress bar.

- The app has:
    - *header*
    - *stack of cards*: which has *cards*.
    - *button panel*: which has *buttons*
    - *progress bar*

## Build a static version into react

The components folders in src/app contains components in javascript files.

## Identify the minimal representation for the UI state

The following states will have the study functionality:

- list of cards: the stack of cards that the user will study in the moment
- list of current cards: the list of remaining cards
- card state: the state of the current card: it can be new_card (it will show a button of 'show card'); shown_card (it will display two buttons: 'easy' and 'hard')

## Identify where the state should live

The states will live in the App Component

## Add inverse data-flow

There will be 4 buttons:
    show card: will flip the card and change the card state to shown_card.
    easy: will pop the current card from the list of current cards and change the card state to answered_card
    hard: will pop and push the currend card from the list of current cards and change the card state to answered_card