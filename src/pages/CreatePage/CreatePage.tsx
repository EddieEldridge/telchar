import { BoxAction, BoxFieldset } from '@/pages/CreatePage/components';
import { Button, SimpleGrid, Text } from '@chakra-ui/react';
import { invoke } from '@tauri-apps/api/tauri';
import React, { useState } from 'react';
import { IoLogInOutline } from 'react-icons/io5';

interface CustomResponse {
  message: string
}

const CraftPage: React.FC = () => {
  const [rustMsg, setRustMessage] = useState<string>('N/A')

  const callTauriBackend = async () => {
    const res: CustomResponse = await invoke('get_file_checksum');
    if (res !== undefined) {
      setRustMessage(res.message)
    }
  }

return (
  <SimpleGrid columns={2} spacing={5}>
    <BoxAction title="Message to backend" icon={IoLogInOutline}>
      <Text>Hello World from Tauri Typescript React!</Text>

      <BoxFieldset label="Action">
        <Button onClick={callTauriBackend} width="100%">Get message from rust backend</Button>
      </BoxFieldset>
      <BoxFieldset label="Response">
        {rustMsg && (
          <h2>{rustMsg}</h2>
        )}
      </BoxFieldset>

    </BoxAction>
  </SimpleGrid>
)
}

export default CraftPage;
