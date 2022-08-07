import React from 'react';

type Props = {
  side: boolean,
  setSide: React.Dispatch<React.SetStateAction<boolean>>,
}

function Main({ side, setSide } :Props) {
  return (
      <main>
        <section id="main-wrapper">
          { side === true ? 
          <section id="face-inner">
            <h1>Caffeinism-tech</h1>
            <button onClick={() => setSide(false)}>TURN OVER</button>
          </section> 
            :  (<><section id="back">
              <article>
                <p>Kotaro</p>
                <p>JavaScript Lover</p>
              </article>
              <article>
                <p># Requirement</p>
                <p>* coffee 1.0.0</p>
                <p>* MacBook 1.0.0</p>
                <p>* inner peace 6.2.9</p>
                <p>* sleep 10.0.0</p>
                <p>* cute cat ∞</p>
              </article>
              <article>
                <p># Author</p>
                <p>* Kotaro</p>
                <p>* mail@caffeinism.tech</p>
              </article>
            </section></>)
          }
        </section>
      </main>
  );
}

export default Main;
