# Xchange Front — Complete Codebase Wiki

> **Purpose:** This document provides a full technical reference for rebuilding or extending the `xchange-front` Angular monorepo from scratch. It covers architecture, routing, pages, component library, icon library, styling, services, and build system.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Monorepo Structure](#3-monorepo-structure)
4. [Build & Development](#4-build--development)
5. [Application Shell](#5-application-shell)
6. [Routing Architecture](#6-routing-architecture)
7. [Page Inventory](#7-page-inventory)
   - [Home](#71-home)
   - [Login](#72-login)
   - [Feed](#73-feed)
   - [Projects](#74-projects)
   - [Community](#75-community)
   - [Dashboard](#76-dashboard)
   - [Profile](#77-profile)
   - [Onboarding](#78-onboarding)
   - [Project Dashboard](#79-project-dashboard)
   - [Project Feed](#710-project-feed)
   - [Project Goals](#711-project-goals)
   - [Project Navigator](#712-project-navigator)
   - [Project Rewards](#713-project-rewards)
   - [Project Settings](#714-project-settings)
   - [Ecosystem Admin](#715-ecosystem-admin)
   - [Forgot Password / New Password](#716-forgot-password--new-password)
8. [State Management & Services](#8-state-management--services)
9. [Shared UI Library — ngx-xchange-ui](#9-shared-ui-library--ngx-xchange-ui)
   - [Components](#91-components)
   - [Directives](#92-directives)
10. [Icon Library — ngx-xchange-icons](#10-icon-library--ngx-xchange-icons)
11. [Styling System](#11-styling-system)
    - [CSS Custom Properties](#111-css-custom-properties)
    - [Tailwind Configuration](#112-tailwind-configuration)
    - [Typography Scale](#113-typography-scale)
    - [BEM Button Classes](#114-bem-button-classes)
    - [Card Classes](#115-card-classes)
12. [Key Patterns & Conventions](#12-key-patterns--conventions)
13. [Data Models](#13-data-models)
14. [Assets](#14-assets)
15. [CI/CD](#15-cicd)

---

## 1. Project Overview

**Xchange Front** is the Angular frontend for the Xchange ecosystem platform — a collaborative project-management and social-impact tool where users can:

- Discover and join **projects** with goals, tasks, and rewards
- Participate in a **community feed** of activity and assignments
- Track personal and portfolio-level **dashboards**
- Manage **profiles**, wallets, and premium tiers
- Administer ecosystem settings (**Ecosystem Admin**)
- Earn and distribute project **rewards** across fund types (Collaboration, Employee, Owners)

The app is in an **active prototyping / design phase**: most data is hardcoded mock data inside components; API integration is not yet implemented.

---

## 2. Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Angular | 17.3.8 |
| Language | TypeScript | 5.4.5 |
| Styling | Tailwind CSS + SCSS | 3.3.3 |
| State | RxJS Observables + Injectable Services | ~7.8.0 |
| Component library | `ngx-xchange-ui` (in-repo) | — |
| Icon library | `ngx-xchange-icons` (in-repo) | — |
| Routing | Angular Router (hash: false) | — |
| Component dev | Storybook | 8.5.1 |
| Build tool | Angular CLI + ng-packagr | 17.3.7 |
| Testing | Jasmine + Karma | 4.6 / 6.4 |
| Package manager | npm (GitHub Package Registry) | — |
| Fonts | Manrope, DM Sans (self-hosted) | — |

---

## 3. Monorepo Structure

The repo is an **Angular workspace** with three projects defined in `angular.json`:

```
xchange-front/
├── src/                          # Main application (ecosystem-web)
│   ├── main.ts                   # Bootstrap
│   ├── index.html                # HTML shell (<app-root>)
│   ├── app/
│   │   ├── app.module.ts         # Root NgModule
│   │   ├── app-routing.module.ts # Root routes
│   │   ├── app.component.*       # Shell component (aside nav + router-outlet)
│   │   ├── core/
│   │   │   ├── core.module.ts    # Empty CoreModule
│   │   │   └── share/
│   │   │       ├── share.module.ts         # HttpClientModule, RouterModule, NotFoundComponent
│   │   │       └── components/not-found/   # 404 page
│   │   ├── public/
│   │   │   ├── public.module.ts            # Public feature module
│   │   │   ├── public-routing.module.ts    # Child routes (all app pages)
│   │   │   ├── public.component.*          # Wrapper with <router-outlet>
│   │   │   ├── home/                       # HomeComponent (non-lazy)
│   │   │   ├── login/                      # LoginComponent (non-lazy)
│   │   │   └── components/                 # Header card, UserNameCard, UserAvatar
│   │   └── pages/                          # 16 feature page directories (all standalone)
├── projects/
│   ├── ngx-xchange-ui/           # Shared UI component library
│   │   └── src/
│   │       ├── components/       # 60+ Angular components
│   │       ├── directives/       # 30+ Angular directives
│   │       ├── assets/css/       # base.css (compiled Tailwind output)
│   │       └── public-api.ts     # Library barrel export
│   └── ngx-xchange-icons/        # SVG icon library
│       └── src/                  # 1150+ icon components
├── .storybook/                   # Storybook configuration
├── src/styles/                   # Global SCSS architecture
│   ├── base/                     # _variables.scss, _colors.scss, _typography.scss
│   ├── components/               # _buttons.scss, _cards.scss, _modals.scss, _scrollbar.scss
│   └── utilies/                  # _breakpoints.scss, _flex.scss, _spacing.scss, _visiblity.scss
├── src/assets/
│   ├── css/styles.scss           # Tailwind entry point (compiled → base.css)
│   ├── fonts/                    # Manrope-VariableFont_wght.ttf, DM Sans
│   ├── icons/                    # Icon assets
│   └── img/                      # Images (X-Vector.webp, Send-credits.png, Pitch-image.png, etc.)
├── angular.json
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

### Project names and prefixes

| angular.json key | Type | Component prefix | Output |
|---|---|---|---|
| `ecosystem-web` | application | `app` | `dist/ecosystem-web/` |
| `ngx-xchange-ui` | library | `xc` | `dist/ngx-xchange-ui/` |
| `ngx-xchange-icons` | library | `xc-icon-*` | `dist/ngx-xchange-icons/` |

---

## 4. Build & Development

### npm scripts

```bash
npm start                 # ng serve (dev server on localhost:4200)
npm run build             # Production build → dist/ecosystem-web/
npm run watch             # Development rebuild on file change
npm run test              # Karma / Jasmine unit tests

# Library builds (must be run before serving if changed)
npm run build:icons       # Build ngx-xchange-icons → dist/ngx-xchange-icons/
npm run build:lib         # Compile Tailwind → base.css, then build ngx-xchange-ui
npm run build:lib:watch   # Watch mode for UI library

# Storybook
npm run storybook         # Runs watch:storybook + watch:tailwind concurrently
npm run build-storybook   # Static Storybook build → storybook-static/
```

### Build order for fresh setup

```bash
npm ci
npm run build:icons   # icons first — ui library depends on them
npm run build:lib     # compiles Tailwind output + builds ui library
npm start             # serve the app
```

### Global styles entry points (angular.json `styles` array)

```json
"styles": [
  "src/assets/css/styles.scss",   // Tailwind base/components/utilities + font-face
  "src/styles/styles.css"         // CSS variable imports + global resets
]
```

### TypeScript paths

The `tsconfig.json` (via Angular defaults) allows absolute imports from `src/` and `projects/`. Example usage found in source:

```typescript
import { ... } from 'src/app/pages/feed/feed.component';
import { ... } from 'projects/ngx-xchange-ui/src/public-api';
import { ... } from '@xchange-ecosystem/ngx-xchange-ui'; // published package alias
import { ... } from '@xchange-ecosystem/ngx-xchange-icons';
```

---

## 5. Application Shell

### `app.component.html`

```html
<main class="main-content">
  <xc-new-aside-nav />
  <div class="main-content__container">
    <router-outlet></router-outlet>
  </div>
</main>
```

The shell is a **CSS Grid** layout (defined in `app.component.scss`):

```scss
.main-content {
  background: var(--xc-grey50);   // #F5F8F6
  display: grid;
  grid-template-columns: 284px 1fr;
  width: 100vw;
  height: 100vh;
  gap: 32px;

  &__container {
    width: 100%;
    height: 100%;
    padding: 24px 32px 0 0;
    display: flex;
    overflow: hidden;
  }
}
```

- **Left column (284px):** `<xc-new-aside-nav>` — persistent aside navigation
- **Right column (1fr):** `<router-outlet>` — page content area

### `NewAsideNavComponent` (`xc-new-aside-nav`)

Selector: `xc-new-aside-nav` | Standalone component in `ngx-xchange-ui`

**Two tabs: Ecosystem / Project**

_Ecosystem tab links:_
| Label | Route |
|---|---|
| Feed | `/feed` |
| Projects | `/projects` |
| Community | `/community` |
| Dashboard | `/dashboard` |
| Admin | `/ecosystem-admin` |

_Project tab links:_
| Label | Route |
|---|---|
| Project Feed | `/project-feed` |
| Dashboard | `/project-dashboard` |
| Navigator | `/project-navigator` |
| Goals | `/project-goals` |
| Rewards | `/project-rewards` |
| Settings | `/project-settings` |

**Bottom menu** (always visible): My Profile → `/profile`, Support → `/support`, Logout → `/logout`

Active route styling: the `xcAsideLink` directive applies `.onActive` (gradient background) via `[routerLinkActive]`.

---

## 6. Routing Architecture

### Root routes (`app-routing.module.ts`)

```
''         → PublicModule (lazy, children via public-routing.module.ts)
'community' → CommunityComponent (standalone lazy — duplicate, superseded by public routes)
'**'        → NotFoundComponent
```

### Public child routes (`public-routing.module.ts`)

All children sit under `PublicComponent` (simple `<router-outlet>`). Home and Login are **eagerly loaded**; all other pages are **standalone lazy-loaded**:

| Path | Component | Load type |
|---|---|---|
| `` (redirect) | → `home` | — |
| `home` | `HomeComponent` | eager |
| `login` | `LoginComponent` | eager |
| `feed` | `FeedComponent` | standalone lazy |
| `community` | `CommunityComponent` | standalone lazy |
| `projects` | `ProjectsComponent` | standalone lazy |
| `profile` | `ProfileComponent` | standalone lazy |
| `forgot-password` | `ForgotPasswordComponent` | standalone lazy |
| `new-password` | `NewPasswordComponent` | standalone lazy |
| `dashboard` | `DashboardComponent` | standalone lazy |
| `ecosystem-admin` | `EcosystemAdminComponent` | standalone lazy |
| `project-dashboard` | `ProjectDashboardComponent` | standalone lazy |
| `project-settings` | `ProjectSettingsComponent` | standalone lazy |
| `project-goals` | `ProjectGoalsComponent` | standalone lazy |
| `project-rewards` | `ProjectRewardsComponent` | standalone lazy |
| `project-feed` | `ProjectFeedComponent` | standalone lazy |
| `project-navigator` | `ProjectNavigatorComponent` | standalone lazy |
| `onboarding` | `OnboardingComponent` | standalone lazy |

> **Note:** `forgot-password` and `new-password` appear twice in the routing file (duplicates). No query parameters or route guards are currently implemented.

---

## 7. Page Inventory

All pages live under `src/app/pages/`. All are **standalone Angular components**.

---

### 7.1 Home

**Path:** `/home`  
**File:** `src/app/public/home/containers/home.component.ts`  
**Status:** Declared in `PublicModule` (non-standalone, non-lazy)  
**Description:** Landing/home page. Content not detailed in exploration — likely a marketing or welcome page.

---

### 7.2 Login

**Path:** `/login`  
**File:** `src/app/public/login/containers/login.componet.ts` *(note: typo in filename)*  
**Status:** Declared in `PublicModule`  
**Description:** Authentication page using `ReactiveFormsModule`.

---

### 7.3 Feed

**Path:** `/feed`  
**File:** `src/app/pages/feed/feed.component.ts`

**Layout:** Two-column layout:
- **Left — "Organizer"**: AI chat assistant called "Scotty". Contains chat message bubbles, action quick-buttons ("Make announcement", "Start new project", etc.), and a chat input with send / microphone / clipboard icons.
- **Right — "Feed"**: Navigation section tabs (Home, IA, Objectives, Assignments, Announcements), objective cards (`xc-feed-objective`), and an AI filter dropdown (`xc-ai-filter`).

**Component state:**
```typescript
isAiFiltersOpen: boolean         // toggles AI filter dropdown
selectedSection: string          // active nav tab
isDropdownState: boolean         // dropdown for state filter
isDropdownRole: boolean          // dropdown for role filter
isDropdownDate: boolean          // dropdown for date filter
isAnnouncementModalOpen: boolean // announcement modal
```

**Key sub-components used:** `FeedHeaderComponent`, `xc-feed-objective`, `xc-ai-filter`, `app-objective-filters`

**Document click listener** closes the AI filters dropdown when clicking outside.

---

### 7.4 Projects

**Path:** `/projects`  
**File:** `src/app/pages/projects/projects.component.ts`

**Description:** Grid of 21 hardcoded project cards with filtering tabs and a "create project" stepper modal.

**ProjectInterface shape:**
```typescript
interface ProjectInterface {
  image: string;
  title: string;
  tags: string[];
  objectivesInProject: number;
  completed: number;
  open: number;
  suggested: number;
  description: string;
  proofs: number;
  collaborations: number;
  value: number;
}
```

**Component state:**
```typescript
isProjectOpen: boolean          // project detail modal open
isModalOpen: boolean            // create-project stepper open
selectedProject: ProjectInterface | null
selectedButton: string          // active section tab
sections = ['All projects', 'My projects', 'Collaborations']
projects: ProjectInterface[]    // 21 mock projects
```

**Sub-components:**
| Component | Location |
|---|---|
| `ProjectsCardComponent` | `src/app/pages/projects/projects-card/` |
| `StepperComponent` | `src/app/pages/projects/stepper/` (3-step horizontal stepper) |
| `ProjectModalComponent` | `src/app/pages/projects/project-modal/` |
| `SortByComponent` | `ngx-xchange-ui` |
| `SectionTabComponent` | `ngx-xchange-ui` |

**Sample project data fields:** title, image URL, tags array, objectivesInProject, completed/open/suggested counts, description (in Spanish), proofs, collaborations, value (numeric, e.g. 180000).

---

### 7.5 Community

**Path:** `/community`  
**File:** `src/app/pages/community/community.component.ts`

**Description:** Simple page showing ecosystem members in a card grid.

**Template structure:**
```html
<xc-sort-by />                    <!-- sort controls -->
<h3>Ecosystem members</h3>
<xc-community-cards />            <!-- member cards grid -->
```

No component logic — purely template-driven.

---

### 7.6 Dashboard

**Path:** `/dashboard`  
**File:** `src/app/pages/dashboard/dashboard.component.ts`

**Description:** Portfolio-level analytics dashboard showing project performance metrics across all owned/managed projects.

**Component state:**
```typescript
isFilterOpen: boolean
expandedRow: boolean
projects: Project[]             // 7 mock projects with subprojects
options1/2/3: {label: string}[] // filter dropdown options
```

**Project data shape:**
```typescript
{
  title: string;
  tags: string[];
  active: number;
  completed: number;
  collab: number;
  proof: number;
  quality: number;
  expanded: boolean;
  subprojects: SubProject[];
}
```

**Template sections:**
1. Pie chart visualization (hardcoded SVG/CSS)
2. Performance-per-project table with columns: Title, Tags, Active, Completed, Collab, Proof, Quality
3. Expandable rows (`toggleExpand(index)`) showing sub-projects
4. Filter bar with `FilterComponent` child

**Sub-components:** `FilterComponent` (`src/app/pages/dashboard/filter/`)

---

### 7.7 Profile

**Path:** `/profile`  
**File:** `src/app/pages/profile/profile.component.ts`

**Description:** User profile page with four switchable sections.

**Inputs (configurable defaults):**
```typescript
@Input() email = 'fabian@xchange.eco'
@Input() linkedin = 'https://www.linkedin.com/in/fabian-bermeo'
@Input() description = '...' // multi-line bio
@Input() image = 'https://randomuser.me/api/portraits/women/26.jpg'
```

**Sections** (switched via `activeSection: string`):
| Section key | Component rendered |
|---|---|
| `'Apperance'` | `AppereanceComponent` |
| `'Wallet'` | `WalletComponent` |
| `'Premium upgrade'` | `PremiumUpgradeComponent` |
| `'Premium settings'` | `PremiumSettingsComponent` |

**Editing state** — three independent edit flows (each with temp value, editingX flag, save/cancel):
- `editingDescription` / `tempDescription`
- `editingEmail` / `tempEmail`
- `editingLinkedin` / `tempLinkedin`

**Profile sub-components:**

| Component | Location | Purpose |
|---|---|---|
| `ProfileHeaderComponent` | `profile/profile-header/` | Profile image, name, section tab navigation |
| `AppereanceComponent` | `profile/appereance/` | Appearance settings tab |
| `WalletComponent` | `profile/wallet/` | xCoin wallet and transaction table |
| `PremiumUpgradeComponent` | `profile/premium-upgrade/` | Premium plan upgrade flow |
| `PremiumSettingsComponent` | `profile/premium-settings/` | Manage premium subscription |
| `LanguageDropdownComponent` | `profile/language-dropdown/` | Language selector (EN/ES/FR/DE) |
| `InterestsProfileComponent` | `profile/interests-profile/` | Interest management |
| `InterestCardComponent` | `profile/interest-card/` | Single interest display card |
| `ProfileSortComponent` | `profile/profile-sort/` | Sort utilities |
| `TagModalComponent` | `profile/tag-modal/` | Tag editing modal |
| `CancelModalComponent` | `profile/cancel-modal/` | Premium cancellation confirmation modal |

**Mock data:**
- `invoiceData`: 8 invoice records (name, date, "99 Euro", "Invoice" status)
- `tableData`: 5 wallet entries (project name, contributed xCoins, current xCoins, status)
- `languageOptions`: EN, ES, FR, DE
- `interestOptions`: Design, Marketing, Development, UX/UI, Data Science
- `selectedInterests`: array of `{ interest: string|null, level: number }` (5 slots)

---

### 7.8 Onboarding

**Path:** `/onboarding`  
**File:** `src/app/pages/onboarding/onboarding.component.ts`

**Description:** Role-selection onboarding flow using `[ngSwitch]` to display a different splash screen based on the selected user role.

**States (via `SwitchViewService`):**
| State | Splash Component |
|---|---|
| `'default'` | `DefaultSplashComponent` |
| `'owner'` | `OwnerSplashComponent` |
| `'collaborator'` | `CollaboratorSplashComponent` |
| `'investor'` | `InvestorSplashComponent` |
| `'operator'` | `OperatorSplashComponent` |

**Services used:**
- `SwitchViewService` (onboarding) — `BehaviorSubject<ViewStates>`, provides `setViewState()`, `getViewState()`, `getCurrentViewState()`
- `StepperService` — maps state → step count: `{ default:0, owner:5, collaborator:5, investor:5, operator:6 }`

---

### 7.9 Project Dashboard

**Path:** `/project-dashboard`  
**File:** `src/app/pages/project-dashboard/project-dashboard.component.ts`

**Description:** Project-scoped analytics with three tab sections.

**Tabs:** `'Operations'` | `'Value'` | `'Pitch'`

**Data structure:**
```typescript
Indicators = [
  { name: 'Bussines', subindicators: [...] },
  { name: 'Market',   subindicators: [...] }
]
// Each subindicator: { title, open, completed, total, collaborations, proof }
```

**Template sections per tab:**
- **Operations:** Overall progress bars, pie chart, performance table with expandable indicator rows (subindicators)
- **Value:** Project value metrics (financial data), link to Rewards tool
- **Pitch:** Placeholder — "AI-generated pitch cards coming soon"

---

### 7.10 Project Feed

**Path:** `/project-feed`  
**File:** `src/app/pages/project-feed/project-feed.component.ts`

**Description:** A modal dialog for inviting people to a project. Displayed as `<dialog>` element.

**State:**
```typescript
isDropdownOpen: boolean    // user selector dropdown
isModalOpen: boolean = true
@Output() close: EventEmitter<void>
```

**Template features:**
- Header image (`assets/img/Send-credits.png`)
- Dropdown to select and invite users (hardcoded: Alice Johnson, Bob Smith, Carol Lee)
- Each user can be added as "owner" or "viewer"
- Invited users list with `@defer (on hover)` / `@placeholder` (Angular 17 deferred loading)
- Cancel / Send invitations action buttons

> **Note:** This component is more of an invitation dialog than a traditional "feed". It uses Angular 17's `@defer` syntax.

---

### 7.11 Project Goals

**Path:** `/project-goals`  
**File:** `src/app/pages/project-goals/project-goals.component.ts`

**Description:** Goals/objectives management page for a project.

**State:**
```typescript
isNewGoal: boolean    // controls "new goal" modal visibility
```

**Template:** Header image, "Add new goal" button → opens modal, two hardcoded `app-goals-dropdown` components, new goal modal overlay.

**Sub-components:**
- `GoalsDropdownComponent` (in-page sub-component)
- New goal modal

---

### 7.12 Project Navigator

**Path:** `/project-navigator`  
**File:** `src/app/pages/project-navigator/project-navigator.component.ts`

**Status:** Stub implementation — template is `<p>Project-navigator works!</p>`

**Planned:** Objective/task navigation view using navigator UI components from `ngx-xchange-ui` (the imports are already in place: navigator filter selectors, objective cards, users filter, etc.)

**Collaborator interface defined:**
```typescript
interface Collaborator { id: number; name: string; }
```

---

### 7.13 Project Rewards

**Path:** `/project-rewards`  
**File:** `src/app/pages/project-rewards/project-rewards.component.ts`

**Description:** Reward distribution management with fund-type switching.

**State (driven by `SwitchViewService`):**
```typescript
type ViewStates = 'default' | 'collaborations' | 'employee' | 'owners'
state: ViewStates = 'default'
```

**Template (`[ngSwitch]` on `state`):**
| State | Component |
|---|---|
| `'default'` | `DefaultPageComponent` |
| `'collaborations'` | `CollaborationFundComponent` |
| `'owners'` | `OwnersFundComponent` |
| `'employee'` | `EmployeeFundComponent` |

**Always rendered:** `RewardsHeaderComponent` (triggers state changes via `SwitchViewService`)

**Sub-component locations:**
```
project-rewards/
├── collaboration-fund/
├── default-page/
├── employee-fund/
├── owners-fund/
├── rewards-header/
└── services/swith-view-service/switch-view.service.ts
```

---

### 7.14 Project Settings

**Path:** `/project-settings`  
**File:** `src/app/pages/project-settings/project-settings.component.ts`

**Description:** Project-level settings mirroring ecosystem admin structure. Tab-driven sections.

**Tab state (driven by `ProjectDashboardNavigatorService`):**
```typescript
type TabState = 'Appearance' | 'Legal' | 'Credits' | 'Members'
tabState: TabState = 'Members'  // default
```

**Template (`[ngSwitch]` on `tabState`):**
| Tab | Component |
|---|---|
| `'Appearance'` | `ApperanceComponent` |
| `'Legal'` | `LegalComponent` |
| `'Credits'` | `CreditsComponent` |
| `'Members'` | `MembersComponent` |

**Always rendered:** `HeaderProjectSettingsComponent`

**Mock data:** 12 transaction records with name, date, amount (±), destination.

**Sub-component locations:**
```
project-settings/
├── header-project-settings/
├── apperance/
├── legal/
├── members/
├── credits/
└── services/services-dashboard-navigator-service.service.ts
```

---

### 7.15 Ecosystem Admin

**Path:** `/ecosystem-admin`  
**File:** `src/app/pages/ecosystem-admin/ecosystem-admin.component.ts`

**Description:** Platform-wide administration panel.

**Tabs:** `'Apperance'` | `'Legal'` | `'Credits'` | `'Templates'` | `'Members'`

**State:**
```typescript
activeTab: string = 'Apperance'
isNotification: boolean          // notification badge on Members tab
isBuyTenant: boolean             // buy tenant modal overlay
tempImage: string                // Google avatar URL (placeholder)
```

**Modal:** Buy tenant overlay with payment form fields (email, card number, expiry, CVV), current balance display, cancel/purchase buttons.

**Sub-component locations:**
```
ecosystem-admin/
├── apperance/
├── credits/
├── legal/
├── members/
└── templates/
```

---

### 7.16 Forgot Password / New Password

**Paths:** `/forgot-password`, `/new-password`  
**Files:** `src/app/pages/forgot-password/`, `src/app/pages/new-password/`

Password recovery flow. Implementation details not deeply explored — standard form-based reset pages.

---

## 8. State Management & Services

The app uses **no global state library** (no NgRx, no Akita). State is managed through **injectable RxJS services** at various scopes.

### Pattern 1: EventEmitter-based service

Used in `project-rewards`:

```typescript
// switch-view.service.ts (project-rewards)
@Injectable({ providedIn: 'root' })
export class SwitchViewService {
  private viewState$ = new EventEmitter<ViewStates>();

  setViewState(viewState: ViewStates) { this.viewState$.next(viewState); }
  getViewState(): Observable<ViewStates> { return this.viewState$.asObservable(); }
}
```

> ⚠️ Uses `EventEmitter` as a subject — works but anti-pattern. New subscribers miss previous values.

### Pattern 2: BehaviorSubject-based service

Used in `onboarding` (preferred pattern):

```typescript
// switch-view.service.ts (onboarding)
@Injectable({ providedIn: 'root' })
export class SwitchViewService {
  private readonly viewStateSubject = new BehaviorSubject<ViewStates>('default');

  setViewState(viewState: ViewStates): void { this.viewStateSubject.next(viewState); }
  getViewState(): Observable<ViewStates> { return this.viewStateSubject.asObservable(); }
  getCurrentViewState(): ViewStates { return this.viewStateSubject.getValue(); }
}
```

### Pattern 3: Derived service

`StepperService` composes `SwitchViewService` to derive step counts:

```typescript
@Injectable({ providedIn: 'root' })
export class StepperService {
  private readonly stepsDirectory: Record<ViewStates, number> = {
    default: 0, owner: 5, collaborator: 5, investor: 5, operator: 6
  };

  getStepCount$(): Observable<number> {
    return this.switchViewService.getViewState().pipe(
      map(state => this.stepsDirectory[state] ?? 0)
    );
  }
}
```

### All services inventory

| Service | Location | Scope | Purpose |
|---|---|---|---|
| `SwitchViewService` (rewards) | `pages/project-rewards/services/swith-view-service/` | root | Switch reward fund view |
| `SwitchViewService` (onboarding) | `pages/onboarding/services/switch-view-service/` | root | Switch onboarding role view |
| `StepperService` | `pages/onboarding/services/stepper-service/` | root | Map role → step count |
| `ModalService` | `pages/profile/services/` | root | Modal state |
| `ProjectDashboardNavigatorService` | `pages/project-settings/services/` | root | Tab state for project settings |

---

## 9. Shared UI Library — ngx-xchange-ui

**NPM package name:** `@xchange-ecosystem/ngx-xchange-ui`  
**Source:** `projects/ngx-xchange-ui/src/`  
**Component prefix:** `xc`  
**Build:** `npm run build:lib` (compiles Tailwind first, then ng-packagr)

All exports are in `projects/ngx-xchange-ui/src/public-api.ts`.

### 9.1 Components

#### Navigation

| Selector | Module/Component | Description |
|---|---|---|
| `xc-new-aside-nav` | `NewAsideNavComponent` | Main sidebar navigation (standalone) |
| `xc-aside-nav` | `AsideNavComponent` | Legacy sidebar |
| `xc-aside-links` | `AsideLinksComponent` | Single navigation link with icon, label, active state |
| `xc-header` | `HeaderComponent` | Page header (stub) |

#### Card Components

| Selector | Module | Key Inputs |
|---|---|---|
| `xc-card-insights` | `CardInsightsModule` | `value: Number`, `description: String` |
| `xc-card-paragraph` | `CardParagraphModule` | — |
| `xc-card-tasks-indicator` | `CardTasksIndicatorModule` | — |
| `xc-card-proofs-indicator` | `CardProofsIndicatorModule` | — |
| `xc-card-deadline-indicator` | `CardDeadlineIndicatorModule` | — |
| `xc-card-metrics` | `CardMetricsModule` | — |
| `xc-card-welcome-measurements` | `CardWelcomeMeasurementsModule` | — |

#### Buttons

| Selector | Component | Key Inputs |
|---|---|---|
| `xc-button-400` | `Button400Component` | `type`, `description`, `disabled`, `full`, `inputType`; `@Output() onClick` |
| `xc-button-500` | `Button500Component` | — |
| `xc-new-button-400` | `NewButton400Component` | — |
| `xc-new-button-500` | `NewButton500Component` | — |
| `xc-car-button-view` | `CarButtonViewModule` | — |
| `xc-check-rounded-button` | `CheckRoundedButtonComponent` | — |
| `xc-chat-options-button` | `ChatOptionsButtonComponent` | — |

**Button 400 type catalog** (`type` input → Tailwind classes):
| Type | Appearance |
|---|---|
| `''` (default) | Outline, hover grey |
| `'outline_inactive'` | Outline, 20% opacity, no-click |
| `'cancel'` | Red outline |
| `'cancel_filled'` | Red filled |
| `'filled'` | Black background, white text |
| `'filled_inactive'` | Black filled, 20% opacity, no-click |
| `'round_options'` | 30px circle, shows ⋯ icon |
| `'round_cancel'` | 30px circle, shows × icon |
| `'round_checked_inactive'` | 34px circle, grey border |
| `'round_checked'` | 34px circle, green filled, check icon |
| `'round_back'` | 30px circle, back arrow |
| `'round_back_inactive'` | 30px circle, grey back arrow |
| `'ai_button'` | Light blue gradient, AI icon |

#### Feed Components

| Selector | Component | Description |
|---|---|---|
| `xc-feed-objective` | `FeedObjectiveComponent` | Objective/assignment card in feed. Types: `objective` (yellow), `assignment` (blue), `nextSteps` (purple) |
| `xc-feed-buttons` | `FeedButtonsComponent` | Feed action buttons |
| `xc-ai-filter` | `AiFilterComponent` | AI-powered filter dropdown |

#### Navigator Components (Project Navigator)

| Selector | Component |
|---|---|
| `xc-navigator-objective-card` | `NavigatorObjectiveCardComponent` |
| `xc-navigator-objective-status-filter` | `NavigatorObjectiveStatusFilterComponent` |
| `xc-navigator-filter-toggle` | `NavigatorFilterToggleComponent` |
| `xc-navigator-filter-selector` | `NavigatorFilterSelectorComponent` |
| `xc-navigator-filter-selector-switch-view-option` | `NavigatorFilterSelectorSwitchViewOptionComponent` |
| `xc-navigator-filter-type-selector` | `NavigatorFilterTypeSelectorComponent` |
| `xc-navigator-goals-filter` | `NavigatorGoalsFilterComponent` |
| `xc-navigator-range-filter` | `NavigatorRangeFilterComponent` |
| `xc-navigator-user-text-input-filter` | `NavigatorUserTextInputFilterComponent` |
| `xc-navigator-users-filter` | `NavigatorUsersFilterModule` |

#### User Components

| Selector | Component | Description |
|---|---|---|
| `xc-user-name-card` | `UserNameCardComponent` | Name + avatar card |
| `xc-user-profile-modal` | `UserProfileModalModule` | User profile popover/modal |
| `xc-complete-objective-user-card` | `CompleteObjectiveUserCardModule` | User card for objective completion |
| `xc-community-cards` | `CommunityCardsComponent` | Community member card grid |
| `xc-rounded-image` | `RoundedImageModule` | Avatar image with configurable margin. Input: `image: string`, `marginSize: number` |
| `xc-user-header` | `UserHeaderComponent` | User header display |

#### Form / Input Components

| Selector | Component |
|---|---|
| `xc-input` | `InputModule` |
| `xc-text-area` | `TextAreaModule` |
| `xc-common-input` | `CommonInputModule` |
| `xc-chip` | `ChipComponent` |
| `xc-toggle` | `ToggleComponent` |
| `xc-rate` | `RateModule` |
| `xc-rating-bar` | `RatingBarComponent` |

#### Layout / Display Components

| Selector | Component |
|---|---|
| `xc-modal` | `ModalModule` |
| `xc-modal-sublayer` | `ModalSublayerModule` |
| `xc-details` | `DetailsModule` |
| `xc-titles` | `TitlesModule` |
| `xc-tag` | `TagModule` |
| `xc-section-tab` | `SectionTabComponent` |
| `xc-sort-by` | `SortByComponent` |
| `xc-create-project` | `CreateProjectModule` |
| `xc-project-progress-bar` | `ProjectProgressBarModule` |
| `xc-info-row` | `InfoRowComponent` |
| `xc-list-item-selector` | `ListItemSelectorComponent` |
| `xc-metrics-selection` | `MetricsSelectionComponent` |
| `xc-objective-options` | `ObjectiveOptionsComponent` |
| `xc-header-card` | `HeaderCardComponent` |
| `xc-header-title` | `HeaderTitleComponent` |
| `xc-header-background` | `HeaderBackgroundComponent` |

### 9.2 Directives

All directives are in `projects/ngx-xchange-ui/src/directives/`.

| Directive selector | Module | Description |
|---|---|---|
| `[xcMainHeading]` | `MainHeadingModule` | Main heading styles |
| `[xcHeadlineStyles]` | `HeadlineStylesDirective` | Headline typography classes. Attribute values: `headline-200` etc. |
| `xcCopyStyles` | `CopyStylesDirective` | Body copy typography classes. Values: `copy-400`, `copy-300`, `copy-200-gray`, etc. |
| `[xcAsideNavButton]` | `AsideNavButtonModule` | Aside nav button styles |
| `[xcAsideLink]` | `AsideLinkDirective` | Aside link active-state styling |
| `[xcHeaderNav]` | `HeaderNavModule` | Header nav item styles |
| `[xcTag]` | `TagModule` | Tag styles |
| `[xcTenantLogo]` | `TenantLogoModule` | Tenant logo styles |
| `[xcParagraph]` | `ParagraphModule` | Paragraph styles |
| `[xcInput]` | `InputModule` | Input styles |
| `[xcTextArea]` | `TextAreaModule` | Textarea styles |
| `[xcContainer]` | `ContainerModule` | Container layout styles |
| `[xcNgKeyup]` | `NgKeyupModule` | Keyup event handler |
| `[xcClickOutside]` | `ClickOutsideDirective` | Emits event when clicking outside the element |
| `[xcCommunityCardMeasures]` | `CommunityCardMeasuresModule` | Community card sizing |
| `[xcProfileTags]` | `ProfileTagsDirective` | Tag pill styling. Values: `"blue"`, `"purple"`, `"gray"`, `"yellow"` |
| `[xcCardStyles]` | `CardStylesModule` | Card layout styles |
| `[xcProfileHeader]` | `ProfileHeaderModule` | Profile header styles |
| `[xcButtonsWrappers]` | `ButtonsWrappersDirective` | Button container layout |
| `[xcHeadlineStyles]` | `HeadlineStylesModule` | (see above) |
| `[xcChatOption]` | `ChatOptionModule` | Chat option item styles |
| `[xcNotificationBubble]` | `NotificationBubbleModule` | Notification bubble overlay |
| `[xcCopyStyles]` | `CopyStylesModule` | (see above) |
| `[xcAsideLink]` | `AsideLinkModule` | (see above) |
| `[xcDisableClick]` | `DisableClickModule` | Prevents click propagation |
| `[xcNonScroll]` | `NonScrollModule` | Disables scroll on element |
| `xcButtonView` | `ButtonViewModule` | Button view toggle |
| `xcHeadline600` | `Headline600Directive` | Headline 600 weight style |

---

## 10. Icon Library — ngx-xchange-icons

**NPM package name:** `@xchange-ecosystem/ngx-xchange-icons`  
**Source:** `projects/ngx-xchange-icons/src/`  
**Build:** `npm run build:icons`  
**Generation:** `prebuild.js` Handlebars-based script creates icon components from SVG templates.

**1150+ icon components.** All selectors follow the pattern `xc-icon-<name>`.

### Icon categories and notable icons

**Navigation & UI:**
`xc-icon-angle-right`, `xc-icon-angle-left`, `xc-icon-angle-down`, `xc-icon-angle-up`, `xc-icon-arrow-right`, `xc-icon-close-s`, `xc-icon-times`, `xc-icon-plus-circle`, `xc-icon-more-three-dots`, `xc-icon-check`, `xc-icon-check-circle`

**Objects:**
`xc-icon-file-check-alt`, `xc-icon-paperclip`, `xc-icon-calender`, `xc-icon-save`, `xc-icon-copy`, `xc-icon-send`, `xc-icon-eye`, `xc-icon-user-plus`

**Users & Social:**
`xc-icon-users-alt`, `xc-icon-question-circle`, `xc-icon-star`

**Navigation icons (sidebar):**
`xc-icon-wifi` (Feed), `xc-icon-rocket` (Projects), `xc-icon-users-alt` (Community), `xc-icon-chart` (Dashboard), `xc-icon-setting` (Admin/Settings), `xc-icon-compass` (Navigator), `xc-icon-crosshair` (Goals)

**Custom Xchange icons:**
`xc-icon-ai`, `xc-icon-goals-aim`, `xc-icon-rewards-star`, `xc-icon-graph-selection`, `xc-icon-table-selection`, `xc-icon-board-selection`, `xc-icon-success-icon`, `xc-icon-no-assessments-image`, `xc-log-out-icon`, `xc-icon-yellow-star`, `xc-icon-gray-star`, `xc-icon-add-icon`, `xc-icon-dismiss-icon`

**Social:**
`xc-icon-facebook`, `xc-icon-twitter`, `xc-icon-linkedin`

### Usage pattern

Icons are standalone Angular components — import directly:
```typescript
import { XcIconRocketComponent } from '@xchange-ecosystem/ngx-xchange-icons';

// In component imports array:
XcIconRocketComponent

// In template:
<xc-icon-rocket class="w-5 h-5" />
```

Icons render as inline SVG. Size controlled via CSS `width`/`height`. Stroke/fill controlled via parent CSS or Tailwind classes. Most icons use `stroke: currentColor` so they inherit text color.

---

## 11. Styling System

The project uses a **three-layer styling architecture**:

```
Layer 1: CSS Custom Properties (--xc-* variables)
Layer 2: Tailwind JIT utility classes
Layer 3: SCSS component classes (BEM naming)
```

### 11.1 CSS Custom Properties

Defined in `src/styles/base/` — available globally via `:root`.

**Colors** (`_colors.scss`):
```css
/* Neutrals */
--xc-black500: #111111;    --xc-black400: #343434;
--xc-white: #ffffff;
--xc-grey500: #8A8E8B;    --xc-grey400: #AEB4B1;    --xc-grey300: #C5CBC6;
--xc-grey200: #DBE0DC;    --xc-grey100: #E8EDE9;    --xc-grey50: #F5F8F6;

/* Brand */
--xc-brand-medium-green: #A4F8C0;
--xc-brand-medium-blue: #47E3E3;
--xc-brand-light-green: #A4F8C0;
--xc-brand-light-blue: #B8FBFF;

/* Gradients */
--xc-gradient-light-grey-on-white: linear-gradient(289deg, rgba(219,224,220,0.40) 26.17%, rgba(232,237,233,0.30) 78.35%);
--xc-gradient-light-blue: linear-gradient(109deg, #B8FBFF 33.19%, #A4F8C0 85.37%);
--xc-gradient-medium-green: linear-gradient(109deg, #47E3E3 33.19%, #78F7AD 85.37%);

/* Status / Category */
--xc-categories-progress: #FAE651;       /* yellow */
--xc-categories-completed: #1ccd66;     /* green */
--xc-categories-blocked: #EF4444;       /* red */
--xc-categories-suggestion: #AF71F1;    /* purple */
--xc-categories-collaboration: #71D7D7;
--xc-categories-project: #3CA7FF;
--xc-categories-health: #FFA931;

/* Data Viz Blues */
--xc-data-viz-blue500 through --xc-data-viz-blue50
```

**Typography** (`_typography.scss`):
```css
--xc-font-size: 14px;
--xc-font-family: "Manrope";
--xc-font-weight: 400;
--xc-line-height: 24px;
--xc-bold: 700;
```

**Shadows** (`_variables.scss`):
```css
--xc-boxShadow-500: 0px 0px 30px 0px rgba(17, 17, 17, 0.14);
--xc-boxShadow-400: 0px 0px 30px 0px rgba(17, 17, 17, 0.05);
```

### 11.2 Tailwind Configuration

**Key `theme.extend` values** in `tailwind.config.js`:

**Custom colors** (mirror CSS vars but as Tailwind classes):
```
Main_accent, Second_accent, Warning_Alert
Main_Fonts, Secondary_Fonts, Tertiary_Fonts, Quaternary_Fonts
Background, text_Color
Progress, Completed, Blocked, Suggestion, Collaboration, Project, Health
Blue500–Blue050, Black500/400, WHite (sic)
Grey500–Grey050, Medium_Green, Medium_Blue, Light_Green, Light_Blue
```

**Background gradients:**
```
Light_Grey, Light_Grey_On_White, Light_Blue_Gradient, Medium_Blue_Gradient
```

**Font families:** `font-manrope`, `font-dm_sans`

**Custom font sizes:** `text-Main_Titles` (48px), `text-subtitles` (32px), `text-projectTitle` (24px), `text-cardsTitles` (18px), `text-paragraph` (16px), `text-tags` (14px), `text-small` (12px), plus full `Headline-*` and `Copy-*` scale tokens.

**Custom font weights:** Standard weights + Headline/Copy design token weights.

**Custom screens:**
```
xsm: 375px, sm: 414px, spc600: 600px, md: 768px, lg: 1024px, xl: 1440px, dos_xl: 1536px
```

**Custom shadows:** `shadow-Shadow500`, `shadow-Shadow400`, `shadow-userCadComplete`, `shadow-objectiveCard`

**Custom z-index:** `z-1` through `z-9`

**Content paths:**
```javascript
content: [
  "./src/**/*.{html,ts}",
  "./projects/ngx-xchange-ui/src/**/*.{html,ts}"
]
```

### 11.3 Typography Scale

Typography utility classes defined in `_typography.scss`:

```
h1: 32px / weight 600 / line-height 38px
h2: 24px / weight 600 / line-height 30px
h3: 18px / weight 600 / line-height 24px
h4: 16px / weight 700 / line-height 20px

.medium-400: 16px / weight 500
.medium-300: 14px / weight 500 / lh 20px
.medium-200: 12px / weight 500 / lh 16px
.bold-400: 16px
.bold-300: 14px / lh 20px
.bold-200: 12px / lh 20px

.text_400: 16px
.text_300: weight 500 / lh 20px
.text_200: 12px / lh 16px
```

### 11.4 BEM Button Classes

Defined in `src/styles/components/_buttons.scss`. Base class `.btn` + modifiers:

```
.btn               → outline, rounded-8, padding, hover:opacity-0.8
.btn--filled       → black background, white text
.btn--ai           → light blue gradient, hover: medium green gradient
.btn--tab_active   → grey gradient background, rounded-8
.btn--tab_inactive → grey text, no border
.btn--rounded      → 38px circle, no border, hover: grey200
.btn--rounded_xl   → 56px circle
.btn--rounded_sm   → 30px circle, grey gradient
.btn--rounded_reset → 38px circle, light blue, 50% opacity
.btn--accept       → green filled
.btn--reject       → red border, red text
.btn--ban          → red filled, white text
```

Icon classes inside buttons:
```
.btn__icon         → 20×20, stroke: black500
.btn__icon-lg      → 42×42
.btn__icon-sm      → 16×16
.btn__icon_filled  → 20×20, stroke: white
.btn__icon_filled-sm → 16×16, stroke: white
.btn__icon_accept  → 16×16, stroke: white
.btn__icon_reject  → 16×16, stroke: red (blocked)
.btn__icon_ban     → 20×20, stroke: white
```

### 11.5 Card Classes

Defined in `src/styles/components/_cards.scss`:

```scss
.container-card {
  background: var(--xc-white);
  box-shadow: var(--xc-boxShadow-400);
  padding: var(--xc-regular-padding);
}

.card_24 {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  align-items: start;
}
```

Additional shadow utility classes from `styles.scss`:
```
.cardShadow     → 10.5px 42px 42px 0 rgba(0,0,0,0.25)
.projectCrdShadow → 0 4px 4px 0 rgba(0,0,0,0.25)
```

---

## 12. Key Patterns & Conventions

### Standalone Components

All **page components** are `standalone: true`. All imports (modules, directives, pipes, other components) are listed in the component's own `imports: []` array. No declarations in feature modules.

```typescript
@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NgIf, NgFor, SomeComponent, SomeDirective, ...],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent { ... }
```

### Lazy Loading Pattern

Pages are loaded on demand via Angular Router's `loadComponent`:

```typescript
{
  path: 'feed',
  loadComponent: () => import('src/app/pages/feed/feed.component')
    .then(m => m.FeedComponent),
}
```

### ngSwitch for View State

Multiple pages use `[ngSwitch]` to swap sub-components based on a state variable:

```html
<section [ngSwitch]="state">
  <app-default-page    *ngSwitchCase="'default'" />
  <app-collaboration   *ngSwitchCase="'collaborations'" />
  <app-owners-fund     *ngSwitchCase="'owners'" />
  <app-employee-fund   *ngSwitchCase="'employee'" />
</section>
```

### Angular 17 Control Flow (`@defer`)

`project-feed.component.html` uses the new Angular 17 `@defer` syntax:

```html
@defer (on hover) {
  <div class="user_list">...</div>
}
@placeholder {
  <div class="placeholder">...</div>
}
```

### Hardcoded Mock Data

**All data is currently hardcoded in component TypeScript files.** There is no API service layer. When integrating a backend, each component's hardcoded arrays should be replaced with service calls.

### Icon Usage

Icons are standalone components imported individually:

```typescript
// Import
import { XcIconRocketComponent } from '@xchange-ecosystem/ngx-xchange-icons';

// In template
<xc-icon-rocket class="w-5 h-5 stroke-current" />
```

### Directive Usage for Typography

Typography is applied via attribute directives, not classes alone:

```html
<!-- Headline directive -->
<h3 xcHeadlineStyles class="headline-300">Title</h3>

<!-- Copy/body text directive -->
<p xcCopyStyles class="copy-400">Body text</p>

<!-- Tag pills -->
<p xcProfileTags="blue">Assignment</p>
<p xcProfileTags="purple">Suggested</p>
<p xcProfileTags="gray">Phase</p>
```

### Routing from Aside Nav

The aside nav uses `[routerLink]` for navigation and `[routerLinkActive]` for active state:

```html
<a [routerLinkActive]="'onActive'" [routerLink]="route" xcAsideLink>
```

The `.onActive` class applies the gradient background. The `xcAsideLink` directive provides base link styles.

---

## 13. Data Models

### ProjectInterface (projects page)
```typescript
interface ProjectInterface {
  image: string;              // Image URL
  title: string;
  tags: string[];
  objectivesInProject: number;
  completed: number;
  open: number;
  suggested: number;
  description: string;
  proofs: number;
  collaborations: number;
  value: number;              // Monetary value
}
```

### Dashboard Project
```typescript
{
  title: string;
  tags: string[];
  active: number;
  completed: number;
  collab: number;
  proof: number;
  quality: number;
  expanded: boolean;
  subprojects: {
    title: string;
    tags: string[];
    active: number;
    completed: number;
    collab: number;
    proof: number;
    quality: number;
  }[];
}
```

### Project Dashboard Indicator
```typescript
{
  name: string;  // e.g. 'Bussines', 'Market'
  subindicators: {
    title: string;
    open: number;
    completed: number;
    total: number;
    collaborations: number;
    proof: number;
  }[];
}
```

### Profile Wallet Entry
```typescript
{
  project: string;
  contributed: string;    // e.g. '500 xCoins'
  current: string;
  status: string;         // 'Open' | 'Confirmed' | 'Pending'
  statusTag: string;      // 'yellow' | 'green'
}
```

### Profile Invoice
```typescript
{
  invoiceName: string;
  date: string;
  amount: string;    // e.g. '99 Euro'
  status: string;    // 'Invoice'
}
```

### Project Settings Transaction
```typescript
{
  name: string;
  date: string;
  amount: number;         // Positive = received, negative = sent
  destination: string;
}
```

### Feed Objective (mock data in FeedObjectiveComponent)
```typescript
{
  title: string;
  tags?: string[];
  totalTasks?: number;
  completedTasks?: number;
  proofs?: number;
  deadlineDate?: string;
  description: string;
  type: 'objective' | 'assignment' | 'nextSteps';
}
```

### Collaborator (project-navigator)
```typescript
interface Collaborator {
  id: number;
  name: string;
}
```

### Navigation User (aside nav)
```typescript
{
  name: string;
  imageUrl: string;
  tags: string[];
  description: string;
  collaborations: number;
  email: string;
  linkedin: string;
}
```

---

## 14. Assets

**Location:** `src/assets/`

| Path | Contents |
|---|---|
| `assets/fonts/` | `Manrope-VariableFont_wght.ttf`, DM Sans files |
| `assets/css/styles.scss` | Tailwind entry point (do not import directly in components — compiled to `base.css`) |
| `assets/img/X-Vector.webp` | Xchange logo (used in aside nav header) |
| `assets/img/Send-credits.png` | Header image for project-feed invite modal |
| `assets/img/Pitch-image.png` | Placeholder image for empty states |
| `assets/icons/` | Additional icon assets |
| `assets/images/` | Project images |

**Icon library assets:**  
The UI library generates icons at build time. Post-build, icons are available from the compiled `dist/ngx-xchange-icons/` package.

**Storybook static dirs** (from `.storybook/main.ts`):
- Icons from `ngx-xchange-ui` assets
- Assets from `src/assets`

---

## 15. CI/CD

### GitHub Actions workflows (`.github/workflows/`)

**Build workflow** (`build.yml`):
- Triggers: push / PR to `develop` branch
- Matrix: Node.js 18.x and 20.x
- Steps: `npm ci` → `npm run build:icons` → `npm run build:lib`
- Does **not** run the main app build or tests in CI

**NPM Publish workflow:**
- Publishes `ngx-xchange-ui` and `ngx-xchange-icons` to GitHub Package Registry
- Registry: `https://npm.pkg.github.com`
- Scope: `@xchange-ecosystem`

### `.npmrc`

```
@xchange-ecosystem:registry=https://npm.pkg.github.com
```

Required for installing scoped packages from GitHub Packages. Developers need a GitHub personal access token with `read:packages` scope set as `NODE_AUTH_TOKEN` environment variable (or via `.npmrc` auth).

---

## Appendix: Component Quick-Reference Cheatsheet

### Import `ngx-xchange-ui` components

```typescript
// Library path (dev, in-repo)
import { ... } from 'projects/ngx-xchange-ui/src/public-api';

// Package path (published)
import { ... } from '@xchange-ecosystem/ngx-xchange-ui';
```

### Import `ngx-xchange-icons` components

```typescript
// Library path (dev, in-repo)
import { XcIconXxxComponent } from 'projects/ngx-xchange-icons/src/public-api';

// Package path (published)
import { XcIconXxxComponent } from '@xchange-ecosystem/ngx-xchange-icons';
```

### Common pattern for a new page

```typescript
// src/app/pages/my-page/my-page.component.ts
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [NgIf, NgFor /* + any xc- components */],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.scss'
})
export class MyPageComponent { }
```

Add the route in `public-routing.module.ts`:
```typescript
{
  path: 'my-page',
  loadComponent: () => import('src/app/pages/my-page/my-page.component')
    .then(m => m.MyPageComponent),
}
```

Add a link in `new-aside-nav.component.html`:
```html
<xc-aside-links [route]="'/my-page'" [label]="'My Page'">
  <span icon><xc-icon-some-icon /></span>
</xc-aside-links>
```

### Button usage example

```html
<!-- Outline button -->
<xc-button-400 type="" description="Save" (onClick)="save()" />

<!-- Filled button -->
<xc-button-400 type="filled" description="Submit" [full]="true" />

<!-- Round icon button -->
<xc-button-400 type="round_options" />

<!-- AI gradient button -->
<xc-button-400 type="ai_button" description="Ask AI" />
```

Or use BEM classes directly:
```html
<button class="btn btn--filled">
  <xc-icon-save class="btn__icon_filled" />
  <p>Save</p>
</button>
```
