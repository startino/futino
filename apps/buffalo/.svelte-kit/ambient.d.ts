
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const __ETC_PROFILE_DONE: string;
	export const COLORTERM: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const HYPRLAND_CMD: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WLR_NO_HARDWARE_CURSORS: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const XDG_BACKEND: string;
	export const TMUX: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const npm_package_dependencies_lucide_svelte: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const LC_ADDRESS: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_scripts_check_watch: string;
	export const LC_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_DATA_HOME: string;
	export const npm_package_private: string;
	export const XDG_CONFIG_HOME: string;
	export const XCURSOR_PATH: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const LIBVA_DRIVER_NAME: string;
	export const GNUPGHOME: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const KITTY_PID: string;
	export const NO_AT_BRIDGE: string;
	export const XCURSOR_SIZE: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const XDG_VIDEOS_DIR: string;
	export const NIX_PROFILES: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const CUPS_DATADIR: string;
	export const NIX_PATH: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_scripts_build: string;
	export const NIXPKGS_CONFIG: string;
	export const npm_package_devDependencies_prettier: string;
	export const KITTY_PUBLIC_KEY: string;
	export const XDG_PICTURES_DIR: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_dependencies_mdsvex: string;
	export const HOME: string;
	export const XDG_PUBLICSHARE_DIR: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const NIXOS_OZONE_WL: string;
	export const TMUX_TMPDIR: string;
	export const npm_package_devDependencies_typescript: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const WAYLAND_DISPLAY: string;
	export const GIO_EXTRA_MODULES: string;
	export const KITTY_WINDOW_ID: string;
	export const XDG_DOWNLOAD_DIR: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_dependencies_clsx: string;
	export const XDG_MUSIC_DIR: string;
	export const XDG_TEMPLATES_DIR: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const resurrect_dir: string;
	export const INIT_CWD: string;
	export const GTK_A11Y: string;
	export const npm_package_devDependencies__sveltejs_adapter_vercel: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_preview: string;
	export const XDG_CACHE_HOME: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DESKTOP_DIR: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const npm_package_name: string;
	export const XDG_DESKTOP_PORTAL_DIR: string;
	export const GTK_PATH: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const TMUX_PANE: string;
	export const TZDIR: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const PAGER: string;
	export const npm_package_devDependencies_eslint: string;
	export const LC_TELEPHONE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const LC_MEASUREMENT: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const TERMINFO_DIRS: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_dependencies_tailwind_variants: string;
	export const NODE_PATH: string;
	export const LC_TIME: string;
	export const XDG_DOCUMENTS_DIR: string;
	export const npm_package_scripts_dev: string;
	export const NIXOS_XDG_DESKTOP_PORTAL_CONFIG_DIR: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const npm_package_scripts_check: string;
	export const LIBEXEC_PATH: string;
	export const PATH: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const __GLX_VENDOR_LIBRARY_NAME: string;
	export const npm_config_node_gyp: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const GBM_BACKEND: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies_postcss: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const LC_NUMERIC: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		__ETC_PROFILE_DONE: string;
		COLORTERM: string;
		__HM_SESS_VARS_SOURCED: string;
		HYPRLAND_CMD: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		TERM_PROGRAM_VERSION: string;
		WLR_NO_HARDWARE_CURSORS: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		XDG_BACKEND: string;
		TMUX: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		npm_package_dependencies_lucide_svelte: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_autoprefixer: string;
		LC_ADDRESS: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_scripts_check_watch: string;
		LC_NAME: string;
		SSH_AUTH_SOCK: string;
		XDG_DATA_HOME: string;
		npm_package_private: string;
		XDG_CONFIG_HOME: string;
		XCURSOR_PATH: string;
		LOCALE_ARCHIVE_2_27: string;
		LIBVA_DRIVER_NAME: string;
		GNUPGHOME: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		KITTY_PID: string;
		NO_AT_BRIDGE: string;
		XCURSOR_SIZE: string;
		GPG_TTY: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		XDG_VIDEOS_DIR: string;
		NIX_PROFILES: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		CUPS_DATADIR: string;
		NIX_PATH: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_scripts_build: string;
		NIXPKGS_CONFIG: string;
		npm_package_devDependencies_prettier: string;
		KITTY_PUBLIC_KEY: string;
		XDG_PICTURES_DIR: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_dependencies_mdsvex: string;
		HOME: string;
		XDG_PUBLICSHARE_DIR: string;
		SSH_ASKPASS: string;
		LANG: string;
		LC_PAPER: string;
		NIXOS_OZONE_WL: string;
		TMUX_TMPDIR: string;
		npm_package_devDependencies_typescript: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		WAYLAND_DISPLAY: string;
		GIO_EXTRA_MODULES: string;
		KITTY_WINDOW_ID: string;
		XDG_DOWNLOAD_DIR: string;
		XDG_SEAT_PATH: string;
		npm_package_dependencies_clsx: string;
		XDG_MUSIC_DIR: string;
		XDG_TEMPLATES_DIR: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		resurrect_dir: string;
		INIT_CWD: string;
		GTK_A11Y: string;
		npm_package_devDependencies__sveltejs_adapter_vercel: string;
		npm_package_scripts_format: string;
		npm_package_scripts_preview: string;
		XDG_CACHE_HOME: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		XDG_DESKTOP_DIR: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		TERMINFO: string;
		npm_package_name: string;
		XDG_DESKTOP_PORTAL_DIR: string;
		GTK_PATH: string;
		LESSOPEN: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		TMUX_PANE: string;
		TZDIR: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		PAGER: string;
		npm_package_devDependencies_eslint: string;
		LC_TELEPHONE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		LC_MEASUREMENT: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		TERMINFO_DIRS: string;
		PNPM_SCRIPT_SRC_DIR: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		LD_LIBRARY_PATH: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		npm_package_dependencies_tailwind_variants: string;
		NODE_PATH: string;
		LC_TIME: string;
		XDG_DOCUMENTS_DIR: string;
		npm_package_scripts_dev: string;
		NIXOS_XDG_DESKTOP_PORTAL_CONFIG_DIR: string;
		XDG_DATA_DIRS: string;
		npm_package_dependencies_tailwind_merge: string;
		npm_package_scripts_check: string;
		LIBEXEC_PATH: string;
		PATH: string;
		npm_package_devDependencies__types_eslint: string;
		__GLX_VENDOR_LIBRARY_NAME: string;
		npm_config_node_gyp: string;
		__fish_nixos_env_preinit_sourced: string;
		npm_package_devDependencies__sveltejs_kit: string;
		GBM_BACKEND: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_registry: string;
		npm_package_devDependencies_postcss: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		LC_NUMERIC: string;
		npm_package_devDependencies_postcss_load_config: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
