//Function for calculating time passed from posting issue, comment etc.
export const calcTimeAgo = (time) => {
  //It automaticly converts ISO time to local computer time:
  const ISOTimeCreated = new Date(time);
  //Get miliseconds:
  const miliSecTimeCreated = ISOTimeCreated.getTime();
  const timeNowInMiliSec = new Date().getTime();

  const miliSecTimeAgo = timeNowInMiliSec - miliSecTimeCreated;

  const secondsAgo = (miliSecTimeAgo / 1000).toFixed();
  const minutesAgo = (secondsAgo / 60).toFixed();
  const hoursAgo = (secondsAgo / 3600).toFixed();
  const daysAgo = (secondsAgo / (3600 * 24)).toFixed();
  const weeksAgo = (secondsAgo / (3660 * 24 * 7)).toFixed();

  const singularPlural = (ago, name) => {
    const timeAgo = ago < 2 ? ago + ` ${name} ago ` : ago + ` ${name} ago `;
    return timeAgo;
  };

  if (secondsAgo < 60) {
    return singularPlural(secondsAgo, "second ");
  } else if (minutesAgo < 60) {
    return singularPlural(minutesAgo, "minute ");
  } else if (hoursAgo < 24) {
    return singularPlural(hoursAgo, "hours ");
  } else if (daysAgo < 7) {
    return singularPlural(daysAgo, "day");
  } else {
    return singularPlural(weeksAgo, "week");
  }
};
