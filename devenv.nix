{ inputs, pkgs, ... }:

{
  packages = [
    inputs.openspec.packages.${pkgs.system}.default
  ];

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
