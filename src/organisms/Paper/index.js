import { Paper } from "@mui/material"

const SimplePaper=(props)=>{
    return(
        <Paper variant="outlined" square>
            {props.children}
        </Paper>
    )
}

export default SimplePaper