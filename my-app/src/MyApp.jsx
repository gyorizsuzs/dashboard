import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  CustomListItem,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

export function MyApp() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);
  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
  };
  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";
  return (
    <div>
      <ShellBar
        logo={<img src="reactLogo.png" />}
        profile={
          <Avatar>
            <img src="profilePictureExample.png" />
          </Avatar>
        }
        primaryTitle="My App"
      >
        <ShellBarItem icon={addIcon} text="Add" />
      </ShellBar>

      <Card
        header={
          <CardHeader
            titleText="Stock Prices"
            subtitleText={`Click here to switch to ${switchToChart}`}
            interactive
            onClick={handleHeaderClick}
            avatar={
              <Icon
                name={
                  toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                }
              />
            }
          />
        }
        style={{ width: "300px" }}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {toggleCharts === "lineChart" ? (
          <LineChart
            dimensions={[{ accessor: "month" }]}
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dataset={dataset}
            loading={loading}
          />
        ) : (
          <BarChart
            dimensions={[{ accessor: "month" }]}
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dataset={dataset}
            loading={loading}
          />
        )}
      </Card>

      <Card
        header={
          <CardHeader
            titleText="Progress"
            subtitleText="List"
            avatar={<Icon name={listIcon} />}
          />
        }
        style={{ width: "300px" }}
      >
        <List>
          <StandardListItem
            additionalText="finished"
            additionalTextState={ValueState.Success}
            style={{ width: "100%", ...spacing.sapUiContentPadding }}
          >
            Activity 1
          </StandardListItem>
          <StandardListItem
            additionalText="failed"
            additionalTextState={ValueState.Error}
            style={{ width: "100%", ...spacing.sapUiContentPadding }}
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
                  Activity 3
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

      <Card
        header={
          <CardHeader
            titleText="AnalyticalTable"
            avatar={<Icon name={tableViewIcon} />}
          />
        }
        style={{ maxWidth: "900px" }}
      >
        <AnalyticalTable />
      </Card>
    </div>
  );
}
