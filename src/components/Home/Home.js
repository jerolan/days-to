import React, { useState, useRef } from 'react';

import Layout from '../Layout';
import View from '../View';
import Col from '../Col';
import DatePicker from '../DatePicker';

import * as formatters from '../../formatters';

export default function Home() {
  const today = new Date();
  const inputRef = useRef(null);
  const [date, setDate] = useState(new Date());

  function handleDateChange(date) {
    if (!date) return setDate(new Date());
    return setDate(date.toDate());
  }

  function triggerDatePicker(event) {
    return inputRef.current.open(event);
  }

  return (
    <Layout>
      <View center="xs" middle="xs">
        <Col xs={12}>
          <p
            onClick={triggerDatePicker}
            className="h1"
          >{`${formatters.daysBetween(today, date)} Days`}</p>
        </Col>
      </View>
      <DatePicker
        clearable
        style={{ display: 'none' }}
        datePickerRef={inputRef}
        value={date}
        onChange={handleDateChange}
      />
    </Layout>
  );
}
