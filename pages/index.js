import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Flex, Text} from '@chakra-ui/react'
import Player from '../components/AudioPlayer'
import tracks from './tracks'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nexus Beats</title>
        <meta name="description" content="Nexus Beats" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <Box className={styles.wrapper}>
      <Flex align="center" justify="center" h='90vh' direction='column'>
        <Text color='white' fontSize='xx-large' fontWeight='medium'>Get Beats Made With Amazing Passion</Text>
        <Text color='white' fontSize='ms' fontWeight='medium'>Beats By Nexus</Text>
      </Flex>
    </Box>
     <Player tracks={tracks}/>

      
    </div>
  )
}
