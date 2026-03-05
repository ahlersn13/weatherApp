# Weather Dashboard

A weather lookup application that fetches real-time weather data for any city using the OpenWeatherMap API. Displays temperature, humidity, current conditions, recent rainfall, and a dynamic weather icon.

**Live Demo:** [lab-2-ahlersn13.onrender.com](https://lab-2-ahlersn13.onrender.com)

## Features

- Search weather by city name with real-time API data
- Displays temperature, humidity, conditions, and recent rainfall
- Dynamic weather icons pulled from the OpenWeatherMap API
- Error handling for invalid or empty city inputs
- Deployed and running on Render

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** HTML, CSS
- **API:** OpenWeatherMap (via RapidAPI)
- **Hosting:** Render

## Getting Started

### Prerequisites

- Node.js 14+
- npm
- OpenWeatherMap API key (via [RapidAPI](https://rapidapi.com))

### Installation

```bash
# Clone the repo
git clone https://github.com/ahlersn13/weatherApp.git
cd weatherApp

# Install dependencies
npm install

# Start the server
node weatherapp.js
```

Visit `http://localhost:3000` to use the app.
