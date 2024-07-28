export interface VideoData {
  id: string;
  img: string;
  title: string;
  url: string;
}

export interface SkillData {
  name: string;
  description: string;
  background: string;
  textColor: string;
}

export interface SocialData {
  icon: string;
  name: string;
  url: string;
}

export interface SectionData<T> {
  id: string;
  title: string;
  description: string;
  items: T[];
}

export interface AppData {
  title: string;
  slogan: string;
  copyright: string;
  description: string;
  direction: string;
  menus: { href: string; icon: string; name: string }[];
  name: string;
  socials: SocialData[];
  sections: {
    articles: SectionData<VideoData>;
    skills: SectionData<SkillData>;
  };
}
