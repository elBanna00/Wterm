export const directories = {
  education: [
    "",
    "<div style='color:#5854CD'>education</div>",

    '* <a href="https://en.wikipedia.org/wiki/Ain_Shams_University" style="color:#5854CD">Ain Shams University </a>2018-2019 / 2022-2023 Faculty of Engineering , Computers and Systems Engineering ',
    "",
  ],
  projects: [
    "",
    "<div style='color:white'>Open Source projects</div>",
    [
      [
        "Graduation Project",
        "https://github.com/elBanna00/E-learning-backend",
        "AI assisted Language learning Website with the ability to generate questions , check for answers and generate a plethora exams for different topics and more",
      ],
      [
        "scorch-staff",
        "https://github.com/elBanna00/scorch-staff",
        "Hotel Reservation Webapp for hotel staff",
      ],
      [
        "scorch",
        "https://github.com/elBanna00/scorch",
        "Hotel Reservation Website for hotel Customers",
      ],
      [
        "moharir",
        "https://moharir.vercel.app/",
        "Online vim Code editor written with nextjs App router",
      ],
      [
        "RSS feed Aggregator",
        "https://github.com/elBanna00/rss_agg",
        "RSS feed aggregator Web API written in GO",
      ],
      [
        "Dijkstra Visualizer",
        "https://github.com/elBanna00/dijkstraVis",
        "Visualizer for the dijkstra algorithm React App",
      ],
      [
        "Sorting Visualizer",
        "elbanna00.github.io/sorting-visualizer/",
        "Visualizer Webapp for multiple sorting algorithms",
      ],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}" style="color:#5854CD">${name}</a> &mdash;<div style="color:#FFFFFF">${description}</div>`;
    }),
    "",
  ].flat(),
  skills: [
    "",
    "<div style='color:#FFFFFF'>languages</div>",

    ["JavaScript", "TypeScript", "Java", "SQL", "Go", "Bash", "Lua"].map(
      (lang) => `<div style='color:#E7F034'>* ${lang}</div>`
    ),
    "",
    "<div style='color:#FFFFFF'>libraries</div>",
    [
      "React.js",
      "React-Query",
      "Expressjs",
      "Nextjs",
      "Jquery",
      "TailwindCss",
    ].map((lib) => `<div style='color:#24BB14'>* ${lib}</div>`),
    "",
    "<div style='color:#FFFFFF'>tools</div>",
    ["Vim", "git", "GNU/Linux"].map(
      (lib) => `<div style='color:#5854CD'>* ${lib}</div>`
    ),
    "",
  ].flat(),
};
