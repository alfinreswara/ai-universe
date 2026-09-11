# PRD — AI Universe 3D

**Dokumen:** Product Requirements Document  
**Produk:** AI Universe  
**Versi:** 1.0 Final  
**Status:** Siap untuk development  
**Tipe Produk:** Interactive 3D AI Ecosystem Explorer  
**Target Platform:** Web Desktop, Tablet, Mobile  
**Bahasa Utama UI:** English  
**Dokumentasi/Internal:** Indonesian / English sesuai kebutuhan tim

---

# 1. Ringkasan Produk

**AI Universe** adalah website eksplorasi ekosistem kecerdasan buatan dalam bentuk **universe 3D interaktif**.

Website tidak boleh terasa seperti landing page SaaS biasa yang diberi background luar angkasa. Ruang 3D harus menjadi **interface utama** dari produk.

User memasuki sebuah universe yang merepresentasikan industri AI:

- **AI Provider = Galaxy / Stellar Core**
- **Model Family = Solar System**
- **AI Model = Planet / Celestial Object**
- **Capability = Moon / Satellite / Orbital Indicator**
- **Relationship = Orbit / Energy Connection / Spatial Grouping**

User dapat menjelajahi universe, memilih provider, masuk ke model family, melihat model AI, mencari model tertentu, membandingkan informasi, dan membuka detail model dari sumber resmi.

Tujuan desain adalah menciptakan pengalaman yang terasa seperti:

> **realistic cinematic outer space + luxury futuristic technology interface**

Bukan game, bukan cyberpunk, bukan dashboard AI generik.

---

# 2. Product Vision

Membuat **peta interaktif ekosistem AI** yang terasa hidup, mudah dieksplorasi, informatif, dan secara visual berbeda dari direktori model AI tradisional.

AI Universe harus menjadi tempat di mana user dapat:

1. Memahami hubungan antara provider, model family, model, dan capability.
2. Menemukan model AI melalui eksplorasi visual.
3. Mencari model dengan cepat.
4. Melihat informasi model dari sumber resmi.
5. Membandingkan landscape AI tanpa harus membuka banyak website provider.
6. Merasakan pengalaman eksplorasi yang memorable.

AI Universe harus tetap berguna walaupun efek 3D dikurangi pada perangkat lemah.

---

# 3. Problem Statement

Informasi mengenai model AI tersebar di banyak sumber:

- halaman produk provider,
- dokumentasi API,
- blog resmi,
- model cards,
- changelog,
- research pages,
- pricing pages,
- announcement pages.

Masalah utama:

- sulit melihat hubungan antar-model secara visual,
- model baru muncul dengan cepat,
- nama model dan family sering membingungkan,
- capability tiap model berbeda,
- direktori model umumnya berupa tabel/card yang tidak memorable,
- website 3D sering bagus secara visual tetapi miskin informasi dan sulit dipakai.

AI Universe menyelesaikan masalah tersebut dengan menggabungkan:

**structured AI database + spatial navigation + premium 3D visualization.**

---

# 4. Product Goals

## 4.1 Primary Goals

### G1 — Interactive AI Map
Menyediakan representasi visual 3D dari ekosistem AI yang benar-benar dapat dijelajahi.

### G2 — Trusted Model Information
Informasi penting model harus dapat ditelusuri ke sumber resmi.

### G3 — Fast Discovery
User harus bisa menemukan provider/model melalui search tanpa harus memahami struktur universe terlebih dahulu.

### G4 — Premium Experience
Visual harus terasa modern, cinematic, mewah, bersih, dan profesional.

### G5 — Scalable Architecture
Provider atau model baru harus bisa ditambahkan melalui data tanpa mengubah scene secara manual.

### G6 — Strong Performance
Experience tetap responsif pada desktop dan memiliki versi adaptif pada mobile/perangkat lemah.

---

# 5. Non-Goals

Versi awal AI Universe **tidak** bertujuan untuk:

- membuat game luar angkasa,
- membuat simulasi astronomi realistis,
- menyediakan chatbot umum,
- menjadi marketplace model AI,
- menjalankan inference semua model dari satu interface,
- menyediakan benchmark independen tanpa sumber terpercaya,
- menampilkan harga yang tidak memiliki sumber resmi,
- membuat semua objek melalui Blender,
- membuat dunia virtual multiplayer.

Blender bersifat **opsional** untuk asset tertentu, bukan fondasi utama rendering.

---

# 6. Target Users

## 6.1 AI Enthusiast
Ingin mengetahui model AI terbaru dan memahami landscape AI dengan cara yang menarik.

## 6.2 Developer
Ingin melihat capability, API availability, input/output modality, context, dan sumber dokumentasi.

## 6.3 Content Creator / Researcher
Membutuhkan overview cepat untuk memahami provider dan model family.

## 6.4 Student / Beginner
Belum memahami hubungan OpenAI, Anthropic, Google, Meta, DeepSeek, Mistral, Qwen, dan provider lain.

## 6.5 Tech-Savvy General User
Masuk karena tertarik dengan pengalaman visual dan kemudian belajar mengenai AI.

---

# 7. Core Design Principles

