/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

// Embedded Logo to ensure it works instantly
const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAYAAABv+xzXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY9SURBVHgB7Z27TxxFFMbfWfZeE8B/ALtAihAkChIidIkoIEKEKEDoUKEKEChUqAIEChWqAKFChSpAoFChChA6VKgCBAoVqgChQoUqQKBQoQoQKlSowre7Z8+fvbN7uzv7mO8nW7vA3u7ez87M7px7z+8uX74sIYSQkAsXLsjv338v27dvW6v7WlZOf67fX4rI88vS6Zf3H0p0Lz0XFxf9E64An65fNwnN983/j++f7z+S6F66E7z/9p1M3v7EWu09P/mS7N97WDr9Yp/X7i99/pX8+v7n8veHn8vL63csYf7Z3pAnXzwisZ5Kq73Xpx8f8iT99MsnJda7/6vS6cfvP5Lp9p/S6fH2Y+l0288/k9m7n1mC5D3V7vP+29Ky66U8Zf9t2eX3X5Bf3v6TnHu6+p956unHn+TMk1U+q8fV/67O0vWv9p8v/7R0+51OpxS0+3f/N5+x619v/U8++YInX9n/Xm96fP6O5V9vOub55f3P7p99e8jK9P7Vdf6XvO0fO++m69/v6/fM5IefLOnl+eP38T1tG/uX18fO9/zI2W679X/2ZzrtVlt/t5+f4Z6vY576O/485906f36307FtnvXw0z7re6/f372/4+/48+x8v/Xz+uX/9W7m/8mXf19vPnbe6/8T5886X9/O4+X98f3O+8/reY3f8W2Nf7396695O/b79X/6Xz+vP/at/4/P8frDfm63Zp718Gv+5/X5P+f/T/fX/963fX7nPW/bv974X69fb/37fX6/+fP8/2Gf8frOfH/rP9zbff4+879eP8efr/ev76/++z3/+9f7mde7Wf7Vn+FfzvP7nPfX/873rG/zvP72/vA/1vt2/9v5jZz3+3p8v8vXW387j881Ptfnm67H1/it/Xz7997O18fz9e72+ff7+v3+9+X598PvunXzO/E/8fG25m/GfO56PvYv77/et77/ut0fv9f7Nf8fvv9w3m77R852O22e8vXxr4+f53O9/7zf5/q879v5n7f7v+Y36n+Pr/GZ8R+fb/q87/O+z/9+O795367/vK3/+D/7uY6v8dn+3+9xO/+v9v6X/GvP7zP/+fP7nPff/96Xf73N3+f1v97GZ97/9u/Vf/O8zv+8fX/X7/vM55f3j//9vX/Xz2v8e7+f927en/K/tS7/Wj9Xv+3jNf/7vcfv+PrX7/W//OtteD8zP9dva7vG7/r/937eZ3zN6+3Y8fV0v6/Zzv93O91S2X907SrePv9XIn39hKUrIn37k6U7Qv7fIunrZf6vIn393qUrJn29vN+rIn19pAnvK5L3X5H3n7OUL4/07S8sbcn79i8W8X29IunrH0v6evm+88TS1y9XvK9fsqSvl/6eJ/38/WfSlnv68Scl6eenF8/8yXOn6efH9/3v/N9+yO/6+uXny9S6/32f6/df1vj/XfPy+/iW/j4979eP3f6+PzO1PzPdT7/vM/+9v9u9v/Hl7/h+v/79/fNrvub7T/fX/+mffev9S/uX7m/+3/zX/+7f7W633Grrn3S63Zal+v3On+U9N/9Xf99n+dfD/833Nf7Xf1m/rfG9rnHzu/7e65rvmdfz5/q7776/vM4P39t67rn5+eX977+Y5YeeP7m/+X/3z/T32//u3zn/z87PzH/nfeZz9e/7bZ7/m8/3+pZ7vP17fcfXO/8P107Xz9Vv69tX17u9V9/P1399eavvVv/N79S/7m/1f8/Xf2u+L9fXN87Xda09V79t3fVrfqY/9zdfX/98u8/rZ2P6f8fT9fP6+v74fn9/0++at327r9vO+X6f6/u0t9vO6f52X5/nt/v7fNf38fr1/f31/fbPj/k91+O7fb+/2++X6/9XfE/8vC7v53p7bK3+tM/Z75X/ue9n+f/D/zH//f77uP/9fvuf/27+r/7O+6v3u3+m0+uW+n+Y87/p9vtdfXyn1f9XbOf/XfM577fz/P57eM7P+/r/x3qOOfOnnsc7nd/+u7un9rvdTrdTyvyv5zm3S7/bL3298r81p8fX+F0f39Of6/8P///B/zH9D/8H/8f0D//H9A//B//H9A//B//H9A//B//H9A//B//H9A//B//H/A//x/QP/8f0D//H9A//B//H9A//B//H9A//B//H9A//B//H9A//B//H9A//B//H9A//B//H9A//5/+c96VpSvoXoWiaov9/of8fof8foaX/P/0H8Gf/T8E/AAtLmiL+D8BC0tL+D8AfoD/AX8AsKUnvAAnvAP8B8BcEAH8BvICW9C9CwL8AtqRpSlL/ByS8A8A/AAuY3/G/3f8B+DP+jWn8D/8D8Gf/f8C/AP8L/EPR/wfgn/oBfhL8v8A/AAtT/vMPXpAfnAAn8AF8IBr/F6Ggn/+D8X/zPwUfCP4TfAh/Ab4C/AL4K3AHvBHeCfwDPgnp/90/Ff8B+CHwS/AF8E/wH7p/D9Z5Xm78z7z/8J/4Z3z9W873nPP9/D8LvxH9AfxG8EnwS/Am/An/BP8C/ID9E/BBeCH4QPAG+ALwAfAv8Bf8TvwD9B/wF/AH+AL4BvAP0AfcB/S/oAegH+AL6Af8B7ge6Af6B/AH4FfAB+AD6AfCH8EfiH+CPuB7of7v+v97Pue66f/iY7r9f16/v93v+r7/fLz9f7+f16/vzvP6u3+vf9fM6v59/68v8P/03v1P/zvf07/f13+rv9vO7/f40f9/f5/r9/rbf7vf1b7vfmv/7Xf95ve3v8/X1e/rW1/r/Lve9Ttfu8fX5rtfP8/X5vt/n7fzz/Z7v+z9v+93ub/vW/3m9P7eO73H/7f62P9vP9vO+X/v8/V7f779fu50zX/Pz7fzuuz7f/7/f5+m/P1+///jX+8+3//72X7f5Y6//X++9/m9v1m/G1/it/Xz79/u9/n7/9/r9/jS99m/u/9//Wb3p8/n88z4z3X9fv93v99X9Xn97X8vX+9nO+er+p9vudfqfsXue6v3Wf65rf6b/X7Ge6p+v9zvfUX9f7N99/v9/rv7W7/TOf/n98TPW+9m/u97X/8VvP5/X+9vN5f723/Pve+Z79fP/n9zPv3/6N++m+p++pvev6e38Zl7XzOfrv/v7vNbH55l//+XG9/Z71f66+6ev6Zz7+ff8zHf96/Odn9X7X53v7ff0u737f57yfj7X+/m+7r+/P9vvdM78p3Pn9379/eF8Xv1u9W9M9X7f6uvV/6y9Zjqfr9+u/rfm6///8/X/z+fr2O5zvzKffP5ZrtnO53PXO9//Xv2d56f5Z67/f/0zvunr5T77P//O99TveO7nu5p+n90/vU91Pf+r95muef435uO8///zv6+HrvX+6/9nPmZ9vO93zve3z3f+/5mP9ZzrfuX+//mY93Pf9n/Wf2c69nv++f+7+z3XP///2ff8zPv3/P90/393un9///07PXM+Zn/uO77f8n7O9X7v+ue+pn/9+r37PdX7Xe///7X/OdY9/f87Hf57z9e/7PPM5///nP//t/5l/7///+p91v+f2Znr///P/ZnrPe///9O58P/W7vf6Z6p+m8//Xf+Zrz/9ezvv87nrv///Mfn736p5///zP5++p6vfv79nf/37OdY7nTM85zPnM+p6p+vfr3+mdef99vPv6p+mfr5nqv83/9v1zPvf89/9Xen57q///t/7rfeZ7/+v55muep6rn873XU91nNdfX7Of7/3+Z/z89/rnuZnrv///Mfn87HnM+n56p+r7un///+/8zH98znXM+p3p/unq+fv95mev//zv+Zn/uO7nmfr6n6t+qfqfq9+p+m8//Pf6puv5mP99/O6fqdn/ue8/H/+/+mZv7Pf9nPr+r3qf851TvOfd6p+t6p6p6tep6p+r///rv///+/Zmr///6p6v//7rv///8/Mznf///O///9znWf//v//ZnrOdU7XP6p6p6vXU///u/Pf5nz///mY7vnu6er/69+/P95zPf///n//5mP///8zPv5nuv//p3///+mZ6///+/v9Xuf//p2vPf/p3/uP7/7PXM///unf/r3f8////9M////rv///9////znVf8////3+Z6v//7vn//OdX9Xunfv95zPf//t99M////Xv179ee///unf////rv69///+er369////n//pnev95z/f/Z7/9ez///9O////nPM////un///PfvzvP///P95z/f//ZnrOf5nn//OdXrzOdX////OdU9Xrf6p7unf///rv///v95zqv///unq9////TM9////Z7v///f/Zzrv///57v////PXM////PXM////rv////OdZ93P///Z73PM////TM////unv69+v///O///znP9////ZnrOdT9Wf/Odf////rv////nuf//5mev////rv////n//5me/9nqvqv///P////P9X/3+Zn/uO77fM/f/p3/9ez13/9e/1z////9M////f///////ue75//9u9///9Xuf//v//rv////PXM////PXM////nPM////OdX////PXM///N73P95zrn///////9u73P95n///PXM///v///OdV9ee/P///PXM9ez1z////u/Pf/rv//// OdV/9M717v///O/9znPXM9df90/1z9X////9M////9ez////un///9eee///OdU///OdX///unf///OdU9eeee7p6v///O////OdV/9M717v///O///eee///TM9////Z/v/TM/ff1z////un///v95zuuf////rv////n//5mP///8zPv5nuv//p3///+mZ/6r///rv///v/v79X////9M////9M7////9O////9O////9O////9O////9O9M////9M///v///OdV7//+ZnrOdT9Wf9e/3udZ///n//5mP///8zPf5nuv//p3///+mZ6///+/v93u///Z7///P9X/3+Zn/OdZ93PXM///TM////unv69+v///O///znP9////rv////OdU+rev///57n//OdU///PnM9df90/1z/XP1z9df///P////P9ee/Xv9nqvuv///O///eee///TM9////Z/v///f/Zzrv///69+v///O/9znP///Zzrn///f///unf///OdU///unf//rv///rv////eee///unf////OdU////rv////ee/Xv9nqv////rv///P/////rv/// OdU////rv////ee///TM////f/ee///TM9////f///TM///TM///TM///TM///TM///TM///TM9M////9M///v///OdU7//+ZnrOdU///PnM9df90/1z9df/Odf///P////T9df/Xnude7p+r///P//// OdV/9M7////9O////9O////9O9M////9M///v///OdU7//+ZnrOdU///PnM9df90/1z9df/Odf///P///T9df/Xv9ee+r///PnM9df9df9df9df///P////TM9df/Xv9Xv179M717v///O///eee///ee///TM9////f///TM////eee///TM9////TM///TM///PnM9df90/1z9df/Odf///P////TM9df/Xnude///P////P////eeee///TM////f///TM///eee///TM////TM///Odf///P////T9df/Xnude/Xnude////9M////9M////9M////9M9M////9M///v///OdU7//+ZnrOdT9Wf/Odf9df/Odf///P////T9df/Xnude////9M////9M////9M////9M9M////9M///v///OdU7//+ZnrOdU///PnM9df90/1z9df/Odf///P////TM9df/Xnude/Xnude////9M9df/Xnude/Xnude////TM9df/Xnude/Xnude////f/ee///TM////TM///TM9M////9M///v///eee///TM9////TM///TM///eee///TM9////TM///TM9M///PnM9df9df///PnM9df9df9df9df9df9df9df9df///P////P////P////PnM9df9df/PnM9df9df9df9df/PnM9df9df9df///PnM9df9df9df9df9df9df9df/PnM9df9df9df/PnM9df9df/PnM9df9df9df9df9df9df///PnM9df9df9df/PnM9df9df9df/PnM9df9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df///PnM9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df/PnM9df9df///PnM9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df///PnM9df9df/PnM9df9df/PnM9df9df9df9df/PnM9df9df///PnM9df9df/PnM9df9df9df/PnM9df9df9df///PnM9df9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df///PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df9df///PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df/PnM9df9df/PnM9df9df9df9df/PnM9df9df9df///PnM9df9df/PnM9df9df9df/PnM9df9df9df///PnM9df9df9df///PnM9df9df/PnM9df9df/PnM9df9df///PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df/PnM9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df/PnM9df9df/PnM9df9df/PnM9df9df9df/PnM9df9df9df/PnM9df9df/PnM9df9df/PnM9df9df/PnM9df9df9df";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoKey, setLogoKey] = useState(Date.now());

  useEffect(() => {
    // Initial check for logo
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

  return (
    <div className="min-h-screen bg-brand-cream paper-texture selection:bg-[#E2D1B3] selection:text-brand-black">
      {/* Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10 py-2 md:py-6 border-b border-brand-black/10 ${
          isScrolled ? 'bg-brand-cream/80 backdrop-blur-md py-1 md:py-4' : 'bg-brand-cream/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
              className="flex items-center gap-3 md:gap-6 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className={`${isScrolled ? 'w-14 h-14 md:w-24 md:h-24' : 'w-20 h-20 md:w-36 md:h-36'} flex items-center justify-center transition-all duration-500 group-hover:scale-105`}>
                  <img 
                    key={logoKey}
                    src={`/logo.png?v=${logoKey}`}
                    alt="Smash & Sear Logo" 
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        const fallback = document.createElement('div');
                        fallback.className = "w-full h-full bg-brand-black rounded-full flex items-center justify-center text-brand-cream font-serif font-bold text-[10px] md:text-xl";
                        fallback.innerText = LOGO_FALLBACK;
                        target.parentElement.appendChild(fallback);
                      }
                    }}
                  />
              </div>
            <span className="font-serif text-lg md:text-3xl tracking-tighter font-black hidden sm:block group-hover:text-brand-brown transition-colors">Smash & Sear</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-brand-black">
            <button onClick={() => scrollToSection('about')} className="hover:text-brand-brown transition-colors">About Us</button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-brand-brown transition-colors border-b border-brand-black">The Menu</button>
            <button onClick={() => scrollToSection('footer')} className="hover:text-brand-brown transition-colors">Location</button>
            <a 
              href={DELIVERY_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-black text-brand-cream px-6 py-2 text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-sm"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-black p-1.5 bg-brand-black/5 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-24 px-8 flex flex-col gap-8 text-2xl font-serif"
          >
            <button onClick={() => scrollToSection('about')} className="text-left border-b border-brand-black/5 pb-4">About Us</button>
            <button onClick={() => scrollToSection('menu')} className="text-left border-b border-brand-black/5 pb-4">Menu</button>
            <a 
              href="https://maps.app.goo.gl/FrZmsrsaBQV5feRV9" 
              target="_blank" 
              rel="noreferrer" 
              className="text-left border-b border-brand-black/5 pb-4"
            >
              Find Us
            </a>
            <a 
              href={DELIVERY_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-black text-brand-cream px-6 py-5 rounded-2xl flex items-center justify-between shadow-xl text-lg uppercase tracking-widest font-sans font-bold"
            >
              Order Online <ArrowRight size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-36 md:pt-48 lg:pt-56">
        {/* Main Content Split (Professional Polish Pattern) */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 pb-24">
          
          {/* Left Column: Hero & About (1/3 Width on Desktop) */}
          <section className="lg:w-1/3 flex flex-col justify-between">
            <div className="space-y-10 lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h1 id="about" className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] text-brand-black mb-10 tracking-tight">
                  Gourmet <br/>Street Food. <br/><span className="italic font-light text-brand-brown">Caribbean Soul.</span>
                </h1>
                
                <p className="text-brand-black/70 text-sm md:text-base leading-relaxed max-w-sm mb-12">
                  Smash & Sear is a South Trinidad bistro blending gourmet street food with bold Jamaican flavours. Every dish is made to hit hard and satisfy.
                </p>

                <div className="pt-4 border-t border-brand-black/10">
                   <div className="text-[10px] uppercase font-black tracking-widest text-brand-brown mb-3">Daily Specials</div>
                   <div className="p-6 border border-brand-black/10 rounded-2xl bg-brand-paper shadow-sm">
                     <p className="text-xs font-serif italic font-bold mb-1">Thursday - Saturday</p>
                     <p className="text-[14px] leading-snug text-brand-black/90">Authentic Jamaican Jerk Chicken & Escoveitch Fish served with Rice & Peas.</p>
                   </div>
                </div>

                <div className="mt-12 flex items-center gap-4 opacity-50">
                  <div className="w-16 h-[1px] bg-brand-black"></div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-center sm:text-left">Bamboo Junction, La Romain, San Fernando</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Right Column: Menu Section (2/3 Width on Desktop) */}
          <section id="menu" className="lg:w-2/3">
            {/* Category Filter for better UX in large lists */}
            <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-brand-black/5 overflow-x-auto no-scrollbar">
              {menuData.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    activeCategory === cat.title 
                    ? 'bg-brand-black text-brand-cream border-brand-black shadow-md' 
                    : 'bg-transparent text-brand-black/40 border-transparent hover:border-brand-black/20 hover:text-brand-black'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Active Category Header */}
                <div className="pb-4 border-b border-brand-black/20 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-8">
                  <h3 className="font-serif text-3xl font-bold">{activeCategory}</h3>
                  <span className="text-[10px] uppercase tracking-widest font-black text-brand-brown opacity-60">
                    {menuData.find(c => c.title === activeCategory)?.note || 'Smash & Sear Signature'}
                  </span>
                </div>

                {/* Menu Items List (The Professional Polish Grid) */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {menuData.find(c => c.title === activeCategory)?.items.map((item, idx) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div className="flex-1">
                          <h4 className="text-[15px] font-bold group-hover:text-brand-brown transition-colors">{item.name}</h4>
                          {item.description && (
                            <p className="text-[11px] leading-relaxed text-brand-black/50 mt-1 italic italic font-medium">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <span className="font-sans text-sm font-bold whitespace-nowrap text-brand-brown">{item.price}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hungry? Contextual CTA */}
                <div className="mt-16 p-8 bg-brand-brown/5 rounded-3xl border border-brand-brown/10 text-center">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-brown mb-3">Hungry yet?</p>
                  <a 
                    href={DELIVERY_LINK} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-serif font-bold underline underline-offset-8 decoration-brand-brown/30 hover:decoration-brand-brown transition-all"
                  >
                    Deliver with Neighbourhood Munchies
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="w-full px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between items-center border-t border-brand-black/10 bg-brand-cream relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-brand-black/40">
        <div className="mb-8 md:mb-0">Smash & Sear © {new Date().getFullYear()}</div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          <a href="https://www.instagram.com/smashandseartt/" target="_blank" rel="noreferrer" className="hover:text-brand-brown transition-colors">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61575557495353&rdid=QitDKY6P5Mfu6W38&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Aa7Vz4qLT%2F#" target="_blank" rel="noreferrer" className="hover:text-brand-brown transition-colors">Facebook</a>
          <a href="https://www.tiktok.com/@smashandseartt" target="_blank" rel="noreferrer" className="hover:text-brand-brown transition-colors">TikTok</a>
        </div>
        
        <a 
          href="https://maps.app.goo.gl/FrZmsrsaBQV5feRV9" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-3 text-center sm:text-right hover:text-brand-brown transition-colors"
        >
          <MapPin size={12} className="text-brand-brown shrink-0" />
          <span>Bamboo Junction, La Romain, South Trinidad</span>
        </a>
      </footer>
    </div>
  );
}
