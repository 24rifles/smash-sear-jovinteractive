import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { menuData } from "./menuData";

const DELIVERY_LINK = "https://app.neighbourhoodmunchies.com/restaurants/66a41ddb79bc56000c3a3086";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <img src="/logo.png" style={{ height: "50px" }} />

        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "white", padding: "40px" }}
          >
            <a href={DELIVERY_LINK} target="_blank">Order Now</a>
          </motion.div>
        )}
      </AnimatePresence>

      <h1 style={{ padding: "20px" }}>
        Gourmet Street Food. Caribbean Soul.
      </h1>

      <div style={{ padding: "20px" }}>
        {menuData.map((cat) => (
          <div key={cat.title}>
            <h2>{cat.title}</h2>

            {cat.items.map((item) => (
              <div key={item.name} style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}