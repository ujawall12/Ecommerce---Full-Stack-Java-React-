import React from "react";
import {Box, Button, Grid, Typography} from "@mui/material";

export default function Footer() {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                  container
                  sx={{bgColor: 'black', color: 'white', py: 3}}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> About </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Blog </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Press </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> jobs </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Partners </Button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Solutions </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Marketing </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Analytics </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Commerce </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Insights </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Support </Button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Documentation </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Guides </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> API Status </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Legal </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Claim </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Privacy </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton> Terms </Button>
                    </div>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <div>
                        <Typography variant="body2" component='p' align='center'>
                            &copy; 2024 GDG Company pvt.ltd, All rights reserved.
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2" component='p' align='center'>
                            Made with ❤️ by Ujawall Dwivedi. Icons made by Freepic.
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2" component='p' align='center'>
                            Built and maintained by Ujawall Dwivedi.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}