async function getWeather() {
      const apiKey = 'YOUR_API_KEY_HERE'; // 🔑 Replace this
      const city = 'London';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Get weather condition like "Clouds"
        const condition = data.weather[0].main;

        document.getElementById('weatherData').innerText = `Current weather in ${city}: ${condition}`;
      } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('weatherData').innerText = 'Could not fetch weather data.';
      }
    }