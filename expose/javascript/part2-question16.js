let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };
  
  for (statistic in statistics) {
    if (statistic[0] == 'r') {
      console.log(statistics[statistic]);
    }
  }