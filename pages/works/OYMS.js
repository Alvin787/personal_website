import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="OYMS">
    <Container>
      <Title>
        Ontario Youth Medical Society <Badge>May 2021-Oct 2021</Badge>
      </Title>
      <P>
        I worked as a developer for the official website of the Ontario Youth
        Medical Society. I took the responsibility of designing and building the
        blog page, creating a responsive interface and pleasant user experience.
        I also developed the clean footer at the bottom of each page. By working
        alongside a team of 4 other people, we planned and iterated on designs
        using Notion. Overall, traffic to the site incresed by over 150%
        reaching over 250 users.
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
          <span>HTML, CSS, Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/dchung29/OYMSwebsite">
            Github Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/OYMS.png" alt="OYMS" />
      <WorkImage src="/images/works/OYMS2.png" alt="OYMS2" />
      <WorkImage src="/images/works/OYMS4.png" alt="OYMS4" />
      <WorkImage src="/images/works/OYMS3.png" alt="OYMS3" />
    </Container>
  </Layout>
);

export default Work;
