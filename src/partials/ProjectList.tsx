import { ColorTags, GradientText, Project, Section, Tags } from 'astro-boilerplate-components'

const ProjectList = () => (
  <>
    <Section
      title={
        <>
          <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <Project
          name="Ecommerce website"
          description="This was our final group project at Dev Academy. This was my idea so I was tasked with being the product owner. We had a small team of three, and just under a week to complete it. The standout feature I was responsible for was the intergration of the Stripe API for payments. The website is deployed on Dokku, and live to view."
          link="https://github.com/James-Idiens/Devify-project"
          img={{
            src: '/assets/images/ecommerce.jpg',
            alt: 'Ecommerce project',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>React</Tags>
              <Tags color={ColorTags.LIME}>SQLITE</Tags>
              <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              <Tags color={ColorTags.SLATE}>Express</Tags>
              <Tags color={ColorTags.ZINC}>Node.js</Tags>
            </>
          }
        />
        <Project
          name="Weather App"
          description="This is all about consuming external API's. Firstly it uses the weatherapi API to fetch the weather data, secondly fetches the Bing wallpaper of the day, and lastly display's a map of the location using ESRI's ArcGIS API. I used Tailwind.css for styling and the colour changes dynamically depending on the conditions. In terms of testing, I have used the React Testing Library to write tests for this project."
          link="https://github.com/James-Idiens/weather-app"
          img={{ src: '/assets/images/weather.png', alt: 'Weather' }}
          category={
            <>
              <Tags color={ColorTags.VIOLET}>API</Tags>
              <Tags color={ColorTags.FUCHSIA}>React</Tags>
              <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            </>
          }
        />
        <Project
          name="Book Collection"
          description="Website that displays books and authors. It allows users to add a new book, update and existing book and delete books from the database. This introduced me to React query and mutations, while also giving me more practice with backend functionality. I have written thorough tests for this project, with 92% coverage."
          link="https://github.com/James-Idiens/Book-fullstack-collection"
          img={{ src: '/assets/images/book.png', alt: 'Book' }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>React</Tags>
              <Tags color={ColorTags.LIME}>SQLITE</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              <Tags color={ColorTags.SLATE}>Express</Tags>
              <Tags color={ColorTags.ZINC}>Node.js</Tags>
            </>
          }
        />
      </div>
    </Section>
    <Section
      title={
        <>
          <GradientText>Current Projects as of September 2023</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <Project
          name="Golf scorecard mobile app"
          description="I am trying mobile development for the first time and creating a scorecard app for Rawhiti golf course in Christchurch. I am using React Native and Expo to build the app."
          link="https://github.com/James-Idiens/golf-scorecard"
          img={{ src: '/assets/images/golf.png', alt: 'Golf' }}
          category={
            <>
              <Tags color={ColorTags.RED}>React Native</Tags>
              <Tags color={ColorTags.SKY}>Expo</Tags>
              <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            </>
          }
        />
      </div>
    </Section>
  </>
)

export { ProjectList }
