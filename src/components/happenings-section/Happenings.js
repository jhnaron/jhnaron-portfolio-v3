import cat from '../../resources/cat.jpg'

function Happenings() {
  return (
    <p>
        <h2>What I've been up to</h2>
        <br /> <br />
        I've been delving into Power Platform and Python for some time now, with occasional forays into Scikit and Tensorflow.
        <br /> <br /> 
        I can't believe I'm putting more time studying Machine Learning at this point in my life given how intimidating it seemed when I was still in college, 
        but considering the future heading towards A.I. and Automation, this should help me give value to the world as an engineer.
        <br /> <br />
        That said, I'm preparing for my first A.I. hackathon this year (finals will be set in Fukuoka Japan; Hope the whole team makes it).
        <br /> <br />
        Oh and here, book recos :D (if it piques your interest!):
        <br /> <br />
        <ul>
            <li>Stoicism for Inner Peace</li>
            <li>Loose: On Letting Stuff Go</li>
            <li>Meditations by Marcus Aurelius</li>
        </ul>
        <br /> <br />
        Besides the boring stuff I still make time for friends, other projects, and taking care of this little critter: 🐈
        <br />
        <img src={cat} alt="cat with John Aron Belmonte"/>
    </p>
  );
}

export default Happenings;