const fetchDate = async (city) => {
  const apiKey = "6d533f48c1a82724d9624fcf0765d929"; // API key for OpenWeather
  const url = `https://api.openweathermap.org/data/2.5`;
  const query = `/weather?q=${city}&units=metric&appid=${apiKey}`;
  const res = await fetch(url + query);
  const result = await res.json();
  return result;
};
