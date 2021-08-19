import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

// Faz a busca na api
const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('https://damp-anchorage-12027.herokuapp.com/posts');
  const jsonPosts = await posts.json();
  return jsonPosts;
};

// Tipagem para props da home
export type HomeProps = {
  posts: PostData[];
};

// Component Principal
export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </div>
  );
}

// Implementa o Static Generation (SSG)
export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();
  console.log(context);

  return {
    props: { posts },
    // revalidate: 60,
  };
};
