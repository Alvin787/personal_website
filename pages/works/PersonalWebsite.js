import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/Layout/article";

const Work = () => (
  <>
    <Layout title="PersonalWebsite">
      <Container>
        <Title>
          Personal Website <Badge>2021 Dec</Badge>
        </Title>
        <P>
          I created this personal website to strengthen my ability with React.
          Next.js is a React framework with server side rendering and many other
          cool features. Chakra UI is a simple and modular component library I
          used to style this website. Framer Motion animation library is used
          for transistions and animation on the website. In order to create the
          3D voxel model, I used MagicaVoxel to build it, then imported in
          Blender to export as .glb file format. To display the voxel I used a
          3D library called Three.js to load the model accordingly.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Chakra UI, Three.js, Framer Motion</span>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>MagicaVoxel, Blender</span>
          </ListItem>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="">
              Github Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  </>
);

export default Work;
