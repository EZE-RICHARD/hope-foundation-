import Hero from "./assets/Components/Hero/Hero";
import Qoute from "./assets/Components/Qoute/Qoute";
import About from "./assets/Components/About/About";
import Carousel from "./assets/Components/Carousel/Carousel";
import Advert from "./assets/Components/Advert/Advert";
import End from "./assets/Components/End/End";


const dev_data = {
  stats: [
    {
      header: "Keeping the Mind Sharp",
      paragraph:
        "Engaging in hobbies and activities that promote mental stimulation and social interaction can support cognitive function and reduce the risk of cognitive decline as we age",
    },
    {
      header: "Choosing Wellness Over Harm",
      paragraph:
        " Avoiding harmful habits like smoking, excessive alcohol consumption, and drug abuse lowers the risk of various health problems, including respiratory diseases, liver damage, and addiction",
    },
    {
      header: "Physical Activity",
      paragraph:
        "Regular physical activity reduces the risk of chronic diseases like heart disease, diabetes, and certain cancers",
    },
    {
      header: "The Foundation of Health",
      paragraph:
        " Eating a balanced diet rich in fruits, vegetables, whole grains, and lean proteins supports overall health and reduces the risk of obesity and related conditions",
    },
    {
      header: "The Cornerstone of Well-being",
      paragraph:
        "Managing stress through techniques like mindfulness, meditation, and exercise can lower the risk of mental health issues and improve overall quality of life",
    },
  ],
};

function App() {
  return (
    <div>
      <Hero />
      <Qoute qoute = {dev_data} />
      <About />
      <Carousel />
      <Advert />
      <End />
    </div>
  );
}

export default App;
