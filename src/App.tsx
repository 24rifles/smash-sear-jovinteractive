import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { menuData } from "./menuData";

const DELIVERY_LINK = "https://app.neighbourhoodmunchies.com/restaurants/66a41ddb79bc56000c3a3086";

export default function App() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return ( <div>

```
  {/* HEADER */}
  <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
    <img src="/logo.png" style={{ height: "50px" }} />

    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      {isMobileMenuOpen ? <X /> : <MenuIcon />}
    </button>
  </div>

  {/* MOBILE MENU */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "white", padding: "40px" }}
      >
        <a href={DELIVERY_LINK} target="_blank">Order Now</a>
      </motion.div>
    )}
  </AnimatePresence>

  {/* HERO */}
  <h1 style={{ padding: "20px" }}>
    Gourmet Street Food. Caribbean Soul.
  </h1>

  {/* MENU */}
  <div style={{ padding: "20px" }}>
    {menuData.map(function(cat) {
      return (
        <div key={cat.title}>
          <h2>{cat.title}</h2>

          {cat.items.map(function(item) {
            return (
              <div key={item.name} style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>

</div>
```

);
}
