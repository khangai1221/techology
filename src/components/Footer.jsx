import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-pure-black border-t border-neon-purple/10 py-16 px-4 w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">
              <span className="text-neon-purple">TECH</span>OLOGY
            </div>
            <p className="text-dark-gray max-w-md">
              Тоглоомын өндөр гүйцэтгэлтэй бүтээгдэхүүнүүд. Эсэсээрээ сонголт
              хийх.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Хурдан холбоос</h4>
            <ul className="space-y-2 text-dark-gray">
              <li>
                <a
                  href="#"
                  className="hover:text-neon-purple transition-colors"
                >
                  Бүгд бүтээгдэхүүн
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neon-purple transition-colors"
                >
                  Флагман
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neon-purple transition-colors"
                >
                  Популяр
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neon-purple transition-colors"
                >
                  Хямд үнэтэй
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-dark-gray">
              <li className="flex items-center gap-2">
                <span>📍</span> Компьютер Молл, Улаанбаатар
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> 9590 0009
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span> Facebook Messenger
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> info@technology.mn
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neon-purple/10 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p className="text-dark-gray text-sm">
            © 2024 TECHOLOGY. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-6 text-sm text-dark-gray">
            <a href="#" className="hover:text-neon-purple transition-colors">
              Нууцлалын бодлого
            </a>
            <a href="#" className="hover:text-neon-purple transition-colors">
              Үйлчилгээний нөхцөл
            </a>
            <a href="#" className="hover:text-neon-purple transition-colors">
              Баталгаат ажиллагаа
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
