import {
   Body,
   Button,
   Container,
   Column,
   Head,
   Heading,
   Hr,
   Html,
   Img,
   Link,
   Preview,
   Row,
   Section,
   Tailwind,
   Text,
} from '@react-email/components'
import '@/app/globals.css'

import React from 'react'

interface Props {
   name?: string
   code?: string
}

export default function Verification({
   name = 'My Project',
   code = `12345`,
}: Props) {
   const previewText = `Verify your email.`

   return (
      <Html>
         <Head />
         <Preview>{previewText}</Preview>
         <Tailwind>
            <Body className="my-auto mx-auto w-full max-w-lg">
               <Container className="border border-solid border-neutral-500/25 rounded mx-auto p-6">
                  <Heading className="mt-0">Let's get you signed in</Heading>
                  <Text className="text-justify">
                     We use this easy sign-in code so you don't have to remember
                     or type in yet another long password.
                  </Text>
                  <div className="w-auto bg-neutral-500/5 border border-solid border-neutral-400/25 rounded-lg px-6">
                     <pre className="text-base text-center mx-auto">{code}</pre>
                  </div>
                  <Text className="text-justify">
                     If you didn't try to login, you can safely ignore this
                     email.
                  </Text>
                  <Hr className="border border-solid border-neutral-500/10 my-4 mx-0 w-full" />
                  <Text className="text-xs text-neutral-500/75">
                     © {new Date().getFullYear()} {name}™. All Rights Reserved.
                  </Text>
               </Container>
            </Body>
         </Tailwind>
      </Html>
   )
}
