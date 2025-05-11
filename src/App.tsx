import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

interface Testimonial {
  company: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    company: "Peppes Pizza",
    quote: "De leverte virkelig resultater utover våre forventninger. Vi følte oss forstått og verdsatt."
  },
  {
    company: "Fjordkraft",
    quote: "Å jobbe med dem var sømløst. Kreative, skarpe og presise hele veien."
  },
  {
    company: "Fargerike",
    quote: "En frisk pust innen merkevarebygging. Vi elsket prosessen – og resultatet enda mer."
  }
]

function App() {
  const [displayMode, setDisplayMode] = useState<'stack' | 'float'>('stack')
  const [clickCount, setClickCount] = useState<{ [key: string]: number }>({})
  const [showHireMe, setShowHireMe] = useState(false)

  const handleCardClick = (company: string) => {
    const newCount = (clickCount[company] || 0) + 1
    setClickCount({ ...clickCount, [company]: newCount })
    
    if (newCount === 3) {
      setShowHireMe(true)
      setTimeout(() => setShowHireMe(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <header className="py-20 text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Kind Words from Bold Clients
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDisplayMode(displayMode === 'stack' ? 'float' : 'stack')}
          className="px-6 py-2 bg-purple-600 rounded-full transition-all duration-300"
        >
          {displayMode === 'stack' ? 'Switch to Float Mode' : 'Switch to Stack Mode'}
        </motion.button>
      </header>

      <main className="container mx-auto px-4 relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotate: displayMode === 'float' ? Math.random() * 10 - 5 : 0,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)"
              }}
              onClick={() => handleCardClick(testimonial.company)}
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-gray-700"
            >
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                {testimonial.company}
              </motion.h2>
              <p className="text-gray-300">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center text-gray-400 relative">
        <p>Made with ❤️ by Your Name</p>
      </footer>

      <AnimatePresence>
        {showHireMe && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              className="bg-purple-600 p-8 rounded-lg shadow-2xl text-center"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              <h2 className="text-3xl font-bold mb-4">Hire Me!</h2>
              <p className="text-xl">Let's create something amazing together</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
