import { Heading, Stack } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Stack
      // bgImage={'url(/hero-background.jpg)'}
      // bgPosition={'center'}
      bg='blackAlpha.900'
      h='40vh'
      w='100%'
      bgRepeat='no-repeat'
      bgSize='cover'
      justify='center'
      gap={10}
    >
      <Stack
        align='center'
      >
        <Heading
          as='h1'
          color='white'
        >
          Las mejores películas para All Nightear
        </Heading>
        <Heading
          as='h2'
          color='gray.600'
          size='md'
        >
          Buscá información para empezar tu jornada 8pm 4am.
        </Heading>
      </Stack>
    </Stack>
  )
}
