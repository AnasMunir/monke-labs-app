import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { HomeIcon, HeartIcon, CartIcon, ChartIcon, ProfileIcon } from '../../components/Icon';
import { Cart, OrderNow } from '../../features';

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
  { title: 'Home', icon: HomeIcon, styles: {}, content: <OrderNow /> },
  { title: 'Favorites', icon: HeartIcon, styles: {}, content: <p>Favorites</p> },
  {
    title: 'Cart',
    icon: CartIcon,
    styles: { background: 'black', borderRadius: '50%', padding: '16px' },
    content: <Cart />,
  },
  { title: 'Chart', icon: ChartIcon, styles: {}, content: <p>Chart</p> },
  { title: 'Profile', icon: ProfileIcon, styles: {}, content: <p>Profile</p> },
];

const Home: FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <Box height={{ base: '100%', md: '100vh' }}>
      <Tabs isFitted variant='primary' height='100%' width='100%' onChange={(index) => setActiveTabIndex(index)}>
        <TabList
          flexDirection={{ base: 'row', md: 'column' }}
          float={{ md: 'left' }}
          height='100%'
          zIndex={100}
          background='brand.gray.600'
          position='fixed'
          sx={{
            '@media (max-width: 768px)': {
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              width: '100%',
              height: '70px',
            },
          }}>
          {tabs.map(({ title, icon, styles }, tabIndex) => (
            <Tab key={title} sx={tabStyle}>
              <Box sx={{ ...styles }}>
                <Icon
                  as={icon}
                  color={activeTabIndex === tabIndex ? 'brand.primary.700' : 'brand.gray.400'}
                  fill={activeTabIndex === tabIndex ? 'brand.primary.700' : 'brand.gray.400'}
                  stroke='brand.primary.700'
                  width={30}
                  height={29}
                />
              </Box>
            </Tab>
          ))}
        </TabList>

        <TabPanels marginLeft={{ md: '100px' }} marginBottom='100px' maxWidth='900px'>
          {tabs.map(({ title, content }) => (
            <TabPanel key={title}>{content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