## 7.1 3D Is the Interface
3D bukan background dekoratif.

Navigasi utama harus terjadi melalui universe.

## 7.2 Cinematic, Not Gaming
Gerakan kamera harus terasa seperti observatory/cinematic navigation.

Hindari:

- joystick,
- HUD game berlebihan,
- crosshair,
- movement FPS,
- speed berlebihan.

## 7.3 Information Before Decoration
Setiap efek visual harus mendukung hierarchy, depth, navigation, atau identity.

## 7.4 Progressive Disclosure
User tidak langsung dibanjiri semua informasi.

Urutan:

Universe → Provider → Family → Model → Detail.

## 7.5 Premium Minimalism
UI 2D harus tipis, transparan, dan tidak menutupi scene.

## 7.6 Data-Driven Scene
Scene dibangun dari data, bukan objek yang di-hardcode satu per satu.

## 7.7 Performance Is a Feature
Visual bagus tidak boleh mengorbankan usability.

---

# 8. Visual Direction

## 8.1 Design Character

Kata kunci:

- premium
- cinematic
- modern
- luxurious
- minimal
- deep
- spatial
- intelligent
- futuristic
- refined

Inspirasi rasa kualitas:

- Apple
- Linear
- Vercel
- premium space observatory
- cinematic science interface

Inspirasi tersebut hanya sebagai bar kualitas, bukan untuk ditiru secara langsung.

---

# 9. Color System

Dominan:

- Deep Black
- Graphite
- Charcoal
- Off White
- Silver

Accent:

- Subtle Cool Blue
- Subtle Violet
- Soft Cyan
- Warm Ivory untuk provider tertentu

Hindari:

- rainbow gradient berlebihan,
- neon pink/cyan cyberpunk,
- glow kuat di seluruh UI,
- banyak warna brand dalam satu layar.

Setiap provider boleh memiliki **visual signature** sendiri tetapi tetap dalam satu design system.

Contoh:

- OpenAI → silver/white/cool cyan
- Anthropic → warm ivory/soft amber
- Google → restrained spectral accent
- DeepSeek → deep blue
- Meta → cool blue/silver
- xAI → monochrome / high contrast
- Mistral → warm subtle energy
- Qwen → violet/blue restrained

Warna provider tidak boleh menjadi satu-satunya pembeda; gunakan bentuk, orbital signature, particle behavior, atau atmosphere.

---

# 10. Typography

Gunakan sans-serif modern dengan legibility tinggi.

Karakter:

- geometric tetapi tidak terlalu futuristik,
- bersih,
- tajam,
- premium,
- mudah dibaca pada panel transparan.

Hierarchy:

- Display: besar tetapi tidak memenuhi layar.
- Heading: medium weight.
- Body: readable.
- Metadata: compact.
- Labels 3D: small, restrained, high contrast.

Hindari uppercase pada semua text.

---

# 11. 3D Universe Architecture

Hierarchy utama:

```text
AI Universe
└── Provider / Galaxy
    └── Model Family / Solar System
        └── AI Model / Planet
            └── Capabilities / Satellites
```

Scene tidak harus mengikuti skala astronomi realistis.

Gunakan **semantic scale**, yaitu ukuran objek mengikuti importance dan hierarchy, bukan ukuran planet sungguhan.

---

# 12. Universe View

Universe View adalah kondisi awal setelah intro.

User melihat beberapa provider tersebar di 3D space.

Persyaratan:

- provider tidak berada di satu bidang datar,
- ada foreground, midground, background,
- spatial composition seimbang,
- provider utama mudah dibedakan,
- tidak terlalu padat,
- label hanya muncul bila relevan,
- scene tetap mudah dipahami.

Provider yang belum memiliki banyak model tidak boleh terlihat sama dominannya dengan provider besar kecuali alasan desain mengharuskan.

---

# 13. Provider Galaxy

Setiap provider direpresentasikan sebagai stellar system/core.

Komponen visual:

- central stellar core,
- halo,
- orbital particle field,
- subtle energy lines,
- model-family systems,
- local dust/nebula,
- label provider.

Saat idle:

- subtle rotation,
- slow particle movement,
- low-frequency pulse.

Saat hover:

- glow sedikit meningkat,
- label lebih jelas,
- orbit menjadi sedikit lebih aktif,
- cursor/interaction state berubah.

Saat click:

- provider menjadi camera target,
- kamera melakukan cinematic fly-to,
- provider lain memudar secara visual,
- model family dalam provider menjadi lebih jelas.

---

# 14. Model Family / Solar System

Family merupakan group model.

Contoh konseptual:

```text
Provider
├── General Models
├── Reasoning Models
├── Image Models
├── Audio Models
├── Video Models
└── Specialized Models
```

Nama family harus mengikuti struktur resmi provider jika ada.

Jika provider tidak menggunakan istilah family secara eksplisit, grouping internal AI Universe boleh digunakan, tetapi harus ditandai sebagai **AI Universe classification**, bukan seolah-olah terminologi resmi provider.

Orbit:

- tidak semuanya horizontal,
- gunakan inclination berbeda,
- gunakan radius berbeda,
- hindari collision,
- orbit harus cukup pelan,
- fokus pada readability.

