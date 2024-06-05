// import JQTerminal from "jquery.terminal";

// import { directories } from "./resume";

// const url = "https://v2.jokeapi.dev/joke/Programming";
// const root = "~";
// let cwd = root;
// function print_dirs() {
//   const dirs = Object.keys(directories);
//   term.echo(
//     dirs
//       .map((dir) => {
//         return `<div class="directory" style="color:#048989">${dir}</div>`;
//       })
//       .join("\n"),
//     { raw: true }
//   );
// }
// const commands = {
//   help() {
//     term.echo(`List of available commands: ${help}`);
//   },

//   echo(...args) {
//     if (args.length > 0) {
//       term.echo(args.join(" "));
//     }
//   },
//   clear() {},
//   exit() {
//     $(".tv").addClass("collapse");
//     term.disable();
//   },
//   cd(dir = null) {
//     const dirs = Object.keys(directories);
//     if (dir === null || (dir === ".." && cwd !== root)) {
//       cwd = root;
//     } else if (dir.startsWith("~/") && dirs.includes(dir.substring(2))) {
//       cwd = dir;
//     } else if (dirs.includes(dir)) {
//       cwd = root + "/" + dir;
//     } else {
//       this.error("Wrong directory");
//     }
//   },
//   ls(dir = null) {
//     if (dir) {
//       if (dir.match(/^~\/?$/)) {
//         // ls ~ or ls ~/
//         print_dirs();
//       } else if (dir.startsWith("~/")) {
//         const path = dir.substring(2);
//         const dirs = path.split("/");
//         if (dirs.length > 1) {
//           this.error("Invalid directory");
//         } else {
//           const dir = dirs[0];
//           term.echo(directories[dir].join("\n"), { raw: true });
//         }
//       } else if (cwd === root) {
//         if (directories.hasOwnProperty(dir)) {
//           if (dir === "education" || dir === "projects") {
//             term.echo(directories[dir].join("\n"), { raw: true });
//           } else {
//             term.echo(directories[dir].join("\n"));
//           }
//         } else {
//           this.error("Invalid directory");
//         }
//       } else if (dir === "..") {
//         print_dirs();
//       } else {
//         this.error("Invalid directory");
//       }
//     } else if (cwd === root) {
//       print_dirs();
//     } else {
//       const dir = cwd.substring(2);
//       term.echo(directories[dir].join("\n"), { raw: true });
//     }
//   },
//   async joke() {
//     const res = await fetch(url);
//     const data = await res.json();
//     if (data.type == "twopart") {
//       // as said before in every function, passed directly
//       // to the terminal, you can use `this` object
//       // to reference terminal instance
//       this.echo(`Q: ${data.setup}`);
//       this.echo(`A: ${data.delivery}`);
//     } else if (data.type === "single") {
//       this.echo(data.joke, { delay: 50, typing: true });
//     }
//   },
// };
// const formatter = new Intl.ListFormat("en", {
//   style: "long",
//   type: "conjunction",
// });
// const command_list = Object.keys(commands);
// const formatted_list = command_list.map((cmd) => {
//   return `[[;#AD00F5;]${cmd}]`;
// });
// const help = formatter.format(formatted_list);
// const font = "ANSI Shadow";

// figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
// figlet.preloadFonts([font], ready);

// function render(text) {
//   const cols = term.cols();
//   return figlet.textSync(text, {
//     font: font,
//     width: cols,
//     whitespaceBreak: true,
//   });
// }

// const term = $("#terminal").terminal(commands, {
//   greetings: false,
//   checkArity: false,
//   completion(string) {
//     const dirs = Object.keys(directories);
//     // in every function we can use `this` to reference term object
//     const cmd = this.get_command();
//     // we process the command to extract the command name
//     // at the rest of the command (the arguments as one string)
//     const { name, rest } = $.terminal.parse_command(cmd);
//     if (["cd", "ls"].includes(name)) {
//       if (rest.startsWith("~/")) {
//         return dirs.map((dir) => `~/${dir}`);
//       }
//       if (cwd === root) {
//         return dirs;
//       }
//     }
//     return Object.keys(commands);
//   },
//   prompt,
// });
// term.pause();
// function ready() {
//   const msg = () => {
//     const ascii = rainbow(render("WTerm"));
//     return `${ascii}[[;#E67E22 ;]\nHi,I'm Moaaz\nWelcome to my Website!\n]\nType [[;#AD00F5;]help] to get started :)`;
//   };

//   term.echo(arg: msg, { typing: true, delay: 200 }).resume();
// }

// function rainbow(string) {
//   return lolcat
//     .rainbow(function (char, color) {
//       char = $.terminal.escape_brackets(char);
//       return `[[;${hex(color)};]${char}]`;
//     }, string)
//     .join("\n");
// }

// function hex(color) {
//   return (
//     "#" +
//     [color.red, color.green, color.blue]
//       .map((n) => {
//         return n.toString(16).padStart(2, "0");
//       })
//       .join("")
//   );
// }
// term.on("click", ".command", function () {
//   const command = $(this).text();
//   term.exec(command);
// });
// const re = new RegExp(`^\s*(${command_list.join("|")})(\s?.*)`);

// $.terminal.new_formatter([
//   re,
//   function (_, command, args) {
//     return `[[;#dddd;]${command}][[;#AD00F5;]${args}]`;
//   },
// ]);
// const user = "guest";
// const server = "portfolio";

