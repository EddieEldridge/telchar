import { Button, Image, SimpleGrid } from '@chakra-ui/react'
import { BoxAction, BoxFieldset } from './CreatePage/components';
import { IoLogInOutline } from 'react-icons/io5';
import { invoke } from '@tauri-apps/api';
import { useState } from 'react';

interface CustomResponse {
    message: string
}


const ValidatePage = () => {
    const [rustMsg, setRustMessage] = useState<string>('N/A')

    const callTauriBackend = async () => {
        const res: CustomResponse = await invoke('get_file_checksum');
        if (res !== undefined) {
          setRustMessage(res.message)
        }
    }


    return (
        <>
            {/* <Image src="./src/assets/images/tharbad.jpeg"/> */}
            <h1>Validate</h1>

            <SimpleGrid columns={2} spacing={5}>
                <BoxAction title="Message to backend" icon={IoLogInOutline}>
                {/* <Text>Hello World from Tauri Typescript React!</Text> */}

                <BoxFieldset label="Action">
                    <Button onClick={callTauriBackend} width="100%">Validate PDF</Button>
                </BoxFieldset>
                <BoxFieldset label="Response">
                    {rustMsg && (
                    <h2>{rustMsg}</h2>
                    )}
                </BoxFieldset>

                </BoxAction>
            </SimpleGrid>
        </>
    )
}

export default ValidatePage;