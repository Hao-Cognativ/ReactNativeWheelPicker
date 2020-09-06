import React from "react";
import DatePicker from './DatePicker.ios'

interface Props {
  value: Date;
  onChange: Function;
  disabled?: boolean;
}

const TimePicker: React.FC<Props> = props => {
  return (
    <DatePicker mode={'time'} {...props} />
  );
};

export default TimePicker;
