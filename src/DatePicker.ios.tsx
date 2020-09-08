import React from "react";
import { View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  initDate: Date;
  onDateSelected?: Function;
  disabled?: boolean;
  mode: string;
}

const DatePicker: React.FC<Props> = props => {
  const { initDate, onDateSelected, disabled, mode="date" } = props;
  return (
    <View pointerEvents={disabled ? "none" : "auto"}>
      <RNDateTimePicker
        value={initDate}
        onChange={(event, date) => {
          if (onDateSelected) onDateSelected(date)
        }}
        mode={mode}
        disabled={disabled}
      />
    </View>
  );
};

export default DatePicker;
