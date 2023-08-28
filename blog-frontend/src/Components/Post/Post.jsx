import * as React from 'react';
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
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ date,category, title, content, author ,img, home }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const truncatedContent = content.length>200? content.substring (0,200)+ "..." : content;

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#a200ff' }} aria-label="recipe">
            <WorkspacesIcon sx={{ display: {  md: 'flex' }}} />
          </Avatar>
        }
        
        
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/example.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {truncatedContent }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        {/*<IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton aria-label="comment">
          <Link to={'/post'}>
          <CommentIcon sx={{ color: 'grey' }}/>
          </Link>
          
        </IconButton>
        {home ? null : (
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
