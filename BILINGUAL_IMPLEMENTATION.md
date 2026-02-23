# Bilingual English/Nepali Implementation

## Overview
Complete bilingual support for Pioneers Academy website with English (EN) and Nepali (NE) language switching.

## Implementation Details

### 1. **Language Context System**
- **File**: `src/contexts/LanguageContext.jsx`
- **Features**:
  - Provides `useLanguage()` hook to all components
  - Stores language preference in localStorage
  - Includes `toggleLanguage()` function to switch between EN/NE
  - Provides `t` object with all translations

### 2. **Translation Files**
- **English**: `src/translations/en.js` - Complete English translations
- **Nepali**: `src/translations/ne.js` - Complete Nepali translations
- **Coverage**: 
  - Navigation items
  - Footer content
  - All page headings and text
  - Form labels
  - Button labels
  - Hero sections

### 3. **Language Toggle Button**
- **Location**: Navbar (next to theme toggle)
- **Display**: Shows "EN" when in Nepali, "NE" when in English
- **Styling**: Styled to match the theme toggle button

### 4. **Updated Components**

#### Layout Components
- **Navbar.jsx** - All navigation text uses translations
- **Footer.jsx** - All footer text uses translations

#### Page Components Updated
- **Home.jsx** - Welcome, Vision, Mission, Core Values
- **About.jsx** - Complete About Us page
- **Academics.jsx** - Academic programs (Primary, Secondary, Senior)
- **Facilities.jsx** - All facility descriptions
- **Contact.jsx** - Contact form and info
- **Rules.jsx** - School rules and regulations
- **PrincipleMessage.jsx** - Principal's message page
- **BoardOfDirectors.jsx** - Board members page
- **Resources.jsx** - Resources overview page

#### Resource Subpages
- **ResourceGallery.jsx** - Gallery page
- **ResourceNews.jsx** - News & Updates page
- **ResourceRoutine.jsx** - Class Routine page
- **ResourceDownloads.jsx** - Downloads page
- **ResourceEvents.jsx** - Events page
- **ResourceExams.jsx** - Exams page
- **ResourceParents.jsx** - Parent Resources page

### 5. **App Integration**
- **main.jsx** - Wrapped app with `<LanguageProvider>`
- Language persists across page reloads via localStorage
- Language state is global and accessible to all components

## Usage

### For Users
1. Click the language toggle button (EN/NE) in the navbar
2. The entire website switches between English and Nepali
3. Language preference is saved automatically

### For Developers
Add translations to any new component:
```jsx
import { useLanguage } from "../contexts/LanguageContext";

const MyComponent = () => {
  const { t } = useLanguage();
  return <h1>{t.mypage.title}</h1>;
};
```

## Translation Structure

All translations are organized by page/section:
```
en.nav.*           - Navigation items
en.footer.*        - Footer content
en.home.*          - Home page
en.about.*         - About page
en.academics.*     - Academics page
en.facilities.*    - Facilities page
en.contact.*       - Contact page
en.rules.*         - Rules page
en.principal.*     - Principal's message
en.board.*         - Board of directors
en.resources.*     - Resources pages
```

## Features
✅ Complete English translations  
✅ Complete Nepali translations  
✅ Language toggle in navbar  
✅ Persistent language preference  
✅ All pages translated  
✅ All components use context  
✅ Responsive design maintained  
✅ Dark/Light theme works with all languages  

## File Changes Summary
- **Created**: 3 files (LanguageContext.jsx, en.js, ne.js)
- **Modified**: 19 files (Navbar, Footer, Home, About, Academics, Facilities, Contact, Rules, PrincipleMessage, BoardOfDirectors, Resources, and all Resource subpages)
- **main.jsx**: Wrapped with LanguageProvider

## Notes
- Language context provider is at the app root level
- All translation keys follow camelCase naming convention
- Translation files are simple JavaScript objects (not JSON) for flexibility
- LocalStorage key: 'language' (values: 'en' or 'ne')
