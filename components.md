## Data Layer

- gameCards: gameCard[ ] → [ ]
- UiContext:
  - isLoading: boolean
  - isError: boolean
  - isSuccess: boolean (showFeedback, info por props)

## Data modifications

gameCards:

- createCard(): Add new card to the end
- modifyCard(cardId): Modify data card by id
- deleteCard(cardId): Delete a card by id

## Components

### GameCardsContext

- Stores:
  - gameCards[]
  - currentPage: number(default to 1)
- Actions:
  - load-cards
  - create-card(newCard)
  - edit-card({id, newData})
  - delete-card(id)
  - filter-cards(rarity: string)

### UiContext

- Stores:

  - isLoading: boolean
  - isError: boolean

- Actions
  - set-loading
  - show-loading
  - hide-loading
  - show-error
  - hide-error

### App

- **Renders Router** with paths

### Navbar

- Shows logo and navigation menu to the user
- Receives clicks from the user on the links
- Redirects the user on selected page
- Hides links on mobile and shows hamburger menu with drawer

### HeroComponent

- Shows title, main animation and description of the app
- Shows VIEW ALL button component
- Redirects user to Cards page when VIEW ALL is clicked

### ButtonComponent

- Shows a button to the user
- Receives the text
- Receives and calls the function on click event

### FilterComponent

- Stores controlled input options in state variable
- Show a select html input to the user with different choices for filtering
- Receives dispatch function to filter cards from the GameCardsContext
- Calls dispatch with the input value action

### GameCardComponent

- Shows a card with all the gameCard information and image
- Shows a button to delete the card
- Receives card data as prop
- Receives delete-card dispatch function from the GameCardsContext
- Calls delete-card dispatch function with appropriate action and payload (id of the card to delete)

### CardListComponent

- Receives the data of all cards from the GameCardsContext
- Shows a list of all cards ,shows a button component to reset cards and filter component to filter
- Show a button component for Next Page
- Show a button component for Previous Page

### CardDetailsComponent

- Show title, text, image and details of the card
- Show button to edit card
- Receives card id from router path
- Redirects user on edit card page on click of edit button
- Fetches the card

### FormComponent

- Stores Controlled input data for the form
- Receives type (create or edit) as prop
- Receives create-card dispatch function from the GameCardsContext
- Show form with all details inputs required to create or edit a card
- Show a button component to collect click to create or edit the card
- Calls the dispatch with the action and payload(with the form data)

---

# Pages

### Home

- Renders NavbarComponent
- Renderes HeroComponent

### Cards

- Renders NavbarComponent
- Renders a heading
- Renders a CardListComponent

### Card

- Renders NavBarComponent
- Renders a span with the id of the component
- Renders CardDetailsComponent

### Create

- Renders NavBarComponent
- Renders a heading
- Renders FormComponent

### Edit

- Renders NavBarComponent
- Renders a heading
- Renders a span with the id of the component
- Renders FormComponent

### 404

- Renders NavBarComponent
- Renders a span with the 404 text
- Renders the image of 404 page
