# I. Homeworld (1999) Guide

This section of The Homeworld Legacy Archives covers the original game, released by Relic Entertainment and Sierra On-Line.

### A. Getting the Game & Initial Setup

*   **Original Retail Release:** CD-ROM (often 2 discs). Safedisc copy protection on later versions.
*   **Combined Package (Community Provided - from initial data):**
    *   **Source:** MEGA link from initial prompt.
    *   **Contents (Presumed):** Base game, 1.05 Patch, NoCD Crack, Splendor Mod.
    *   **Notes:** Use with caution; origins and exact contents unverified by this archive.
*   **Official Patches:**
    *   **Version 1.05 (Latest):**
        *   **Download:** [Sierra Help Pages](http://sierrahelp.com/Patches-Updates/Patches-Updates-Games/HomeworldSeriesUpdates.html), [Patches-Scrolls](https://www.patches-scrolls.com/homeworld.php), [ModDB Addons Section](https://www.moddb.com/games/homeworld/downloads).
        *   **Changelog Snippets (v1.05):** Primarily addressed multiplayer exploits, gameplay balance (e.g., salvage corvette mechanics), AI improvements, and some stability fixes. *Research Needed for full official changelog.*
    *   **Version 1.04, 1.03, etc.:** Available on sites like Patches-Scrolls. Generally, 1.05 is recommended.
*   **NoCD Solutions:**
    *   **Purpose:** Bypass CD check, essential for modern systems.
    *   **Sources:** Often found on game copy/modding sites. GameBurnWorld and MegaGames historically hosted these. *Exercise caution and use reputable sources.* The 1.05 patch itself made the CD check less intrusive for some.
    *   **File from initial data (`Homeworld_v1.05.rar`):** Likely a specific NoCD executable for v1.05.
*   **Digital Re-releases & Archives:**
    *   **Internet Archive:** [Homeworld (1999) ISOs](https://archive.org/details/HomeworldUSA) (USA version), [Relic Homeworld (1999) with Keys](https://archive.org/details/relic-homeworld-1999).
    *   **Homeworld Classic (via Homeworld Remastered Collection):** Available on Steam/GOG. This is the original game, adapted by Gearbox for modern OS. It has some differences from the true 1999 v1.05 (see HWR Guide).
    *   **Demo Version:** Available on [ModDB](https://www.moddb.com/games/homeworld/downloads/homeworld-demo), [GameFront](https://www.gamefront.com/games/homeworld/file/homeworld-demo).

### B. Running on Modern Systems

*   **Compatibility Mode:** Windows NT 4.0 (Service Pack 5) is highly recommended. Apply via executable properties or use the Hardware Acceleration Fix.
*   **Resolution Settings:**
    *   **In-Game + Compatibility:** Set resolution in Video Options, then apply NT 4.0 compat.
    *   **Registry Editing (for 1920x1080 etc.):**
        *   **Path (32-bit app on 64-bit OS):** `HKEY_CURRENT_USER\SOFTWARE\Classes\VirtualStore\Machine\Software\Wow6432Node\Sierra On-Line\Homeworld`
        *   Or: `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Sierra On-Line\Homeworld` (try if current user path fails, run regedit as admin).
        *   **Values (Hex):** `screenDepth` (`20` for 32-bit), `screenHeight` (`438` for 1080), `screenWidth` (`780` for 1920).
        *   **Note:** Ensure "Run as Administrator" for Homeworld.exe if settings don't stick.
*   **Graphics & Rendering:**
    *   **Hardware Acceleration Fix (Win 8+):** [PCGamingWiki Community Fix](https://community.pcgamingwiki.com/files/file/5-homeworld-hardware-acceleration-fix/) (automates NT4SP5).
    *   **dgVoodoo2 (DirectX Wrapper):**
        *   **Purpose:** Wraps old DirectX calls to modern APIs (DX11/12), improving compatibility and allowing enhancements.
        *   **Guide:** [BigWoodFarmer's YouTube Tutorial](https://www.youtube.com/watch?v=KvAN6LhmOwU).
        *   **Download:** [Dege's Official Site](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/).
        *   **Setup:** Copy `D3DImm.dll` and `DDraw.dll` from dgVoodoo2's MS\x86 folder to Homeworld dir. Configure via `dgVoodooCpl.exe`.
    *   **OpenGL Renderer:** Selectable in-game. Can be more stable for some. Use `/safeGL` command line if issues.
    *   **Common Issue: Black Screen on Startup:** Often due to resolution/refresh rate incompatibility or rendering issues. dgVoodoo2 or compatibility modes usually fix this.
*   **Command Line Options:** (Refer to [GameFAQs HWR List](https://gamefaqs.gamespot.com/pc/854758-homeworld-remastered-collection/cheats) as many are identical).
    *   **Critical for Modding/Stability:**
        *   `/heap <size_in_bytes>` (e.g., `/heap 268435456` for 256MB).
        *   `/prepath <path_to_mod_data>` (for loading loose files).
        *   `/overrideBigfile` or `/ignoreBigfiles` (essential for many mods to load loose files over those in .BIG archives).
        *   `/DisableAVI` (skips intros).
        *   `/safeGL` (for OpenGL stability).
        *   `/window` (windowed mode), `/noBorder` (with `/window` for borderless).
        *   `/captainscouncil` (unlocks all missions - may be HW:R only, needs verification for classic).
        *   `/debug` (enables some debug info/logging).
        *   `/dxtadapter <adapter_index>` (forces a specific graphics adapter if multiple are present, e.g. `/dxtadapter 0`).
    *   **Note:** A `Homeworld Commandline Options.txt` was mentioned in initial data; if found, its contents should be merged here.

### C. Mods & Modding

*   See [Historical Mod Showcase](09_Historical_Mod_Showcase.md) for detailed spotlights.
*   See [Modding Tools & Tutorials Repository](08_Modding_Tools_Repository.md) for software.
*   **Splendor Mod:**
    *   **Features:** Enhanced graphics (OpenGL, higher resolutions), balance tweaks, playable Turanics & Kadeshi.
    *   **Latest Known Version:** v1.04.
    *   **Download:** [ModDB Link for Splendor Mod v1.04](https://www.moddb.com/mods/homeworld-splendor-mod/downloads/homeworld-splendor-mod-v1-04).
    *   **Author(s):** Attributed to "Splendor Team" or individuals like "9thDG." *Research needed for specific credits.*
    *   **Installation:** Typically extract to HW directory. Requires OpenGL. May need `/safeGL` or `/anisotropic` command lines.
*   **Map Packs & Custom Maps (from initial data):**
    *   **Volans SF's HW1 Maps:** [Google Drive Link](https://drive.google.com/drive/folders/1i-3YO5LQSpeqWoZ8Nlb_NIRpCji4hLps?usp=sharing)
    *   **Hensa's Map Pack:** `MultiPlayer.7z` - *Further documentation needed for contents/source.*
    *   **DaMaG's HW Spectator Map Pack:** `HW_spec_maps_DaMaG_pack.7z` - *Further documentation needed.*
    *   **Tournament Maps (July 2024 Event):** `Tourney Maps.zip` - Dantes Fate, Fight Club, HSC Arena, OK Corral, Project Mayhem. *Document authors/origins.*

### D. Multiplayer & Community Tools

*   **Lobby Services:**
    *   **GameRanger:** Still active for Homeworld multiplayer.
    *   **LAN Emulators (for Direct IP):** Hamachi, ZeroTier, Radmin VPN.
*   **Recorded Game Viewers:**
    *   **Crusty Viewer (by Crusty-OMO):** From initial data (`crustyv.exe`). Stats viewer. Win10+: XP SP2 compat. *Likely an old tool from Homeworld Shipyards or similar communities. Original reliable download needed.*
    *   **RGV (Recorded Game Viewer by Ultra-SLS):** From initial data (`rgv.zip`). *Features and reliable download source needed.*
*   **Player Name Pronunciation (Karan Sjet):**
    *   **Context:** Special voice lines for certain player names.
    *   **List from Initial Data:** `01_Rupract` to `33_Nowhere2Camp`. This list is likely from a `.HOD` or script file within the game.
    *   **Research:** The full list is probably hardcoded or in a specific game data file. Modding forums from the era might have discussions on this or tools to extract/view the list. The audio files would be in `HW_Comp.vce` or similar.
*   **Historical Tournaments & Leagues:**
    *   **Research Area:** OGL (Online Games League), ClanBase, Mplayer, Kali. Wayback Machine for their old sites might yield league tables or rulesets.

### E. Browser-Based Homeworld

*   **Gardens of Kadesh:** [Project Link](https://gardens-of-kadesh.gitlab.io/gardens-of-kadesh/)
    *   **Description:** A fan-made, open-source, 3D real-time strategy game inspired by Homeworld, playable in the browser.
    *   **Status:** Actively developed (check GitHub for updates). Not a direct port but a new game in the spirit of Homeworld.