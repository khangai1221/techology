import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "TITAN X PRO",
    specs: "RTX 4080 | Intel i9-14900K | 64GB DDR5 | 2TB NVMe",
    price: "8,500,000₮",
    badge: "Флагман",
    fps: "450+ FPS",
    description: "Хамгийн өндөр гүйцэтгэл",
  },
  {
    id: 2,
    name: "SHADOW ELITE",
    specs: "RTX 4070 Ti | Intel i7-14700K | 32GB DDR5 | 1TB NVMe",
    price: "5,200,000₮",
    badge: "Популяр",
    fps: "400+ FPS",
    description: "Олон хэрэглэгчдэд зориулагдсан",
  },
  {
    id: 3,
    name: "STEALTH PRO",
    specs: "RTX 4060 Ti | Intel i5-14600K | 32GB DDR5 | 1TB NVMe",
    price: "3,800,000₮",
    badge: "Хямд",
    fps: "350+ FPS",
    description: "Биетэй үнэтэй",
  },
];

const Products = () => {
  return (
    <section className="py-16 px-4 bg-pure-black w-full">
      <div className="w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            БҮГД БАРИГДСАН ПК
          </h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            Туршилт өнгөрсөн бүтээгдэхүүнүүдээр тоглоомын гүйцэтгэлийг
            дээшлүүлнэ үү
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-dark-gray/20 border border-neon-purple/10 rounded-2xl overflow-hidden hover:border-neon-purple/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Area */}
              <div className="relative h-56 bg-gradient-to-b from-dark-gray/30 to-dark-gray/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-deep-purple/10 via-neon-purple/5 to-deep-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                  🖥️
                </div>

                {product.badge && (
                  <div className="absolute top-4 right-4 bg-deep-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                  {product.name}
                </h3>
                <p className="text-dark-gray text-sm mb-2">{product.specs}</p>
                <p className="text-dark-gray text-xs mb-4 italic">
                  {product.description}
                </p>

                <div className="inline-block mb-4">
                  <span className="text-xs font-bold text-neon-purple uppercase tracking-wider">
                    CS2: {product.fps}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="text-2xl font-light text-white">
                    {product.price}
                  </div>
                  <motion.button
                    className="px-6 py-2.5 bg-deep-purple/80 text-white font-medium rounded-lg hover:bg-deep-purple transition-all duration-300 border border-neon-purple/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Захиаллах
                  </motion.button>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-deep-purple/5 via-transparent to-neon-purple/5 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