---

# 15. AI Model / Planet

Setiap model adalah celestial object.

Visual dapat dibedakan berdasarkan kategori/capability, bukan hanya warna.

Model dapat memiliki:

- core,
- surface shader,
- atmosphere,
- subtle emissive pattern,
- ring,
- halo,
- small orbital markers.

Tidak semua model harus memiliki texture kompleks.

Preferensi:

**procedural geometry + shader + material variation**

daripada asset GLB berat.

Hover menampilkan minimal label:

```text
Model Name
Provider
Primary Type
```

Contoh:

```text
GPT-X
OpenAI
Multimodal
```

Hover tidak boleh membuka panel besar.

---

# 16. Capability Representation

Capability dapat divisualisasikan sebagai:

- small satellite,
- moon,
- orbital dot,
- ring segment,
- icon indicator pada detail UI.

Capability yang dapat dipetakan:

- Text
- Vision
- Image Generation
- Audio Input
- Audio Output
- Video
- Reasoning
- Tool Use
- Function Calling
- Web/Search
- Code
- Embeddings
- Realtime
- Multimodal

Tidak perlu membuat satu moon untuk setiap capability bila scene menjadi terlalu ramai.

Gunakan adaptive representation berdasarkan zoom level.

---

# 17. Space Environment

Background harus benar-benar memiliki depth.

## 17.1 Starfield

Gunakan minimal tiga spatial layers:

1. distant stars,
2. mid-distance stars,
3. foreground particles/stars.

Variasi:

- size,
- brightness,
- opacity,
- distance,
- density,
- temperature tint,
- subtle twinkle.

Twinkle harus sangat ringan.

Preferensi teknik:

- Points / BufferGeometry,
- shader-based stars,
- instancing bila sesuai.

Jangan membuat ribuan React component individual.

## 17.2 Cosmic Dust

Gunakan sparse particle field untuk menambah depth saat camera bergerak.

## 17.3 Nebula

Nebula harus subtle.

Teknik yang dapat digunakan:

- shader,
- procedural noise,
- low-resolution optimized texture,
- billboard volume illusion,
- layered transparent planes secara terbatas.

Nebula tidak boleh terlihat seperti gambar wallpaper datar.

## 17.4 Parallax

Semua layer harus memberikan depth saat kamera bergerak.

Foreground bergerak lebih cepat secara relatif daripada distant stars.

---

# 18. Lighting

Lighting harus cinematic tetapi performant.

Prioritas:

- emissive objects,
- controlled ambient light,
- local point lights hanya bila perlu,
- fake lighting melalui shader/material bila lebih murah.

Hindari terlalu banyak dynamic shadow.

Planet yang tidak membutuhkan shadow real-time harus menggunakan shader/fake lighting.

---

# 19. Camera System

Camera merupakan salah satu fitur terpenting.

Gunakan state machine.

## States

```text
INTRO
UNIVERSE
PROVIDER
FAMILY
MODEL
DETAIL
SEARCH_TARGET
TRANSITION
```

Camera tidak boleh memiliki logic tersebar di banyak component.

Gunakan satu centralized CameraController.

---

# 20. Camera Movement

Semua fly-to harus:

- memiliki easing,
- mempertimbangkan target bounding radius,
- menjaga orientasi yang natural,
- menghindari clipping,
- memperlambat gerakan saat mendekati target,
- dapat dibatalkan bila user melakukan navigasi baru.

Gerakan tidak boleh membuat user mudah motion sickness.

Gunakan:

- lerp/slerp,
- damp,
- GSAP timeline,
- quaternion interpolation,
- atau kombinasi yang sesuai.

---

# 21. Intro Experience

Saat pertama membuka website:

```text
AI UNIVERSE

Explore the intelligence shaping our world.

[ Explore Universe ]
```

Background sudah menampilkan universe secara subtle.

Intro tidak boleh menjadi landing page panjang.

Setelah klik:

1. UI intro fade.
2. Camera melakukan slow push-in.
3. Star parallax meningkat.
4. Provider galaxies mulai terlihat.
5. Universe navigation aktif.

User yang kembali dapat memiliki opsi skip intro.

---

# 22. Primary Navigation

Navbar tipis dan floating.

Desktop:

```text
AI UNIVERSE        Explore   Models   Providers   Learn        Search
```

Mobile:

- compact logo,
- search,
- menu button.

Navbar harus memiliki:

- transparent/graphite background,
- backdrop blur ringan,
- thin border optional,
- tidak terlalu tinggi.

---

# 23. Explore

Explore adalah mode utama.

Fungsi:

- Universe Overview
- Provider exploration
- Family exploration
- Model exploration
- Camera navigation
- Spatial browsing

Explore harus menjadi default experience.

---

# 24. Search

Search wajib cepat dan tidak bergantung pada navigasi 3D.

Shortcut desktop:

```text
Cmd/Ctrl + K
```

Search dapat mencari:

- provider,
- model,
- model family,
- capability.

Result contoh:

```text
GPT-X
Model · OpenAI

OpenAI
Provider

Vision
Capability
```

Saat user memilih model:

