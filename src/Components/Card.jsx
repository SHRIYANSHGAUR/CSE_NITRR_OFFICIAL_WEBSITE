import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  const { big, header, content, img } = props;
  return (
    <Card sx={{ maxWidth: big ? 440 : 345 }}>
      <CardMedia
        sx={{ height: big ? 300 : 240 }}
        image={img}
        title="some img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color={"maroon"} component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
  );
}
