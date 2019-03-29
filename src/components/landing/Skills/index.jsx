import React, { useContext } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, ThemeContext } from 'Common'
import Skill from './Skill'
import { Wrapper, Tech, Flex } from './styles'

export const Skills = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <StaticQuery
      query={graphql`
        query {
          skills: allSkillsYaml {
            edges {
              node {
                id
                title
                icon
              }
            }
          }
        }
      `}
      render={({ skills }) => (
        <Wrapper theme={theme}>
          <Container>
            <h2>What he does</h2>
            <Flex>
              {skills.edges.map(({ node }) => (
                <Skill key={node.id} {...node} />
              ))}
            </Flex>
          </Container>
        </Wrapper>
      )}
    />
  )
}
