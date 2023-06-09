import React from 'react'
import './Home.scss'
import Navbar from '../Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BsCurrencyDollar } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
const Home = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='my-job-parent'>
      <div>
        <div className='Title-my-job'>
          <div>
            <h1>Matalab Roboto</h1>
          </div>
          <div>
            <p>Please Select the Field</p>
          </div>
          <div className='cata'>
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label2">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                  id="demo-simple-select2"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem >Programming</MenuItem>
                  <MenuItem >Graphics Designing</MenuItem>
                  <MenuItem >UI Ux</MenuItem>
                  <MenuItem >Marketing</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sub-Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Web developmetn</MenuItem>
                  <MenuItem value={20}>Andriod Development</MenuItem>
                  <MenuItem value={30}>Game Development</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          </div>
          </div>
          <div className='description-section'>
            <p className='description-title'>Description of the job</p>
            <p className='description-detail'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, molestias quos? Optio omnis, obcaecati quam in error beatae nihil quisquam, velit reiciendis magnam odit voluptatum dolor ad earum fugit autem explicabo assumenda qui? Perspiciatis tempora a aspernatur neque magni explicabo.</p>
          </div>
        

        {/* BUDJEt SECTION START HERE */}

<div style={{border:'1px solid #ddd', padding:'20px'}}>
<div className='budget-parent' >
          <div style={{display:'flex',gap:'5px'}}>
            <div>
              <BsCurrencyDollar />
            </div>
            <div>
              <h3>$5000</h3>
              <p style={{margin:'5px 0 0 0'}}>Fixed Price</p>
            </div>
          </div>
          <div style={{display:'flex',gap:'5px'}}>
            <div>
              <AiOutlineFieldTime />
            </div>
            <div>
              <h3>Less than 30hrs/week</h3>
              <p style={{margin:'5px 0 0 0'}}>Hourly</p>
            </div>
          </div>
          <div>

          </div>
        </div>
</div>

       


        {/* PROJECT TYPE */}
        <div  style={{border:'1px solid #ddd', padding:'20px',margin:'40px 0'}}>
          <p>Freelancer Name : Dummy</p>
          <br />
          <p>Buyer Name : Dummy</p>
        </div>


        {/* ATTACHMENT SECTION */}

        <div style={{border:'1px solid #ddd', padding:'20px',margin:'40px 0'}}>
          <h3>Choose the file (Optional)</h3>
          <div style={{margin:'10px 0'}}>
            <input type="file" multiple={true} />
          </div>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>

      <div>
        <div  style={{border:'1px solid #ddd',padding:'20px '}}s>
        <div>
          <h3>About the Client</h3>
        <p  style={{marginTop:'10px'}}>America</p>  
        <p style={{color:'gray',marginTop:'10px'}}>Calofornia</p>  
        <p  style={{marginTop:'10px'}}>4 jobs posted</p>  
        <p  style={{marginTop:'10px'}}>50$ total spents</p>  
        <p style={{color:'gray',marginTop:'10px'}}>2 hires, 0 Actives</p>  
        <p style={{color:'gray',marginTop:'30px'}}>Member Since 2019</p>  
        
        </div>
        </div>
       
        
      </div>
    </div>
  )
}

export default Home