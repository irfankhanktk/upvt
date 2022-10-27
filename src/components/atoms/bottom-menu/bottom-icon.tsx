//core
import * as React from "react";
import { mvs } from "../../../config/metrices";
import * as images  from "../../../assets/icons";

//this component is used to retirn icon for bottom tab bar
export default function BottomMenuIcon({name,focused}:any) {
  const TabBarIconsComponent = images[name + ((focused && "active") || "")];
  return <TabBarIconsComponent height={mvs(21)} width={mvs(21)} />;
}