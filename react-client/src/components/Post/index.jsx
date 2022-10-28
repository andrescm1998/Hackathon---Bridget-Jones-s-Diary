import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const theme = createTheme();

export default function Post({entry}){
    return(
        <div style={{borderBottom: "solid", margin: 10}}>
            <ThemeProvider theme={theme}>
                <Typography component="h2" variant="h4">{entry.title}</Typography>
                <Typography component="h2" variant="h5">{entry.content}</Typography>
                <Typography component="h2" variant="h6">{entry.date_created}</Typography>
            </ThemeProvider>
            <div style={{display: "flex"}}>
                <div>
                    <Button 
                    type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Update
                    </Button>
                </div>
                <div style={{marginLeft: 10}}>
                    <Button 
                    type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}
