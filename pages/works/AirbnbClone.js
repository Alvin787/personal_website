import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="AirbnbClone">
    <Container>
      <Title>
        Airbnb Clone <Badge>2021 Sept</Badge>
      </Title>
      <P>
        This is a simple Airbnb web application that has a minimalistic landing
        page that leads to the main listings page. The listings and all related
        listing data are fetched using the Axios client from a free MongoDB
        database. The dataset used is MongoDB's built in dataset called
        "sample_airbnb".
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Chakra UI, MongoDB, Axios </span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/Alvin787/Airbnb-Clone">
            Github Link
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Airbnb.png" alt="Airbnb" />
      <WorkImage src="/images/works/Airbnb2.png" alt="Airbnb2" />
      <WorkImage src="/images/works/Airbnb3.png" alt="Airbnb3" />
    </Container>
  </Layout>
);

export default Work;
