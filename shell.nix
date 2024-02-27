{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    buildInputs = with pkgs; [
        nodejs
        nodePackages.pnpm
    ];

    shellHook = ''
        fish
        export NODE_PATH=$NODE_PATH:$(npm root -g)
    '';
}
