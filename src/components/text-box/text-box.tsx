import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

type PropTypes = {
  placeholder?: string;
};

export default function TextBox({ placeholder }: PropTypes) {
  const [isFocused, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  return (
    <TextInput
      className="  border-slate-400 border w-full p-2 rounded-md outline-none my-3 "
      placeholderTextColor="#94a3b8"
      placeholder={placeholder}
      style={[
        styles.textBoxStyle,
        { borderColor: isFocused ? "red" : "black" },
      ]}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

function TextBoxContainer({ children }) {
  return <View>{children}</View>;
}

const styles = StyleSheet.create({
  textBoxStyle: {
    fontFamily: "Opensans",
    fontSize: 20,
    padding: 10,
  },
});
