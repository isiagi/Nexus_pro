import React, {useState, useRef} from 'react'
import {Box, Button, Flex, Text} from '@chakra-ui/react'
import Image from 'next/image'

import img from '../assets/images/po.jpg'

import Hey from '../assets/audio/Hey.mp3'

const songs = ['Hey', 'ukalele'];

let songIndex = 0

let iniatialPla = songs[songIndex]




const Player = () => {
    const [play, setPlay] = useState(false)
    let player = React.createRef(null)

    const loadPlay = (iniatialPlay) => {
        console.log('====================================');
        console.log(player.src);
        console.log('====================================');
        // player.current.src=`${iniatialPlay}.mp3`
    }
    
    loadPlay(iniatialPla)

    
    const handlePlay = () => {
        
       player.play()
        setPlay(true);
    }

    const handlePause = () => {
        player.pause()
        setPlay(false);
    }
    return (
        <Flex className='music-container play'>
            <Box className='music-info'>
                <Text>Hello</Text>
                <Box className='progress-container'>
                    <Box className='progress'/>
                </Box>
            </Box>
            <audio src={Hey} ref={(input) => {player = input}} />
            <Box className='img-container'>
                <Image src={img} alt='hello' />
            </Box>
            <Box className='navigation'>
                <Button className='action-btn'>Pre</Button>
                <Button className='action-btn action-btn-big' onClick={play ? handlePause : handlePlay }>{play ? 'Pause' : 'Play'}</Button>
                <Button className='action-btn'>Next</Button>
            </Box>
        </Flex>
    )
}

export default Player