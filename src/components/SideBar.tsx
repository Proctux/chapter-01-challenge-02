import { useState } from "react";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  genres: GenreResponseProps[];
  onClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, onClickButton, selectedGenreId }: SidebarProps) {

  const handleClick = (id: number) => {
    onClickButton(id)
  }

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClick(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}
