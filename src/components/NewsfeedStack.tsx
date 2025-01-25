import { useEffect, useState } from 'preact/hooks';
import { useI18n } from '../i18n/utils';

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

const rssUrl = useI18n().rss.stack;

export default function NewsfeedStack() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    console.log('rssUrl', rssUrl);
    fetch(rssUrl)
      .then((res) => res.json())
      .then((data) => setArticles(data?.items || []))
      .catch(() => []);
  }, []);

  return (
    <ul class="newsfeed-stack min-w-[300px] md:min-w-[360px] h-[250px] overflow-x-hidden overflow-y-auto bg-gray-100/10 text-gray-100">
      {articles.map((o) => (
        <li
          class="border-b border-gray-100/20 hover:bg-gray-50/20 transition-colors duration-200 ease-in-out"
          data-guid={o.guid}
        >
          <a
            class="block px-2"
            href={o.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {o.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
