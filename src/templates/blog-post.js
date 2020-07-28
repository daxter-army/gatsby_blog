import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import styled from 'styled-components'

const BlogBody = styled.div`
    font-size: 21px;
`

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <BlogBody dangerouslySetInnerHTML={{ __html: post.html}}/>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`