import React from 'react';
import { DatePicker } from 'material-ui-pickers';

export default function _DatePicker({ datePickerRef, ...props }) {
  return <DatePicker ref={datePickerRef} {...props} />;
}
