export interface Course {
  id: string;
  title: string;
  iconName: string; // Dynamic icon name (from lucide-react)
  logoEmoji: string; // Emoji from original design (e.g. 🌸, 🧠)
  description: string;
  avgSalary: string;
  badgeText: string;
  isMecRecognized: boolean;
  imageUrl: string;
  redirectUrl: string;
  extraTags?: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  emoji: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}
