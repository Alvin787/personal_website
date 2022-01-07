import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/Layout/article";

import OYMS from "../public/images/works/OYMS.png";
import fit0 from "../public/images/works/fit0.png";
import Airbnb2 from "../public/images/works/Airbnb2.png";
import book2 from "../public/images/works/book2.png";
import websitepic from "../public/images/works/websitepic.png";


const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Work Experience
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="OYMS" title="OYMS" thumbnail={OYMS}>
              The official website for the Ontario Youth Medical Society
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="PersonalWebsite"
              thumbnail={websitepic}
              title="Personal Website"
            >
              My personal portfolio website
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="fitConnect" thumbnail={fit0} title="fitConnect">
              A social media web app that connects users through fitness
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="AirbnbClone"
              thumbnail={Airbnb2}
              title="Airbnb Clone"
            >
              Minimalistic home page that displays Airbnb listings
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="Goodreads"
              thumbnail={book2}
              title="Goodreads Book Catalogue"
            >
              A Tool that formats a CSV of book data into a formatted catalogue
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