1. Search overlay ditutup.
2. Target model ditemukan.
3. Camera melakukan fly-to.
4. Model highlight sementara.
5. Model detail dapat dibuka otomatis atau setelah focus selesai.

Search harus tetap usable jika 3D dimatikan/fallback.

---

# 25. Breadcrumb Navigation

Saat user masuk ke hierarchy:

```text
Universe / OpenAI / GPT / Model X
```

Setiap level clickable.

Klik:

- Universe → universe view.
- Provider → provider view.
- Family → family view.
- Model → model focus.

Breadcrumb desktop muncul compact.

Mobile dapat menggunakan back button + current level.

---

# 26. Model Detail

Saat model dipilih, tampilkan floating panel/HUD.

Scene 3D tetap terlihat.

Data utama:

- Model Name
- Provider
- Model Family
- Status
- Release Date
- Last Verified
- Description
- Input Modalities
- Output Modalities
- Context Window
- Reasoning
- Vision
- Audio
- Video
- Tool Use
- Function Calling
- API Availability
- Open Weights / Closed
- Official Documentation
- Announcement
- Pricing Source jika tersedia
- Model Card jika tersedia

Jangan tampilkan field kosong secara agresif.

Jika data tidak diketahui:

- hide field, atau
- tampilkan `Not officially specified`.

Jangan mengarang data.

---

# 27. Source & Trust System

Semua informasi faktual yang mudah berubah harus memiliki provenance.

Priority sumber:

1. Official provider documentation.
2. Official API documentation.
3. Official provider/model page.
4. Official model card.
5. Official research publication.
6. Official announcement/blog.
7. Official pricing page.

Third-party source tidak digunakan sebagai primary source untuk fakta inti jika sumber resmi tersedia.

Setiap record dapat menyimpan:

```text
source_url
source_type
verified_at
last_checked_at
notes
```

Untuk data yang berasal dari klasifikasi internal AI Universe, beri label:

```text
AI Universe classification
```

---

# 28. Providers

Versi awal harus mendukung struktur data untuk provider seperti:

- OpenAI
- Anthropic
- Google
- Meta
- xAI
- DeepSeek
- Mistral AI
- Alibaba / Qwen
- Cohere

Provider di atas adalah initial coverage, bukan daftar permanen.

Sistem harus bisa menambah provider baru tanpa perubahan arsitektur.

---

# 29. Models Directory

Selain visual 3D, sediakan `/models`.

Tujuan:

- accessibility,
- SEO,
- user yang ingin browsing cepat,
- fallback untuk device lemah,
- direct linking.

Models directory menggunakan UI premium minimal.

Filter:

- Provider
- Modality
- Capability
- Model Family
- API availability
- Active/Deprecated
- Open/Closed weights jika datanya jelas.

Directory tidak boleh menggantikan Explore; hanya complementary interface.

---

# 30. Providers Directory

Route:

```text
/providers
/providers/[slug]
```

Provider page:

- overview,
- visual identity,
- model families,
- active models,
- capabilities,
- official sources,
- button `Explore in Universe`.

---

# 31. Model Route

Setiap model memiliki URL unik.

Contoh konseptual:

```text
/models/[provider]/[model-slug]
```

Direct URL harus:

1. memuat page,
2. preload data model,
3. jika WebGL tersedia, universe dapat membuka target,
4. memiliki HTML/metadata yang tetap indexable.

---

# 32. Learn

Learn bukan prioritas MVP, tetapi struktur harus disiapkan.

Topik:

- What is an AI model?
- What is a context window?
- Multimodal AI
- Reasoning models
- Open vs closed models
- AI providers
- Tool use / function calling
- Embeddings
- Image/video/audio generation

Learn harus menggunakan bahasa mudah dan dapat menghubungkan konsep ke object dalam universe.

Contoh:

`Explore reasoning models in the universe`.

---

# 33. URL Architecture

Suggested:

```text
/
 /explore
 /models
 /models/[provider]/[slug]
 /providers
 /providers/[slug]
 /learn
 /learn/[slug]
```

State 3D penting dapat disinkronkan ke URL query/path jika feasible.

Contoh:

```text
/explore?provider=openai&model=example
```

Agar target bisa dibagikan.

---

# 34. Core Data Model

## Provider

```ts
Provider {
  id
  slug
  name
  description
  websiteUrl
  documentationUrl
  visualTheme
  status
  createdAt
  updatedAt
}
```

## ModelFamily

```ts
ModelFamily {
  id
  providerId
  slug
  name
  description
  classificationType
  sortOrder
}
```

## Model

```ts
Model {
  id
  providerId
  familyId
  slug
  name
  description
  status
  releaseDate
  deprecationDate
  contextWindow
  apiAvailable
  openWeights
  inputModalities
  outputModalities
  officialUrl
  docsUrl
  pricingUrl
  lastVerifiedAt
}
```

## Capability

```ts
Capability {
  id
  slug
  name
  category
}
```

## ModelCapability

```ts
ModelCapability {
  modelId
  capabilityId
  confidence
  sourceId
}
```

## Source

```ts
Source {
  id
  modelId
  providerId
  url
  sourceType
  title
  verifiedAt
  lastCheckedAt
}
```

