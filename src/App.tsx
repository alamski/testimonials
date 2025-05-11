import './App.css'

const testimonials = [
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
  },
  {
    company: "BN Bank",
    quote: "Fantastisk service. Alltid raske svar og god forståelse for våre behov."
  },
  {
    company: "Svea",
    quote: "Nettrafikk har vært svært fleksible og løsningsorienterte. De er alltid lydhøre for våre behov."
  },
  {
    company: "Oslo Met",
    quote: "Samarbeidet med denne aktøren har vært preget av profesjonalitet og innovasjon. De leverer alltid til avtalt tid og kvalitet."
  }
]

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#000'
      }}>
        Referanser fra fornøyde kunder
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.company} style={{
            padding: '2rem',
            borderRadius: '0.5rem',
            backgroundColor: '#2e2e2e',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: '1rem',
              color: '#fff'
            }}>
              {testimonial.company}
            </h2>
            <p style={{ color: '#e5e7eb' }}>
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#4b5563',
        fontSize: '0.875rem'
      }}>
        <p>Laget av Noah med hjelp av Curser</p>
      </footer>
    </div>
  )
}

export default App
