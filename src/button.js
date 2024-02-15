import {Stack,Button}  from '@mui/material';

const Button1 = () => {
  return (
    <div id="container">
      <Button variant='text'>Text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>outlined</Button>

    <Stack  spacing={2} >
    <Button variant='text'>text</Button>
    <Button variant='contained' href="https://www.youtube.com">youtube</Button>
    <Button variant='outlined'>outlined</Button>
    </Stack>
</div>
  )
}

export default Button1
