import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="Restorum">
    <Container>
      <Title>
        Restorum <Badge>2022 Sept</Badge>
      </Title>
      <P>
        Developed a full-stack web app that performs sentiment analysis to detect toxicity in user input text using NLP.
        Designed and built the front-end with Next.js and the Material-UI library for a minimal and accessible UX. 
        Connected an Express.js back-end to call on endpoints of co:here’s Natural Language Processing API which is 
        custom-trained using Kaggle data sets to 98% accuracy.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://civility.vercel.app/">
            https://civility.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>DevPost</Meta>
          <Link href="https://devpost.com/software/civility-v2fbel">
            DevPost Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Material-UI, Express.js, Cohere API  </span>
        </ListItem>
        <ListItem>
          <Meta>Hackathon</Meta>
          <span>Hack the North 2022</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/jeffzhan/civility">
            Github Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/civ0.png" alt="civ0" />
      <WorkImage src="/images/works/civ1.png" alt="civ1" />
    </Container>
  </Layout>
);

export default Work;
