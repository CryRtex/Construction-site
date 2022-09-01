/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/6.jpg';
import gallery2 from 'assets/images/gallery/7.jpg';
import gallery3 from 'assets/images/gallery/çelik.png';
import gallery4 from 'assets/images/gallery/10.jpg';
import gallery5 from 'assets/images/gallery/9.jpg';
import gallery6 from 'assets/images/gallery/13.jpg';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Çiftlikler ve Tarım Alanları',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Kompleks Yapılar',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Çok Katlı Binalar',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Ek Binalar',
  },
  {
    id: 6,
    image: gallery6,
    title: 'Ticari Yapılar',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Çalışma Alanları',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Uygulama Alanları"
          title="Hadi beraber çalışalım ve size uygun alanları inceleyelim."
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button}>
          Daha Fazla <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
