import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

//React components are synchronous only / you cannot return a promise from them so async is out
function AllMeetupsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://udemy-react-course-edce7-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json(); //this is a promise! - I did not know this!!
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); //run this only when the values in array change / i.e. dependencies like props and you want this thing updated
  //An empty array means run once only when originally rendered

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>AllMeetupsPage</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
