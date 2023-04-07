# Design Document

## Objectives
Create a desktop application that guides player's through the process of creating a character for the TTRPG system 'The Lord of the Rings Roleplaying: 5e'.

As a user of this application, I should be able to fill out some basic forms that the application presents and then export this character sheet to JSON and subsequently import it into FoundryVTT.

## Requirements

**Should**
* The application SHOULD validate that the user owns the PDF
* The application SHOULD store state of the character between sessions
* The application SHOULD construct the JSON in a format that Foundry understands
* The application SHOULD support vanilla Foundry sheets and Tidy5e sheets
* The application SHOULD support the random generation of characters or provide suggestions in the form

**Should Nots**
* The application SHOULD NOT allow import of other characters
* The application SHOULD NOT contain large portions of text from the PDF but rather snippets, names and page numbers

## Data Design
Since the application will revolve around constructing a character, certain parts about the character should be defined.

### Required Elements
- Name
- Heroic Cultures
- Callings
- Ability Scores
- Starting Equipment