import { Button, Calendar } from 'antd';
import React, { useState } from 'react';
import * as moment from 'moment'
function onPanelChange(value: moment.Moment, mode: string) {
  console.log(value);

  console.log(value.format('YYYY-MM-DD'), mode);
}
function onSelect(value:moment.Moment) {
  console.log(value.format('YYYY-MM-DD'));
  console.log(value);
}
function dateCellRender(value:moment.Moment) {
  return value.date()
}
const CalendarPage = () => {
  return (
    <>
      <p>CalendarPage</p>
      <Calendar onPanelChange={onPanelChange}
      dateCellRender={dateCellRender}
      onSelect={onSelect}/>
    </>
  );
};

export default CalendarPage;
