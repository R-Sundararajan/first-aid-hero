# First Aid Hero

A responsive first-aid reference and learning website, developed for the SSN Youth Red Cross Website Development activity. Emergency instructions come first: no sign-in, hidden steps, quizzes or videos stand between a visitor and a guide.

## Run locally

Use Node.js 22.12+ or 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite, usually http://localhost:5173. Install with `npm install` if intentionally updating dependencies; commit the resulting lockfile.

## Open on a phone over local Wi-Fi

1. Connect the computer and phone to the same trusted Wi-Fi network.
2. Start Vite with:

   ```sh
   npm run dev -- --host 0.0.0.0
   ```

3. Open the **Network** address printed by Vite on the phone, for example `http://192.168.1.20:5173`. Use your computer's actual IPv4 address, which you can find using `ipconfig` on Windows.
4. If Windows asks, allow Node.js on your private network. Guest Wi-Fi and access-point isolation can prevent devices from connecting. Use the port Vite prints if 5173 is already occupied.

`localhost` on a phone refers to the phone itself. Stop the development server with Ctrl+C when finished. The `tel:112` links open the device's phone handler; the website never calls automatically.

## Check and build

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

Validation includes lint, TypeScript checks and a production build; browser checks cover all ten pages at 360, 390, 768 and 1440 pixels, search and category filters, quiz feedback/reset, keyboard navigation, unknown URLs and the external source links. No horizontal overflow was found at those widths. These are functional checks, not a clinical or full assistive-technology audit.

The production build is in `dist/`. This is a static React application. Configure the host to return `index.html` for application routes such as `/guides/adult-cpr`; the included `public/_redirects` supplies this fallback for hosts that support that file. Other hosts need their equivalent SPA rewrite. `vite preview` is for checking the build, not a production server.

## What's included

- Home with search, a 112 call action and immediate links to adult CPR, choking and severe bleeding.
- Searchable library with category filters, symptom keywords, shareable search URLs and an empty-results state.
- Six complete guides: adult CPR / suspected cardiac arrest, adult choking, severe bleeding, burns and scalds, stroke recognition, and unresponsive but breathing.
- Learning introductions and a five-question quiz with explanations, source-guide links and a reset action.
- About, India emergency information, source references and explicit medical limitations.
- Responsive CSS, semantic HTML, keyboard focus, a skip link, route focus handling, descriptive titles and a useful not-found page.

## Project structure

```text
src/
  components/      Shared navigation, search, guide links and source lists
  data/
    guides.ts      Typed content, source URLs, categories and search
    quiz.ts        Five knowledge-check questions
  pages/          Home, library, guide, learn, about and not-found pages
  styles/         Plain CSS and responsive layouts
  App.tsx         React Router routes
  main.tsx        Application entry
```

React, React Router and Lucide are the only runtime libraries besides React DOM. There is no backend, database, authentication, analytics or external API. System fonts and icons are bundled with the application. Quiz answers stay in memory and reset when the learning page is unmounted. Search terms appear in the URL and can be retained in browser history.

## Medical sources and limitations

The content is an original, concise summary of public guidance, with **India's 112** replacing foreign emergency numbers. This is an independently developed educational student project, **not an official Red Cross service, a medical device, a clinical review or a first-aid qualification**. It does not replace emergency services, a clinician or practical training.

Primary sources:

- [British Red Cross first-aid library](https://www.redcross.org.uk/first-aid/learn-first-aid)
- [American Heart Association hands-only CPR](https://cpr.heart.org/en/cpr-courses-and-kits/hands-only-cpr)
- [AHA emergency treatment of cardiac arrest](https://www.heart.org/en/health-topics/cardiac-arrest/emergency-treatment-of-cardiac-arrest)
- [India Ministry of Home Affairs: ERSS / 112](https://www.mha.gov.in/emergency-response-support-system-erss)

Supporting sources include AHA's 2025 Adult Basic Life Support guidance, the American Stroke Association, the NHS burns reference and Resuscitation Council UK's 2025 First Aid guidance. Exact topic URLs are stored alongside each guide in `src/data/guides.ts` and displayed on the website. The optional CPR demonstration links to the AHA's own page after the emergency actions; no video is embedded or autoplayed.

Sources were checked on **13 November 2026**. This date records source checking, not independent medical review or certification. Medical guidance can change; review the original sources before maintaining or republishing the content. The newer resuscitation guidance informs the caution about moving a person with suspected trauma. These guides focus on adults; they do not teach infant or child CPR, tourniquet application, wound packing, or chemical/electrical burn treatment. Follow the 112 operator for situations beyond the guide's scope.

A connection is needed to load the application and follow external references.
