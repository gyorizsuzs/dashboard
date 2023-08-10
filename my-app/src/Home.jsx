import React from "react";
import {
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { MyCalendar } from "./components/MyCalendar";
import { ChartCard } from "./components/ChartCard";
import { ProgressCard } from "./components/ProgressCard";
import { UserTableCard } from "./components/UserTableCard";

export function Home() {
  return (
    <>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <MyCalendar />

        <ChartCard />

        <ProgressCard />

        <UserTableCard />
      </FlexBox>
    </>
  );
}
