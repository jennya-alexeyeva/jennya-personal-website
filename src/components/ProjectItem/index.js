import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";

const ProjectItem = ({title, description, date, image}) => {
  return (
      <Card>
        <CardMedia
            component="img"
            image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>{date}</p>
            <p>{description}</p>
          </Typography>
        </CardContent>
      </Card>
  )
}

export default ProjectItem