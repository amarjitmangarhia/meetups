import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeepUpForm from "../../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetUpHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking oppournities!"
        />
      </Head>
      <NewMeepUpForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
}

export default NewMeetUpPage;
