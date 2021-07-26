import React from 'react';
import { graphql } from 'gatsby';

// bootstrap
import { Container, Row } from 'react-bootstrap';

import { BlogPostItem, Layout, SEO } from '../../components';

import * as classes from './BlogPage.module.css';

const BlogPage = ({ data }) => {
  // sort posts by date
  const posts = data.allMdx.nodes.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return (
    <Layout>
      <SEO title="Blog" />
      <Container fluid className={classes.container}>
        <Row>
          {posts.map((post, idx) => (
            <BlogPostItem key={post.id} post={post} feature={idx === 0} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        id
        body
        excerpt
        frontmatter {
          coverImage
          date
          title
          subtitle
        }
      }
    }
  }
`;
