import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FC } from 'react';
import { HomeIcon, HeartIcon, CartIcon, ChartIcon, ProfileIcon } from '../../components/Icon';

const tabStyle = {
  '@media (max-width: 480px)': {
    _selected: {
      borderTop: '2px solid',
      borderColor: 'brand.primary.500',
    },
  },
  '@media (min-width: 768px)': {
    _selected: {
      borderRight: '2px solid',
      borderColor: 'brand.primary.500',
    },
  },
};

const tabs = [
  { title: 'Home', icon: HomeIcon, styles: {}, content: <p>Home</p> },
  { title: 'Favorites', icon: HeartIcon, styles: {}, content: <p>Favorites</p> },
  {
    title: 'Cart',
    icon: CartIcon,
    styles: { background: 'black', borderRadius: '50%', padding: '16px' },
    content: <p>Cart</p>,
  },
  { title: 'Chart', icon: ChartIcon, styles: {}, content: <p>Chart</p> },
  { title: 'Profile', icon: ProfileIcon, styles: {}, content: <p>Profile</p> },
];

const Home: FC = () => {
  return (
    <Box height={{ base: '100%', md: '100vh' }}>
      <Tabs isFitted variant='primary' height='100%'>
        <TabList
          flexDirection={{ base: 'row', md: 'column' }}
          float={{ md: 'left' }}
          height={{ md: '100%' }}
          sx={{
            '@media (max-width: 768px)': {
              position: 'fixed',
              bottom: 0,
              width: '100%',
              height: '100px',
            },
          }}>
          {tabs.map(({ title, icon, styles }) => (
            <Tab key={title} sx={tabStyle}>
              <Box sx={{ ...styles }}>
                <Icon as={icon} />
              </Box>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map(({ title, content }) => (
            <TabPanel key={title}>{content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
