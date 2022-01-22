import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Appbar from './components/Appbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="fixed-top">
        <Appbar />
      </header>
      <main className="container yu-container">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
