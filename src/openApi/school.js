import axios from "axios";

class School {
  constructor(key) {
    this.date = new Date();
    this.year = String(this.date.getFullYear());
    this.month = String(this.date.getMonth() + 1).padStart(2, "0");
    this.day = String(this.date.getDate()).padStart(2, "0");
    this.yoil = this.date.getDay();
    this.TODAY = `${this.month}월${this.day}일`;
    this.API_KEY = key;
    this.school = axios.create({
      baseURL: "https://open.neis.go.kr/hub",
      params: {
        KEY: this.API_KEY,
        Type: "json",
      },
    });
  }

  getLunch = async () => {
    const response = await this.school.get("mealServiceDietInfo", {
      params: {
        ATPT_OFCDC_SC_CODE: "J10",
        SD_SCHUL_CODE: "7581016",
        MLSV_YMD: `${this.year}${this.month}${this.day}`,
        pIndex: 1,
        pSize: 1,
      },
    });
    return [response.data, this.TODAY, this.yoil];
  };

  getSchedule = async (page) => {
    const response = await this.school.get("SchoolSchedule", {
      params: {
        ATPT_OFCDC_SC_CODE: "J10",
        SD_SCHUL_CODE: "7581026",
        AA_FROM_YMD: `${this.year}0101`,
        AA_TO_YMD: `${String(Number(this.year) + 1)}0301`,
        pIndex: page,
        pSize: 100,
      },
    });
    return response.data;
  };
}

export default School;
