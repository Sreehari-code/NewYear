import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [step, setStep] = useState("form"); // form | countdown | wish
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (step === "countdown" && count > 0) {
      const t = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(t);
    }
    if (step === "countdown" && count === 0) {
      setTimeout(() => setStep("wish"), 600);
    }
  }, [step, count]);

  const start = () => {
    if (!name.trim()) return;
    setCount(3);
    setStep("countdown");
  };

  const reset = () => {
    setName("");
    setStep("form");
    setCount(3);
  };

  return (
    <div className="app">
      <style>{`
        * {
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          margin: 0;
          display:flex;
          justify-content:center;
        }

        .app {
          min-height: 100vh;
          background: radial-gradient(circle at top, #1a1a40, #000);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .panel {
          width: 100%;
          max-width: 820px;
          min-height: 420px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          border-radius: 28px;
          padding: 48px;
          color: #fff;
          text-align: center;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
          animation: fadeIn 0.6s ease;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .subtitle {
          opacity: 0.8;
          margin-bottom: 40px;
        }

        input {
          width: 100%;
          max-width: 360px;
          padding: 16px;
          border-radius: 14px;
          border: none;
          font-size: 1.1rem;
          outline: none;
          text-align: center;
          margin-bottom: 28px;
        }

        button {
          padding: 16px 36px;
          border-radius: 30px;
          border: none;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(135deg, #6c63ff, #9b5cff);
          color: #fff;
        }

        .countdown {
          font-size: 9rem;
          font-weight: 800;
          animation: pop 1s ease;
        }

        .wish-title {
          font-size: 4rem;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #fff, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 2s ease-in-out infinite;
        }

        .name {
          font-size: 2.8rem;
          font-weight: 700;
          margin: 24px 0;
          color: #ffd700;
        }

        .message {
          font-size: 1.2rem;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto 32px;
          opacity: 0.95;
        }

        .from {
          opacity: 0.85;
          margin-bottom: 36px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pop {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255,215,0,0.6);
          }
          50% {
            text-shadow: 0 0 40px rgba(255,215,0,1);
          }
        }

        @media (max-width: 600px) {
          .panel {
            padding: 32px 22px;
          }

          h1 {
            font-size: 2.2rem;
          }

          .wish-title {
            font-size: 2.6rem;
          }

          .countdown {
            font-size: 6rem;
          }
        }
      `}</style>

      {step === "form" && (
        <div className="panel">
          <h1>New Year 2026 ✨</h1>
          <p className="subtitle">Something special is waiting for you</p>

          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && start()}
          />

          <br />
          <button onClick={start}>Start Countdown</button>
        </div>
      )}

      {step === "countdown" && (
        <div className="panel">
          <div className="countdown">{count}</div>
          <p className="subtitle">Get ready…</p>
        </div>
      )}

      {step === "wish" && (
        <div className="panel">
          <div className="wish-title">Happy New Year 2026 🎉</div>

          <div className="name">{name}</div>

          <div className="message">
            This year is not about rushing.
            <br />
            It is about direction, discipline, and growth.
            <br />
            Stay consistent. Build quietly. Win loudly.
          </div>

          <div className="from">
            — Best wishes from <strong>Sreehari</strong>
          </div>

          <button onClick={reset}>Create Another Wish</button>
        </div>
      )}
    </div>
  );
}
