import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="FED">
    <Container>
      <Title>
        Federation of Canadian Municipalities: Back-End Developer Intern<Badge>May 2022 - Aug 2022</Badge>
      </Title>
      <P>
        I worked on migrating a legacy grants and loans management solution to a modern SQL database system, increasing access and workflow efficiency by 94%.
        Furthermore, I improved data visualization and dashboard views using React.js to aid over 300+ employees within the Client and Funding Services team. This was implemented to display crucial information such as case file process time, fund disbursements, and performance metrics.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fcm.ca/en">
            https://fcm.ca/en <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SQL, HTML, CSS, Javascript, React</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
);

export default Work;
