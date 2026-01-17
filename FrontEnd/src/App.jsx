// import { useState } from 'react'
// import axios from 'axios'
// import {
//   Container,
//   Typography,
//   Box,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   CircularProgress,
//   CssBaseline,
//   createTheme,
//   ThemeProvider,
// } from '@mui/material'
// import './App.css'

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// })

// function App() {
//   const [emailContent, setEmailContent] = useState('')
//   const [tone, setTone] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [generatedReply, setGeneratedReply] = useState('')
//   const [errorMsg, setErrorMsg] = useState('')

//   const handleSubmit = async () => {
//     setLoading(true)
//     setErrorMsg('')
//     setGeneratedReply('')

//     try {
//       const response = await axios.post(
//         'http://localhost:8080/api/email/generate',
//         {
//           emailContent,
//           tone,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       )

//       setGeneratedReply(response.data)
//     } catch (error) {
//       console.error('API Error:', error.response?.data || error.message)
//       setErrorMsg('Failed to generate reply. Check backend logs.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container
//         maxWidth="sm"
//         sx={{
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Typography variant="h3" gutterBottom align="center">
//           Email Reply Generator
//         </Typography>

//         <Box sx={{ width: '100%', maxWidth: 500, mt: 3 }}>
//           <TextField
//             fullWidth
//             multiline
//             rows={6}
//             label="Original Email Content"
//             placeholder="Paste the email you received here..."
//             value={emailContent}
//             onChange={(e) => setEmailContent(e.target.value)}
//           />

//           <FormControl fullWidth sx={{ mt: 3 }}>
//             <InputLabel>Tone (Optional)</InputLabel>
//             <Select
//               value={tone}
//               label="Tone (Optional)"
//               onChange={(e) => setTone(e.target.value)}
//             >
//               <MenuItem value="">None</MenuItem>
//               <MenuItem value="professional">Professional</MenuItem>
//               <MenuItem value="casual">Casual</MenuItem>
//               <MenuItem value="friendly">Friendly</MenuItem>
//             </Select>
//           </FormControl>

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3 }}
//             onClick={handleSubmit}
//             disabled={loading || !emailContent}
//           >
//             {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
//           </Button>

//           {errorMsg && (
//             <Typography color="error" sx={{ mt: 2 }}>
//               {errorMsg}
//             </Typography>
//           )}

//           <TextField
//             fullWidth
//             multiline
//             rows={6}
//             sx={{ mt: 3 }}
//             label="Generated Reply"
//             value={generatedReply}
//             InputProps={{ readOnly: true }}
//           />

//           <Button
//             variant="outlined"
//             sx={{ mt: 2 }}
//             onClick={() => navigator.clipboard.writeText(generatedReply)}
//             disabled={!generatedReply}
//           >
//             Copy to Clipboard
//           </Button>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   )
// }

// export default App



import { useState } from 'react'
import axios from 'axios'
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from '@mui/material'

function App() {
  const [emailContent, setEmailContent] = useState('')
  const [tone, setTone] = useState('')
  const [loading, setLoading] = useState(false)
  const [generatedReply, setGeneratedReply] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setErrorMsg('')
    setGeneratedReply('')

    try {
      const response = await axios.post(
        'http://localhost:8080/api/email/generate',
        { emailContent, tone }
      )
      setGeneratedReply(response.data)
    } catch (error) {
      console.error(error)
      setErrorMsg('Failed to generate reply')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {/* Card */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#fff',
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // center children horizontally
          gap: 2,
        }}
      >
        <Typography variant="h4" align="center">
          Email Reply Generator
        </Typography>

        <TextField
          label="Original Email Content"
          multiline
          rows={5}
          fullWidth
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading || !emailContent}
          fullWidth
          sx={{
            mt: 2,
            background: 'linear-gradient(to right, #4caf50, #81c784)',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              background: 'linear-gradient(to right, #388e3c, #66bb6a)',
            },
          }}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>

        {errorMsg && (
          <Typography color="error" align="center">
            {errorMsg}
          </Typography>
        )}

        <TextField
          label="Generated Reply"
          multiline
          rows={5}
          fullWidth
          value={generatedReply}
          InputProps={{ readOnly: true }}
        />

        <Button
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(generatedReply)}
          disabled={!generatedReply}
          fullWidth
          sx={{
            mt: 1,
            borderColor: '#4caf50',
            color: '#4caf50',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#388e3c',
              backgroundColor: 'rgba(76, 175, 80, 0.08)',
            },
          }}
        >
          Copy to Clipboard
        </Button>
      </Box>
    </Container>
  )
}

export default App
