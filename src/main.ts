const commands = {};

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

const term = $("body").terminal(commands, {
  greetings: false,
});
term.pause();
function ready() {
  term
    .echo(() => {
      const ascii = rainbow(render("WTerm"));
      return `${ascii}[[;#E67E22 ;]\nHi,I'm Moaaz\nWelcome to my Website!\n]`;
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