---

# 35. Scene Data Model

Jangan mencampur database model dengan transform 3D permanen tanpa abstraction.

Tambahkan visual scene layer:

```ts
SceneNode {
  entityType
  entityId
  position
  scale
  visualVariant
  orbit
  priority
}
```

Scene positioning dapat dihasilkan dari:

- deterministic algorithm,
- seeded procedural layout,
- curated overrides.

Gunakan seeded layout agar posisi tidak berubah random setiap reload.

---

# 36. Data Update Strategy

MVP:

- curated/manual verified data,
- admin/internal data file atau database,
- setiap perubahan harus memiliki source.

Post-MVP:

- automated official-source monitoring,
- candidate update queue,
- human review,
- publish after verification.

Jangan otomatis mempublikasikan data hasil scraping/LLM tanpa verification.

---

# 37. Technical Stack

## Frontend

- Next.js
- React
- TypeScript

## 3D

- Three.js
- React Three Fiber
- @react-three/drei

## Animation

- GSAP untuk camera/complex timelines
- Framer Motion untuk 2D UI transitions

## Styling

- Tailwind CSS

## State

- Zustand

## Database

- PostgreSQL

## ORM

- Prisma

## Validation

- Zod

## Deployment

Arsitektur harus kompatibel dengan platform deployment modern seperti Vercel atau environment Node/container sejenis.

Jangan mengikat seluruh aplikasi ke vendor tertentu jika tidak perlu.

---

# 38. Rendering Architecture

Pisahkan:

```text
App UI
├── Navigation
├── Search
├── Detail Panels
├── Directory Pages
└── Learn

3D Engine
├── UniverseScene
├── ProviderSystem
├── FamilySystem
├── ModelNode
├── Starfield
├── Nebula
├── CameraController
├── InteractionManager
└── QualityManager

Data
├── Providers
├── Families
├── Models
├── Capabilities
└── Sources
```

React UI tidak boleh melakukan update per-frame yang tidak perlu.

Logic per-frame harus berada di layer R3F yang tepat.

---

# 39. Suggested Project Structure

```text
src/
├── app/
│   ├── explore/
│   ├── models/
│   ├── providers/
│   └── learn/
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── three/
│       ├── universe/
│       ├── providers/
│       ├── families/
│       ├── models/
│       ├── effects/
│       ├── camera/
│       └── interaction/
│
├── data/
├── hooks/
├── lib/
├── shaders/
├── store/
├── types/
└── utils/
```

Jangan membuat satu `Universe.tsx` berisi seluruh logic.

---

# 40. Quality Manager

Implementasikan device-aware quality system.

Modes:

```text
LOW
MEDIUM
HIGH
```

## LOW

- lower DPR,
- particle count rendah,
- minimal nebula,
- no expensive post-processing,
- no dynamic shadow,
- simplified atmosphere.

## MEDIUM

- medium particle density,
- selective atmosphere,
- limited effects.

## HIGH

- richer particles,
- higher DPR within safe limit,
- enhanced atmosphere,
- optional lightweight post-processing.

Quality detection mempertimbangkan:

- device memory jika tersedia,
- viewport,
- DPR,
- WebGL capabilities,
- frame-time sampling.

User juga dapat override quality secara manual.

---

# 41. Performance Requirements

Target:

### Desktop
- Desired: ~60 FPS pada desktop modern.
- Minimum acceptable: stable experience tanpa freeze/stutter berat.

### Mobile
- Target experience: stable dan responsive.
- Visual fidelity boleh diturunkan.

Guidelines:

- gunakan InstancedMesh jika banyak objek mirip,
- gunakan shader points untuk starfield,
- hindari ribuan React object,
- limit realtime lights,
- lazy-load heavy assets,
- compress texture,
- use Draco/Meshopt jika GLB digunakan,
- use LOD untuk objek kompleks,
- frustum culling,
- avoid unnecessary transparency layers,
- reuse geometries/materials,
- memoize expensive computations.

---

# 42. Performance Budget

Initial budget target:

- First interactive UI harus muncul secepat mungkin.
- 3D scene boleh progressive-load.
- Critical bundle 3D dipisahkan bila memungkinkan.
- Texture resolution tidak boleh lebih besar dari kebutuhan visual.
- Asset Blender/GLB harus melalui optimization.
- Hindari video background besar.

Jika pilihan antara sedikit mengurangi efek dan menjaga smooth interaction, pilih smooth interaction.

---

# 43. Loading System

Loading screen:

```text
AI UNIVERSE

Initializing Universe...
[ progress ]
```

Boleh menampilkan:

- small stars,
- subtle motion,
- loading status.

Jangan tampilkan spinner generik.

Progress harus merepresentasikan preload nyata jika memungkinkan.

Load priority:

1. UI shell
2. core scene
3. provider systems
4. visible models
5. secondary effects
6. optional high-quality assets

---

# 44. Responsive Design

## Desktop

Full 3D experience.

## Tablet

- sedikit mengurangi particle density,
- responsive panels,
- touch controls.

## Mobile

- simplified scene,
- lower quality default,
- reduced nebula/post-processing,
- compact detail drawer,
- touch-first controls.

