# 🚀 Real-Time Cryptocurrency Tracker

A React application that fetches real-time cryptocurrency data in JSON format and allows users to search for coins by name.

## 📌 Features
- Fetches real-time cryptocurrency data from an API
- Displays coin details like name, price, and market cap
- Search functionality to filter coins by name
- User-friendly interface with responsive design

## 🛠️ Tech Stack
- React.js
- JavaScript (ES6+)
- CSS (or Tailwind CSS/Bootstrap for styling)
- Axios (for API requests)

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crypto-tracker.git
   cd crypto-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🔗 API Source
Make sure to use a cryptocurrency API such as **CoinGecko** or **CoinMarketCap**. Example API request:
```js
import axios from 'axios';

const fetchCryptoData = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false
        }
    });
    return response.data;
};
```

## 🖥️ Usage
- Enter a cryptocurrency name in the search bar to filter results.
- View real-time data including prices and market trends.

## 📷 Screenshots
(Add relevant screenshots here)

## 📜 License
This project is licensed under the MIT License.

## 💡 Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request.
