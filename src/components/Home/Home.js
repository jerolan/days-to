import React, { useRef } from 'react';
import Router from 'next/router';

import Layout from '../Layout';
import View from '../View';
import Col from '../Col';
import DatePicker from '../DatePicker';

import * as formatters from '../../formatters';

export default function Home(props) {
  const today = new Date();
  const date = props.url.query.d ? new Date(props.url.query.d) : new Date();
  const datesBetween = `${formatters.daysBetween(
    today,
    date
  )} Days to ${date.toDateString()}`;

  const inputRef = useRef(null);

  function handleDateChange(date) {
    if (!date) return Router.push('/');
    return Router.push(`/?d=${date.format('YYYY/MM/DD')}`);
  }

  function triggerDatePicker(event) {
    return inputRef.current.open(event);
  }

  return (
    <Layout
      title={datesBetween}
      description={`Comparing ${today.toDateString()} to ${date.toDateString()}`}
    >
      <View center="xs" middle="xs">
        <Col xs={12}>
          <p onClick={triggerDatePicker} className="h1">
            {datesBetween}
          </p>
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
