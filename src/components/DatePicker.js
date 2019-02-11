import React from 'react';
import { DatePicker } from 'material-ui-pickers';

export default function _DatePicker(props) {
  return <DatePicker ref={props.datePickerRef} {...props} />;
}
