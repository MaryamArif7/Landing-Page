import cardicon from "../assets/cardicon.svg"
import Card from "../components/Card"
const QualityApps = () => {
  return (
   <section>

<div className="mt-20 ml-48 ">
  <h1 className="text-black-500 text-4xl font-bold">
<span className="text-orange-500">Essentailly, </span>Everything you need to 
  </h1>
  <h1 className=" ml-56 text-black-500 text-4xl font-bold">ship your first AI app</h1>
</div>

<div className=" ml-16  mt-16 max-container  flex justify-centre  flex-wrap gap-10">
  <Card cardicon={cardicon} label="Quality Apps " subtext="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success."
  />
  <Card cardicon={cardicon} label="Quality Apps " subtext="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success."
  />
  <Card cardicon={cardicon} label="Quality Apps " subtext="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success."
  />
  <Card cardicon={cardicon} label="Quality Apps " subtext="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success."
  />
  <Card cardicon={cardicon} label="Quality Apps " subtext="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success."
  />
  <Card cardicon={cardicon} label="Quality Apps " subtext="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success."
  />

</div>
   </section>
  )
}

export default QualityApps