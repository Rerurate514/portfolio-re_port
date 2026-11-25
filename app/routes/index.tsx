import { createRoute } from 'honox/factory'
import { Viewport } from '../components/viewport'
import { Scene } from '../components/scene'
import { Home } from '../pages/home'
import { About } from '../pages/about'
import { Projects } from '../pages/projects'
import { Skills } from '../pages/skills'
import { Articles } from '../pages/articles'
import { Contacts } from '../pages/contacts'
import { ShareLinks } from '../pages/sharelinks'

export default createRoute((c) => {
  return c.render(
    <Viewport>
      <Scene>
        <Home/>
      </Scene>
      <Scene>
        <About/>
      </Scene>
      <Scene>
        <Projects/>
      </Scene>
      <Scene>
        <Skills/>
      </Scene>
      <Scene>
        <Articles/>
      </Scene>
      <Scene>
        <Contacts/>
      </Scene>
      <Scene>
        <ShareLinks/>
      </Scene>
    </Viewport>
  )
})
