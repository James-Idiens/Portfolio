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
        description="This was our final group project at Dev Academy. This was my idea so I was tasked with being the product owner. We had a small team of three, and just under a week to complete it. We used React, TypeScript, Sqlite with Knex and Express. We also used Tailwind.css for styling. The standout features I was responsible for were the image carousel, cart functionality, and stripe payment integration. This project gave me an appreciation for how much work goes into seemingly simple features."
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
        description="This is a classic weather app that I built using React. It uses the weatherapi API to fetch the weather data. I used Tailwind.css for styling and the colour changes dynamically depending on the conditions. A further feature I intergrated was the fetching of the bing wallpaper of the day using JSON data to display as the background. I have used the React Testing Library to write tests for this project."
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
      <GradientText>Current Projects as of August 2023</GradientText>
    </>
  }
>
<div className="flex flex-col gap-6">
<Project
        name="Novel Writing Software"
        description="This is in early development, and a personal project I started during my course at Dev Academy. It is a novel writing software called Eloquence that will help writers plan and write their novels. It is built using the tech stack I learnt at Dev Academy, React, TypeScript, Express, and Sqlite with Knex. I'm slowly making progress as I learn more about the technologies I'm using, namely QuillJs as my text editor."
        link="https://github.com/James-Idiens/Eloquence"
        img={{ src: '/assets/images/writing.jpg', alt: 'Eloquence' }}
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
        name="Rostering Software"
        description="In my last job, the greatest challenge was the rostering. As a manager I found I was constantly trying to track down staff for extra shifts. I decided to build a rostering software that would allow managers to post shifts and staff to sign up for shifts. Simplicity is the goal and this is a recent endeavour. A large part of this project is it is the first time I have worked with C# and ASP.NET Core. I am also using React, TypeScript in the front end, MySQL as the database, and Auth0. I want to challenge myself and see how I cope working with a completely unfamiliar tech stack."
        link="https://github.com/James-Idiens/rostering-app"
        img={{ src: '/assets/images/roster.jpg', alt: 'Roster' }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>C#</Tags>
            <Tags color={ColorTags.GREEN}>ASP.NET</Tags>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.NEUTRAL}>MySQL</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.EMERALD}>Auth0</Tags>
          </>
        }
      />
      </div>
  </Section>
  </>
)

export { ProjectList }
