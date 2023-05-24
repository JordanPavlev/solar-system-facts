import { Nav, List, Item, Links } from "./NavbarDesktopStyles"
import { planets } from "../Planets"

const NavDesktop = ({ pathName, activePlanet, onHover }) => {
    return (
        <Nav>
            <List>
                {planets.map( (planet) => (
                    <Item key={planet.id}>
                        <Links
                            href={planet.path}
                            $bgcolor={planet.color}
                            $isActive={planet.path === pathName || planet.path === activePlanet}
                            onMouseOver={() => onHover(planet.path)}
                            onMouseLeave={() => onHover(false)}
                            onFocus={() => onHover(planet.path)}
                            onBlur={() => onHover(false)}
                        >
                            {planet.name}
                        </Links>
                    </Item>
                ))}
            </List>
        </Nav>
    )
}

export default NavDesktop;