import Link from 'next/link';
import React, { useContext } from 'react';
import MouseContext from '../contexts/mouse-context';

export default function HomepageLink(props: { title: string | JSX.Element; href: string }) {
  const contextState = useContext(MouseContext);
  return (
    <Link href={props.href}>
      <a
        onMouseLeave={contextState.mouseExitEvent}
        onMouseEnter={contextState.mouseEnterEvent}
        className="group z-20 p-7 font-mono text-white">
        <p>{props.title}</p>
        <div className="h-[3px] w-full origin-left scale-x-0 rounded-full bg-red-500 transition group-hover:scale-x-100"></div>
      </a>
    </Link>
  );
}
