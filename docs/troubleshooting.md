# X. Troubleshooting Common Issues

This section of The Homeworld Legacy Archives provides solutions and advice for common problems encountered when trying to run classic Homeworld games on modern systems.

## General Troubleshooting Steps (Try These First!)

1.  **Run as Administrator:** Right-click the game's executable (`Homeworld.exe`, `Cataclysm.exe`, `Homeworld2.exe`) and select "Run as administrator." This can solve many permissions-related issues, especially with saving settings or accessing files.
2.  **Compatibility Mode:**
    *   **Homeworld 1 / Cataclysm:** Windows NT 4.0 (Service Pack 5) is often the magic bullet. Windows XP (Service Pack 2 or 3) can also work.
    *   **Homeworld 2 (Original):** Windows XP (Service Pack 3) is commonly recommended.
    *   **How:** Right-click executable -> Properties -> Compatibility tab.
3.  **Update Graphics Drivers:** Ensure your NVIDIA, AMD, or Intel graphics drivers are up to date from the manufacturer's website.
4.  **Install/Verify DirectX & Visual C++ Runtimes:**
    *   **DirectX:** While modern Windows has newer DirectX, older games might need specific DirectX 9.0c components. Download the [DirectX End-User Runtime Web Installer](https://www.microsoft.com/en-us/download/details.aspx?id=35) from Microsoft.
    *   **Visual C++ Runtimes:** Games often depend on specific versions. Install a comprehensive package like the "Visual C++ Redistributable Runtimes All-in-One" found on sites like TechPowerUp or MajorGeeks.
5.  **Disable Fullscreen Optimizations (Windows 10/11):** Right-click executable -> Properties -> Compatibility tab -> Check "Disable fullscreen optimizations."
6.  **Check Antivirus/Firewall:** Temporarily disable your antivirus or firewall to see if it's interfering. If so, add an exception for the game's executable and folder.
7.  **Clean Boot:** Perform a clean boot of Windows to eliminate conflicts from background applications. Search Microsoft Support for "how to perform a clean boot in Windows."

## Homeworld 1 & Cataclysm (Original) Specific Issues

*   **Black Screen on Startup / Game Won't Launch:**
    *   **Cause:** Often resolution/refresh rate incompatibility, rendering issues, or missing runtimes.
    *   **Solutions:**
        *   Apply NT 4.0 Compatibility Mode.
        *   Use the [Homeworld Hardware Acceleration Fix](https://community.pcgamingwiki.com/files/file/5-homeworld-hardware-acceleration-fix/).
        *   Use **dgVoodoo2**: This DirectX wrapper is highly effective. Copy `D3DImm.dll` and `DDraw.dll` from dgVoodoo2's MS\x86 folder to the game directory. Configure resolution and other settings via `dgVoodooCpl.exe`.
        *   Try `/window` command line option.
        *   Ensure DirectX 9.0c components are installed.
*   **Resolution Issues / Settings Not Saving:**
    *   **Solutions:**
        *   NT 4.0 Compatibility Mode after setting resolution in-game.
        *   Registry edits (see [Homeworld 1 Guide](01_Homeworld_1999_Guide.md#b-running-on-modern-systems)).
        *   dgVoodoo2 can force custom resolutions.
*   **"Cannot set display mode" / Graphics Errors:**
    *   **Solutions:**
        *   dgVoodoo2.
        *   Try switching between OpenGL and Direct3D renderers in the game's video options.
        *   Use `/safeGL` command line if using OpenGL.
*   **Mouse Issues (Cursor Invisible, Lagging, Erratic):**
    *   **Solutions:**
        *   Disable display scaling: Right-click executable -> Properties -> Compatibility -> Change high DPI settings -> Check "Override high DPI scaling behavior" and set "Scaling performed by:" to "Application."
        *   Reduce mouse polling rate if it's very high (e.g., >500Hz).
        *   dgVoodoo2 sometimes helps with mouse input.
*   **Game Crashes Randomly (CTD):**
    *   **Solutions:**
        *   Increase heap size with `/heap <bytes>` command line (e.g., `/heap 268435456`).
        *   Ensure NoCD patch is correctly applied for the game version if not using GOG/Steam Classic.
        *   If modded, a specific mod might be unstable. Test without mods.
*   **Multiplayer Issues (Cannot Connect, Desyncs):**
    *   **Solutions:**
        *   Ensure all players have the exact same game version and patch.
        *   Use GameRanger (often handles NAT traversal better than direct IP).
        *   For direct IP: Port forwarding might be needed (UDP/TCP ports, research specific ports for Homeworld).
        *   Firewall exceptions for the game.

## Homeworld 2 (Original) Specific Issues

*   **Widescreen Resolution Problems:**
    *   **Solutions:**
        *   Community-made widescreen fixes/patches (search ModDB or old forums).
        *   Editing configuration files (`player.cfg` or similar `.lua` files in `My Documents\Homeworld2\Profiles\Profile1\` or game directory). Look for `screenResolutionW` and `screenResolutionH`.
        *   dgVoodoo2.
*   **Graphical Glitches (Missing Textures, Strange Colors):**
    *   **Solutions:**
        *   Update graphics drivers.
        *   dgVoodoo2.
        *   Ensure game is using dedicated GPU on laptops with switchable graphics.
*   **Low FPS / Stuttering:**
    *   **Solutions:**
        *   Lower in-game graphics settings (shadows, effects).
        *   Command line option `/heap` might help.
        *   Check for background processes consuming resources.
*   **"ASSERTION FAILED" or similar errors:**
    *   **Cause:** Often due to corrupted game files, mod conflicts, or engine bugs.
    *   **Solutions:**
        *   Verify game file integrity (if using a digital platform that supports it).
        *   Reinstall the game.
        *   If modded, identify the problematic mod by disabling them one by one.

## Homeworld Remastered Collection Issues

*   **Launcher Problems (Original Launcher):**
    *   The official launcher has been updated. If using a very old HWR install, ensure it's updated.
    *   The [HWR_Launcher_CrashFix by lone-wolf-akela](https://github.com/lone-wolf-akela/HWR_Launcher_CrashFix/) was for older issues.
*   **Performance Issues (especially in large battles or with mods):**
    *   **Solutions:**
        *   Lower graphics settings (AA, shadows, model detail).
        *   Use the "Players Patch" mod, which includes performance optimizations.
        *   Be mindful that some intensive mods (e.g., Complex, FX:Galaxy) require powerful hardware.
*   **Mod Incompatibility / Conflicts:**
    *   **Solutions:**
        *   Read mod descriptions carefully for compatibility notes and load order instructions.
        *   Use a mod manager if available, or be meticulous about manual installation.
        *   Test mods one at a time to isolate conflicts.
*   **Multiplayer Desyncs:**
    *   **Solutions:**
        *   Ensure all players have the exact same game version, official patches, and *identical mod lists and load orders*.
        *   The "Players Patch" often improves multiplayer stability.
        *   Avoid alt-tabbing during loading or gameplay.
*   **Issues with Classic Versions in HWR:**
    *   Some very old mods or tools designed for the 1999/2003 originals might not work perfectly with the HWR Classic versions due to changes in the `.BIG` file format or other subtle compatibility layer differences.
    *   Use tools specifically updated or confirmed to work with HWR Classic versions.

**Note:** If you encounter an issue not listed here, or have a reliable solution for one, please contribute by opening an Issue or Pull Request on the [GitHub repository](https://github.com/FlashZ/homeworld-legacy-archives).