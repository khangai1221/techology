import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-pure-black flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pure-black via-dark-bg to-pure-black" />

      {/* Decorative purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-deep-purple/20 rounded-full blur-[120px]" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-purple rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-deep-purple rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-neon-purple rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 w-full px-4 md:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ТОГЛООМЫН
          <br />
          <span className="text-neon-purple">ГҮЙЦЭТГЭЛ</span>
          <br />
          ДЭЭШ ӨРГӨХ
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-dark-gray mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Туршилт өнгөрсөн бүтээгдэхүүнүүдээр тоглоомын гүйцэтгэлийг дээшлүүлнэ
          үү
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button
            className="px-10 md:px-12 py-4 md:py-5 bg-deep-purple text-white font-bold text-lg rounded-full shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 border border-neon-purple/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Бүтээгдэхүүн үзэх
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-neon-purple rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
