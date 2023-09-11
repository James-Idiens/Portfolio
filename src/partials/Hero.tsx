import { GradientText, HeroAvatar, Section } from 'astro-boilerplate-components'

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
          are the results of only 15 weeks (or less) of learning to code.
          <br />
          Tech skills aside, I enjoy working with people and pride myself on my communication and
          interpersonal skills. I'm a quick learner, and always eager to tackle new challenges. I'm
          looking for a role where I can bring my blend of technical and buisness skills to the
          table.
          <br />
          Feel free to check out my Linkedin and Github pages, which are linked above.
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
    />
  </Section>
)

export { Hero }
