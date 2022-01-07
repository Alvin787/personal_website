import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="fitConnect">
    <Container>
      <Title>
        fitConnect <Badge>2021 Sept</Badge>
      </Title>
      <P>
        Developed a React web application that uses the chatengine.io API to
        connect users with similar fitness goals. The app incorporates a live
        group chat function and profile forum to view other users, all displayed
        on a fluid user interface. Firebase authentication service is
        implemented to allow users to login with their Gmail account. On the
        forum, I fetched user data from the Chat Engine API to display profile
        information of logged in users.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DevPost</Meta>
          <Link href="https://devpost.com/software/fitconnect-fopluj?ref_content=user-portfolio&ref_feature=in_progress">
            DevPost Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase Auth, chatengine.io API </span>
        </ListItem>
        <ListItem>
          <Meta>Hackathon</Meta>
          <span>Hack the North 2021</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/Alvin787/fitConnect">
            Github Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fit0.png" alt="fit0" />
      <WorkImage src="/images/works/fit3.png" alt="fit3" />
      <WorkImage src="/images/works/fit2.png" alt="fit2" />
      <WorkImage src="/images/works/fit.png" alt="fit" />
    </Container>
  </Layout>
);

export default Work;
