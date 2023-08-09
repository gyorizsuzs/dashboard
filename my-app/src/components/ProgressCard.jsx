import React from "react";
import { useNavigate } from "react-router-dom";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import {
  Card,
  CardHeader,
  CustomListItem,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Icon,
  List,
  ProgressIndicator,
  StandardListItem,
  Text,
  ValueState,
} from "@ui5/webcomponents-react";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";

export function ProgressCard() {
  const navigate = useNavigate();
  const handleProgressHeaderClick = () => {
    navigate("/detail");
  };
  return (
    <>
      <Card
        header={
          <CardHeader
            titleText="Progress"
            subtitleText="List"
            avatar={<Icon name={listIcon} />}
            interactive
            onClick={handleProgressHeaderClick}
          />
        }
        style={{
          width: "360px",
          ...spacing.sapUiContentPadding,
          color: ThemingParameters.sapNegativeColor,
          fontSize: ThemingParameters.sapFontHeader1Size,
        }}
      >
        <List>
          <StandardListItem
            additionalText="finished"
            additionalTextState={ValueState.Success}
            style={{
              width: "100%",
              ...spacing.sapUiContentPadding,
            }}
          >
            Activity 1
          </StandardListItem>
          <StandardListItem
            additionalText="failed"
            additionalTextState={ValueState.Error}
            style={{
              width: "100%",
              ...spacing.sapUiContentPadding,
            }}
          >
            Activity 2
          </StandardListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{ width: "100%", ...spacing.sapUiContentPadding }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                  Activity 3
                </Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  in progress
                </Text>
              </FlexBox>
              <ProgressIndicator
                value={89}
                valueState={ValueState.Success}
                style={{ ...spacing.sapUiTinyMarginTop }}
              />
            </FlexBox>
          </CustomListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{ width: "100%", ...spacing.sapUiContentPadding }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                  Activity 4
                </Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  in progress
                </Text>
              </FlexBox>
              <ProgressIndicator
                value={5}
                valueState={ValueState.Error}
                style={{ ...spacing.sapUiTinyMarginTop }}
              />
            </FlexBox>
          </CustomListItem>
        </List>
      </Card>
    </>
  );
}
