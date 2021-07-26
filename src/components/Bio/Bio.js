import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from './Bio.module.css';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className={classes.bio}>
      <p>
      <StaticImage
        imgStyle={{ borderRadius: "50%" }}
        layout="fixed"
        src="../../images/GlennMurray.jpg"
        quality={95}
        width={70}
        height={70}
        alt="Glenn Murray"
      />
      </p>
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          <a href={`${social?.linkedin || ``}`}>CV</a>
          <p>
          {`Here's my latest `}
          <Link to="/blog/key-west-2021">
            think piece.
          </Link>
          </p>
        </p>
      )}
    </div>
  )
}



export default Bio
