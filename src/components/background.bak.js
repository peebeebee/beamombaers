import * as React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export default function Background({children}) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            file(relativePath: {eq: "slides/slide01.jpg"}) {
                id
                name
                sourceInstanceName
                relativePath
                childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP])
                }
            }
        }
    `);

    const image = getImage(data.file);

    console.log('image', image);

    return (
        <div className="background">
            <GatsbyImage image={image} alt="" />
            {children}
        </div>
    )
};