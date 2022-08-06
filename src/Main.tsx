import React from 'react';

type Props = {
  side: string,
  setSide: React.Dispatch<React.SetStateAction<string>>,
}

function Main({ side, setSide } :Props) {
  return (
      <main>
        <section>
          { side === "face" ? 
            <button onClick={() => setSide("back")}>TURN OVER</button> 
            :  (<><article>
            <p>Kotaro</p>
            <p>JavaScript Lover</p>
          </article><article>
              <p># Requirement</p>
              <p>* coffee 1.0.0</p>
              <p>* MacBook 1.0.0</p>
              <p>* inner peace 6.2.9</p>
              <p>* sleep 10.0.0</p>
              <p>* cute cat ∞</p>
            </article><article>
              <p># Author</p>
              <p>* Kotaro</p>
              <p>* mail@caffeinism.tech</p>
            </article></>)
          }
        </section>
      </main>
  );
}

export default Main;
