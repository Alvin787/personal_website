import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <Layout title="Goodreads Book Catalogue">
    <Container>
      <Title>
        Goodreads Book Catalogue Generator <Badge>2021 June</Badge>
      </Title>
      <P>
        This application parses through a large CSV file containing a Kaggle
        dataset storing more than 19,000 unique books. It Filters the dataset to
        create a dictionary data structure leaving only crucial information
        about each book that readers would care about (title, author, genre,
        etc...). It them writes to a text file containing a formatted and sorted
        book catalougue that is pleasant to read.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, CSV module</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/Alvin787/Book-Catalogue-Generator">
            Github Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/book.png" alt="book" />
      <WorkImage src="/images/works/book2.png" alt="book2" />
      <WorkImage src="/images/works/book3.png" alt="book3" />
    </Container>
  </Layout>
);

export default Work;
