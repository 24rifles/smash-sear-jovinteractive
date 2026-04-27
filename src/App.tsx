/**

* @license
* SPDX-License-Identifier: Apache-2.0
  */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ FIXED
import {
Instagram,
MapPin,
ChevronRight,
Menu as MenuIcon,
X,
UtensilsCrossed,
ArrowRight,
ShoppingBag
} from 'lucide-react';
import { menuData } from './menuData';

const DELIVERY_LINK = "https://app.neighbourhoodmunchies.com/restaurants/66a41ddb79bc56000c3a3086";
const LOGO_FALLBACK = "S&S";

export default function App() {
const [isScrolled, setIsScrolled] = useState(false);
const [activeCategory, setActiveCategory] = useState(menuData[0].title);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [logoKey, setLogoKey] = useState(Date.now());

useEffect(() => {
setLogoKey(Date.now());
}, []);

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 50);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

const scrollToSection = (id: string) => {
const element = document.getElementById(id);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
setIsMobileMenuOpen(false);
};

return ( <div className="min-h-screen bg-brand-cream paper-texture selection:bg-[#E2D1B3] selection:text-brand-black">
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10 py-2 md:py-6 border-b border-brand-black/10 ${
        isScrolled ? 'bg-brand-cream/80 backdrop-blur-md py-1 md:py-4' : 'bg-brand-cream/80 backdrop-blur-sm'
      }`}> <div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3 md:gap-6 cursor-pointer group"
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

```
        <div className={`${isScrolled ? 'w-14 h-14 md:w-24 md:h-24' : 'w-20 h-20 md:w-36 md:h-36'} flex items-center justify-center`}>
          <img 
            key={logoKey}
            src={`/logo.png?v=${logoKey}`}
            alt="Smash & Sear Logo" 
            className="h-full w-full object-contain"
          />
        </div>

        <span className="font-serif text-lg md:text-3xl tracking-tighter font-black hidden sm:block">
          Smash & Sear
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-brand-black">
        <button onClick={() => scrollToSection('about')}>About Us</button>
        <button onClick={() => scrollToSection('menu')}>The Menu</button>
        <button onClick={() => scrollToSection('footer')}>Location</button>
        <a href={DELIVERY_LINK} target="_blank" rel="noreferrer"
          className="bg-brand-black text-brand-cream px-6 py-2 rounded-full">
          Order Now
        </a>
      </nav>

      <button className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
      </button>
    </div>
  </header>

  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-brand-cream pt-24 px-8 flex flex-col gap-8">
        
        <button onClick={() => scrollToSection('about')}>About Us</button>
        <button onClick={() => scrollToSection('menu')}>Menu</button>

        <a href={DELIVERY_LINK} target="_blank" rel="noreferrer"
          className="bg-black text-white px-6 py-4 rounded-xl text-center">
          Order Online
        </a>
      </motion.div>
    )}
  </AnimatePresence>

  <main className="pt-40 px-6 max-w-6xl mx-auto">
    <h1 id="about" className="text-5xl font-serif mb-6">
      Gourmet Street Food. Caribbean Soul.
    </h1>

    <p className="mb-10">
      Smash & Sear blends gourmet street food with bold Jamaican flavours.
    </p>

    <section id="menu">
      {menuData.map((cat) => (
        <div key={cat.title} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{cat.title}</h2>
          {cat.items.map(item => (
            <div key={item.name} className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  </main>

  <footer id="footer" className="text-center py-10">
    Smash & Sear © {new Date().getFullYear()}
  </footer>
</div>
```

);
}
