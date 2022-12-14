const quarterOf = (month) => {
  let totalMonth = 12
  let monthInQuarter = 12/4
  
  if (month <= monthInQuarter)  {
    return 1;
  } else if (month >= monthInQuarter && month <= 2*monthInQuarter) {
    return 2;
  } else if (month >= 2*monthInQuarter && month <= 3*monthInQuarter) {
    return 3;
  } else {
    return 4;
  }
}