// function prompt() {
//   return `[[;#44D544;]${user}@${server}]:[[;#122BCA;]${cwd}]$ `;
// }
// term.on("click", ".directory", function () {
//   const dir = $(this).text();
//   term.exec(`cd ~/${dir}`);
// });
// ;
// import

// export {};
//@ts-ignore
import JQTerminal from "jquery.terminal";
import { directories } from "./resume";

const url = "https://v2.jokeapi.dev/joke/Programming";
const root = "~";
let cwd = root;

function printDirs(term: JQueryTerminal) {
  const dirs = Object.keys(directories);
  term.echo(
    dirs
      .map((dir) => `<div class="directory" style="color:#048989">${dir}</div>`)
      .join("\n"),
    { raw: true }
  );
}

const commands = {
  help(term: JQueryTerminal) {
    term.echo(`List of available commands: ${help}`);
  },

  echo(term: JQueryTerminal, ...args: string[]) {
    if (args.length > 0) {
      term.echo(args.join(" "));
    }
  },
  clear(term: JQueryTerminal) {
    term.clear();
  },
  exit(term: JQueryTerminal) {
    $(".tv").addClass("collapse");
    term.disable();
  },
  cd(term: JQueryTerminal, dir: string | null = null) {
    const dirs = Object.keys(directories);
    if (dir === null || (dir === ".." && cwd !== root)) {
      cwd = root;
    } else if (dir.startsWith("~/") && dirs.includes(dir.substring(2))) {
      cwd = dir;
    } else if (dirs.includes(dir)) {
      cwd = `${root}/${dir}`;
    } else {
      term.error("Wrong directory");
    }
  },
  ls(term: JQueryTerminal, dir: string | null = null) {
    if (dir) {
      if (dir.match(/^~\/?$/)) {
        printDirs(term);
      } else if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const pathDirs = path.split("/");
        if (pathDirs.length > 1) {
          term.error("Invalid directory");
        } else {
          const directory = pathDirs[0];
          term.echo(directories[directory].join("\n"), { raw: true });
        }
      } else if (cwd === root) {
        if (directories.hasOwnProperty(dir)) {
          term.echo(directories[dir].join("\n"), { raw: true });
        } else {
          term.error("Invalid directory");
        }
      } else if (dir === "..") {
        printDirs(term);
      } else {
        term.error("Invalid directory");
      }
    } else if (cwd === root) {
      printDirs(term);
    } else {
      const currentDir = cwd.substring(2);
      term.echo(directories[currentDir].join("\n"), { raw: true });
    }
  },
  async joke(term: JQueryTerminal) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.type === "twopart") {
        const prompt = term.get_prompt();
        term.set_prompt("");
        await term.echo(`Q: ${data.setup}`, { delay: 50, typing: true });
        await term.echo(`A: ${data.delivery}`, { delay: 50, typing: true });
        term.set_prompt(prompt);
      } else if (data.type === "single") {
        await term.echo(data.joke, { delay: 50, typing: true });
      }
    } catch (error) {
      term.error("Failed to fetch a joke.");
    }
  },
};

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

const commandList = Object.keys(commands);
const formattedList = commandList.map((cmd) => `[[;#AD00F5;]${cmd}]`);
const help = formatter.format(formattedList);
const font = "ANSI Shadow";

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts([font], ready);

function render(text: string) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font,
    width: cols,
    whitespaceBreak: true,
  });
}

const term = $("#terminal").terminal(commands as any, {
  greetings: false,
  checkArity: false,
  completion: (string) => {
    const dirs = Object.keys(directories);
    const cmd = term.get_command();
    const { name, rest } = $.terminal.parse_command(cmd);
    if (["cd", "ls"].includes(name)) {
      if (rest.startsWith("~/")) {
        return dirs.map((dir) => `~/${dir}`);
      }
      if (cwd === root) {
        return dirs;
      }
    }
    return Object.keys(commands);
  },
  prompt,
});

term.pause();

function ready() {
  const msg = () => {
    const ascii = rainbow(render("WTerm"));
    return `${ascii}[[;#E67E22 ;]\nHi, I'm Moaaz\nWelcome to my Website!\n]\nType [[;#AD00F5;]help] to get started :)`;
  };
  term.echo(msg).resume();
}

function rainbow(string: string) {
  return lolcat
    .rainbow((char, color) => {
      char = $.terminal.escape_brackets(char);
      return `[[;${hex(color)};]${char}]`;
    }, string)
    .join("\n");
}

function hex(color: { red: number; green: number; blue: number }) {
  return `#${[color.red, color.green, color.blue]
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("")}`;
}

term.on("click", ".command", function () {
  const command = $(this).text();
  term.exec(command);
});

const user = "guest";
const server = "portfolio";

function prompt() {
  return `[[;#44D544;]${user}@${server}]:[[;#122BCA;]${cwd}]$ `;
}

term.on("click", ".directory", function () {
  const dir = $(this).text();
  term.exec(`cd ~/${dir}`);
});

const commandRegex = new RegExp(`^\\s*(${commandList.join("|")})(\\s?.*)`);

$.terminal.new_formatter([
  commandRegex,
  (_, command, args) => `[[;#dddd;]${command}][[;#AD00F5;]${args}]`,
]);

export {};
