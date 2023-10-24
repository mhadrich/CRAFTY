import React from "react";
import { useColorScheme } from "react-native";

import { Svg, Path } from "react-native-svg";

const Icon = () => {
  const color = useColorScheme();

  return (
    <Svg className="w-4 h-4 mr-4 mt-2" viewBox="0 0 6 8" fill="none">
      <Path
        d="M0.726562 7.06L3.7799 4L0.726562 0.94L1.66656 -4.10887e-08L5.66656 4L1.66656 8L0.726562 7.06Z"
        fill={color === "light" ? "#222222" : "#ffffff"}
      />
    </Svg>
  );
};
export default Icon;
