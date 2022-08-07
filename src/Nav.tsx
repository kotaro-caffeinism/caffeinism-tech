import React from "react";
import { slide as Menu } from 'react-burger-menu';
import "./nav.css"

type Props = {
  view: number,
  setView: React.Dispatch<React.SetStateAction<number>>,
}

function Nav({ view, setView }:Props) {
  return (
    <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
      <li onClick={() => setView(1)}>changeView</li>
      <li><a href="mailto:mail@caffeinism.tech">contact</a></li>
    </Menu>
  )
}

export default Nav;