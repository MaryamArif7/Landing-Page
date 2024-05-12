import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Explore from "./sections/Explore";
import QualityApps from "./sections/QualityApps";
import Buy from "./sections/Buy";
import Help from "./sections/Help";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
const App=() =>(
  <main className="relative">
 <Nav/>
 <section>
 <Hero/>
 </section>
 <section >
 <Explore />
 </section>
 <section>
 <QualityApps/>
 </section>
 <section>
 <Buy/>
 </section>

 <section>
 <Help/>
 </section>
 <section>
 <Subscribe/>
 </section>
 <section >
 <Footer />
 </section>
  </main>
   );
 export default App;