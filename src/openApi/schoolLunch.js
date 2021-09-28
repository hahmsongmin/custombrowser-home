import axios from "axios";

class SchoolLunch {
  constructor(key) {
    this.date = new Date();
    this.year = String(this.date.getFullYear());
    this.month = String(this.date.getMonth() + 1).padStart(2, "0");
    this.day = String(this.date.getDate());
    this.yoil = this.date.getDay();
    this.TODAY = `${this.month}월${this.day}일`;
    this.API_KEY = key;
    this.school = axios.create({
      baseURL: "https://open.neis.go.kr/hub",
      params: {
        KEY: this.API_KEY,
        Type: "json",
        pIndex: 1,
        pSize: 1,
      },
    });
  }

  getLunch = async () => {
    const response = await this.school.get("mealServiceDietInfo", {
      params: {
        ATPT_OFCDC_SC_CODE: "J10",
        SD_SCHUL_CODE: "7581016",
        MLSV_YMD: `${this.year}${this.month}${this.day}`,
      },
    });
    return [response.data, this.TODAY, this.yoil];
  };
}

export default SchoolLunch;
