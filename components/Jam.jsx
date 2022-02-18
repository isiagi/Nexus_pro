import { Box, Button, Flex, Text } from '@chakra-ui/react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../assets/audio/Hey.mp3';

const Playe = () => {
  return (
    <Box style={{ maxWidth: '900px', margin:'0 auto' }}>
      <AudioPlayer src={song} autoPlay />
    </Box>
  );
};

export default Playe;
