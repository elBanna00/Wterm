const commands = {
  help() {
    term.echo(`List of available commands: ${help}`);
  },

  echo(...args) {
    if (args.length > 0) {
      term.echo(args.join(" "));
    }
  },
};
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
const command_list = Object.keys(commands);
const formatted_list = command_list.map((cmd) => {
  return `[[;#7D3C98;]${cmd}]`;
});
const help = formatter.format(formatted_list);
const font = "ANSI Shadow";

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts([font], ready);

function render(text) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true,
  });
}

const term = $("#terminal").terminal(commands, {
  greetings: false,
  checkArity: false,
});
term.pause();
function ready() {
  term
    .echo(() => {
      const ascii = rainbow(render("WTerm"));
      return `${ascii}[[;#E67E22 ;]\nHi,I'm Moaaz\nWelcome to my Website!\n]\nType [[;#AD00F5;]help] to get started :)`;
    })
    .resume();
}
function rainbow(string) {
  return lolcat
    .rainbow(function (char, color) {
      char = $.terminal.escape_brackets(char);
      return `[[;${hex(color)};]${char}]`;
    }, string)
    .join("\n");
}

function hex(color) {
  return (
    "#" +
    [color.red, color.green, color.blue]
      .map((n) => {
        return n.toString(16).padStart(2, "0");
      })
      .join("")
  );
}
term.on("click", ".command", function () {
  const command = $(this).text();
  term.exec(command);
});
