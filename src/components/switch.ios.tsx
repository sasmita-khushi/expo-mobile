import { Text } from "react-native";
import { useRef } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Switch() {
  const sv = useSharedValue(0);
  const handlePress = () => {
    sv.value = withTiming(1, { duration: 200 });
  };

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sv.value * 100 }],
    };
  });
  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        className=" w-20 h-20 bg-red-700"
        style={boxStyle}
      ></Animated.View>
    </Pressable>
  );
}
