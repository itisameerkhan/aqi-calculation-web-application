export const coFn = (data) => {
  if (data >= 0 && 4400 >= data) {
    return { condition: "good", color: "#01E400", effects: "None" };
  } else if (data >= 4400 && 9400 >= data) {
    return {
      condition: "Fair",
      color: "#FFFE02",
      effects:
        "Unusually sensitive people should consider reducing prolonged or heavy exertion.",
    };
  } else if (data >= 9400 && 12400 >= data) {
    return {
      condition: "Moderate",
      color: "#FF7C00",
      effects:
        "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma. ",
    };
  } else if (data >= 12400 && 15400 >= data) {
    return {
      condition: "Poor",
      color: "#FE0000",
      effects:
        "Increased respiratory symptoms and aggravation of lung disease, such as asthma; possible respiratory effects.",
    };
  } else if (data >= 15400) {
    return {
      condition: "Very Poor",
      color: "#99004C",
      effects:
        "Significant increase of lung disease, increasing likelihood of respiratory effects in general population.",
    };
  } else {
    return { condition: "good", color: "#01E400" };
  }
};

export const no2Fn = (data) => {
  if (data >= 0 && 40 >= data) {
    return { condition: "good", color: "#01E400", effects: "None" };
  } else if (data >= 40 && 70 >= data) {
    return {
      condition: "Fair",
      color: "#FFFE02",
      effects:
        "Unusually sensitive people should consider reducing prolonged or heavy exertion.",
    };
  } else if (data >= 70 && 150 >= data) {
    return {
      condition: "Moderate",
      color: "#FF7C00",
      effects:
        "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma. ",
    };
  } else if (data >= 150 && 200 >= data) {
    return {
      condition: "Poor",
      color: "#FE0000",
      effects:
        "Increased respiratory symptoms and aggravation of lung disease, such as asthma; possible respiratory effects.",
    };
  } else if (data >= 200) {
    return {
      condition: "Very Poor",
      color: "#99004C",
      effects:
        "Significant increase of lung disease, increasing likelihood of respiratory effects in general population.",
    };
  } else {
    return { condition: "good", color: "#01E400" };
  }
};

export const o3Fn = (data) => {
  if (data >= 0 && 60 >= data) {
    return { condition: "good", color: "#01E400", effects: "None" };
  } else if (data >= 60 && 100 >= data) {
    return {
      condition: "Fair",
      color: "#FFFE02",
      effects:
        "Unusually sensitive people should consider reducing prolonged or heavy exertion.",
    };
  } else if (data >= 100 && 140 >= data) {
    return {
      condition: "Moderate",
      color: "#FF7C00",
      effects:
        "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma. ",
    };
  } else if (data >= 140 && 180 >= data) {
    return {
      condition: "Poor",
      color: "#FE0000",
      effects:
        "Increased respiratory symptoms and aggravation of lung disease, such as asthma; possible respiratory effects.",
    };
  } else if (data >= 180) {
    return {
      condition: "Very Poor",
      color: "#99004C",
      effects:
        "Significant increase of lung disease, increasing likelihood of respiratory effects in general population.",
    };
  } else {
    return { condition: "good", color: "#01E400" };
  }
};

export const pm2_5Fn = (data) => {
  if (data >= 0 && 10 >= data) {
    return { condition: "good", color: "#01E400", effects: "None" };
  } else if (data >= 10 && 25 >= data) {
    return {
      condition: "Fair",
      color: "#FFFE02",
      effects:
        "Unusually sensitive people should consider reducing prolonged or heavy exertion.",
    };
  } else if (data >= 25 && 50 >= data) {
    return {
      condition: "Moderate",
      color: "#FF7C00",
      effects:
        "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma. ",
    };
  } else if (data >= 50 && 75 >= data) {
    return {
      condition: "Poor",
      color: "#FE0000",
      effects:
        "Increased respiratory symptoms and aggravation of lung disease, such as asthma; possible respiratory effects.",
    };
  } else if (data >= 75) {
    return {
      condition: "Very Poor",
      color: "#99004C",
      effects:
        "Significant increase of lung disease, increasing likelihood of respiratory effects in general population.",
    };
  } else {
    return { condition: "good", color: "#01E400" };
  }
};

export const pm10Fn = (data) => {
  if (data >= 0 && data <= 20) {
    return { condition: "good", color: "#01E400", effects: "None" };
  } else if (data >= 20 && data <= 50) {
    return {
      condition: "Fair",
      color: "#FFFE02",
      effects:
        "Unusually sensitive people should consider reducing prolonged or heavy exertion.",
    };
  } else if (data >= 50 && data <= 100) {
    return {
      condition: "Moderate",
      color: "#FF7C00",
      effects:
        "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma. ",
    };
  } else if (data >= 100 && data <= 200) {
    return {
      condition: "Poor",
      color: "#FE0000",
      effects:
        "Increased respiratory symptoms and aggravation of lung disease, such as asthma; possible respiratory effects.",
    };
  } else if (data >= 200) {
    return {
      condition: "Very Poor",
      color: "#99004C",
      effects:
        "Significant increase of lung disease, increasing likelihood of respiratory effects in general population.",
    };
  } else {
    return { condition: "good", color: "#01E400" };
  }
};

