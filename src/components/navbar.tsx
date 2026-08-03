'use client'

import * as React from 'react'
import { Header, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, HeaderSideNavItems, SideNav, SideNavItems, SkipToContent } from "@carbon/react";
import {usePathname} from 'next/navigation'

export interface NavbarProps {
  platform: {
    appName: string;
    prefix: string;
    url: string;
  };
  navLinks: {
    label: string;
    url: string;
  }[]
}

export default function Navbar(props: NavbarProps) {
  const pathname = usePathname()
  const [isSideNavExpanded, setIsSideNavExpanded] = React.useState<boolean>(false)

  function onClickSideNavExpand() {
    setIsSideNavExpanded(prev => !prev)
  }
  
  return (
    <Header aria-label={`${props.platform.prefix} ${props.platform.appName}`}>
      <SkipToContent />
      <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
      <HeaderName href={props.platform.url} prefix={props.platform.prefix}>
        {props.platform.appName}
      </HeaderName>
      <HeaderNavigation aria-label={`${props.platform.prefix} ${props.platform.appName}`}>
        {props.navLinks.map((link) => (
          <HeaderMenuItem key={link.url} href={link.url} isActive={pathname === link.url}>{link.label}</HeaderMenuItem>
        ))}
      </HeaderNavigation>
      <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false} onSideNavBlur={onClickSideNavExpand}>
        <SideNavItems>
          <HeaderSideNavItems>
            {props.navLinks.map((link) => (
              <HeaderMenuItem key={link.url} href={link.url} isActive={pathname === link.url}>{link.label}</HeaderMenuItem>
            ))}
          </HeaderSideNavItems>
        </SideNavItems>
      </SideNav>
    </Header>
  )
}