import './App.css'

const heroImage = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&h=600&q=80'; // Placeholder

const testimonials = [
  {
    name: "Peppes Pizza",
    role: "Kunde",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "De leverte virkelig resultater utover våre forventninger. Vi følte oss forstått og verdsatt."
  },
  {
    name: "Fjordkraft",
    role: "Kunde",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    quote: "Å jobbe med dem var sømløst. Kreative, skarpe og presise hele veien."
  },
  {
    name: "Fargerike",
    role: "Kunde",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "En frisk pust innen merkevarebygging. Vi elsket prosessen – og resultatet enda mer."
  },
  {
    name: "BN Bank",
    role: "Kunde",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Fantastisk service. Alltid raske svar og god forståelse for våre behov."
  },
  {
    name: "Svea",
    role: "Kunde",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    quote: "Nettrafikk har vært svært fleksible og løsningsorienterte. De er alltid lydhøre for våre behov."
  },
  {
    name: "Oslo Met",
    role: "Kunde",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    quote: "Samarbeidet med denne aktøren har vært preget av profesjonalitet og innovasjon. De leverer alltid til avtalt tid og kvalitet."
  }
]

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e0e7ef 0%, #f7f7fa 100%)' }}>
      {/* Hero Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem 2rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#222', marginBottom: '1rem' }}>Testimonials</h1>
          <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: 500 }}>
            Disse er noen referanser fra fornøyde kunder av Nettrafikk.
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={heroImage} alt="Hero" style={{ width: 320, height: 320, objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
        </div>
      </div>

      {/* Testimonials Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '2rem 2rem 4rem 2rem',
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: '#f5f7fa',
            borderRadius: '2rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            padding: '2.5rem 2rem 2rem 2rem',
            position: 'relative',
            minHeight: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Speech bubble pointer */}
            <div style={{
              position: 'absolute',
              left: 40,
              bottom: -18,
              width: 32,
              height: 18,
              background: 'transparent',
              overflow: 'visible',
            }}>
              <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0C0 9.94113 7.05887 18 16 18C24.9411 18 32 9.94113 32 0H0Z" fill="#f5f7fa"/>
              </svg>
            </div>
            <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: '2rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              “{t.quote}”
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src={t.avatar} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: '1rem' }}>{t.name}</div>
                <div style={{ color: '#888', fontStyle: 'italic', fontSize: '0.95rem' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#4b5563',
        fontSize: '0.95rem',
        background: 'transparent',
      }}>
        <p>Laget av Noah med hjelp av Curser</p>
      </footer>
    </div>
  )
}

export default App
