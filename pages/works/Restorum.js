import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="Restorum">
    <Container>
      <Title>
        Restorum <Badge>2021 Feb</Badge>
      </Title>
      <P>
        Built a React Native mobile application aiming to restore the environment through a social hub where people share how to
        restore/repair personal possessions. Log-in is facilitated through Firebase authentication, allowing users to use Gmail.
        Implemented CRUD functionally by using Firebase for storing and updating posts in the forum. Created dynamic renders
        such as post likes and post category filters.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DevPost</Meta>
          <Link href="https://devpost.com/software/restorum">
            DevPost Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Typescript, FireBase, FireBase Auth  </span>
        </ListItem>
        <ListItem>
          <Meta>Hackathon</Meta>
          <span>UofT Hacks IX</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/Alvin787/Restorum">
            Github Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rest0.png" alt="rest0" />
      <WorkImage src="/images/works/rest1.png" alt="rest1" />
      <WorkImage src="/images/works/rest2.jpg" alt="rest2" />
    </Container>
  </Layout>
);

export default Work;
