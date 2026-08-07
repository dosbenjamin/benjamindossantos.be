{ ... }:

{
  languages.javascript = {
    enable = true;
    bun = {
      enable = true;
      install.enable = true;
    };
  };

  processes.dev.exec = "bun run dev";

  enterTest = ''
    bun run check
    bun run build
  '';
}
