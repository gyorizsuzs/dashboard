import React from "react";
/* import { createUseStyles } from "react-jss"; */
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import { Calendar, Card, CardHeader } from "@ui5/webcomponents-react";

/* const styles = {
  container: {
    backgroundColor: ThemingParameters.sapBackgroundColor,
    fontFamily: ThemingParameters.sapFontFamily,
    height: "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}; */

/* const useStyles = createUseStyles(styles); */

export const MyCalendar = () => {
  /* const classes = useStyles(); */

  return (
    <>
      <Card
        header={<CardHeader titleText="Calendar" subtitleText="" />}
        style={{
          width: "360px",
          ...spacing.sapUiContentPadding,
          color: ThemingParameters.sapNegativeColor,
          fontSize: ThemingParameters.sapFontHeader1Size,
        }}
      >
        <Calendar
          onSelectedDatesChange={function ka() {}}
          primaryCalendarType="Gregorian"
        />
      </Card>
    </>
  );
};
