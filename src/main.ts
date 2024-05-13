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
      const ascii = render("WTerm");
      return `${ascii}\nHi,I'm Moaaz\nWelcome to my Website\n`;
    })
    .resume();
}
