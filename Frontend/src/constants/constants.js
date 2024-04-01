export const coFn = (data) => {
  if (data >= 0 && 4400 >= data) {
    return { condition: "good", color: "#01E400" };
  } else if (data >= 4400 && 9400 <= data) {
    return { condition: "Fair", color: "#FFFE02" };
  } else if (data >= 9400 && 12400 <= data) {
    return { condition: "Moderate", color: "#FF7C00" };
  } else if (data >= 12400 && 15400 <= data) {
    return { condition: "Poor", color: "#FE0000" };
  } else if (data >= 15400) {
    return { condition: "Very Poor", color: "#99004C" };
  } else {
    return { condition: "good", color: "#01E400" };

  }
};

export const no2Fn = (data) => {
  if (data >= 0 && 40 >= data) {
    return { condition: "good", color: "#01E400" };
  } else if (data >= 40 && 70 <= data) {
    return { condition: "Fair", color: "#FFFE02" };
  } else if (data >= 70 && 150 <= data) {
    return { condition: "Moderate", color: "#FF7C00" };
  } else if (data >= 150 && 200 <= data) {
    return { condition: "Poor", color: "#FE0000" };
  } else if (data >= 200) {
    return { condition: "Very Poor", color: "#99004C" };
  } else {
    return { condition: "good", color: "#01E400" };

  }
};

export const o3Fn = (data) => {
  if (data >= 0 && 60 <= data) {
    return { condition: "good", color: "#01E400" };
  } else if (data >= 60 && 100 <= data) {
    return { condition: "Fair", color: "#FFFE02" };
  } else if (data >= 100 && 140 <= data) {
    return { condition: "Moderate", color: "#FF7C00" };
  } else if (data >= 140 && 180 <= data) {
    return { condition: "Poor", color: "#FE0000" };
  } else if (data >= 180) {
    return { condition: "Very Poor", color: "#99004C" };
  } else {
    return { condition: "good", color: "#01E400" };

  }
};

export const pm2_5Fn = (data) => {
  if (data >= 0 && 10 <= data) {
    return { condition: "good", color: "#01E400" };
  } else if (data >= 10 && 25 <= data) {
    return { condition: "Fair", color: "#FFFE02" };
  } else if (data >= 25 && 50 <= data) {
    return { condition: "Moderate", color: "#FF7C00" };
  } else if (data >= 50 && 75 <= data) {
    return { condition: "Poor", color: "#FE0000" };
  } else if (data >= 75) {
    return { condition: "Very Poor", color: "#99004C" };
  } else {
    return { condition: "good", color: "#01E400" };

  }
};

export const pm10Fn = (data) => {
  if (data >= 0 && 20 <= data) {
    return { condition: "good", color: "#01E400" };
  } else if (data >= 20 && 50 <= data) {
    return { condition: "Fair", color: "#FFFE02" };
  } else if (data >= 50 && 100 <= data) {
    return { condition: "Moderate", color: "#FF7C00" };
  } else if (data >= 100 && 200 <= data) {
    return { condition: "Poor", color: "#FE0000" };
  } else if (data >= 200) {
    return { condition: "Very Poor", color: "#99004C" };
  } else {
    return { condition: "good", color: "#01E400" };
    
  }
};

export const so2Fn = (data) => {
  if (data >= 0 && 20 <= data) {
    return { condition: "good", color: "#01E400" };
  } else if (data >= 20 && 80 <= data) {
    return { condition: "Fair", color: "#FFFE02" };
  } else if (data >= 80 && 250 <= data) {
    return { condition: "Moderate", color: "#FF7C00" };
  } else if (data >= 250 && 350 <= data) {
    return { condition: "Poor", color: "#FE0000" };
  } else if (data >= 350) {
    return { condition: "Very Poor", color: "#99004C" };
  } else {
    return { condition: "good", color: "#01E400" };
  }
};
