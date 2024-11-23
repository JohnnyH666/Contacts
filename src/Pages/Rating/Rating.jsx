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
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    date: "November 23, 2024",
    review: "I’ve been part of this team for over two years now. The leadership is supportive, and there’s always room for growth.",
  },
  {
    name: "Mike Johnson",
    title: "UX Designer",
    date: "November 24, 2024",
    review: "Great company culture and an amazing place for creative professionals. I love working on innovative projects with this team.",
  },
  {
    name: "Emily Davis",
    title: "Marketing Specialist",
    date: "November 25, 2024",
    review: "The team is dynamic and full of passionate individuals. It’s a great environment for both personal and professional growth.",
  }
];

const Rating = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div style={{display: "flex", flexDirection: "row", gap: "20px", flexWrap: "wrap", marginTop: "100px", justifyContent: "center"}}>
        {reviews.map((review, index) => (
            <Card key={index} sx={{ maxWidth: 345 }} className="contact-card">
              <CardHeader
                avatar={
                  <Avatar sx={{}} aria-label="profile">
                    {review.name.split(" ")[0].charAt(0)} {/* Use first letter of first name */}
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
  )
}
export default Rating;
