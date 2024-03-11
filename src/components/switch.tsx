import { useEffect, useRef } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useEvent,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";

type Proptype = {
  value?: boolean;
  onchange?: () => void;
};

export default function Switch({ value, onchange }: Proptype) {
  const sv = useSharedValue(value ? 1 : 0);
  //const isOn = useRef(false);

  // const handlePress = () => {
  //   if (isOn.current) {
  //     sv.value = withTiming(0);
  //     isOn.current = false;
  //   } else {
  //     sv.value = withTiming(1);
  //     isOn.current = true;
  //   }
  // };

  const Animated = function (value: boolean) {
    if (value) {
      sv.value = withTiming(1);
    } else {
      sv.value = withTiming(0);
    }
  };

  useEffect(() => {
    Animated(value);
  }, [value]);

  const handlePress = () => {
    if (typeof onchange === "function") {
      onchange();
    }
  };

  const CircleAnimeStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#ffffff", "#1976d2"]
      ),
      transform: [
        {
          translateX: sv.value * 16,
        },
      ],
    };
  });

  const BarAnimeStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#94a3b8", "#8abbfd"]
      ),
    };
  });

  return (
    //<View className=" w-40 h-40 bg-yellow-300 justify-center items-center">
    <YellowBox>
      <Pressable className=" my-9" onPress={handlePress}>
        <Bar style={BarAnimeStyle}>
          <Circle style={CircleAnimeStyle}></Circle>
        </Bar>
      </Pressable>
    </YellowBox>
    //</View>
  );
}

const YellowBox = styled.View`
  width: 192px;
  height: 192px;
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;

//className=" justify-center w-12 h-6 rounded-2xl bg-slate-400"
function Bar({ children, style }) {
  return (
    <Animated.View style={[Styles.barStyle, style]}>{children}</Animated.View>
  );
}

//className="w-7 h-7 rounded-full bg-white "
function Circle({ style }) {
  return (
    <Animated.View
      style={[Styles.circleStyle, shadowStyle, style]}
    ></Animated.View>
  );
}

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

const Styles = StyleSheet.create({
  circleStyle: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: "white",
    marginLeft: 1,
  },
  barStyle: {
    width: 40,
    height: 25,
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "grey ",
  },
});
