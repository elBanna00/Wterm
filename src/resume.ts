export const directories = {
  education: [
    "",
    "[[;#FFFFFF;]education]",

    '* <a href="https://en.wikipedia.org/wiki/Kielce_University_of_Technology">Kielce University of Technology</a> [[;#E7F034 ;]"Computer Science"] 2002-2007 / 2011-2014',
    '* <a href="https://pl.wikipedia.org/wiki/Szko%C5%82a_policealna">Post-secondary</a> Electronic School [[;#E7F034 ;]"Computer Systems"] 2000-2002',
    '* Electronic <a href="https://en.wikipedia.org/wiki/Technikum_(Polish_education)">Technikum</a> with major [[;#E7F034 ;]"RTV"] 1995-2000',
    "",
  ],
  projects: [
    "",
    "[[;#FFFFFF;]Open Source projects]",
    [
      [
        "jQuery Terminal",
        "https://terminal.jcubic.pl",
        "library that adds terminal interface to websites",
      ],
      [
        "LIPS Scheme",
        "https://lips.js.org",
        "Scheme implementation in JavaScript",
      ],
      ["Sysend.js", "https://jcu.bi/sysend", "Communication between open tabs"],
      ["Wayne", "https://jcu.bi/wayne", "Pure in browser HTTP requests"],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}">${name}</a> &mdash; [[;#FFFFFF;]${description}]`;
    }),
    "",
  ].flat(),
  skills: [
    "",
    "[[;#FFFFFF;]languages]",

    ["JavaScript", "TypeScript", "Python", "SQL", "PHP", "Bash"].map(
      (lang) => `* [[;#E7F034 ;]${lang}]`
    ),
    "",
    "[[;#FFFFFF;]libraries]",
    ["React.js", "Redux", "Jest"].map((lib) => `* [[;#24BB14;]${lib}]`),
    "",
    "[[;#FFFFFF;]tools]",
    ["Docker", "git", "GNU/Linux"].map((lib) => `* [[;#122BCA;]${lib}]`),
    "",
  ].flat(),
};
