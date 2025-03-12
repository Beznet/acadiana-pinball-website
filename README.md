# Acadiana Pinball Website

The official website for the Acadiana Pinball community, showcasing local events, player rankings, and tournament information.

## Features

- Live standings and rankings for Louisiana players
- Event calendar for upcoming tournaments and meetups
- Player profiles and statistics (coming soon)
- Local venue information (coming soon)

## Tech Stack

- [Vite](https://vitejs.dev)
- [Chakra UI](https://chakra-ui.com)
- [Biome](https://biomejs.dev/)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [pnpm](https://pnpm.io/) (preferred package manager)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/beznet/acadiana-pinball-website.git
cd acadiana-pinball-website
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following:

```
IFPA_API_KEY=your_api_key_here
```

To obtain an IFPA API key:

1. Register for an account at [IFPA](https://www.ifpapinball.com/)
2. Navigate to your 'My Profile'
3. Request an API key for development purposes
4. Once approved, copy your API key to the `.env` file

### 4. Start the development server

```bash
pnpm dev
```

This will start the local development server

## Development Workflow

1. Make your changes locally
2. Run `pnpm biome:fix` to fix formatting and linting issues
3. Run `pnpm type:check` to ensure types are correct
4. Start the development server with `pnpm dev` to test your changes
5. Submit a PR with your changes

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Acknowledgments

- [IFPA](https://www.ifpapinball.com/) for providing the API for pinball rankings
