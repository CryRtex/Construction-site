/** @jsx jsx */
import { jsx, Box, Button, Container, Image } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import uber from 'assets/images/clients/uber.png';
import google from 'assets/images/clients/google.png';
import paypal from 'assets/images/clients/paypal.png';
import microsoft from 'assets/images/clients/microsoft.png';
import dribbble from 'assets/images/clients/dribbble.png';
import gca from 'assets/images/clients/gca.svg';
import seramik from 'assets/images/clients/kthya.png';
import kutahya from 'assets/images/clients/kutbo.svg';
import oztas from 'assets/images/clients/oztas.png';
import refsan from 'assets/images/clients/refsan.webp';

const clients = [
  {
    id: 1,
    name: 'gca',
    logo: gca,
  },
  {
    id: 2,
    name: 'seramik',
    logo: seramik,
  },
  {
    id: 3,
    name: 'kutbo',
    logo: kutahya,
  },
  {
    id: 4,
    name: 'oztas',
    logo: oztas,
  },
  {
    id: 5,
    name: 'refsan',
    logo: refsan,
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const Clients = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next" />,
    prevArrow: <SlickArrow control="prev" />,
    responsive: [
      {
        breakpoint: 100000,
        settings: 'unslick',
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeading 
          slogan="Referanslarımız"
          title="Hizmetlerimizi tercih eden bazı ortaklarımız."
          
        />
        <Slider sx={styles.clients} {...settings}>
          {clients?.map((client) => (
            <Box key={client.id} as="figure" sx={styles.logo}>
              <Image loading="lazy" src={client.logo} alt={client.name} />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    pt: [0, 0, 25, 25, 25, 6],
    '&.slick-slider': {
      marginBottom: '40px',
    },
    '.slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  logo: {
    display: 'flex !important',
    justifyContent: 'center',
    mx: '10px',
    ':focus': {
      outline: 'none',
    },
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};
