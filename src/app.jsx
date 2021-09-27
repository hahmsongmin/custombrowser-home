import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";

function App({ myApi }) {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const startWeather = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    try {
      const data = await myApi.getWeather(lat, lon);
      setWeather(data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(startWeather, () => {
      alert("위치정보를 찾을 수 없습니다.");
    });
  }, []);

  return (
    <div className={styles.app}>
      {isLoading ? <Loader /> : <Header weather={weather} />}
    </div>
  );
}

export default App;
