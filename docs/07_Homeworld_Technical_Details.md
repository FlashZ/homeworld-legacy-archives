# VII. Homeworld Technical Deep Dive

This section of The Homeworld Legacy Archives explores file formats, engine specifics, and other technical aspects of the Homeworld series.

*   **File Formats (Overview):**
    *   **`.BIG` (Archive Files):**
        *   Container for most game assets (models, textures, scripts, sounds).
        *   Homeworld 1 Classic (in HWR) uses a slightly different `.BIG` format than original 1999 release; older tools may require updating or specific versions.
        *   Tools: WinBigW, UnfBig Manager (original), HWR Big Extractor (for HWR Classic). See [Modding Tools Repository](08_Modding_Tools_Repository.md).
    *   **`.HOD` (Model Files):**
        *   Contains 3D model geometry, textures, LODs (Levels of Detail), docking paths, gun hardpoints, engine glow points, damage effects, and animation data.
        *   Tools: CFHodEdit, HODEditor (SpookyRAT), Maya/3DS Max plugins (historical).
    *   **`.LEVEL` (Map Files):** Defines map boundaries, resource locations, starting positions, background, and sometimes initial script calls.
    *   **`.MISS` / `.MISSION` (Mission Script Files):**
        *   Uses a Lua-like scripting language (Relic's "SCAR" - Scripting At Relic - for later games, HW1 might be simpler). Defines mission objectives, events, AI behavior, unit spawning, and cutscenes (NIS links).
    *   **`.PEO` (Particle Effects Files):** Defines visual effects like explosions, engine trails, weapon fire.
    *   **`.LUA` (Script Files):** Used extensively in HW2 and HWR for UI, game logic, AI, and mission scripting.
    *   **Texture Formats:** Often proprietary (e.g., `.TEX`, `.RLE`) or standard formats like `.TGA`, `.DDS` (especially in later versions/mods).
    *   **Sound/Music Formats:** `.WAV`, `.MP3` (or game-specific encoded audio). `HW_Comp.vce` (HW1) and `xxxspeech.big` (HW2) for voice.
*   **Engine Specifics (Homeworld 1 & Cataclysm):**
    *   **Renderer:** Supports Software, Direct3D (DirectX 5-7 era), and OpenGL.
    *   **Physics:** Basic collision detection and movement. Formations were a key feature.
    *   **Scripting:** Relatively simple event-driven scripting for missions.
    *   **Limitations (Classic Era):**
        *   Polygon counts for ships were modest by modern standards.
        *   Texture resolution limits.
        *   Hardcoded limits on number of certain objects, selection groups, etc.
        *   Single-core CPU utilization.
*   **Engine Specifics (Homeworld 2 & HWR):**
    *   **Renderer:** DirectX 9 based for HW2 original. HWR updated this significantly with new shaders, lighting, and effects (still DX9/DX11 based).
    *   **Physics:** More advanced, including ballistic weapon trajectories.
    *   **Scripting (SCAR/Lua):** Significantly more powerful and complex, allowing for deeper modding of game mechanics and AI.
    *   **Data-Driven Design:** Many aspects (units, weapons, research) defined in editable text/Lua files.
*   **Source Code Release (Homeworld 1 - 2003):**
    *   Relic released a significant portion of the Homeworld 1 source code (not the complete engine, but core game logic and systems).
    *   **Impact:** Enabled community patches, unofficial ports (Linux, Mac OS X by Westlake Interactive), and deeper understanding for modders.
    *   **Availability:** [Homeworld SDL (GitHub - an updated/modernized version based on original release)](https://github.com/HomeworldSDL/HomeworldSDL), various archived copies of the original 2003 release exist (e.g., on HomeworldAccess.net).
*   **Networking (Multiplayer):**
    *   Uses a deterministic lockstep model for multiplayer. All clients simulate the game identically based on shared commands.
    *   Susceptible to desyncs if game states diverge due to floating-point precision differences, bugs, or mismatched data.