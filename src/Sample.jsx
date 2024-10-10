import  React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
/*import './Sample.css';*/
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginleft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Sample() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='cat1'>

   
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="animal">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="CAT"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://tse3.mm.bing.net/th?id=OIP.rM81T2vECiRhkckDanbD9QHaEo&pid=Api&P=0&h=180"
        alt="cat"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Cats are fascinating creatures with soft fur and sharp claws. They’re known for their independence and agility. People around the world love keeping cats as pets because of their companionship and hunting skills.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}><b>CAT LOVE</b></Typography>
          <Typography sx={{ marginBottom: 2 }}>
          Cats, beloved companions to millions, boast a unique blend of grace, independence, and mystery. Their diverse breeds, ranging from the majestic Maine Coon to the sleek Siamese, offer a tapestry of sizes, colors, and temperaments. Each cat brings its own personality, from the aloof observer to the playful trickster. Their soft fur and mesmerizing eyes captivate admirers worldwide, making them a perennial favorite in households and hearts alike.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
          Communication for cats extends beyond mere meows, encompassing an intricate language of gestures, vocalizations, and body postures. From the contented purr of a satisfied feline to the warning hiss of a threatened one, cats adeptly convey their emotions and intentions to both humans and fellow felines. Their subtle cues invite interpretation, fostering a deep bond between the cat and the caregiver.
          </Typography>
          <Typography>
            <b>
                <i>
          “Cats are inquisitive, but hate to admit it.”
          </i>
          </b>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}