import React, {useState} from "react";
import {Avatar, Box, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import FavoritesManager from "../../../../context/FavoritesManager";

export default function FavoriteColor({favoriteColor, setFavoriteColor, defaultColor}) {

    const [selectFavoriteColor, setSelectFavoriteColor] = useState(false);

    let prepareColors = FavoritesManager.orderList(FavoritesManager.colors, defaultColor);

    return (<>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    Select color
                </Typography>
            </ListItemText>
            <Box
                sx={{
                    display: "flex",
                    width: 450,
                    overflowX: "scroll",
                }}
            >
                {prepareColors.map((color, index) => {
                    return <ListItem key={index} component="div" disablePadding>
                        <ListItemButton
                            selected={favoriteColor === color || (!selectFavoriteColor && color === defaultColor)}
                            onClick={() => {
                                setSelectFavoriteColor(true);
                                setFavoriteColor(color);
                            }}
                        >
                            <Avatar sx={{bgcolor: color}}> </Avatar>
                        </ListItemButton>
                    </ListItem>;
                })}

            </Box>
        </>
    );
}