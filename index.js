const input = ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"];
//const input = ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"];

//split the array
const splitInput = (input) => {
  const result = input.map((item) => {
    let arr = item.split("-");
    const start = arr[0];
    const end = arr[1];
    //console.log(arr);
    const startHour = start.split(":")[0];
    const endHour = end.split(":")[0];
    const startSuffix = start.split(":")[1].split(/\s*([AaPp][Mm])/)[1];
    const startMinutes = start.split(":")[1].split(/\s*([AaPp][Mm])/)[0];
    const endMinutes = end.split(":")[1].split(/\s*([AaPp][Mm])/)[0];
    const endSuffix = end.split(":")[1].split(/\s*([AaPp][Mm])/)[1];
    const date1 = new Date(
      `2022-04-25 ${endHour}:${endMinutes}:00 ${endSuffix}`
    );
    const date2 = new Date(
      `2022-04-25 ${startHour}:${startMinutes}:00 ${startSuffix}`
    );
    //console.log(arr[0]);
    arr[0] = date2;
    arr[1] = date1;
    return arr;
  });
  return result;
};

//sort the splitted array
const result = splitInput(input);
const sortedDates = result.sort((dateA, dateB) => dateA[0] - dateB[0]);
