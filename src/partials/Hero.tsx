import { GradientText, HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components'

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>James</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a software developer from Christchurch. I originally started out on a different path,
          studying a Bachelor of Commerce at university. After working for a several years in that
          field, I knew the time was right to pursue my switch to tech. I retrained at Dev Academy
          and learnt full stack development. This is my portfolio and these projects you see here
          are the results of only 15 weeks (or less) of learning to code. Check out my{' '}
          <a className="text-cyan-400 hover:underline" href="https://github.com/James-Idiens">
            Github
          </a>{' '}
          or my LinkedIn below.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/profile.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/james-idiens-1b9ab5282">
            <HeroSocial src="/assets/images/linkedin-icon.png" alt="Linkedin icon" />
          </a>
        </>
      }
    />
  </Section>
)

export { Hero }
