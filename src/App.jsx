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
 <section className="xl:padding-l wide:padding-r padding-b">
 <Hero/>
 </section>
 <section className="padding">
 <Explore />
 </section>
 <section className="padding">
 <QualityApps/>
 </section>
 <section className="padding-x py-10">
 <Buy/>
 </section>

 <section className="bg-pale-blue padding">
 <Help/>
 </section>
 <section className="padding-x sm:py-32 py-16 w-full">
 <Subscribe/>
 </section>
 <section className="padding bg-black padding-x padding-t pb-8">
 <Footer />
 </section>
  </main>
   );
 export default App;