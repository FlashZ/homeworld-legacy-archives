import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here. //
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
  }, 
  title: "Homeworld Legacy Archive",
  description: "A series of guide for installing and running Homeworld on modern machines.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Pages',
        items: [
          { text: 'Quick Start', link: '/quick_start' },
          { text: 'Homeworld (1999)', link: '/guides/install/hw1' },
          { text: 'Homeworld: Cataclysm', link: '/guides/install/hw_cataclysm' },
          { text: 'Homeworld 2', link: '/guides/install/hw2' },
          { text: 'Homeworld: Remastered', link: '/guides/install/hwrm' },
          { text: 'Community Resources', link: '/community_resources' },
          { text: 'Modding Tools', link: '/modding_tools' },
          { text: 'Mod Showcase', link: '/mod_showcase' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'Technical Details', link: '/technical_details' },
          { text: 'Markdown Examples', link: '/markdown-examples' }
        ]
      },
    ],
    

    sidebar: [
      {
        text: 'Homeworld',
        items: [
          { text: 'Install Guide', link: '/guides/install/hw1' },
          { text: 'Modding', link: '/guides/modding/hw1_modding' },
        ]
      },
      {
        text: 'Homeworld: Cataclysm',
        items: [
          { text: 'Install Guide', link: '/guides/install/hw_cataclysm' },
          { text: 'Modding', link: '/guides/modding/hw_cata_modding' }
        ]
      },
      {
        text: 'Homeworld 2',
        items: [
          { text: 'Install Guide', link: '/guides/install/hw2' },
          { text: 'Modding', link: '/guides/modding/hw2_modding' }
        ]
      },
      {
        text: 'Homeworld: Desert of Kharak',
        items: [
          { text: 'Install Guide', link: '/guides/install/hwdok' },
          { text: 'Modding', link: '/guides/modding/hwdok_modding' },
        ]
      },
      {
        text: 'Homeworld: Remastered',
        items: [
          { text: 'Install Guide', link: '/guides/install/hwrm' },
          { text: 'Modding', link: '/guides/modding/hwrm_modding' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FlashZ/homeworld-legacy-archives' },
      { icon: 'discord', link: 'https://discord.gg/7f4sNHNBnB' }
    ]
  }
})
