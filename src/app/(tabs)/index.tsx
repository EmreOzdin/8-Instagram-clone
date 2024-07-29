import { FlatList } from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";

const post1 = posts[0];
export default function FeedScreen() {
  console.log(post1);
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      keyExtractor={(post) => post.id}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

//youtube: notjustdev
