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
    image: "/static/images/cards/contemplative-reptile.jpg",
    review: "Hi, I’m Johnny! I’m passionate about software development and love solving complex problems with clean code. I’ve been in the tech industry for over 1 years and enjoy working in collaborative teams to build innovative solutions.",
  },
  {
    name: "Sarah Lee",
    title: "Product Manager",
    date: "November 23, 2024",
    image: "/static/images/cards/product-manager.jpg",
    review: "Hello! I'm Sarah, a product manager with a strong background in user-centered design and agile methodologies. I enjoy taking customer feedback and turning it into actionable insights that lead to better products and experiences.",
  },
  {
    name: "Michael Brown",
    title: "UX Designer",
    date: "November 24, 2024",
    image: "/static/images/cards/ux-designer.jpg",
    review: "Hi, I’m Michael! I’m a UX designer who thrives on creating intuitive and delightful user experiences. I enjoy collaborating with cross-functional teams to design products that meet user needs while pushing the boundaries of design.",
  },
  {
    name: "Emily Davis",
    title: "Marketing Specialist",
    date: "November 25, 2024",
    image: "/static/images/cards/marketing-specialist.jpg",
    review: "Hey, I’m Emily! I have a background in digital marketing and a passion for developing creative strategies that drive growth. Whether it's through social media, content, or email marketing, I’m always looking for new ways to engage customers.",
  },
  {
    name: "James Wilson",
    title: "Data Scientist",
    date: "November 26, 2024",
    image: "/static/images/cards/data-scientist.jpg",
    review: "Hello! I'm James, a data scientist with a love for turning data into insights. My expertise is in machine learning and statistical modeling, and I enjoy working with large datasets to solve real-world problems and drive business decision-making.",
  },
  {
    name: "James King",
    title: "Data Scientist",
    date: "November 26, 2024",
    image: "/static/images/cards/data-scientist.jpg",
    review: "Hello! I'm James, a data scientist with a love for turning data into insights. My expertise is in machine learning and statistical modeling, and I enjoy working with large datasets to solve real-world problems and drive business decision-making.",
  }
];

const Employee = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div style={{display: "flex", flexDirection: "row", gap: "20px", flexWrap: "wrap", marginTop: "100px", justifyContent: "center"}}>
        {reviews.map((review, index) => (
            <Card key={index} sx={{ maxWidth: 380 }} className="contact-card">
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
export default Employee;
