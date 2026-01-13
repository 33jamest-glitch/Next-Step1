import React, { useState } from 'react';

// ✅ NO Firebase, NO Google Auth
// Pure static React component

export default function NextStepWebsite() {
  const [languageSelected, setLanguageSelected] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLanguageSelect = () => setLanguageSelected(true);

  const classes = [
    { title: "Emma's class", link: 'https://nextstep.com/emma' },
    { title: "James's class", link: 'https://nextstep.com/james' },
    { title: "Connor's class", link: 'https://nextstep.com/connor' }
  ];

  const bg = '#FEF9C3';
  const greenDark = '#14532D';
  const greenMid = '#16A34A';
  const greenLight = '#DCFCE7';

  if (!languageSelected) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: bg }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: greenDark }}>Choose Your Language</h1>
        {['English', 'Español', '中文（繁體）', '普通话 / Mandarin', '日本語'].map(lang => (
          <button key={lang} onClick={handleLanguageSelect} style={{ width: '220px', padding: '0.75rem', marginBottom: '0.5rem', borderRadius: '1rem', backgroundColor: greenMid, color: 'white', border: 'none', cursor: 'pointer' }}>{lang}</button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ background: bg, minHeight: '100vh', color: greenDark }}>
      <header style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '1rem' }}>
        <button onClick={() => setShowLogin(true)} style={{ padding: '0.5rem 1rem', borderRadius: '1rem', border: `2px solid ${greenDark}`, background: 'transparent', color: greenDark }}>Log in</button>
        <button onClick={() => setShowSignUp(true)} style={{ padding: '0.5rem 1rem', borderRadius: '1rem', border: 'none', backgroundColor: greenMid, color: 'white' }}>Sign up</button>
      </header>

      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to NextStep</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
          A hub providing classes and resources designed to help immigrants navigate, learn, and take their next step with confidence.
        </p>
      </main>

      <section style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Available Classes</h2>
        {classes.map(c => (
          <a key={c.title} href={c.link} style={{ display: 'block', marginBottom: '1rem', padding: '1rem', borderRadius: '1rem', backgroundColor: greenLight, textDecoration: 'none', color: greenDark }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{c.title}</h3>
            <p style={{ color: greenMid, textDecoration: 'underline' }}>Go to class</p>
          </a>
        ))}
      </section>

      {(showLogin || showSignUp) && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', width: '300px' }}>
            <h2 style={{ marginBottom: '1rem', color: greenDark }}>{showLogin ? 'Log in' : 'Sign up'}</h2>
            <input placeholder="Email" style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem' }} />
            <input type="password" placeholder="Password" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
            <button style={{ width: '100%', padding: '0.5rem', backgroundColor: greenMid, color: 'white', border: 'none', borderRadius: '0.5rem' }}>
              {showLogin ? 'Log in' : 'Create account'}
            </button>
            <button onClick={() => { setShowLogin(false); setShowSignUp(false); }} style={{ marginTop: '0.5rem', width: '100%', background: 'transparent', border: 'none', color: greenDark }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', padding: '2rem', color: greenDark }}>© 2026 nextstep.com</footer>
    </div>
  );
}
