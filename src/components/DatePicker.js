import React, { useState } from 'react';
import moment from 'moment';

function Date(props) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setDate(startDate, endDate);
    props.load(false);
  }

  function handleSubmitedStartDate(e) {
    setStartDate(e.target.value);
  }

  function handleSubmitedEndDate(e) {
    setEndDate(e.target.value);
  }

  return(
    <form className="form" onSubmit={handleSubmit} role="search">
      <label className="label_start_date" htmlFor="start_date">Start Date: </label>
      <input 
        type="date"
        id="start_date"
        name="startDate"
        required={true}
        value={startDate}
        onChange={handleSubmitedStartDate}
        aria-required="true"
        aria-label="Pick a start date"
      />
      <label className="label_end_date" htmlFor="end_date">End Date: </label>
      <input
        type="date"
        id="end_date"
        name="endDate"
        required={true}
        value={endDate}
        onChange={handleSubmitedEndDate}
        min={startDate}
        max={moment().format('YYYY-MM-DD')}
        aria-required="true"
        aria-label="Pick a end date"
      />
      <button type="submit" className="search_btn" name="Search">Search</button>
    </form>
  );
}

export default Date;