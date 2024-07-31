import { FlatList } from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";


export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      className=""
      renderItem={({ item }) => <PostListItem post={item} />}
      keyExtractor={(post) => post.id}
      contentContainerStyle={{ gap: 10, maxWidth: 512, width: "100%" }}
      showsVerticalScrollIndicator={false}
    />
  );
}

//youtube: notjustdev 1:40:00
