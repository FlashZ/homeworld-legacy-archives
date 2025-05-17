# I. Homeworld (1999) Guide

This section of The Homeworld Legacy Archives covers the original game, released by Relic Entertainment and Sierra On-Line.

### A. Getting the Game & Initial Setup

*   **Original Retail Release**.
*   **Official Patches:**
    *   **Version 1.05 (Latest):**
        *   **Download:** [Homeworld v1.05 Patch](files/HOMEW105.rar)
        *   [Sierra Help Pages](http://sierrahelp.com/Patches-Updates/Patches-Updates-Games/HomeworldSeriesUpdates.html), [Patches-Scrolls](https://www.patches-scrolls.com/homeworld.php), [ModDB Addons Section](https://www.moddb.com/games/homeworld/downloads).
        *   **Changelog Snippets (v1.05):** Primarily addressed multiplayer exploits, gameplay balance (e.g., salvage corvette mechanics), AI improvements, and some stability fixes.
    *   **Version 1.04, 1.03, etc.:** Available on sites like Patches-Scrolls. Generally, 1.05 is recommended.
*   **NoCD Solutions:**
    *   **Purpose:** Bypass CD check, essential for modern systems.
    *   **File [Homeworld v1.05 NoCD](files/Homeworld_v1.05.rar):** *Note: This **WILL** flag in Antivirus as **Crack***
*   **Digital Re-releases & Archives:**
    *   **Internet Archive:** [Homeworld (1999) ISOs](https://archive.org/details/HomeworldUSA) (USA version), [Relic Homeworld (1999) with Keys](https://archive.org/details/relic-homeworld-1999).
    *   **Homeworld Classic (via Homeworld Remastered Collection):** Available on Steam/GOG. This is the original game, adapted by Gearbox for modern OS. It has some differences from the true 1999 v1.05 (see HWRM Guide).
    *   **Demo Version:** Available on [ModDB](https://www.moddb.com/games/homeworld/downloads/homeworld-demo), [GameFront](https://www.gamefront.com/games/homeworld/file/homeworld-demo).

### B. Running on Modern Systems

*   **Compatibility Mode:** Windows NT 4.0 (Service Pack 5) is highly recommended. Apply via executable properties or use the Hardware Acceleration Fix.
*   **Resolution Settings:**
    *   **In-Game + Compatibility:** Set resolution in Video Options.
    *   **Registry Editing (for 1920x1080 etc.):**
        *   **Path (32-bit app on 64-bit OS):** `HKEY_CURRENT_USER\SOFTWARE\Classes\VirtualStore\Machine\Software\Wow6432Node\Sierra On-Line\Homeworld`
        *   Or: `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Sierra On-Line\Homeworld` (try if current user path fails, run regedit as admin).
        *   **Values (Hex):** `screenDepth` (`20` for 32-bit), `screenHeight` (`438` for 1080), `screenWidth` (`780` for 1920).
        *   **Note:** Ensure "Run as Administrator" for Homeworld.exe if settings don't stick.
*   **Graphics & Rendering:**
    *   **Hardware Acceleration Fix (Win 8+):** [PCGamingWiki Community Fix](https://community.pcgamingwiki.com/files/file/5-homeworld-hardware-acceleration-fix/) (automates NT4SP5).
    *   **DirectX Renderer** [Updated DirectX renderer files](https://github.com/ncblakely/hw_rgl) Grab the latest release and replace the files in your /Homeworld directory.
    *   **OpenGL Renderer:** Selectable in-game. Can be more stable for some. Use `/safeGL` command line if issues.
    *   **Common Issue: Black Screen on Startup:** Often due to resolution/refresh rate incompatibility or rendering issues, compatibility modes usually fix this.
*   **Command Line Options:** (Refer to [GameFAQs HWR List](https://gamefaqs.gamespot.com/pc/854758-homeworld-remastered-collection/cheats) as many are identical).
    *   **PROCESSOR OPTIONS**
        *   `/enableSSE` - allow use of SSE if support is detected.
        *   `/forceSSE` - force usage of SSE even if determined to be unavailable.
        *   `/enable3DNow` - allow use of 3DNow! if support is detected.

    *   **SOUND OPTIONS**
        *   `/dsound` - forces mixer to write to DirectSound driver, even if driver reports not certified.
        *   `/dsoundCoop` - switches to co-operative mode of DirectSound (if supported) to allow sharing with other applications.
        *   `/waveout` - forces mixer to write to Waveout even if a DirectSound supported object is available.
        *   `/reverseStereo` - swap the left and right audio channels.

    *   **DETAIL OPTIONS**
        *   `/rasterSkip` - enable interlaced display with software renderer.
        *   `/noBG` - disable display of galaxy backgrounds.
        *   `/noFilter` - disable bi-linear filtering of textures.
        *   `/noSmooth` - do not use polygon smoothing.
        *   `/stipple` - enable stipple alpha with software renderer.
        *   `/noShowDamage` - Disables showing ship damage effects.

    *   **VIDEO MODE OPTIONS**
        *   `/safeGL` - don't use possibly buggy optimized features of OpenGL for rendering.
        *   `/triple` - use when frontend menus are flickering madly.
        *   `/nodrawpixels` - use when background images don't appear while loading.
        *   `/noswddraw` - don't use DirectDraw for the software renderer.
        *   `/noglddraw` - don't use DirectDraw to setup OpenGL renderers.
        *   `/sw` - reset rendering system to defaults at startup.
        *   `/noFastFE` - disable fast frontend rendering.
        *   `/fullscreen` - display fullscreen with software renderer (default).
        *   `/window` - display in a window.
        *   `/noBorder` - no border on window.
        *   `/640` - run at 640x480 resolution (default).
        *   `/800` - run at 800x600 resolution.
        *   `/1024` - run at 1024x768 resolution.
        *   `/1280` - run at 1280x1024 resolution.
        *   `/1600` - run at 1600x1200 resolution.
        *   `/device` <dev> - select an rGL device by name, eg. sw, fx, d3d.
        *   `/nohint` - disable usage of OpenGL perspective correction hints.
        *   `/DisableAVI` which disables the intro scenes from Sierra and Relic

    *   **TEXTURES**
        *   `/nopal` - disable paletted texture support.

    *   **MISC OPTIONS**
        *   `/pilotView` - enable pilot view.  Focus on single ship and hit Q to toggle.

### C. Mods & Modding

*   See [Historical Mod Showcase](09_Historical_Mod_Showcase.md) for detailed spotlights.
*   See [Modding Tools & Tutorials Repository](08_Modding_Tools_Repository.md) for software.
*   **Splendor Mod:**
    *   **Features:** Enhanced graphics (OpenGL, higher resolutions), balance tweaks, playable Turanics & Kadeshi.
    *   **Latest Known Version:** v1.04.
    *   **Download:** [ModDB Link for Splendor Mod v1.04](https://www.moddb.com/mods/homeworld-splendor-mod/downloads/homeworld-splendor-mod-v1-04).
    *   **Installation:** Typically extract to HW directory. Requires OpenGL. May need `/safeGL` or `/anisotropic` command lines.
*   **Map Packs & Custom Maps:**
    *   **HW1 Map Pack:** [My Map Pack](https://github.com/FlashZ/Homeworld_Map_Collection)


### D. Multiplayer & Community Tools

*   **Lobby Services:**
    *   **GameRanger:** Still active for Homeworld multiplayer.
    *   **LAN Emulators (for Direct IP):** Hamachi, ZeroTier, Radmin VPN.
*   **Recorded Game Viewers:**
    *   **Crusty Viewer (by Crusty-OMO):** From initial data (`crustyv.exe`). Stats viewer. Win10+: XP SP2 compat. *Likely an old tool from Homeworld Shipyards or similar communities. Original reliable download needed.*
    *   **SLS Viewer (Recorded Game Viewer by Ultra-SLS):** [Download SLS Viewer](files/sls_viewer.zip)

### E. Browser-Based Homeworld

*   **Gardens of Kadesh:** [Project Link](https://gardens-of-kadesh.gitlab.io/gardens-of-kadesh/)
    *   **Description:** A fan-made, open-source, 3D real-time strategy game inspired by Homeworld, playable in the browser.
    *   **Status:** Actively developed (check GitHub for updates). Not a direct port but a new game in the spirit of Homeworld.