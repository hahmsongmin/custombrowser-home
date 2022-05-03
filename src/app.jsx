import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import Loader from './components/loader/loader';
import Bookmark from './components/bookmark/bookmark';
import Todolist from './components/todolist/todolist';
import School from './components/school/school';

function App({ weatherApi, school, corona }) {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [lunch, setLunch] = useState();
  const [today, setToday] = useState({
    day: null,
    yoil: null,
  });
  const [location, setLocation] = useState();
  const [userSchool, setUserSchool] = useState({
    schoolCode: null,
    locationCode: null,
  });
  const [schedule, setSchedule] = useState();
  const [coronaTotal, setCoronaTotal] = useState();
  const [coronaCountry, setCoronaCountry] = useState();

  useEffect(() => {
    const startWeather = async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      try {
        const data = await weatherApi.getWeather(lat, lon);
        setWeather(data);
      } catch {}
    };
    navigator.geolocation.getCurrentPosition(startWeather, () => {
      alert('위치정보를 찾을 수 없습니다.');
    });
  }, [weatherApi]);

  useEffect(() => {
    const startLunch = async () => {
      try {
        const data = await school.getLunch(userSchool.locationCode, userSchool.schoolCode);
        const menu = data[0].mealServiceDietInfo[1].row[0];
        setLunch(menu);
        setToday({
          day: data[1],
          yoil: data[2],
        });
      } catch {}
    };
    const startSchedule = async () => {
      const page = [1, 2, 3];
      let temp = [];
      try {
        if (!userSchool.schoolCode) {
          return;
        }
        for (let i = 0; i < page.length; i++) {
          const data = await school.getSchedule(page[i], userSchool.locationCode, userSchool.schoolCode);
          const schedule = data.SchoolSchedule[1].row;
          const superArray = schedule.map((item) => {
            return {
              title: item.EVENT_NM,
              date: item.AA_YMD,
              timeText: item.EVENT_NM !== item.EVENT_CNTNT && item.EVENT_CNTNT,
            };
          });
          temp.push(...superArray);
        }
      } catch {
      } finally {
        setSchedule(temp);
      }
    };
    const startCorona = async () => {
      try {
        const data1 = await corona.getTotal();
        const data2 = await corona.getCountry();
        setCoronaTotal(data1);
        setCoronaCountry(data2);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    startLunch();
    startSchedule();
    startCorona();
  }, [corona, school, userSchool, weatherApi]);

  const selectLocation = (event) => {
    const location = event.target.value;
    setLocation(location);
  };

  const selectedSchool = async (event) => {
    event.preventDefault();
    const schoolName = event.target.childNodes[1].value;
    if (location && schoolName) {
      try {
        const data = await school.getSchoolInfo(location, schoolName);
        const schoolCode = data.schoolInfo[1].row[0].SD_SCHUL_CODE;
        setUserSchool({
          schoolCode,
          locationCode: location,
        });
      } catch {}
    }
  };

  return (
    <div className={styles.app}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.main}>
          <Header
            weather={weather}
            lunch={lunch}
            day={today.day}
            yoil={today.yoil}
            selectLocation={selectLocation}
            selectedSchool={selectedSchool}
            coronaTotal={coronaTotal}
            coronaCountry={coronaCountry}
          />
          <Bookmark />
          <Todolist />
          <School schedule={schedule} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}

export default App;
