import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
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
        description="This was our final group project at Dev Academy. This was my idea so I was tasked with being the product owner. We had a small team of three, and just under a week to complete it. We used React, TypeScript, Sqlite with Knex and Express. We also used Tailwind.css for styling. The standout features I was responsible for were the image carousel, cart functionality, and stripe integration."
        link="https://github.com/James-Idiens/Devify-project"
        img={{
          src: '/assets/images/ecommerce.jpg',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>SQLITE</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Weather App"
        description="This is a classic weather app that I built using React. It uses the weatherapi API to fetch the weather data. I used Tailwind.css for styling and the colour changes dynamically depending on the conditions. A further feature I intergrated was the fetching of the bing wallpaper of the day using JSON data to display as the background."
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
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
