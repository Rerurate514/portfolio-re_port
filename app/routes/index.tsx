import { createRoute } from "honox/factory";
import { BackDrop } from "../components/background/back_drop";
import { Scene } from "../components/scene";
import { Viewport } from "../components/viewport";
import { About } from "../pages/about";
import { Articles } from "../pages/articles";
import { Contacts } from "../pages/contacts";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { ShareLinks } from "../pages/sharelinks";
import { Skills } from "../pages/skills";

export default createRoute((c) => {
	return c.render(
    <main class="viewport-layer">
      <BackDrop />
      <Viewport>
  			<Scene>
  				<Home />
  			</Scene>
  			<Scene>
  				<About />
  			</Scene>
  			<Scene>
  				<Projects />
  			</Scene>
  			<Scene>
  				<Skills />
  			</Scene>
  			<Scene>
  				<Articles />
  			</Scene>
  			<Scene>
  				<Contacts />
  			</Scene>
  			<Scene>
  				<ShareLinks />
  			</Scene>
  		</Viewport>
		</main>
	);
});
