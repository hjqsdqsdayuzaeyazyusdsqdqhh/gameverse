export interface Game {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: Category;
  tags: string[];
  featured: boolean;
  trending: boolean;
  iframe_url: string;
  controls: string;
  how_to_play: string;
}

export type Category =
  | "racing" | "action" | "puzzle" | "sports" | "arcade"
  | "adventure" | "shooting" | "strategy" | "simulation" | "horror"
  | "fighting" | "platformer" | "rpg" | "music" | "educational"
  | "card" | "board" | "casual" | "multiplayer" | "io";

export const categories: { name: Category; label: string; icon: string; description: string }[] = [
  { name: "racing", label: "Racing", icon: "🏎️", description: "High-speed racing games for adrenaline junkies" },
  { name: "action", label: "Action", icon: "🎯", description: "Thrilling action games packed with excitement" },
  { name: "puzzle", label: "Puzzle", icon: "🧩", description: "Brain-teasing puzzles to challenge your mind" },
  { name: "sports", label: "Sports", icon: "⚽", description: "Sports simulations and arcade sports action" },
  { name: "arcade", label: "Arcade", icon: "🕹️", description: "Classic arcade games with modern twists" },
  { name: "adventure", label: "Adventure", icon: "🗺️", description: "Epic adventures and exploration games" },
  { name: "shooting", label: "Shooting", icon: "🔫", description: "Action-packed shooting and FPS games" },
  { name: "strategy", label: "Strategy", icon: "♟️", description: "Strategic thinking and tactical warfare games" },
  { name: "simulation", label: "Simulation", icon: "🏙️", description: "Realistic simulation and management games" },
  { name: "horror", label: "Horror", icon: "👻", description: "Horror and thriller games to test your nerves" },
  { name: "fighting", label: "Fighting", icon: "🥊", description: "Head-to-head combat and fighting games" },
  { name: "platformer", label: "Platformer", icon: "🏃", description: "Jump-and-run platforming adventures" },
  { name: "rpg", label: "RPG", icon: "⚔️", description: "Role-playing games with deep progression" },
  { name: "music", label: "Music", icon: "🎵", description: "Rhythm and music-based games" },
  { name: "educational", label: "Educational", icon: "📚", description: "Fun learning games for all ages" },
  { name: "card", label: "Card", icon: "🃏", description: "Classic card games and solitaire" },
  { name: "board", label: "Board", icon: "🎲", description: "Digital board games for everyone" },
  { name: "casual", label: "Casual", icon: "☕", description: "Relaxing casual games to unwind" },
  { name: "multiplayer", label: "Multiplayer", icon: "👥", description: "Play with friends online" },
  { name: "io", label: "IO Games", icon: "🌐", description: "Popular .io browser games" },
];
