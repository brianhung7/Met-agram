# Met-agram  🖼️ 

Brian Pham's submission for Entera's Junior Engineer Code Test

## About :books:

    Entera.ai's code test was to create an page that renders art provided by the Met Museum's public API. I expanded upon this a little bit to show error handling when the endpoint is broken/returns an error by adding in the ability to change the 'page' on the API. Also added simple 'like/unlike' functionality as well as the ability to write messages on each artwork.


## Getting Started :rocket:

    1. Clone down the repo with ```git clone https://github.com/brianhung7/Met-agram.git```
    2. Then install dependencies with ```npm install```
    3. To start the application use ```npm start```

## Features 📑

- Pulls from the Met Museum's Public API
- Displays art image, title, and artist's name
- "Previous"/"Next" buttons allow users to fetch the next or previous image in the API
- Error handling for when API hits endpoint that has no data
- Like/Unlike functionality
- Message functionality on art pieces which includes, creating, reading, updating and deleting messages

## Technologies :robot:
Test was completed using Javascript, React, and Material UI. Utilized React as it makes building user interfaces really quick and maintainable due to reusable components. Used Material UI (MUI) component library because it allows me to import and use an extensive amount of components without having to start from scratch. This makes development and designing a lot faster and efficient. Also because this is one of my first times using MUI and I just wanted the practice.