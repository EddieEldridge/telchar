import { useAsteroidStore } from '@/stores/useAsteroidStore';
import { Text, Button, HStack, VStack, Image } from '@chakra-ui/react'
import React from 'react'

const ZustandPage = () => {

  const {
    asteroids,
    increaseAsteroids,
    decreaseAsteroids,
    removeAllAsteroids
  } = useAsteroidStore();

  return (
    <>
    <Image src="https://tolkiengateway.net/w/images/c/c8/Donato_Giancola_-_Telchar_forging_Narsil.jpg" width="200px"/>
    <VStack>
      <Text>Dragon-helms: {asteroids}</Text>

      <HStack>
        <Button onClick={() => increaseAsteroids()}>Add Dragon-helm</Button>
        <Button onClick={() => decreaseAsteroids()}>Remove Dragon-helm</Button>
      </HStack>
      <Button onClick={() => removeAllAsteroids()}>Remove all Dragon-helm</Button>
    </VStack>
    </>
  )
}

export default ZustandPage;
