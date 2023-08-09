import React from "react";
import {
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";

export function Detail() {
  return (
    <>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <img src="underConstruction.png" alt="site under construction" />
      </FlexBox>
    </>
  );
}
