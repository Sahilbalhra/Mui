import { ListItemButton, ListItemIcon, Divider } from "@mui/material";
import { MyList, ActionsIconsContainerMobile, ActionsIconsContainerDesktop } from '../../styles/appbar'
import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Colors } from "../../styles/theme";

export default function Actions({ matches }) {
    const Component = matches ? ActionsIconsContainerMobile : ActionsIconsContainerDesktop
    return (
        <Component>
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: 'center',
                    }}
                >
                    <ListItemIcon sx={{
                        display: "flex",
                        justifyContent: 'center',
                        color: matches && Colors.secondary
                    }}>
                        <ShoppingCart />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{
                    justifyContent: 'center',
                }}>
                    <ListItemIcon sx={{
                        display: "flex",
                        justifyContent: 'center',
                        color: matches && Colors.secondary

                    }}>
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{
                    justifyContent: 'center',
                }}>
                    <ListItemIcon sx={{
                        display: "flex",
                        justifyContent: 'center',
                        color: matches && Colors.secondary

                    }}>
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Component>
    )
}