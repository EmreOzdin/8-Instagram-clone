import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";
import { supabase } from "~/src/lib/supabase";

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    let { data: posts, error } = await supabase.from("posts").select("*");
    if (error) {
      Alert.alert("Something went wrong");
    }
  };

  console.log(posts);

  return (
    <FlatList
      data={posts}
      //className="items-center"
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        width: "100%",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}

//youtube: notjustdev 2:23:05
