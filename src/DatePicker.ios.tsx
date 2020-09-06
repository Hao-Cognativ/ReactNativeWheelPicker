import React from "react";
import { View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  value: Date;
  onChange: Function;
  disabled?: boolean;
}

const DatePicker: React.FC<Props> = props => {
  const { onChange, disabled } = props;
  return (
    <View pointerEvents={disabled ? "none" : "auto"}>
      <RNDateTimePicker
        onChange={(event, date) => {
          if (onChange) onChange(date)
        }}
        mode={'date'}
        {...props}
      />
    </View>
  );
};

export default DatePicker;
