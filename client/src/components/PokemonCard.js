import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
// import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import Link from "next/link";
import Image from "next/image";

import "../../styles/poke.css";

export default function PokemonCard({ name, img, attack, type, link }) {
  return (
    <>
      {/*  <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          height: 450,
          gridColumn: "span 2",
          flexDirection: "row",
          flexWrap: "wrap",
          resize: "horizontal",
          overflow: "hidden",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "grid" }}>
              <Typography level="title-lg" sx={{}}>
                {name}
              </Typography>
            </div>
            <IconButton
              size="sm"
              variant="plain"
              color="danger"
              sx={{ ml: "auto", alignSelf: "flex-start" }}
            >
              <FavoriteBorderRoundedIcon color="danger" />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              width: 300,
              height: 250,
            }}
          >
            <Image
              alt={`${name} image`}
              src={img}
              width={300}
              height={250}
              objectFit="cover"
            ></Image>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: "auto", padding: 0.5 }}>
            <Typography color="neutral">
              {type.length > 1 ? "Types:" : "Type"}
            </Typography>
            <div>
              {type?.map((t) => (
                <Typography level="body-md">- {t}</Typography>
              ))}
            </div>
            <Typography sx={{}}>{`attack power: ${attack}`}</Typography>
          </Box>
        </Box>
        <Typography sx={{ textAlign: "center" }}>
          <Link href={`/pokemon/${link}`}> stats </Link>
        </Typography>
      </Card>
    </Box> */}

      <div className="card">
        <div className="card-container">
          <div className="card-header-container">
            <small className="card-status">status</small>
            <p className="card-name">{name}</p>
            <small className="'card-hp">hp: 60</small>
          </div>

          <div className="card-image-container">
            <div className="card-image-container-border">
              <img src={img} alt="Imagen" className="card-img" />

            </div>
            <div className="card-image-description-container">
              <div className="card-image-description-border">
                <small className="card-image-description">a strong pokemon</small>
              </div>
            </div>
          </div>

          <div className="card-description">
            types:{" "}
            {type?.map((t) => (
              <p>- {t}</p>
            ))}
            <p>attack {attack}</p>
          </div>

          <div className="card-link-container">
            <a href="#">Enlace</a>
          </div>
        </div>
      </div>
    </>
  );
}
