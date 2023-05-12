import cat from '../../resources/cat.jpg'

function Happenings() {
  return (
    <p>
        <h2>What I've been up to</h2>
        <br /> <br />
        I've been delving into Power Platform and Python for some time now, with occasional forays into Scikit and Tensorflow.
        <br /> <br /> 
        I can't believe I'm actually studying Machine Learning at this point in my life, but considering the future heading towards A.I. and Automation, I believe it would be a valuable addition to my skill set as an engineer.
        <br /> <br /> 
        I mean, I had wanted to try this out a long time ago, but it just seemed too intimidating. <br />
        That said, I'm preparing for my first A.I. hackathon this year (finals will be at Fukuoka Japan! I really hope my whole team makes it) that's why I'm squeezing my time learning A.I.
        <br /> <br />
        I still read books though not as committed as last year. I've been delving deep into Stoic and Taoism philosophies lately.
        <br />
        Here's a few if it piques your interest:
        <br /> <br />
        <ul>
            <li>Stoicism for Inner Peace</li>
            <li>Loose: On Letting Stuff Go</li>
            <li>Unoffendable: The Art of Thriving in a World Full of Jerks</li>
        </ul>
        <br /> <br />
        Besides the boring stuff I still make time for friends, other projects, and taking care of this little critter: 🐈
        <br />
        <img src={cat} alt="cat"/>
    </p>
  );
}

export default Happenings;