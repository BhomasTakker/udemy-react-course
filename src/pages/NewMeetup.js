import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory} from 'react-router-dom'
//https://udemy-react-course-edce7-default-rtdb.firebaseio.com/
function NewMeetupPage(props) {
    const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://udemy-react-course-edce7-default-rtdb.firebaseio.com/meetups.json",
      {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
              'Content-Type':'application/json'
        }
      }
    ).then(() => {
        history.replace('/');//replace this rather than add to stack
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