Mobile tidak boleh sekadar versi desktop yang diperkecil.

---

# 45. Controls

## Desktop

- Drag → orbit/look.
- Wheel/trackpad → controlled zoom.
- Hover → preview.
- Click → focus/select.
- ESC → back.
- Cmd/Ctrl + K → search.

## Mobile

- Single finger drag → rotate.
- Pinch → zoom.
- Tap → select.
- Back control → previous hierarchy.

Controls harus dibatasi agar user tidak bisa tersesat jauh dari scene.

---

# 46. Motion Design

Animasi UI:

- 150–350ms untuk microinteraction.
- Camera transition dapat lebih panjang sesuai jarak.

Hindari:

- bouncing UI,
- exaggerated spring,
- continuous large movement,
- excessive zoom.

Motion harus terasa deliberate dan weighted.

---

# 47. Accessibility

Wajib:

- keyboard navigation untuk UI 2D,
- visible focus states,
- semantic HTML pada directory/detail pages,
- color contrast yang cukup,
- accessible search,
- screen-reader labels,
- reduced motion.

Gunakan:

```css
prefers-reduced-motion
```

Saat reduced motion aktif:

- camera travel dipersingkat,
- parallax dikurangi,
- particle animation dikurangi,
- transitions lebih sederhana.

Informasi inti tidak boleh hanya tersedia melalui canvas.

---

# 48. WebGL Fallback

Jika WebGL tidak tersedia atau gagal:

- tampilkan premium static/fallback interface,
- sediakan model/provider directory,
- search tetap berjalan,
- model detail tetap bisa dibuka.

User tidak boleh menemui blank screen.

---

# 49. SEO

Canvas tidak cukup untuk SEO.

Setiap provider/model penting harus memiliki route berbasis HTML.

Metadata:

- title,
- description,
- canonical,
- Open Graph,
- structured data jika sesuai.

Contoh:

```text
Model Name — Capabilities, Context & API | AI Universe
```

---

# 50. Sharing

User dapat membagikan:

- provider,
- model,
- specific explore state.

Shared link ke model harus dapat membuka detail model secara langsung dan, bila 3D aktif, memberi opsi `View in Universe`.

---

# 51. Admin / Content Management

MVP tidak perlu CMS besar.

Minimal internal management harus memungkinkan:

- add provider,
- add model family,
- add model,
- edit metadata,
- attach official source,
- mark deprecated,
- set last verified date,
- publish/unpublish.

Jika admin panel belum dibuat pada phase awal, gunakan validated data seed/editor workflow yang aman.

---

# 52. Data Integrity Rules

Tidak boleh:

- mengarang context window,
- mengarang release date,
- mengarang API availability,
- menganggap capability hanya dari nama model,
- menggunakan rumor sebagai fakta,
- mengklaim benchmark tanpa source.

Field yang belum diketahui → `null`.

Simpan source provenance.

---

# 53. Error Handling

Harus menangani:

- WebGL initialization failure,
- model data not found,
- texture loading error,
- API/database failure,
- unsupported device,
- search failure,
- invalid deep link.

Fallback tidak boleh menghancurkan seluruh page.

---

# 54. Analytics

Track event minimal:

```text
universe_entered
provider_selected
family_selected
model_selected
search_opened
search_completed
model_source_clicked
quality_changed
fallback_used
```

Jangan mengumpulkan data berlebihan.

Gunakan analytics untuk memahami usability, bukan untuk memperberat aplikasi.

---

# 55. Success Metrics

## Product Metrics

- percentage user yang masuk ke Explore,
- provider interaction rate,
- model detail open rate,
- search success rate,
- official-source click rate,
- average exploration depth.

## Experience Metrics

- low crash rate,
- acceptable FPS,
- low input latency,
- WebGL failure rate,
- mobile completion rate.

## Content Metrics

- percentage active model records dengan official sources,
- freshness of verification,
- jumlah provider/model yang tervalidasi.

---

# 56. MVP Scope

MVP harus sudah terasa seperti produk nyata, bukan prototype kosong.

MVP mencakup:

1. Cinematic 3D universe.
2. Starfield dengan depth.
3. Minimal nebula/cosmic environment.
4. Multiple provider galaxies.
5. Provider → Family → Model hierarchy.
6. Smooth camera navigation.
7. Hover/select states.
8. Search.
9. Model detail panel.
10. Breadcrumb/back navigation.
11. Responsive desktop/mobile.
12. Quality manager.
13. Reduced-motion support.
14. WebGL fallback.
15. Basic Models directory.
16. Basic Providers directory.
17. Data-driven scene.
18. Official source links.
19. Deep-linkable model pages.

---

# 57. Out of MVP / Future

Potential future features:

- Compare Models
- Timeline mode
- AI ecosystem history
- Capability constellation view
- Benchmark visualization
- model relationship graph
- release event animations
- personalized watchlist
- public API
- automated source monitoring
- changelog
- account system
- community annotations
- spatial audio
- WebGPU renderer experiments
- VR/XR exploration

Jangan implement future feature jika menghambat kualitas MVP.

---

# 58. Development Phases

