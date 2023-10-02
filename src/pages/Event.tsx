import { Layout } from "antd";
import React, { FC } from "react";
import EventCalendar from "../components/EventCalendar";

const Event: FC = () => {
   return (
     <Layout>
         <EventCalendar events={[]} />
     </Layout>
   )
}

export default Event;