import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import PreviewNft from './Contents/PreviewNft';
import Collections from './Contents/Collections';

function App() {
  return (
    <div className="App">
      <header className="fixed-top">
        <Appbar />
      </header>
      <main className="container yu-container">
        <PreviewNft />
        <Collections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
