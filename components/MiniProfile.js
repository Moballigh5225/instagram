export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between  mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Monkey-D.-Luffy-Avatar.jpg"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">codewithmobi</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
