import { Text, View } from "react-native";
import posts from "~/assets/data/posts.json";

const post1 = posts[0];
export default function FeedScreen() {
  console.log(post1);
  return (
    <View className="bg-slate-600 flex-1 items-center justify-center m-10">
      <Text className="text-md md:text-5xl font-bold text-blue-500 md: text-red-500">
        Feed
      </Text>
    </View>
  );
}
