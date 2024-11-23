import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from '../../assets/logo.webp';

const reviews = [
  {
    name: "Johnny Huang",
    title: "Software Engineer",
    date: "November 22, 2024",
    review: "Working here has been a fantastic experience! The team is collaborative, and the work environment is inspiring.",
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    date: "October 18, 2024",
    review: "I love the creative freedom I get in my role. The management is supportive and always encourages innovation.",
  },
  {
    name: "Chris Smith",
    title: "UX Designer",
    date: "September 15, 2024",
    review: "The company fosters a positive culture, and I feel valued as part of the design team. Truly a great place to grow.",
  }
];

const Rating = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='card-container'>
      {reviews.map((review, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className="contact-card">
            <CardHeader
              avatar={
                <Avatar sx={{}} aria-label="profile">
                  {review.name.split(" ")[0].charAt(0)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={review.title}
              subheader={review.date}
            />
            <CardMedia
              sx={{ height: 140 }}
              image={logo}
              title={review.name}
              alt="Profile Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {review.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {review.review}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Contact</Button>
              <Button size="small">Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Rating;