## Phase 0 — Foundation

Deliverables:

- finalized architecture,
- project setup,
- coding conventions,
- design tokens,
- data schema,
- route skeleton,
- sample verified dataset,
- performance baseline.

Acceptance:

- project build berhasil,
- lint/typecheck berjalan,
- folder architecture jelas,
- sample data dapat dirender.

---

## Phase 1 — 3D Core

Deliverables:

- Canvas setup,
- UniverseScene,
- camera controller,
- starfield,
- quality manager,
- interaction manager,
- basic provider nodes.

Acceptance:

- user dapat melihat scene,
- rotate/zoom smooth,
- beberapa provider tampil di ruang 3D,
- scene tidak blank pada resize,
- no major memory leak.

---

## Phase 2 — Cinematic Environment

Deliverables:

- layered stars,
- cosmic dust,
- subtle nebula,
- provider stellar visual,
- depth/parallax,
- refined lighting.

Acceptance:

- scene terasa memiliki depth nyata,
- tidak terlihat seperti flat background,
- medium/high settings masih smooth,
- low mode dapat mengurangi effect.

---

## Phase 3 — Hierarchical Universe

Deliverables:

- provider selection,
- model family system,
- model planets,
- capability representation,
- seeded spatial layout.

Acceptance:

- data menentukan object yang muncul,
- provider → family → model dapat dieksplorasi,
- tidak perlu edit komponen manual untuk menambah model.

---

## Phase 4 — Camera & Navigation

Deliverables:

- camera state machine,
- cinematic fly-to,
- back navigation,
- breadcrumb,
- URL-state synchronization dasar.

Acceptance:

- semua camera transitions smooth,
- no abrupt teleport,
- ESC/back berfungsi,
- deep link tidak merusak scene.

---

## Phase 5 — Search & Discovery

Deliverables:

- command palette,
- provider/model/capability search,
- fly-to search result,
- target highlight.

Acceptance:

- search cepat,
- keyboard accessible,
- target yang dipilih dapat ditemukan di universe.

---

## Phase 6 — Model Information

Deliverables:

- model detail HUD,
- provider pages,
- model pages,
- official sources,
- verified timestamps.

Acceptance:

- data unknown tidak di-fabricate,
- official link dapat dibuka,
- model route bekerja tanpa canvas.

---

## Phase 7 — UI Polish

Deliverables:

- luxury navbar,
- intro experience,
- animations,
- loading system,
- mobile drawer,
- typography,
- responsive refinement.

Acceptance:

- tidak terlihat seperti generic AI template,
- tidak ada oversized SaaS cards,
- interface tidak menutupi 3D,
- mobile usable.

---

## Phase 8 — Performance Hardening

Deliverables:

- profiling,
- instancing,
- lazy loading,
- DPR adaptation,
- LOD,
- asset optimization,
- frame sampling.

Acceptance:

- tidak ada obvious frame drop pada scene normal,
- low/medium/high berbeda nyata,
- mobile tidak memuat semua effect desktop.

---

## Phase 9 — Accessibility & Fallback

Deliverables:

- reduced motion,
- keyboard navigation,
- semantic HTML,
- WebGL fallback,
- error boundaries.

Acceptance:

- core information dapat diakses tanpa canvas,
- fallback tidak blank,
- search/detail tetap usable.

---

## Phase 10 — Production Readiness

Deliverables:

- SEO,
- metadata,
- analytics,
- testing,
- error monitoring,
- deployment,
- production performance review.

Acceptance:

- production build clean,
- no critical console error,
- main routes bekerja,
- data source links valid,
- mobile/desktop smoke test pass.

---

# 59. Testing Requirements

## Unit Tests

Untuk:

- data transformation,
- search logic,
- scene layout generator,
- camera state transitions,
- URL state parsing,
- quality selection.

## Integration Tests

Untuk:

- select provider,
- select model,
- search → fly-to,
- deep link → model,
- back navigation,
- fallback.

## Visual QA

Test:

- desktop 1440p,
- laptop,
- tablet,
- common mobile viewport,
- high DPR,
- low-performance mode.

## Performance QA

Check:

- FPS,
- frame time,
- GPU usage,
- texture memory,
- initial bundle,
- scene load,
- memory after navigation.

---

# 60. Acceptance Criteria — Product Level

AI Universe dianggap memenuhi versi pertama bila:

1. Saat masuk, user langsung merasakan sebuah universe 3D dengan depth.
2. Visual terlihat premium dan modern, bukan template AI generik.
3. User dapat memilih provider.
4. Camera bergerak cinematic menuju provider.
5. User dapat melihat model family.
6. User dapat memilih model.
7. Model detail dapat dibaca tanpa meninggalkan universe.
8. Search dapat menemukan model/provider.
9. Search result dapat membawa camera ke target.
10. Data scene berasal dari structured data.
11. Menambah model tidak membutuhkan rewrite scene.
12. Official source tersedia untuk fakta inti.
13. Tidak ada fabricated model metadata.
14. Desktop terasa smooth.
15. Mobile tetap usable dengan visual yang disederhanakan.
16. Reduced motion tersedia.
17. WebGL failure memiliki fallback.
18. Model memiliki URL yang bisa dibagikan.
19. Core information dapat diindex dan diakses tanpa canvas.
20. Tidak ada major interaction yang terasa seperti game.

