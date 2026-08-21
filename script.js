let chapter = 1;

const chapters = [
  {
    number: "CHAPTER 01",
    title: `It started with<br><span>1 second.</span>`,
    text: `It was just another day.
    Me and my friend were casually roaming around,
    until we decided to visit a friend at her college.`
  },

  {
    number: "CHAPTER 02",
    title: `Then came the<br><span>ice cream.</span>`,
    text: `I thought maybe I should make a good impression.
    So somehow, an ice cream became part of the story.`
  },

  {
    number: "CHAPTER 03",
    title: `And then I learned<br><span>her name.</span>`,
    text: `Trisha.`
  },

  {
    number: "CHAPTER 04",
    title: `Coffee, awkwardness<br>and a little <span>courage.</span>`,
    text: `There was coffee.
    There was a so-called unofficial date.
    And there was absolutely no eye contact because... well,
    I was nervous.`
  },

  {
    number: "CHAPTER 05",
    title: `And now...<br><span>I'm Waiting.<span class="dots">..</span></span>`,
    text: `No pressure.
    No expectations.
    Just letting things happen naturally.`
  }
];

function nextChapter() {

  if (chapter >= chapters.length) {
    return;
  }

  const current = chapters[chapter];

  document.querySelector(".chapter").innerHTML = current.number;
  document.querySelector("h1").innerHTML = current.title;
  document.querySelector(".text").innerHTML = current.text;

  chapter++;

  if (chapter === chapters.length) {
    document.querySelector("button").innerHTML = "The End... for now";
  }
}