export const so2Fn = (data) => {
  if (data >= 0 && 20 >= data) {
    return { condition: "good", color: "#01E400", effects: "None" };
  } else if (data >= 20 && 80 >= data) {
    return {
      condition: "Fair",
      color: "#FFFE02",
      effects:
        "Unusually sensitive people should consider reducing prolonged or heavy exertion.",
    };
  } else if (data >= 80 && 250 >= data) {
    return {
      condition: "Moderate",
      color: "#FF7C00",
      effects:
        "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma. ",
    };
  } else if (data >= 250 && 350 >= data) {
    return {
      condition: "Poor",
      color: "#FE0000",
      effects:
        "Increased respiratory symptoms and aggravation of lung disease, such as asthma; possible respiratory effects.",
    };
  } else if (data >= 350) {
    return {
      condition: "Very Poor",
      color: "#99004C",
      effects:
        "Significant increase of lung disease, increasing likelihood of respiratory effects in general population.",
    };
  } else {
    return { condition: "good", color: "#01E400" };
  }
};

export const calculatePM10 = (C8) => {
  if (C8 <= 50) {
    return C8;
  } else if (C8 > 50 && C8 <= 100) {
    return C8;
  } else if (C8 > 100 && C8 <= 250) {
    return 100 + ((C8 - 100) * 100) / 150;
  } else if (C8 > 250 && C8 <= 350) {
    return 200 + (C8 - 250);
  } else if (C8 > 350 && C8 <= 430) {
    return 300 + (C8 - 350) * (100 / 80);
  } else if (C8 > 430) {
    return 400 + (C8 - 430) * (100 / 80);
  }
};

export const calculatePM2_5 = (C10) => {
  if (C10 <= 30) {
    return (C10 * 50) / 30;
  } else if (C10 > 30 && C10 <= 60) {
    return 50 + ((C10 - 30) * 50) / 30;
  } else if (C10 > 60 && C10 <= 90) {
    return 100 + ((C10 - 60) * 100) / 30;
  } else if (C10 > 90 && C10 <= 120) {
    return 200 + ((C10 - 90) * 100) / 30;
  } else if (C10 > 120 && C10 <= 250) {
    return 300 + ((C10 - 120) * 100) / 130;
  } else if (C10 > 250) {
    return 400 + ((C10 - 250) * 100) / 130;
  }
};

export const calculateSO2 = (C12) => {
  if (C12 <= 40) {
    return (C12 * 50) / 40;
  } else if (C12 > 40 && C12 <= 80) {
    return 50 + ((C12 - 40) * 50) / 40;
  } else if (C12 > 80 && C12 <= 380) {
    return 100 + ((C12 - 80) * 100) / 300;
  } else if (C12 > 380 && C12 <= 800) {
    return 200 + (C12 - 380) * (100 / 420);
  } else if (C12 > 800 && C12 <= 1600) {
    return 300 + (C12 - 800) * (100 / 800);
  } else if (C12 > 1600) {
    return 400 + (C12 - 1600) * (100 / 800);
  }
};

export const calculateNO2 = (C14) => {
  if (typeof C14 !== "string") {
    return 0;
  } else if (C14 <= 40) {
    return (C14 * 50) / 40;
  } else if (C14 > 40 && C14 <= 80) {
    return 50 + ((C14 - 40) * 50) / 40;
  } else if (C14 > 80 && C14 <= 180) {
    return 100 + ((C14 - 80) * 100) / 100;
  } else if (C14 > 180 && C14 <= 280) {
    return 200 + (C14 - 180) * (100 / 100);
  } else if (C14 > 280 && C14 <= 400) {
    return 300 + (C14 - 280) * (100 / 120);
  } else if (C14 > 400) {
    return 400 + (C14 - 400) * (100 / 120);
  }
};

export const calculateCO = (C16) => {
  if (C16 <= 1) {
    return (C16 * 50) / 1;
  } else if (C16 > 1 && C16 <= 2) {
    return 50 + ((C16 - 1) * 50) / 1;
  } else if (C16 > 2 && C16 <= 10) {
    return 100 + ((C16 - 2) * 100) / 8;
  } else if (C16 > 10 && C16 <= 17) {
    return 200 + (C16 - 10) * (100 / 7);
  } else if (C16 > 17 && C16 <= 34) {
    return 300 + (C16 - 17) * (100 / 17);
  } else if (C16 > 34) {
    return 400 + (C16 - 34) * (100 / 17);
  }
};

export const calculateO3 = (C18) => {
  if (C18 <= 50) {
    return (C18 * 50) / 50;
  } else if (C18 > 50 && C18 <= 100) {
    return 50 + ((C18 - 50) * 50) / 50;
  } else if (C18 > 100 && C18 <= 168) {
    return 100 + ((C18 - 100) * 100) / 68;
  } else if (C18 > 168 && C18 <= 208) {
    return 200 + (C18 - 168) * (100 / 40);
  } else if (C18 > 208 && C18 <= 748) {
    return 300 + (C18 - 208) * (100 / 539);
  } else if (C18 > 748) {
    return 400 + (C18 - 748) * (100 / 539);
  }
};
