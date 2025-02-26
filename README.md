# mhlance.com

A comprehensive resource for Monster Hunter Lance guides, builds, and strategies. Built with Astro, this open-source project aims to provide in-depth lance-focused content across different Monster Hunter titles.

Visit the site at [mhlance.com](https://mhlance.com)

## 🤝 Contributing

We welcome contributions to both the codebase and guide content! Here's how to get started:

### 📣 Before Creating New Content

If you're planning to contribute new guides or substantial content (rather than fixes to existing content), we recommend reaching out on our Discord first. This helps ensure your effort aligns with the site's direction and prevents duplication of work. We value all contributions and want to make sure your time is well spent!

### 🚀 Setup & Development

1. **Prerequisites**

   - Node.js (around v22)
   - Fork the repository and clone it to your local machine

2. **Local Development**

   ```bash
   # Install dependencies
   npm install

   # Start development server
   npm run dev   # Site runs at http://localhost:4321

   # Build and test
   npm run build    # Verify build
   npm run preview  # Preview build locally
   ```

### 📁 Project Structure

```
src/
├── assets/           # Images and static files
├── components/       # Reusable astro components
│   ├── builds/      # Build-specific components (BuildCard, SharpnessBar, etc.)
│   ├── core/        # Shared UI components (buttons, layout, alerts, headers, footers, etc.)
│   ├── data/        # Data-specific components (GuardUp, MatchUps, etc.)
│   ├── guides/      # Guide-specific components (ComboCard, ComboInputs, etc.)
│   └── landing/     # Landing page components (GameCard, LandingFooter, etc.)
├── data/            # Site configuration and game data
│   ├── rise/        # Monster Hunter Rise data
│   ├── world/       # Monster Hunter World data
│   ├── wilds/       # Monster Hunter Wilds data
│   ├── Contributors.ts  # List of project contributors
│   ├── Navigation.ts    # Site navigation configuration !IMPORTANT!
│   └── Socials.ts       # Social links
├── layouts/         # Page layouts (Content, Landing, Main)
├── pages/           # Route pages and game content
│   ├── rise/        # Rise-specific content
│   │   ├── builds/  # Build guides
│   │   ├── guides/  # Gameplay guides
│   │   ├── data/    # Game data
│   │   └── index.astro  # Rise homepage
│   ├── world/       # World-specific content
│   ├── wilds/       # Wilds-specific content
│   └── index.astro  # Homepage
├── types/           # TypeScript interfaces
└── utils/           # Helper functions
```

### 📝 Content Guidelines

Reference existing pages in the repository for detailed examples of content structure. Each page uses a standard layout pattern:

```
---
// imports go here
import ContentLayout from '../../../layouts/ContentLayout.astro';
import Section from '../../../components/core/layout/Section.astro';
---

<ContentLayout>
  <Section>
    <p>Content</p>

    <CustomCard>
      <p>Content</p>
    </CustomCard>
  </Section>
</ContentLayout>
```

- **Builds**: Progression guides/builds go to `pages/[game]/builds/`
- **Guides**: Gameplay guides go to `pages/[game]/guides/`
- **Data**: Game data goes to `src/data/[game]/`, type interfaces go to `types/[game]/`
- Use Prettier for formatting, [Tailwind CSS](https://tailwindcss.com/), [MingCute icons](https://icon-sets.iconify.design/mingcute/) + Emojis for styling

### Before Submitting

1. Run development server: `npm run dev`
2. Format code with Prettier: `npm run format`
3. Verify build: `npm run build` or `npm run preview`
4. Test across different screen sizes (1080p and mobile, very easy to do with [chrome dev tools](https://developer.chrome.com/docs/devtools/device-mode))

## 🚀 Deployment

The site deploys automatically to [Vercel](https://vercel.com) from the main branch.

## 📝 Licenses

This project's code and original content are openly available under the [MIT License](LICENSE). Monster Hunter and related properties are trademarks of CAPCOM CO., LTD. This is a fan project and is not affiliated with or endorsed by CAPCOM.

Feel free to contribute guides and code improvements! By contributing, you agree to share your contributions under these same terms.

## ⭐ Acknowledgments

- All contributors to the project
- The Monster Hunter community
- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [MingCute Icons](https://www.mingcute.com)

---

Made with ❤️ by the Monster Hunter Lance community
