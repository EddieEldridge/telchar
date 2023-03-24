import { useDragonhelmStore } from '@/stores/useDragonhelmStore';
import { Text, Button, HStack, VStack, Image } from '@chakra-ui/react'
import React from 'react'

const CraftPage = () => {

  const {
    Dragonhelms,
    increaseDragonhelms,
    decreaseDragonhelms,
    removeAllDragonhelms
  } = useDragonhelmStore();

  return (
    <>
    <Image src="https://tolkiengateway.net/w/images/c/c8/Donato_Giancola_-_Telchar_forging_Narsil.jpg" width="200px"/>
    <VStack>
      <Text>Dragon-helms: {Dragonhelms}</Text>

      <HStack>
        <Button onClick={() => increaseDragonhelms()}>Craft Dragon-helm</Button>
        <Button onClick={() => decreaseDragonhelms()}>Destroy Dragon-helm</Button>
      </HStack>
      <Button onClick={() => removeAllDragonhelms()}>Destroy all Dragon-helm</Button>
    </VStack>
    </>
  )
}

export default CraftPage;
