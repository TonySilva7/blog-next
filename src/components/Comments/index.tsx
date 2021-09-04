import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styles';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="meu-blog-next"
        config={{
          url: `https://blog-next-tony.netlify.app/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
