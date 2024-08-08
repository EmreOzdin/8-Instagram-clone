import { Text, Pressable } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void; // Function to be called when the button is pressed.
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-blue-500 w-full p-3 items-center rounded-md"
    >
      <Text className="text-white font-semibold">{title}</Text>a{" "}
    </Pressable>
  );
}
