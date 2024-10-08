import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Explore from "./sections/Explore";
import Feature11 from "./sections/Feature1";
import Feature22 from "./sections/Feature2";
import Feature33 from "./sections/Feature3"
import QualityApps from "./sections/QualityApps";
import Buy from "./sections/Buy";
import Small from "./sections/Small";
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
 <Feature11/>
 </section>
 <section>
 <Feature22 />
 </section>
 <section>
  <Feature33 />
 </section>
 <section>
 <QualityApps/>
 </section>
 <section>
 <Buy/>
 </section>
<section>
  <Small />
</section>
 <section>
 <Help/>
 </section>
 <section>
 <Subscribe/>
 </section>
 <section className="mt-20 padding bg-black padding-x padding-t pb-8">
 <Footer />
 </section>
  </main>
   );
 export default App;