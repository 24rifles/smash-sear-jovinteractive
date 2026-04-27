import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu as MenuIcon, X } from 'lucide-react'
import { menuData } from './menuData'

const DELIVERY_LINK = "https://app.neighbourhoodmunchies.com/restaurants/66a41ddb79bc56000c3a3086"

export default function App() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

return ( <div className="min-h-screen p-6">

```
  {/* HEADER */}
  <header className="flex justify-between items-center mb-10">
    <img src="/logo.png" className="h-12" />
    
    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      {isMobileMenuOpen ? <X /> : <MenuIcon />}
    </button>
  </header>

  {/* MOBILE MENU */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white p-10"
      >
        <a href={DELIVERY_LINK} target="_blank">Order Now</a>
      </motion.div>
    )}
  </AnimatePresence>

  {/* HERO */}
  <h1 className="text-4xl mb-6">
    Gourmet Street Food. Caribbean Soul.
  </h1>

  {/* MENU */}
  <div>
    {menuData.map((cat) => (
      <div key={cat.title} className="mb-8">
        <h2 className="text-2xl mb-4">{cat.title}</h2>

        {cat.items.map((item) => (
          <div key={item.name} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    ))}
  </div>

</div>
```

)
}
