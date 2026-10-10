import './App.css';
import {useRef} from "react";
import Button from "./button/Button.tsx";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="app">
      {/* ======================= FILL ======================= */}
      <section className="row">
        <h3>fill / S</h3>
        <Button variant="fill" size="S">Кнопка</Button>
        <Button variant="fill" size="S" disabled>Кнопка</Button>
      </section>

      <section className="row">
        <h3>fill / M</h3>
        <Button variant="fill" size="M">Кнопка</Button>
        <Button variant="fill" size="M" disabled>Кнопка</Button>
      </section>

      <section className="row">
        <h3>fill / L</h3>
        <Button variant="fill" size="L">Кнопка</Button>
        <Button variant="fill" size="L" disabled>Кнопка</Button>
      </section>

      {/* ======================= OUTLINE ======================= */}
      <section className="row">
        <h3>outline / S</h3>
        <Button variant="outline" size="S">Кнопка</Button>
        <Button variant="outline" size="S" disabled>Кнопка</Button>
      </section>

      <section className="row">
        <h3>outline / M</h3>
        <Button variant="outline" size="M">Кнопка</Button>
        <Button variant="outline" size="M" disabled>Кнопка</Button>
      </section>

      <section className="row">
        <h3>outline / L</h3>
        <Button variant="outline" size="L">Кнопка</Button>
        <Button variant="outline" size="L" disabled>Кнопка</Button>
      </section>

      {/* ======================= TEXT ======================= */}
      <section className="row">
        <h3>text / S</h3>
        <Button variant="text" size="S">Кнопка</Button>
        <Button variant="text" size="S" disabled>Кнопка</Button>
      </section>

      <section className="row">
        <h3>text / M</h3>
        <Button variant="text" size="M">Кнопка</Button>
        <Button variant="text" size="M" disabled>Кнопка</Button>
      </section>

      <section className="row">
        <h3>text / L</h3>
        <Button variant="text" size="L">Кнопка</Button>
        <Button variant="text" size="L" disabled>Кнопка</Button>
      </section>

      {/* ======================= AS LINK + REF ======================= */}
      <section className="row">
        <h3>as="a" / ref</h3>
        <Button as="a" href="#" variant="fill" size="M" ref={linkRef}>Ссылка</Button>
        <Button as="a" href="#" variant="outline" size="M" disabled>Ссылка</Button>
        <Button
          variant="text"
          size="M"
          ref={buttonRef}
          onClick={() => linkRef.current?.focus()}
        >
          Фокус на ссылку
        </Button>
      </section>
    </div>
  );
}

export default App;