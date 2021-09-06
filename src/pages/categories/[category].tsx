import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

// Tipagem para props da home
export type CategoryProps = {
  posts: PostData[];
  category: string;
};

// Component Principal
export default function Category({ posts, category }: CategoryProps) {
  return <HomePage posts={posts} category={category} />;
}

// Implementa o Server Side Rendering (SSR)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getAllPosts(
    `_sort=id:desc&_start=0&_limit=30&category.name_contains=${context.query.category}`,
  );

  return {
    props: {
      posts,
      category: context.query.category,
    },
  };
};
