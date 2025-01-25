import { useEffect, useRef, useState } from 'preact/hooks';
import { useI18n } from '../i18n/utils';
import Card from './Card';

interface Article {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: object;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

const rssUrl = useI18n().rss.slider;

export default function NewsfeedSlider() {
  const [itemByGroup, setItemByGroup] = useState<number>(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const slide = useRef(0);

  useEffect(() => {
    fetch(rssUrl)
      .then((res) => res.json())
      .then((data) => setArticles(data?.items || []))
      .catch(() => []);
  }, []);

  useEffect(() => {
    const mediaQuerySm = matchMedia('(min-width: 640px)', (matches) =>
      setItemByGroup(matches ? 2 : 1),
    );
    const mediaQueryLg = matchMedia('(min-width: 1024px)', (matches) =>
      setItemByGroup(matches ? 3 : mediaQuerySm.matches ? 2 : 1),
    );
    setItemByGroup(mediaQueryLg.matches ? 3 : mediaQuerySm.matches ? 2 : 1);
  }, []);

  useEffect(() => {
    if (!articles.length) return;

    const newsfeed = document.querySelector('ul.newsfeed');
    const items = newsfeed?.querySelectorAll('li[data-newsfeed]') || [];
    const maxSlides = items.length - itemByGroup;

    function scrollNewsfeed() {
      newsfeed?.scroll({
        left: ++slide.current * (260 + 32),
        behavior: 'smooth',
      });
      slide.current = slide.current === maxSlides ? -1 : slide.current;
    }

    const timer = setInterval(() => scrollNewsfeed(), 3000);
    return () => clearInterval(timer);
  }, [itemByGroup, articles]);

  return (
    <ul class="newsfeed flex max-w-[292px] sm:max-w-[584px] lg:max-w-[876px] mx-auto mt-12 overflow-hidden">
      {articles.map((o) => (
        <li data-newsfeed>
          <Card {...o} />
        </li>
      ))}
    </ul>
  );
}

function matchMedia(query: string, cb: (matches: boolean) => void) {
  const mediaQuery = window.matchMedia(query);
  mediaQuery.addEventListener('change', (e) => cb(e.matches));
  return mediaQuery;
}
