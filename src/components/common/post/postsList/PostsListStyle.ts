import styled from 'styled-components';

export const PostsWrapper = styled.section<{ pageType: string }>`
  margin: 0px auto 80px;
  padding-top: 120px;

  & > p {
    margin-bottom: 30px;
    font-size: 18px;
  }

  & > p::after {
    content: '';
    display: block;
    width: ${({ pageType }) => (pageType === '게시글' ? '49px' : '70px')};
    height: 1px;
    margin-top: 8px;
    background: var(--fg);
  }

  @media (max-width: 1920px) {
    width: 1000px;
  }

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 450px;
  }
`;