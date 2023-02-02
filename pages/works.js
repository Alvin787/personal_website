import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/Layout/article";

import OYMS from "../public/images/works/OYMS.png";
import fit0 from "../public/images/works/fit0.png";
import Airbnb2 from "../public/images/works/Airbnb2.png";
import book2 from "../public/images/works/book2.png";
import websitepic from "../public/images/works/websitepic.png";
import Ford from "../public/images/works/Ford.png";
import ECOlogo from "../public/images/works/ECOlogo.jpeg";
import FED from "../public/images/works/FED.png";
import civ0 from "../public/images/works/civ0.png";
import restlogo from "../public/images/works/restlogo.png";


const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Work Experience
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="FORD" title="Ford Motor Company: Software Engineer Intern" thumbnail={Ford}>
              Working on the Ford Technologies Solutions team 
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="ECO" title="McMaster EcoCar Team: Software Engineer" thumbnail={ECOlogo}>
              Connected and Automated Vehicles (CAVs) sub-team engineer
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="FED" title="Federation of Canadian Municipalities: Back-End Developer Intern" thumbnail={FED}>
              Developing the back-end for the Grants and Loans Management team
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="OYMS" title="OYMS: Front-End Developer Intern" thumbnail={OYMS}>
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
              id="Civility"
              thumbnail={civ0}
              title="Civility"
            >
              An NLP-based text analysis web application that can help you develop and more importantly keep a healthy online presence
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="Restorum"
              thumbnail={restlogo}
              title="Restorum"
            >
              Restore the environment through a social hub where people share how to restore/repair personal possessions
            </WorkGridItem>
          </Section>
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
              A social media web app that connects users through fitness goals
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="AirbnbClone"
              thumbnail={Airbnb2}
              title="Airbnb Clone"
            >
              Minimalistic home page re-creation that displays Airbnb listings and property data
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
