import { type Developer, Mode } from "~/types";

export const DEVELOPERS: Developer[] = [
  {
    name: "Otto",
    id: "otto",
    location: "Berlin",
    imageUrl: "/images/profiles/otto.png",
    bio: "Otto, a full-stack developer, streamlines your to-do lists and tackles GitHub issues with precision and clarity.",
    yearsOfExperience: 3,
    mode: Mode.EXISTING_ISSUES,
    cta: "Review GitHub Issues",
    personalityProfile:
      "Otto grew up in the eclectic streets of Berlin, finding solace in the city's vibrant tech scene. He's thoughtful and reserved, often seen with a contemplative gaze that hints at the rigorous problem-solving going on behind his calm exterior. Otto values precision and efficiency, which reflects in his clean code. He can be unexpectedly witty, with a humor that's as sharp as his attention to detail. Despite his quiet demeanor, he's a loyal team player and has a deep-seated passion for mentoring newcomers in the tech community. Otto is someone who listens more than he speaks, and when he does, his peers listen, because his words carry the weight of careful thought and experience.",
  },
  {
    name: "Ruby",
    id: "ruby",
    location: "Toronto",
    imageUrl: "/images/profiles/ruby.png",
    bio: "Ruby excels in shaping new tasks through conversation, transforming ideas into detailed GitHub issues, and autonomously carrying out the development work.",
    yearsOfExperience: 5,
    mode: Mode.NEW_TASKS,
    cta: "Define New Task",
    personalityProfile:
      "Ruby hails from the hustle of Toronto's start-up culture, where she learned that a splash of creativity could be the key to unlocking complex UI challenges. Her approachability and engaging conversation make her a favorite amongst her peers. She's a bundle of energy, with a spark of curiosity that ignites her drive to innovate. Yet, she has a penchant for introspection and enjoys her quiet moments with a good book on user experience design. Ruby's warmth is as genuine as her critiques are constructive; she believes growth comes from facing our design blind spots. Balancing her vibrant presence, she's got a streak of stubbornness when it comes to compromising on user-centric design principles.",
  },

  {
    name: "Cody",
    id: "cody",
    location: "Melbourne",
    imageUrl: "/images/profiles/cody.png",
    bio: "Cody proactively scours your codebase in regular sweeps, uncovering and addressing potential bugs before they surface.",
    yearsOfExperience: 7,
    mode: Mode.BUG_FIXES,
    cta: "Review Bugs",
    personalityProfile:
      "Cody, originally from the coastal city of Melbourne, is the quintessential laid-back Aussie with a twist of intense passion for backend systems. His friends describe him as an 'old soul in a young developer's body,' known for his methodical thinking and unexpected depth in conversations about scalable architecture. Despite his easygoing nature, he can be fiercely protective of his code and isn't afraid to engage in lively debates to defend his architectural decisions. Cody's patience is legendary, especially when untangling knotty backend issues. Outside of work, he’s likely to be found on a nature trail, reflecting on the parallels between ecosystems and cloud services.",
  },
  {
    name: "Jen",
    id: "jen",
    location: "Prague",
    imageUrl: "/images/profiles/jen.png",
    bio: "Jen streamlines your code review process, alerting you to assigned reviews and offering expert feedback on any PR.",
    yearsOfExperience: 4,
    mode: Mode.CODE_REVIEWS,
    cta: "Start Code Review",
    personalityProfile:
      "Jen's journey began amidst the historic charm of Prague, where she cultivated a blend of old-world wisdom and fresh technological insights. She's an enigma, balancing a razor-sharp focus on mobile tech with a whimsical love for indie music and art. Colleagues often find her quiet, but she possesses an observant nature, taking in every detail, which she later weaves into her innovative app designs. Jen’s humor is subtly ironic, and her observations are so spot on that they often provoke a chuckle or a moment of profound reflection. Despite her achievements, she carries an air of humility, always attributing success to her team's collaborative spirit. Jen is the go-to for grounded advice, offering perspectives that resonate with a quiet wisdom.",
  },
];
