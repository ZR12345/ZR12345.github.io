export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          I&#x2019;m an MTech student at NIT Karnataka, currently digging into
          cryptography and post-quantum security &#x2014; the kind of problems
          where you&#x2019;re not just writing code, but proving it can&#x2019;t
          be broken.
        </p>
        <p>
          My current research is on building post-quantum secure authentication
          for military UAV swarms, using Merkle Patricia Tries to handle things
          like joins, leaves, and revocations without ever giving up forward or
          backward secrecy. I verify the protocol three different ways &#x2014;
          computational proofs, BAN logic, and the Tamarin Prover &#x2014; because
          one proof catching everything is rarely how security actually works.
        </p>
        <p>
          Outside the thesis, I spend time on web application security, working
          both sides of the fence: breaking things in red team exercises and
          defending them in blue team ones. That back-and-forth is honestly
          where I&#x2019;ve learned the most.
        </p>
        <p>
          I&#x2019;m generally drawn to problems at the edge of what&#x2019;s
          practical right now &#x2014; cryptographic systems that have to survive
          contact with the real world, not just a whiteboard.
        </p>
      </div>
    </section>
  );
}