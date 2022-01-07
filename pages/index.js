import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Divider
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/Layout/article";
import { IoLogoGithub, IoMailUnreadSharp, IoLogoLinkedin } from "react-icons/io5";


const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hello, I'm a first year software engineering student based in Ontario
          Canada!
        </Box>

        <Box disply={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" varient="page-title">
              Alvin Qian
            </Heading>
            <Divider my={6} />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Who am I?
          </Heading>
          <Paragraph>
            I'm a first year student at McMaster University pursuing Software
            Engineering. I'm passionate about developing applications mainly
            with React or Python. Currently, I am learning more about React and
            it's ecosystem (Next.js, testing, state-managment, and API calls).
            In the future, I want to explore mobile development (maybe with
            React Native) and backend development. At school, I am a memeber of
            the McMaster competitive programming club. Although I'm a beginner,
            my goal is to make the junior team for the International Collegiate
            Programming Contest (ICPC) provincials next year.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Painting, Music, Photography, Food</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect With Me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Alvin787" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Alvin787
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMailUnreadSharp} />}
              >
                alvinqian8@gmail.com
              </Button>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/alvin-qian-01716b1b4/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Alvin Qian
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
