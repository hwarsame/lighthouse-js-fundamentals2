const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = (stations) => {
  const filteredStations = [];
  stations.filter(([n, c, t]) => {
    if (c >= 20 && (t == "school" || t == "community centre")){
      filteredStations.push(n);
    }
  });
  console.log(filteredStations);
  return filteredStations;
}
chooseStations(stations);