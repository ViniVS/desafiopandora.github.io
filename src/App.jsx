
        import React, { useState, useEffect } from "react";

export default 

        function App() {
          const [started, setStarted] = useState(false);
          const [gameOver, setGameOver] = useState(false);
          const [timeLeft, setTimeLeft] = useState(15);
          const [buttonPos, setButtonPos] = useState({ top: '50%', left: '50%' });
          const [messageIndex, setMessageIndex] = useState(0);

          const messages = [  
            "Vai que consegue!",
            "Quase lá, tenta de novo!",
            "Falta pouco, foca na Pandora!",
            "Nossa, passou raspando!",
            "Não desista agora!"
          ];

          useEffect(() => {
            let timer;
            if (started && timeLeft > 0 && !gameOver) {
              timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
              }, 1000);
            } else if (timeLeft === 0) {
              setGameOver(true);
            }
            return () => clearInterval(timer);
          }, [started, timeLeft, gameOver]);

          const moveButton = () => {
            const newTop = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';
            const newLeft = Math.floor(Math.random() * (window.innerWidth - 200)) + 'px';
            
            setButtonPos({ top: newTop, left: newLeft });
            setMessageIndex((prev) => (prev + 1) % messages.length);
          };

          const handleStart = () => {
            setStarted(true);
          };

          const styles = {
            container: { position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', fontFamily: 'sans-serif' },
            background: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("https://i.imgur.com/WepcHCp.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 },
            overlayCenter: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)' },
            title: { color: '#fff', fontSize: '3rem', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', textAlign: 'center' },
            btnStart: { padding: '15px 40px', fontSize: '1.5rem', cursor: 'pointer', backgroundColor: '#ffb6c1', color: '#333', border: 'none', borderRadius: '30px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', transition: 'transform 0.2s' },
            gameArea: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)' },
            timer: { position: 'absolute', top: '20px', right: '30px', fontSize: '2rem', color: '#fff', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' },
            fleeingContainer: { position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'top 0.1s ease, left 0.1s ease' },
            motivationalMessage: { color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textShadow: '1px 1px 3px rgba(0,0,0,0.8)', whiteSpace: 'nowrap' },
            btnFlee: { padding: '15px 25px', fontSize: '1.2rem', cursor: 'pointer', backgroundColor: '#e5e7eb', color: '#111', border: '2px solid #d1d5db', borderRadius: '10px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', whiteSpace: 'nowrap' },
            gameOverOverlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 },
            gameOverCard: { backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '40px', borderRadius: '20px', textAlign: 'center', maxWidth: '80%', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' },
            gameOverText: { color: '#333', fontSize: '2.5rem', margin: 0 }
          };

          return (
            <div style={styles.container}>
              <div style={styles.background}></div>

              {!started && !gameOver && (
                <div style={styles.overlayCenter}>
                  <h1 style={styles.title}>Desafio vale Pandora:</h1>
                  <button style={styles.btnStart} onClick={handleStart}>
                    Iniciar
                  </button>
                </div>
              )}

              {started && !gameOver && (
                <div style={styles.gameArea}>
                  <div style={styles.timer}>Tempo restante: {timeLeft}s</div>
                  
                  <div
                    style={{
                      ...styles.fleeingContainer,
                      top: buttonPos.top,
                      left: buttonPos.left,
                      transform: buttonPos.top === '50%' ? 'translate(-50%, -50%)' : 'none',
                    }}
                  >
                    <div style={styles.motivationalMessage}>
                      {buttonPos.top !== '50%' ? messages[messageIndex] : "Pegue o vale!"}
                    </div>
                    <button 
                      style={styles.btnFlee} 
                      onMouseEnter={moveButton}
                      onClick={moveButton}
                    >
                      Obter vale R$ 1000,00 na pandora
                    </button>
                  </div>
                </div>
              )}

              {gameOver && (
                <div style={styles.gameOverOverlay}>
                  <div style={styles.gameOverCard}>
                    <h1 style={styles.gameOverText}>
                      Foi quase minha Yas, voce vai receber um beijinho ❤️
                    </h1>
                  </div>
                </div>
              )}
            </div>
          );
        }

        