import React, { useEffect, useState } from "react";
import moment from "moment";
import { TimeAgo } from "./TimeAgo";

export default function MapFunction() {
  const [data, setData] = useState([]);
  // const [totalDataCount, setTotalDataCount] = useState(0);
  

  const getData = async () => {
    let response = await fetch(
        `https://api.github.com/repos/apple/cups/issues?state=open`
        );
        console.log("response: ", response);
        let data = await response.json();
    console.log("data: ", data);

    // console.log("res.created_at: ", res.user.login);
    setData(data);

    // formatDateToWeeks(res.created_at);
    // console.log("data: ", data);
  };

 

  const formatDateToWeeks = (dateString) => {
    console.log("dateString: ", dateString);
    const date = moment(dateString);
    // console.log("date: ", date);
    const now = moment();
    const weeks = now.diff(date, "weeks");
    // return weeks;
    if (weeks > 3) {
      const formattedDate = date.format("D");
      const monthName = date.format("MMM");
      // console.log("Data: ", formattedDate);
      console.log("Month Name: ", monthName, formattedDate);
    } else {
      console.log("weeks: ", weeks);
    }
  };
  const handleTime = (time) => {
    formatDateToWeeks(time);
  };
  useEffect(() => {
    getData();
   
  }, []);
  return (
    <>
      <div>
        {data.length > 0 &&
          data.map((el) => {
            return (<div key={el.id} style={{ display: "flex" }}>
                <p>{el.title}</p>
                <TimeAgo time ={el.created_at} />
                <p
                  style={{ color: "green", marginLeft: "2%" }}
                  className="userDetails"
                >
                  {el.user.login}
                </p>
                <p style={{ color: "red", marginLeft: "2%" }}>
                  {el.comments > 0 && el.comments}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}
