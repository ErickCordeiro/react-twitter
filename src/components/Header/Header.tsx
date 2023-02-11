import { Sparkle } from "phosphor-react";

import "./header.modules.css";

interface HeaderProps{
  title: string;
}

export function Header({title}: HeaderProps) {
  return (
    <div className="timeline-header">
      {title}
      <Sparkle />
    </div>
  );
}
