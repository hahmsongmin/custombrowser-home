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

  getLunch = async (locationCode, schoolCode) => {
    const response = await this.school.get("mealServiceDietInfo", {
      params: {
        ATPT_OFCDC_SC_CODE: locationCode,
        SD_SCHUL_CODE: schoolCode,
        MLSV_YMD: `${this.year}${this.month}${this.day}`,
        // MLSV_YMD: "20211005",
        pIndex: 1,
        pSize: 1,
      },
    });
    return [response.data, this.TODAY, this.yoil];
  };

  getSchoolInfo = async (code, name) => {
    const response = await this.school.get("schoolInfo", {
      params: {
        ATPT_OFCDC_SC_CODE: code,
        SCHUL_NM: name,
        pIndex: 1,
        pSize: 1,
      },
    });
    return response.data;
  };

  getSchedule = async (page, locationCode, schoolCode) => {
    const response = await this.school.get("SchoolSchedule", {
      params: {
        ATPT_OFCDC_SC_CODE: locationCode,
        SD_SCHUL_CODE: schoolCode,
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
