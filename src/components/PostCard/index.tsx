import Image from 'next/image';
import Link from 'next/link';
import * as Styled from './styles';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export default function PostCard({ slug, title, cover }: PostCardProps) {
  return (
    <Styled.Container>
      <Styled.PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <Image src={cover} alt={title} width={660} height={300} />
          </a>
        </Link>
      </Styled.PostCardCover>

      <Styled.PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Styled.PostCardHeading>
    </Styled.Container>
  );
}
