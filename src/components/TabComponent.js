import {Tabs,Tab, Typography,Box} from '@material-ui/core';
import { useState } from 'react';

function TabComponent(){
    const [value , setValue ]=useState(0);

    const handleChange = (e,value)=>{
        setValue(value);
    }
function TabPanel(props){
    return(
        <Box>
            {props.value===props.index && (
                <Box>
                    <Typography>{props.children}</Typography>
                </Box>
            )}
        </Box>
    )

}

    return(
        <>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="One Day"/>
                <Tab label="20-20"/>
                <Tab label="Test"/>
            </Tabs>
            <TabPanel index={0} value={value}>
                One dAy

            </TabPanel>
            <TabPanel index={1} value={value}>
                20
            </TabPanel>
            <TabPanel index={2} value={value}>
                test
            </TabPanel>
        </>

    )
}

export default TabComponent;