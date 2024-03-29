import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="ECO">
    <Container>
      <Title>
        McMaster EcoCar Team: Software Engineer<Badge>Sep 2022 - Present</Badge>
      </Title>
      <P>
        Currently working on the Connected and Automated Vehicles (CAVs) sub-team as a software engineer.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.macecocar.ca">
            https://www.macecocar.ca <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MATLAB, Simulink, Python</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
);

export default Work;
