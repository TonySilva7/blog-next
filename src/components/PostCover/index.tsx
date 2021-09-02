import Image from 'next/image';
import { Container } from './styles';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  // return <Container src={coverUrl} alt={alt} />;
  return (
    <Container>
      <Image src={coverUrl} alt={alt} height={430} width={960} />
    </Container>
  );
};
