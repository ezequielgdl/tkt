# TKT - Event Ticket Platform

TKT is an event ticketing platform designed for music concerts, allowing guests to browse and access available events while providing users with the ability to sign in and create new events. The platform leverages NextAuth with Google and GitHub providers for authentication and utilizes Next.js for the backend API endpoints.

## Features

- **Guest Access**: Guests can browse and access all available events.
- **User Authentication**: Users can sign in to create new events using their Google or GitHub accounts.
- **Event Creation**: Authenticated users can create new events, providing details such as event title, date, venue, description, URL, and ticket price.
- **Backend API**: Built with Next.js, the platform offers API endpoints to support event creation and retrieval.

## Future Improvements

- **Search Functionality**: Implement a search feature on the main page to allow users to search for specific events.
- **Ticket Purchasing**: Integrate Stripe or a similar payment processing library to enable users to purchase tickets for events directly through the platform.

## Technologies Used

- **Next.js**: A React framework used for building the backend API endpoints.
- **NextAuth**: Provides authentication services, allowing users to sign in with Google and GitHub accounts.
- **Google OAuth**: Allows users to authenticate using their Google accounts.
- **GitHub OAuth**: Provides authentication using GitHub accounts.
- **Stripe (Future)**: A payment processing library that could be integrated to facilitate ticket purchases.

## Usage

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Access the application at [http://localhost:3000](http://localhost:3000).

## Contributors

- Ezequiel Gómez de Lima

## License

This project is licensed under the [MIT License](LICENSE).
