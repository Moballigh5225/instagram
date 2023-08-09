import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <main>
      <section>
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section>
        {/* mini profiles */}
        {/* Suggestions */}
      </section>
    </main>
  );
}
