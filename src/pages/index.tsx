import { GetStaticProps } from 'next';
import HomePage from '../containers/HomePage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

// Tipagem para props da home
export type HomeProps = {
  posts: PostData[];
};

// Component Principal
export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

// Implementa o Static Generation (SSG)
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=30');

  return {
    props: { posts },
    revalidate: 3, //segundos
  };
};
