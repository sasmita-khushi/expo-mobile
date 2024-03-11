import { Text, View, Switch } from "react-native";
import Switch_ from "../components/switch";
import { useState } from "react";

export default function Home() {
  const [on, setOn] = useState(false);
  const onSwitchChange = () => {
    setOn(!on);
  };
  return (
    <View className=" flex flex-1 justify-center items-center ">
      <Switch_ value={on} onchange={onSwitchChange} />
      <Switch />
    </View>
  );
}
