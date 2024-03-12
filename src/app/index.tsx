import { Text, View, Switch } from "react-native";
import TextBox from "../components/text-box";
import Switch_ from "../components/switch";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function Home() {
  const [on, setOn] = useState(false);

  const onSwitchChange = () => {
    setOn(!on);
  };
  return (
    <View className=" flex flex-1 justify-center items-center p-5">
      <Switch_ value={on} onchange={onSwitchChange} />
      <TextBox placeholder="write something.." />
      <TextBox placeholder="write something.." />
      <Text style={{ marginTop: 20, fontFamily: "Truculenta", fontSize: 40 }}>
        {" "}
        hii khushi{" "}
      </Text>
      <Text style={{ marginTop: 20, fontFamily: "Medimi", fontSize: 40 }}>
        {" "}
        hii khushi{" "}
      </Text>
      <Text style={{ marginTop: 20, fontFamily: "Opensans", fontSize: 40 }}>
        {" "}
        hii khushi{" "}
      </Text>
    </View>
  );
}
