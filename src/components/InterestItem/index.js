import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import dompurify from 'dompurify';

const InterestItem = ({title, description, image, alt}) => {
  const sanitizer = dompurify.sanitize;
  return (
      <Card>
        <CardMedia
            component="img"
            alt={alt}
            image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{__html: sanitizer(description)}}>
          </Typography>
        </CardContent>
      </Card>
  )
}

export default InterestItem;