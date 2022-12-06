import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickedComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
const Calendar = () => {
  const InjectServices = [
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    Resize,
    DragAndDrop,
  ];
  return (
    <div>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="450px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={InjectServices} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
