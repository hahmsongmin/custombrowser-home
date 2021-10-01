import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";
import Bookmark from "./components/bookmark/bookmark";
import Todolist from "./components/todolist/todolist";
import School from "./components/school/school";

function App({ weatherApi, school }) {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [lunch, setLunch] = useState();
  const [today, setToday] = useState({
    day: null,
    yoil: null,
  });

  const [schedule, setSchedule] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(startWeather, () => {
      alert("위치정보를 찾을 수 없습니다.");
    });
  }, []);

  useEffect(() => {
    startLunch();
  }, []);

  useEffect(() => {
    startSchedule();
  }, []);

  const startWeather = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    try {
      const data = await weatherApi.getWeather(lat, lon);
      setWeather(data);
    } catch {}
  };

  const startLunch = async () => {
    try {
      const data = await school.getLunch();
      const menu = data[0].mealServiceDietInfo[1].row[0];
      setLunch(menu);
      setToday({
        day: data[1],
        yoil: data[2],
      });
    } catch {}
  };

  const startSchedule = async () => {
    try {
      const data = await school.getSchedule();
      const schedule = data.SchoolSchedule[1].row;
      const superArray = schedule.map((item) => {
        return {
          title: item.EVENT_NM,
          date: item.AA_YMD,
          timeText: item.EVENT_NM !== item.EVENT_CNTNT && item.EVENT_CNTNT,
        };
      });
      setSchedule(superArray);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.app}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.main}>
          <Header weather={weather} />
          <Bookmark />
          <Todolist />
          <School
            lunch={lunch}
            day={today.day}
            yoil={today.yoil}
            schedule={schedule}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
}

export default App;
