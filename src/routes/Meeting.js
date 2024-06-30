import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer2";
import Hero2 from "../components/Hero2";
import Title from "../components/Title";
import ScheduleTable from "../components/Table";

const Meeting = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="MEETINGS." text="Here are our meeting times" />
      <Title subTitle="Our MEETING TIME" title="" />
      {/* <Table /> */}
      <ScheduleTable />
      <Footer />
    </div>
  );
};

export default Meeting;
