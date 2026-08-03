import { Theme } from '@carbon/react'
import Navbar from '../navbar'

export interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell(props: AppShellProps) {
  
  return <Theme theme="g10">
    <Navbar
      platform={{ prefix: "Lebo Phoshoko's", appName: "Portfolio", url:"/" }}
      navLinks={[
        {
          label: "About",
          url: "/about"
        },
        {
          label: "Projects",
          url: "/projects"
        },
        {
          label: "Blog",
          url: "/blog"
        }
      ]}
    />
    <div id='content'>{props.children}</div>
  </Theme>
}
