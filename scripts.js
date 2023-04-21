/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input");
const searchButton = document.querySelector("#searchbar > button");

const lookup = {
  "/": "/",
  deepl: "https://deepl.com/",
  reddit: "https://reddit.com/",
  maps: "https://maps.google.com/",
};
const engine = "google";
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
};

const isWebUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const getTargetUrl = (value) => {
  if (isWebUrl(value)) return value;
  if (lookup[value]) return lookup[value];
  return engineUrls[engine] + value;
};

const search = () => {
  const value = searchInput.value;
  const targetUrl = getTargetUrl(value);
  window.open(targetUrl, "_self");
};

searchInput.onkeyup = (event) => event.key === "Enter" && search();
searchButton.onclick = search;

/**
 * inject bookmarks into html
 */

const bookmarks = [
  {
    id: "N5u5jyYoAjOXvz5w",
    label: "personal",
    bookmarks: [
      {
        id: "ggzGMhd2ykmCyyyI",
        label: "notion",
        url: "https://www.notion.so/Life-Wiki-b451c1db22264ca78d91df664a7f35fe",
      },
      {
        id: "6tkHMc9CXWS5HtSg",
        label: "kindle",
        url: "https://read.amazon.com/kindle-library",
      },
      {
        id: "OnQZ32fdg5hfV7u1Tv",
        label: "github",
        url: "https://github.com/danthekishan",
      },
      {
        id: "OnQZ32fdg5hfV7u1Tv",
        label: "gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
      },
    ],
  },
  {
    id: "acWqlCZFR1COmq0g",
    label: "design",
    bookmarks: [
      { id: "rRbHUOvxza5L5q8B", label: "pixlrx", url: "https://pixlr.com/x/" },
      {
        id: "FZKYdIZcRGPDt45z",
        label: "image enlarger",
        url: "https://bigjpg.com/en",
      },
      {
        id: "vsFAINyYxRKQRksW",
        label: "haikei",
        url: "https://app.haikei.app/",
      },
      {
        id: "4gYAr64BkmZMAz74",
        label: "css gradients",
        url: "https://larsenwork.com/easing-gradients/",
      },
      {
        id: "ZBrntOJhwq1g5TQl",
        label: "icons",
        url: "https://feathericons.com/",
      },
      {
        id: "597sfXrkV05W2iy3",
        label: "gif",
        url: "https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/",
      },
      {
        id: "fMHb1cJFnMW5jLm6",
        label: "happy hues",
        url: "https://www.happyhues.co/",
      },
    ],
  },
  {
    id: "VfOIRciLCqigWQUW",
    label: "programming",
    bookmarks: [
      {
        id: "iXMJJ7KaToukM9Gf",
        label: "real python",
        url: "https://realpython.com/",
      },
      {
        id: "vfd32342ToukM9Gf",
        label: "planet python",
        url: "https://planetpython.org/",
      },
      {
        id: "i2w02njbsdkj29Gf",
        label: "rust book",
        url: "https://doc.rust-lang.org/book/",
      },
      {
        id: "hpSGWnby10UhwQQt",
        label: "hackernoon-se",
        url: "https://hackernoon.com/tagged/software-development",
      },
      {
        id: "h2fgerr10UhwQQt",
        label: "refactor guru",
        url: "https://refactoring.guru/",
      },
    ],
  },
  {
    id: "cEuXgx089CqUo0gb",
    label: "social media",
    bookmarks: [
      {
        id: "b2MZDnxt2ZkK51rP",
        label: "youtube",
        url: "https://prettycoffee.github.io/startpage",
      },
      {
        id: "OnQZgQBxhfV7u1Tv",
        label: "reddit",
        url: "https://www.reddit.com",
      },
      {
        id: "xc22fdg5hfsdf1Tv",
        label: "linkedin",
        url: "https://www.linkedin.com/feed/",
      },
    ],
  },
];

const createGroupContainer = () => {
  const container = document.createElement("div");
  container.className = "bookmark-group";
  return container;
};

const createGroupTitle = (title) => {
  const h2 = document.createElement("h2");
  h2.innerHTML = title;
  return h2;
};

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.innerHTML = label;
  li.append(a);
  return li;
};

const createBookmarkList = (bookmarks) => {
  const ul = document.createElement("ul");
  bookmarks.map(createBookmark).forEach((li) => ul.append(li));
  return ul;
};

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer();
  const title = createGroupTitle(label);
  const bookmarkList = createBookmarkList(bookmarks);
  container.append(title);
  container.append(bookmarkList);
  return container;
};

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks");
  bookmarksContainer.append();
  bookmarks
    .map(createGroup)
    .forEach((group) => bookmarksContainer.append(group));
};

injectBookmarks();
