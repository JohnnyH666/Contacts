import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.webp';
import { deepPurple } from '@mui/material/colors';
import { Avatar, Button, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, InputLabel, FormControl } from '@mui/material';

const Navbar = () => {  
  const [anchorEl, setAnchorEl] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false); // State for the modal
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState({
    username: 'Johnny Huang',
    company: 'Resonate CX',
    gender: 'Male',
    role: 'Software Engineer'
  }); // Example user data
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    handleClose();
    if (path === 'settings') {
      setSettingsOpen(true); // Open the settings modal
    } else {
      navigate(path);
    }
  };

  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleUsernameChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };

  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' onClick={() => handleNavigation('/')} />
      <ul>
      <li><Button variant="text" onClick={() => handleNavigation('/')}>Home</Button></li>
        <li><Button variant="text">My Employee</Button></li>
        <li><Button variant="text" onClick={() => handleNavigation('/contact')}>My Contacts</Button></li>
        <li><Button variant="text" onClick={() => handleNavigation('/rating')}>Rating</Button></li>
      </ul>
      <div>
        <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={handleClick}>JH</Avatar>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => { handleClose(); setProfileOpen(true); }}>Profile</MenuItem>
          <MenuItem onClick={() => { handleClose(); setSettingsOpen(true); }}>Settings</MenuItem>
          <MenuItem onClick={() => handleNavigation('/logout')}>Logout</MenuItem>
        </Menu>
      </div>

      {/* Profile Dialog */}
      <Dialog open={profileOpen} onClose={handleProfileClose} maxWidth="lg" fullWidth>
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          <div style={{ marginTop: '16px', marginBottom: '16px' }}>
            <TextField
              label="Username"
              fullWidth
              value={user.username}
              onChange={handleUsernameChange}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={user.gender}
                onChange={handleGenderChange}
                label="Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <TextField
              label="Company"
              fullWidth
              value={user.company}
              disabled // Makes this field read-only
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <TextField
              label="Role"
              fullWidth
              value={user.role}
              disabled // Makes this field read-only
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileClose} color="primary">
            Save
          </Button>
          <Button onClick={handleProfileClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for Settings */}
      <Dialog open={settingsOpen} onClose={handleSettingsClose} maxWidth="lg" fullWidth>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <div>
          <label><strong>Language: </strong></label>
            <Select fullWidth defaultValue="English">
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </Select>
          </div>
          <div style={{ marginTop: '20px' }}>
          <label><strong>Timezone: </strong></label>
            <Select fullWidth defaultValue="GMT">
              <MenuItem value="GMT">GMT</MenuItem>
              <MenuItem value="EST">EST</MenuItem>
              <MenuItem value="PST">PST</MenuItem>
              <MenuItem value="CST">CST</MenuItem>
            </Select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSettingsClose} color="primary">
            Save
          </Button>
          <Button onClick={handleSettingsClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;
