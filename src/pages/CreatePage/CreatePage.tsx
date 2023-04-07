import { Button, SimpleGrid, Text } from '@chakra-ui/react';
import { invoke } from '@tauri-apps/api/tauri';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface CustomResponse {
  message: string
}

const CraftPage: React.FC = () => {
  const [rustMsg, setRustMessage] = useState<string>('N/A')

  const {
    formState: { errors, isSubmitting },
  } = useForm()

  const callTauriBackend = async () => {
    const res: CustomResponse = await invoke('list_heroic_cultures');
    if (res !== undefined) {
      setRustMessage(res.message)
      console.info(rustMsg)
    }
  }

return (
  <SimpleGrid columns={2} spacing={5}>
      <Button onClick={callTauriBackend} mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Start Crafting
      </Button>
  </SimpleGrid>
)
}

export default CraftPage;
