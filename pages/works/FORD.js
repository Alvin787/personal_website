import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="FORD">
    <Container>
      <Title>
         Ford Motor Company: Software Engineer Intern<Badge>April 2023 - Sep 2023</Badge>
      </Title>
      <P>
        Working on the Ford Technologies Solutions team to develop the Ford dealer portal that will be used in dealers across Ontario, Canada. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://oyms.org/">
            https://oyms.org/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, SpringBoot, Python, React, Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/OYMS.png" alt="OYMS" />
    </Container>
  </Layout>
);

export default Work;
