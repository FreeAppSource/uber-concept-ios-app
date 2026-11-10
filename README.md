# Uber Concept iOS App

A modern multimodal transportation mobile application built with **React Native (0.88+)**, **Expo SDK 58+**, and **Expo Router** using **JavaScript and JSX (`.js`, `.jsx`)**.

Directly translated from the original Sketch design: `uber-concept-ios-ui-kit-diego-larrain.sketch` by **Diego Larrain**.

---

## 🎨 Artboards & Screens (based on 9 design artboards)

| # | Artboard Name | Sketch ID | Dimensions | Code Location | Description |
|---|---|---|---|---|---|
| 1 | **Ride - Home** | `ABDAD8F1-7CD8-45F7-9BBC-CF1FD3C3BD65` | 750 × 1334 | `src/app/index.jsx` | Full-screen city map with animated UberX cars, "Where to?" search with "Now" schedule picker, "Travel only if necessary" alert, and recent destinations (Eliodoro Yañez 809, Carmen Fariña). |
| 2 | **Rent - Car** | `9B294EC1-90CA-4A08-B2FE-CA230552C2F8` | 750 × 1334 | `src/app/index.jsx` | Car mode view with nearby Awto vehicles plotted on the map. |
| 3 | **Rent - Car - Vehicle Type** | `E05E51C3-DB16-4A7F-9DAC-D54E0AAE9FD2` | 750 × 1334 | `src/app/index.jsx` | Floating mode selector drawer for Car, Bike, Scooter, and Ride. |
| 4 | **Rent - Car - Reserve A** | `1F5AA769-2606-4FF0-8515-970B688394D3` | 750 × 1334 | `src/app/index.jsx` | "Awto CityCar FSKC61" selection with "254 kilometers range" and "Reserve on the Awto app" CTA. |
| 5 | **Rent - Car - Reserve B (i)** | `B0D25C92-56B1-44D6-A50B-315EBC87C791` | 750 × 1334 | `src/app/index.jsx` | "Awto CityCar" with "850 kilometers range", "Rent a car by the minute", and fuel & insurance perks. |
| 6 | **Rent - Car - Reserve B (ii)** | `9E1F9FA5-BBFD-4EFA-9F03-16BCD5E1B29D` | 750 × 1334 | `src/app/index.jsx` | "Awto SUV" selection with "500 kilometers range" and free parking inclusion. |
| 7 | **Rent - Bike** | `8736314D-DC78-48F3-B1C5-79280B0298CA` | 750 × 1334 | `src/app/index.jsx` | JUMP Bike map pins visualization with distance callouts. |
| 8 | **Rent - Bike - Vehicle Type** | `863CFAAA-6737-470C-BF30-434ACF3DB455` | 750 × 1334 | `src/app/index.jsx` | Micromobility vehicle switcher between JUMP Bike and JUMP Scooter. |
| 9 | **Rent - Bike - Reserve** | `1774D9AC-157C-4753-9445-02D15561FE39` | 750 × 1334 | `src/app/index.jsx` | "JUMP Bike 13892" with "16 kilometers range", 260m distance callout pin, "Scan to ride" QR scanner, and "Reserve" hold button. |

---

## 🚗 Design Tokens & Colors (Extracted from Sketch AST)

- **Uber Black**: `#000000`
- **Uber Blue**: `#276EF1`
- **Soft Blue**: `#F2F6FE`
- **Safety Green**: `#47B275`
- **JUMP Red**: `#E11900`
- **Surface Grays**: `#F6F6F6` / `#EEEEEE` / `#E2E2E2`
- **Dark Neutral**: `#232323` / `#545454`

---

## 🚀 Running the App

```bash
# Start the Expo development server
npx expo start
```

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Uber Integration Concept** design by **Diego Larrain**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Diego Larrain](https://www.sketchappsources.com/contributor/diegolarrain) |
| Original design | [Uber Integration Concept](https://www.instagram.com/diego_larrain/) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4562-uber-integration-concept-ios-ui-sketch-freebie-resource.html) |
| Website | <https://www.instagram.com/diego_larrain/> |
| Original file | `uber-concept-ios-ui-kit-diego-larrain.sketch` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Uber Integration Concept" by Diego Larrain (https://www.instagram.com/diego_larrain/), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4562-uber-integration-concept-ios-ui-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
