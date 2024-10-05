function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    amOrPm = hours >= 12 ? "PM" : "AM";
  

   Time = `${hours % 12 || 12}:${minutes}:${seconds} ${amOrPm}`;
  
    return Time;
  }
  
  const currentTime = getCurrentTime();
  console.log(currentTime);

  function removeFirstAndLast(str) {
    if (str.length <= 2) {
      return ""; 
    }
    return str.slice(1, -1);
     
  }
  const originalStr= "Hello JavaScript"
  const modifiedString = removeFirstAndLast(originalStr);
  console.log(modifiedString);