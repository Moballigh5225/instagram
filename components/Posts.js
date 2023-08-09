import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithmobi",
      userImg:
        "http://m.gettywallpapers.com/wp-content/uploads/2023/06/Monkey-D.-Luffy-Avatar.jpg",
      img: "https://plus.unsplash.com/premium_photo-1690481525616-454bacd58537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption: "Sunset Picture",
    },
    {
      id: "2",
      username: "codewithanny",
      userImg:
        "http://m.gettywallpapers.com/wp-content/uploads/2023/06/Monkey-D.-Luffy-Avatar.jpg",
      img: "https://images.unsplash.com/photo-1690921822670-5929218ab41d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      caption: "Well its a sunny day !",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
