import React, { useState, useRef } from 'react';

import Layout from '../Layout';
import View from '../View';
import Col from '../Col';
import Button from '../Button';

import { daysBetween } from '../../formatters';

export default function Home() {
  const today = new Date();
  const inputRef = useRef(null);
  const [date, setDate] = useState(new Date());

  function handleDateChange(event) {
    const value = event.target.value;
    if (value !== '') return setDate(new Date(event.target.value));
  }

  return (
    <Layout>
      <View center="xs" middle="xs">
        <Col xs={12}>
          <p className="h1">{`${daysBetween(today, date)} Days`}</p>
        </Col>
        <Col xs={12}>
          <Button>
            <input
              ref={inputRef}
              onChange={handleDateChange}
              value={date}
              type="date"
            />
          </Button>
        </Col>
      </View>
    </Layout>
  );
}