---

# 61. Design Anti-Patterns

Agent/developer **dilarang** mengambil shortcut berikut tanpa alasan teknis kuat:

- membuat hero biasa lalu universe hanya muncul setelah scroll,
- menggunakan background JPG space sebagai pengganti 3D environment,
- membuat semua provider sebagai card grid,
- membuat semua planet berada di satu plane,
- menggunakan bloom berlebihan,
- menambahkan neon ke semua objek,
- membuat starfield sebagai ribuan React components,
- menaruh semua scene logic dalam satu file,
- hardcode setiap model secara manual,
- menjadikan Blender asset sebagai solusi untuk semua objek,
- autoplay camera terus-menerus sehingga sulit dikontrol,
- membuat UI seperti game,
- menampilkan data tanpa source,
- memasukkan model rumor sebagai fakta.

---

# 62. Design Quality Checklist

Sebelum sebuah screen dianggap selesai, periksa:

- Apakah 3D merupakan bagian dari interaction, bukan dekorasi?
- Apakah user tahu sedang berada di level Universe/Provider/Family/Model?
- Apakah interface tetap clean?
- Apakah glow digunakan secara restrained?
- Apakah depth terlihat?
- Apakah camera movement nyaman?
- Apakah typography terbaca?
- Apakah scene masih bagus tanpa post-processing berat?
- Apakah mobile mendapat pengalaman yang tepat?
- Apakah data memiliki source?
- Apakah page masih berguna tanpa WebGL?

---

# 63. Technical Decision: Blender

Blender **bukan core runtime** AI Universe.

Gunakan Blender hanya untuk asset yang memang lebih efisien dibuat offline, misalnya:

- custom observatory object,
- special portal,
- hero artifact,
- logo mesh,
- decorative geometry tertentu.

Format asset:

- GLB/GLTF.

Semua asset harus dioptimalkan sebelum dipakai.

Mayoritas:

- planets,
- stars,
- orbit,
- particles,
- galaxy cores,
- atmosphere,
- nebula illusion

dibuat secara procedural menggunakan Three.js/R3F/shader.

---

# 64. Technical Decision: Post-Processing

Gunakan sangat terbatas.

Boleh:

- subtle bloom,
- restrained vignette,
- lightweight tone adjustment.

Hindari:

- strong chromatic aberration,
- heavy depth of field selama navigation,
- full-screen blur,
- strong motion blur,
- noise berlebihan.

3D harus tetap terlihat bagus walaupun post-processing dimatikan pada LOW mode.

---

# 65. Technical Decision: WebGPU

MVP harus menggunakan teknologi yang stabil dan kompatibel luas.

WebGPU dapat dievaluasi sebagai enhancement di masa depan.

Jangan membuat MVP bergantung eksklusif pada WebGPU.

---

# 66. Content Voice

Copywriting harus:

- singkat,
- confident,
- informative,
- tidak terlalu marketing,
- tidak menggunakan jargon berlebihan.

Contoh:

**AI Universe**  
Explore the intelligence shaping our world.

Bukan:

> Unlock the limitless future of revolutionary AI innovation.

---

# 67. Final Product Definition

AI Universe bukan sekadar:

- daftar model,
- landing page,
- visual demo,
- 3D portfolio.

AI Universe adalah:

> **sebuah interactive spatial map dan trusted database untuk menjelajahi ekosistem AI melalui universe 3D cinematic yang modern, premium, informatif, dan scalable.**

Semua keputusan desain dan teknis harus mendukung definisi ini.

---

# 68. Instruction to Implementation Agent

Sebelum coding setiap phase:

1. Baca ulang PRD ini.
2. Jangan mengubah product direction tanpa alasan yang terdokumentasi.
3. Pecah phase menjadi task kecil.
4. Tentukan file yang akan dibuat/diubah.
5. Tentukan acceptance criteria task.
6. Implementasikan.
7. Jalankan lint/typecheck/test.
8. Review visual dan performance.
9. Catat technical debt.
10. Jangan lanjut ke phase berikutnya bila foundation phase sebelumnya belum stabil.

Jika ada konflik antara efek visual dan performa:

**prioritaskan interaction, readability, dan stable performance.**

Jika ada konflik antara visual dan data accuracy:

**prioritaskan data accuracy.**

Jika ada konflik antara menambah banyak fitur dan menjaga kualitas:

**prioritaskan kualitas core experience.**

---

# 69. Definition of Done

AI Universe v1 dinyatakan selesai bila:

- cinematic 3D universe production-ready,
- hierarchy provider/family/model bekerja,
- database/data layer terpisah dari rendering,
- camera navigation stabil,
- search dan fly-to bekerja,
- model detail memiliki source,
- desktop/mobile usable,
- quality adaptation bekerja,
- fallback tersedia,
- accessibility dasar terpenuhi,
- performance telah diprofiling,
- production deployment stabil,
- design tetap konsisten dengan arah **luxury cinematic AI observatory**.

---

**END OF PRD**
